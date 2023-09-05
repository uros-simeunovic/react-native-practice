import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevetatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetatedCards />
        <FancyCards />
        <ActionCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App