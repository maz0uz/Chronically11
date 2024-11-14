// App.tsx (or similar)
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

const App: React.FC = () => {

    useEffect(() => {
        fetch('http://192.168.1.10:5000/data')  // Replace with your backend's actual URL
            .then((response) => response.json())
            .then((data) => {
                console.log('Results:', data[0][0].Tweet);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

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
                <FontAwesome name="list-ul" size={18} color="#000000" solid={false} />
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
    marginRight: 10,
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  buttonText: {
    color: '#4CAF50',
    fontSize: 16,
  },
});

export default App;
