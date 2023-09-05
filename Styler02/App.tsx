import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevetatedCards from './components/ElevatedCards'

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetatedCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App