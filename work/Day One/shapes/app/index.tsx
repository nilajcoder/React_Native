import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>💻 Homework Day-1 💻</Text>

      {/* Small Red Square */}
      <View style={styles.redBox}></View>

      {/* Green Rectangle */}
      <View style={styles.greenBox}></View>

      {/* Purple Wide Rectangle */}
      <View style={styles.purpleBox}></View>

      {/* Red Circle */}
      <View style={styles.redCircle}></View>

      {/* Green Pill Shape */}
      <View style={styles.greenPill}></View>

      {/* Purple Pill Shape */}
      <View style={styles.purplePill}></View>

      {/* Tall Red Rectangle */}
      <View style={styles.redTall}></View>
    </View>
  )
  
}

export default index

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // gray background
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  greenBox: {
    height: 60,
    width: 120,
    backgroundColor: 'lime',
    marginVertical: 10,
  },
  purpleBox: {
    height: 60,
    width: 300,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  redCircle: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    marginVertical: 10,
  },
  greenPill: {
    height: 60,
    width: 150,
    backgroundColor: 'lime',
    borderRadius: 30,
    marginVertical: 10,
  },
  purplePill: {
    height: 60,
    width: 250,
    backgroundColor: 'purple',
    borderRadius: 30,
    marginVertical: 10,
  },
  redTall: {
    height: 120,
    width: 80,
    backgroundColor: 'red',
    marginVertical: 10,
  },
})
