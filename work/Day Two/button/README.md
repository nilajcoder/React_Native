
## Task 3

1.Create A Box 
2. Inside the box Give details
   Name,Mobile,Town,State,Pin,Counttry

3. Create a Button


## Note

1. What is View?

Ans-  View is a core component in React Native that is used to build the layout.
 It’s a container that can hold other components like Text, Image, Button, or even other Views.

 2. What is Component

 A component is a reusable piece of code that defines how a part of the UI looks and behaves.
It can be:

Built-in/Core components → provided by React Native (e.g., View, Text, Image, Button).

Custom components → created by developers to reuse across the app.

🔹 Text in React Native

Used to display text on the screen.

🔹 Button in React Native

A built-in button component for handling actions like clicks/taps.

The default React Native <Button> does not allow custom width/height — it’s controlled by the system.

👉 If you want a button with custom size (width, height, rounded corners, background, etc.), you should use TouchableOpacity (or Pressable) instead of the default Button.


In React Native, the built-in <Button /> component automatically transforms its title text into ALL CAPS on Android.
This is the default Android Material Design behavior.

If you don’t want all caps, you have 2 options:

Use Text inside TouchableOpacity or Pressable (custom button):