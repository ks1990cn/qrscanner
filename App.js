import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function App() {
  return (
    <QRCodeScanner
    onRead={({data}) => alert(data)}
    flashMode={RNCamera.Constants.FlashMode.torch}
    reactivate = {true}
    reactivateTimeout={500}
    />
  );
}

