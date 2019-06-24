import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const calculateTip = (bill, tip) => (!bill || !tip) ? 0 : bill * tip

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
      <TextInput keyboardType='numeric' onChange={setBill} value={bill} />
      <Text>Tip Percentage: </Text>
      <TextInput keyboardType='numeric' onChange={setTip} value={tip} />
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
