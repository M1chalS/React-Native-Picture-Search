import * as React from "react";
import MainScreen from "./src/screens/MainScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Main"
                  component={MainScreen}
                  options={{ title: 'Image Search' }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;