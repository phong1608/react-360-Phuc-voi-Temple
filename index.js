import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import {Surface} from 'react-360-web';
const surfaceModule = NativeModules.surfaceModule;




export default class TourismVR extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset('vietnam.jpg')} style={{width: 500, height: 300}} />
        <View style={styles.attractionBox}>
          <VrButton onClick={() => surfaceModule.start()}>
            <Text style={styles.attractionText}>
             Welcome to Phuc Voi Temple.Click to continue
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  displayPanel: {
    width: 100,
    height: 100,
    flexDirection: 'column',
  },
  attractionBox: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderColor: '#C4002F',
    borderWidth: 2,
    width: 500
  },
  attractionText: {
    fontSize: 30,
    color: '#C4002F'
  },
});

AppRegistry.registerComponent('TourismVR', () => TourismVR);

