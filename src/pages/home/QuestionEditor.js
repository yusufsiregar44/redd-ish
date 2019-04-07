import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'

import styles from './questionEditor/Style';

export default class QuestionEditor extends Component {
  state = {
    text: ''
  }

  _onChangeText = (text) => {
    this.setState({text})
  }

  _renderRemainingText = () => (
    <Text style={styles.characterCounter}>{this.state.text.length}/255</Text>
  )

  _onSubmit = () => {
    this.setState({text: ''})
  }

  render() {
    return (
      <View>
        <Text> What's your question? </Text>
        <TextInput
          onChangeText={this._onChangeText}
          maxLength={255}
          value={this.state.text}
          style={styles.textInput}
          multiline
        />
        {this._renderRemainingText()}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this._onSubmit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
