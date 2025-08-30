import React, { useEffect } from 'react';
import { View, StyleSheet, Button, SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Notifications from 'expo-notifications';

export default function WebViewPage({ navigation }) {

  useEffect(() => {
    const setupNotifications = async () => {
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }

      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Notification permission not granted!');
      }
    };

    setupNotifications();
  }, []);


  const triggerNotification = async (title, body, delay = 2) => {
    await Notifications.scheduleNotificationAsync({
      content: { title, body, sound: 'default' },
      trigger: { seconds: delay },
      channelId: 'default', 
    });
  };

  // unsubscribe when component unmounts
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
    });

    return () => subscription.remove();
  }, []);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://www.google.com' }} style={{ flex: 1 }} />
      <View style={styles.buttonContainer}>
        <Button title="Notify 1" onPress={() => triggerNotification('Notification 1', 'This is the first message', 2)} />
        <Button title="Notify 2" onPress={() => triggerNotification('Notification 2', 'This is the second message', 5)} />
        <Button title="Go to Video Player" onPress={() => navigation.navigate('VideoPlayerPage')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { padding: 10, flexDirection: 'column', justifyContent: 'space-around', gap: 10, },
});
