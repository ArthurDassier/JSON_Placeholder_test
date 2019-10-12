// App.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import FetchExample from './apicall';

import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';

export default class App extends Component {
  render() {
    return (
      <StickyHeaderFooterScrollView
        renderStickyHeader={() => (
          <View style={styles.welcome}>
            <Text>{`I'm a sticky header`}</Text>
          </View>
        )}
        renderStickyFooter={() => (
          <View style={styles.welcome}>
            <Text>{`I'm a sticky footer`}</Text>
          </View>
        )}
      >
          <FetchExample/>
      </StickyHeaderFooterScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});