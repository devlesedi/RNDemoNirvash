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

import App from './app/';

import Analytics from 'mobile-center-analytics';
import Crashes from 'mobile-center-crashes';
import CodePush from 'react-native-code-push';

export default class RNDemoNirvash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logs: []
    }
  }

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

  codePushSync() {
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE
    }, (status) => {
      for(var key in CodePush.SyncStatus) {
        if (status === CodePush.SyncStatus[key]) {
          this.setState({logs: [...this.state.logs, key.replace(/_/g, '')] });
          break;
        }
      }
    });
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
          New From Mobile Center an Code Push.
        </Text>
        <Button title="Send Event" onPress={() => this.sendEvent()} />
        <Button title="Native Crash" onPress={() => this.nativeCrash()} />
        <Button title="JS Crash" onPress={() => this.jsCrash()} />
        <Button title="CodePush sync" onPress={() => this.codePushSync()} />
        {this.state.logs.map((log, i) => <Text key={i}>{log}</Text>)}
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

AppRegistry.registerComponent('RNDemoNirvash', () => App);
