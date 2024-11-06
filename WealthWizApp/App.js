//Change line 47 (InitialRouteName One) to the page that you want to currently work on


import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

import StartScreenNewUser from "./screens/StartScreenNewUser";
import Register1 from "./screens/Register1";
import Register2 from "./screens/Register2";
import Register3 from "./screens/Register3";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Achievements from "./screens/Achievements";
import ProfilePage from "./screens/ProfilePage";
import ProfilePageEdit from "./screens/ProfilePageEdit";
import Investing from "./screens/Investing";
import M1 from "./screens/C1/Mod 1/M1"; //First Module Main Screen
import M2 from "./screens/C1/Mod 2/M2";//Second Module Main Screen
import M3 from "./screens/C1/Mod 3/M3"; //Third Module Main Screen
import Quiz1 from "./screens/C1/Quiz1";
import StockMarketHome from "./screens/C1/StockMarketHome";

const Stack = createNativeStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    'lexend-bold': require('./assets/fonts/Lexend Bold.ttf'),
    'lexend-regular': require('./assets/fonts/Lexend Regular.ttf'),
    'lexend-medium': require('./assets/fonts/Lexend Medium.ttf'),
    'lexend-semibold': require('./assets/fonts/Lexend SemiBold.ttf'),
  });
};

const App = () => {
  const [fontsLoaded] = useFonts({
    'lexend-bold': require('./assets/fonts/Lexend Bold.ttf'),
    'lexend-regular': require('./assets/fonts/Lexend Regular.ttf'),
    'lexend-medium': require('./assets/fonts/Lexend Medium.ttf'),
    'lexend-semibold': require('./assets/fonts/Lexend SemiBold.ttf'),
  });
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="StartScreenNewUser" component={StartScreenNewUser} />
            <Stack.Screen name="Register1" component={Register1} />
            <Stack.Screen name="Register2" component={Register2} />
            <Stack.Screen name="Register3" component={Register3} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Achievements" component={Achievements} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
            <Stack.Screen name="ProfilePageEdit" component={ProfilePageEdit} />
            <Stack.Screen name="Investing" component={Investing} />
            <Stack.Screen name="M1" component={M1} /> 
            <Stack.Screen name="M2" component={M2} /> 
            <Stack.Screen name="M3" component={M3} /> 
            <Stack.Screen name="Quiz1" component={Quiz1} /> 
            <Stack.Screen name="StockMarketHome" component={StockMarketHome} /> 
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
