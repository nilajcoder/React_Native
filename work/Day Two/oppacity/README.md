
 
## Task 4 -5  7

Create A Editable Button Using  TouchableOpacity
and Create Arrow Function for the button If We Click the Button alert Box will Open


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


## What is Textinput in react native?

In React Native, TextInput is a core component that allows the user to enter text into the app.
It works like an input field in HTML but is built specifically for mobile apps (Android & iOS).

🔹 Key Points about TextInput:

It’s used for forms, search bars, logins, sign-ups, and chats.

You can set a placeholder (default hint text).

It can be configured for keyboard types (numeric, email, password, etc.).

You can handle user input with onChangeText or by using state.

Supports styles like border, padding, fontSize, color etc.

🔹 Useful Props of TextInput:
Prop	             Description
1. placeholder	     Shows hint text when empty
2. value           	Holds the text input value
3. onChangeText	  Called when text changes
4. keyboardType	   Chooses keyboard (default, numeric, email-address, etc.)
5. secureTextEntry	 For passwords (hides text)
6. multiline	       Allows multiple lines
7. maxLength	       Limits number of characters


## Modal

In React Native, a Modal is a built-in component that:

Displays content above everything else in the app (like a popup window).

Temporarily blocks interaction with the rest of the app until it is closed.

Is often used for alerts, forms, confirmations, or custom dialogs.

Key Props of Modal:

visible → true or false to show or hide the modal.

transparent → if true, the modal’s background is see-through (you can see the screen behind it).

animationType → controls how it appears/disappears (slide, fade, or none).

💡 Example:

Login popup

Alert box

Terms & conditions dialog