import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
      

       <View style={styles.container}>
      <Text style={styles.textRedBig}>Welcome To Nilaj Company</Text>
      <Text style={styles.textGreenBig}>Welcome To Nilaj Company</Text>
      <Text style={styles.textPurpleBig}>Welcome To Nilaj Company</Text>
      <Text style={styles.textRedBold}>Welcome To Nilaj Company</Text>
      <Text style={styles.textGreenSmall}>Welcome To Nilaj Company</Text>
      <Text style={styles.textPurpleSmall}>Welcome To Nilaj Company</Text>
      <Text style={styles.textRedSmall}>Welcome To Nilaj Company</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({

   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textRedBig: {
    color: 'red',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textGreenBig: {
    color: 'lime',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textPurpleBig: {
    color: 'purple',
    fontSize: 28,
    marginVertical: 5,
  },
  textRedBold: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textGreenSmall: {
    color: 'lime',
    fontSize: 20,
    marginVertical: 5,
  },
  textPurpleSmall: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textRedSmall: {
    color: 'red',
    fontSize: 20,
    marginVertical: 5,
  },


})