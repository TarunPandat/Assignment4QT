import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistCombineReducers} from 'redux-persist'
import AuthReducer from './AuthReducer'

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth']
}
const rootReducer = persistCombineReducers(config, {
  auth: AuthReducer,
})

export default rootReducer


export type RootStateType = ReturnType<typeof rootReducer>;
