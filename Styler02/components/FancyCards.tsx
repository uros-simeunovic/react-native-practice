import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
          uri: 'https://images.pexels.com/photos/18138908/pexels-photo-18138908/free-photo-of-cute-cat-on-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Cute Cat</Text>
          <Text style={styles.cardLabel}>Balcon, Cute Cat</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, fuga nihil. Repellat, nisi vel. Placeat earum ea quibusdam?
          </Text>
          <Text style={styles.cardFooter}>7 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 14
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20
  },
  card: {
    borderRadius: 8
  },
  cardElevated: {

  },
  cardImage: {
    height: 240,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8

  },
  cardTitle: {

  },
  cardLabel: {

  },
  cardDescription: {

  },
  cardFooter: {

  },
  cardBody: {
    paddingHorizontal: 10
  }
})