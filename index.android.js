/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Analytics from 'mobile-center-analytics';
import Crashes from 'mobile-center-crashes';

export default class RNDemoNirvash extends Component {

  sendEvent() {
    Analytics.trackEvent('My Special weak sauce', {
      prop1: 'My Custom Property',
      timeStamp: new Date().toISOString()
    });
  }

  nativeCrash() {
    Crashes.generateTestCrash();
  }

  jsCrash() {
    this.func1();
  }

  func1() {
    this.func2();
  }

  func2() {
    throw new Error("Hey buddy! Weak Sauce much?");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button title="Send Event" onPress={() => this.sendEvent()} />
        <Button title="Native Crash" onPress={() => this.nativeCrash()} />
        <Button title="JS Crash" onPress={() => this.jsCrash()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNDemoNirvash', () => RNDemoNirvash);
