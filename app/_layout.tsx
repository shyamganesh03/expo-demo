import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
  useNavigation,
} from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import auth from "@react-native-firebase/auth";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import ToastManager from "expo-react-native-toastify";
import { useEffect, useRef } from "react";
import "react-native-reanimated";
import { persistor, store } from "@/store";
import React from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type RootStackParamList = {
  "sign-in": undefined;
  home: undefined;
  "(tabs)": undefined;
  "+not-found": undefined;
  "web-view": undefined;
  rating: undefined;
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const navigationRef = createNavigationContainerRef();

export function RootNavigator({ children }: { children: React.ReactNode }) {
  return (
    <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const firebaseAuth = auth();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const isReady = navigationRef.current?.isReady();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!isReady) return;

    (async () => {
      if (firebaseAuth.currentUser) {
        navigation.navigate("home");
      }
    })();
  }, [isReady]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider value={DefaultTheme}>
          <RootNavigator>
            <Stack initialRouteName="sign-in">
              <Stack.Screen name="sign-in" options={{ headerShown: false }} />
              <Stack.Screen name="home" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="+not-found"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="web-view" options={{ headerShown: false }} />
              <Stack.Screen name="rating" options={{ headerShown: false }} />
            </Stack>
          </RootNavigator>
          <ToastManager />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
