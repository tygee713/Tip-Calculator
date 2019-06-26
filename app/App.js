import { round, toString } from 'lodash'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const DECIMAL_PLACES = 2
const toPercent = (amount) => amount * .01
const calculateTip = (bill, tip) => (!bill || !tip) ? 0 : round(bill * toPercent(tip), DECIMAL_PLACES)

export default function App() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [calculatedTip, setCalculatedTip] = useState(0)

  useEffect(
    () => setCalculatedTip(calculateTip(bill, tip)), [bill, tip]
  )

  return (
    <View style={styles.container}>
      <Text>Total Bill Amount: $</Text>
      <TextInput keyboardType='numeric' onChange={(e) => setBill(e.target.value ? round(e.target.value, DECIMAL_PLACES) : '')} value={toString(bill)} />
      <Text>Tip Percentage: </Text>
      <TextInput keyboardType='numeric' onChange={(e) => setTip(e.target.value ? e.target.value : '')} value={toString(tip)} />
      <Text>Tip Amount: {calculatedTip}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
