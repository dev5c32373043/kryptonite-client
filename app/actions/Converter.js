import { GET_KEYS, KEYS_RECEIVED, CONVERT, RESULT_RECEIVED, RESET } from '../constants/Converter';

export default {
  getKeys: ()=>({
    type: GET_KEYS
  }),
  keysReceived: (payload)=>({
    type: KEYS_RECEIVED,
    ...payload
  }),
  convert: (payload)=>({
    type: CONVERT,
    ...payload
  }),
  converted: (result)=>({
    type: RESULT_RECEIVED,
    result
  }),
  reset: ()=>({
    type: RESET,
    result: ''
  })
}
