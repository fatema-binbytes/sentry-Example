/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

import * as Sentry from '@sentry/react-native';
class App extends Component {
  constructor() {
    super();
    Sentry.init({
      dsn: 'https://34bb618382744057951d0fdb5d46f7f7@sentry.io/2348904',
    });
  }
  componentDidMount() {
    throw Error('My First app Error');
  }
  // componentWillMount() {
  //   Sentry.nativeCrash();
  // }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default App;
