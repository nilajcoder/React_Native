

## Task 4

Create A Editable Button Using  TouchableOpacity


Insert a Icon in Button

1. TouchableOpacity : TouchableOpacity is a prebuilt (built-in) component in React Native.

In React Native, TouchableOpacity is a wrapper component that makes anything
 inside it touchable (like a button) and gives it a fade/opacity effect when pressed.


 ## 🔍 What is activeOpacity?

activeOpacity is a prop of TouchableOpacity.

It controls how transparent the component becomes while being pressed.

Value range: 0 → 1

1 = no transparency (button doesn’t fade when pressed).

0 = fully transparent (invisible when pressed).

Example: 0.5 → button becomes 50% visible (faded).


2. npm i react-native-vector-icons For icons

import this for using icon

import Ionicons  from '@expo/vector-icons/Ionicons'

then use this library to use icons 

 alignItems:"center", //centre
    justifyContent:"center",//centre buttton


 marginBottom: 20, // space between text and button