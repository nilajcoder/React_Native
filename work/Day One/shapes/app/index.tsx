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
      <View style={styles.purpleBox}>
        <Text style={styles.textInside}>Welcome Nilaj IT</Text>
      </View>

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

  textInside:{

    textAlign: "center",
    fontSize:20,
    fontWeight:"bold",
    color: 'white'
    
  },

  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // gray background
    alignItems: 'center',
    paddingTop: 40,
    borderRadius:20,
    borderColor:'black',
    borderWidth:5,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    borderRadius:5,
    borderColor:'black',
    borderWidth:5,
    
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    marginVertical: 10,
    borderRadius:5,
    borderColor:'black',
    borderWidth:5,
  },
  greenBox: {
    height: 60,
    width: 120,
    backgroundColor: 'lime',
    marginVertical: 10,
      borderRadius:5,
    borderColor:'black',
    borderWidth:5
  },
  purpleBox: {
    height: 60,
    width: 300,
    backgroundColor: 'purple',
    marginVertical: 10,
      borderRadius:5,
    borderColor:'black',
    borderWidth:5
  },
  redCircle: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    marginVertical: 10,
    borderColor:'black',
    borderWidth:5 ,
  },
  greenPill: {
    height: 60,
    width: 150,
    backgroundColor: 'lime',
    borderRadius: 30,
    marginVertical: 10,
      
    borderColor:'black',
    borderWidth:5 //wihout this  border is not visiable
  },
  purplePill: {
    height: 60,
    width: 250,
    backgroundColor: 'purple',
    borderRadius: 30,
    marginVertical: 10,
      
    borderColor:'black',
    borderWidth:5
  },
  redTall: {
    height: 55,
    width: 60,
    backgroundColor: 'red',
    marginVertical: 10,
      borderRadius:5,
    borderColor:'black',
    borderWidth:5
  },
})
