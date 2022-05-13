import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Item from '../models/item';
import AlterarItemScreen from './alterar-item';
import HomeScreen from './home';
import ItemScreen from './item';
import LoginScreen from './login';

const styles = StyleSheet.create({
  headerBarAddButton: {
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  headerBarAddButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});

const Navigator: React.FC = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#660000',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
        }
      }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerTitle: 'Itens App',
            headerRight: () => (
              <TouchableOpacity style={styles.headerBarAddButton}>
                <Text style={styles.headerBarAddButtonText}>+</Text>
              </TouchableOpacity>
              )
          }}
        />
        <Stack.Screen name='Item' component={ItemScreen} />
        <Stack.Screen
          name='AlterarItem'
          component={AlterarItemScreen}
          options={{
            title: 'Alterar',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type StackParams = {
	Home: undefined,
	Login: undefined,
  Item: {item: Item},
  AlterarItem: {item: Item},
};

export default Navigator;
export type {
	StackParams,
};