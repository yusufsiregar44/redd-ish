import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

// actions
import { addNewQuestion } from '../../modules/questions';

// styling
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    marginVertical: 5,
  },
  characterCounter: {
    alignSelf: 'flex-end'
  },
  submitButton: {
    alignSelf: 'center',
    borderWidth: 1,
    padding: 5
  }
})

// react-redux mapping to props
const mapStateToProps = state => ({
  questionId: state.questions.questionId
});

const mapDispatchToProps = dispatch => ({
  addNewQuestion: questionData => addNewQuestion({ dispatch, questionData })
})

class QuestionEditor extends Component {
  /**
   * 1) text: state to contain string of question
   */
  state = {
    text: ''
  }

  /**
   * updates the text state whenever there are changes in the text input
   * @param text The newest value at TextInput
   */
  _onChangeText = (text) => {
    this.setState({text})
  }

  /**
   * renders the remaining characters available for input. obtained by substracting the 
   * state's text length with the integer 255
   */
  _renderRemainingText = () => (
    <Text style={styles.characterCounter}>{this.state.text.length}/255</Text>
  )

  /**
   * submits the state's text to redux store and resets component's state
   * sets the id of the question by using the nextId state
   */
  _onSubmit = () => {
    const { nextQuestionId } = this.props;
    const questionData = {
      id: nextQuestionId,
      value: this.state.text
    }
    this.props.addNewQuestion(questionData);
    this.setState({text: ''});
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor);
