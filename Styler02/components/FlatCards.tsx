import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.text}>Flat cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-evenly'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  red: {
    backgroundColor: '#ff5454'
  },
  green: {
    backgroundColor: '#7dfc74'
  },
  blue: {
    backgroundColor: '#6070f7'
  }
})