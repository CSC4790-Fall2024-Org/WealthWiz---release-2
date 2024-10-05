import * as React from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

import StartScreenNewUser from "./screens/StartScreenNewUser";
import LoginScreen from "./screens/LoginScreen";
import Achievements from "./screens/Achievements";
import Register3 from "./screens/Register3";
import StartScreen2NewUser from "./screens/StartScreenNewUser";
import Register from "./screens/Register";
import HomePage from "./screens/HomePage";
import ProfilePage from "./screens/ProfilePage";
import Register2 from "./screens/Register2";
import HomePage1 from "./screens/HomePage1";
import ProfilePageEdit from "./screens/ProfilePageEdit";
import LottieView from "lottie-react-native";

const Stack = createNativeStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    'lexend-bold': require('./assets/fonts/Lexend Bold.ttf'),
    'lexend-regular': require('./assets/fonts/Lexend Regular.ttf'),
    'lexend-medium': require('./assets/fonts/Lexend Medium.ttf'),
  });
};

const App = () => {
  const [fontsLoaded] = useFonts({
    'lexend-bold': require('./assets/fonts/Lexend Bold.ttf'),
    'lexend-regular': require('./assets/fonts/Lexend Regular.ttf'),
    'lexend-medium': require('./assets/fonts/Lexend Medium.ttf'),
  });
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator initialRouteName="StartScreenNewUser" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreenNewUser" component={StartScreenNewUser} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Register2" component={Register2} />
            <Stack.Screen name="Register3" component={Register3} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="HomePage1" component={HomePage1} />
            <Stack.Screen name="Achievements" component={Achievements} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
            <Stack.Screen name="ProfilePageEdit" component={ProfilePageEdit} />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
