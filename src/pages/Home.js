import React, { Component, StyleSheet } from 'react'
import { View } from 'react-native'

// Components
import QuestionEditor from './home/QuestionEditor';

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
})

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QuestionEditor />
      </View>
    )
  }
}
