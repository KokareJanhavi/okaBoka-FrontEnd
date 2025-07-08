/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;



// App.js
import React,{ forwardRef } from 'react';
import { View, StyleSheet,StatusBar,Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigations from './src/navigation/navigations';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.appContent}>
      <StatusBar
      barStyle={'light-content'}
        backgroundColor="#35c1a7" 
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
          {navigations.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
     
    </View>

  );
};

const styles = StyleSheet.create({
  appContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    backgroundColor: '#35c1a7',
  },
  toastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderLeftWidth: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    width: 330,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    fontSize: 14,
    color: 'black',
  },
});

export default App;