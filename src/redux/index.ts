import createSagaMiddleware from 'redux-saga'
import {Tuple, configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import sagas from './saga'

const cs:any = configureStore

const configStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = cs({
        reducer: rootReducer,
        middleware: () => new Tuple(sagaMiddleware, logger)
    })

    const persistor = persistStore(store)

    sagaMiddleware.run(sagas)

    return {
        persistor,
        store,
    }

}

export default configStore