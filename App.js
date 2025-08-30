import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WebViewPage from './src/WebViewPage';
import VideoPlayerPage from './src/VideoPlayerPage'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WebViewPage">
        <Stack.Screen name="WebViewPage" component={WebViewPage} options={{ title: 'WebView Page' }} />
        <Stack.Screen name="VideoPlayerPage" component={VideoPlayerPage} options={{ title: 'Video Player' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
