import * as React from "react";
import MainScreen from "./src/screens/MainScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageShowScreen from "./src/screens/ImageShowScreen";

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
              <Stack.Screen
                  name="Show"
                  component={ImageShowScreen}
                  options={{ title: 'Get your image!' }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;