// App.tsx (or a similar file where you set up your navigation)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8A7FDC',
          },
          headerTintColor: '#FFD700', 
          headerTitleStyle: {
            fontFamily: 'Roboto-Bold',
            fontSize: 24,
            fontWeight: 'bold',
          },
          headerTitleContainerStyle: {
            paddingLeft: 20,
          },
        }}
      >
        <Stack.Screen
          name="Chronically"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Custom Button Pressed!')}
              >
                <FontAwesome name="list-ul" size={18} color="#FFD700" solid = {false} />

              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 10,
  },
  button: {
    marginRight: 10,  // Space from the right edge
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  buttonText: {
    color: '#4CAF50',  // Button text color
    fontSize: 16,
  },
});

export default App;
