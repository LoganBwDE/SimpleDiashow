import React, {Component} from 'react';
import {StyleSheet, View, Text, Header} from 'react-native';
import Hamburger from 'src/Hamburger';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Hamburger
          type="arrow"
          onPress={() => this.setState({active: !this.state.active})}
        />
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
});
