import React, { useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

function VideoPlayerPage({ navigation }) {
    const videoRef = useRef(null);

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={{ uri: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' }} //for video
                useNativeControls
                resizeMode="contain"
                style={styles.video}
            />

            <View style={styles.buttonContainer}>
                <Button title="Play" onPress={() => videoRef.current.playAsync()} /> 
                <Button title="Pause" onPress={() => videoRef.current.pauseAsync()} />
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}

//Styles 
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    video: { width: '100%', height: 300 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, width: '90%' },
});

export default VideoPlayerPage;

