import React, { Component } from 'react'
import { View } from 'react-native'

import styles from './home/Style';
import QuestionEditor from './home/QuestionEditor';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QuestionEditor />
      </View>
    )
  }
}
