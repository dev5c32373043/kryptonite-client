import io from 'socket.io-client';

import { INIT_SOCKET_CONNECT } from '../constants/socket';
import { GET_CURRENCIES, LOAD_MORE } from '../constants/Home';
import { GET_KEYS } from '../constants/Converter';

import homeActions from '../actions/Home';
import converterActions from '../actions/Converter';

const server = (location.origin.includes('localhost') ? 'http://localhost:3000' : 'https://kryptonite-api.herokuapp.com');
const socket = io(server, {
  transports: ['websocket']
});

socket.on('disconnect', ()=>{
  socket.open();
});

socket.on('error', (e)=>{
  M.toast({
    html: e,
    displayLength: 5000
  })
});

const socketMiddleware = store => next => action => {
  const { dispatch } = store;

  const defineActions = ()=>{
    socket.on('currencies received', (data)=>{
      dispatch(homeActions.currenciesReceived({
        currencies: data.currencies,
        currentPage: 1,
        maxPage: data.maxPage,
        dataReceived: true
      }))
    });

    socket.on('currencies loaded', (receivedCurrencies)=>{
      const { currencies, currentPage } = store.getState().homeState;

      dispatch(homeActions.currenciesLoaded({
        currencies: currencies.concat(receivedCurrencies),
        currentPage: currentPage + 1,
        loading: false
      }))
    });

    socket.on('keys received', (keys)=>{
      dispatch(converterActions.keysReceived({
        keys: keys,
        dataReceived: true
      }))
    })
  }

  switch (action.type) {
    case INIT_SOCKET_CONNECT:
      defineActions()
      break;
    case GET_CURRENCIES:
      socket.emit('get currencies')
      break;
    case LOAD_MORE:
      const { loading, currentPage, maxPage } = store.getState().homeState;
      if(!loading && currentPage + 1 <= maxPage){
        socket.emit('load more', currentPage)
      }
      break;
    case GET_KEYS:
      socket.emit('get keys')
      break;
  }
  next(action)
}

export default socketMiddleware;
