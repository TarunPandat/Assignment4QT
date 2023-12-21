import {SafeAreaView} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Navigation from './src/navigation'
import styles from './src/styles'
import {Provider} from 'react-redux'
import configStore from './src/redux'
import {PersistGate} from 'redux-persist/integration/react'

const {store, persistor} = configStore()
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

export default App
