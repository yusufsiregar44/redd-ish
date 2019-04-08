import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    marginVertical: 10,
    padding: 8
  },
  voteButton: {
    alignSelf: 'center',
    borderWidth: 1,
    padding: 8
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 8
  },
  numberOfVotesContainer: {
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class QuestionBox extends Component {
  render() {
    const { questionVotes, questionText, questionId, modifyVote } = this.props;
    return (
      <View style={styles.container}>
        <Text>{questionText}</Text>
        <View style={styles.voteContainer}>
          <TouchableOpacity
            style={styles.voteButton}
            onPress={modifyVote(questionId, 'upvote')}
          >
            <Text>Upvote</Text>
          </TouchableOpacity>
          <View style={styles.numberOfVotesContainer}>
            <Text>{questionVotes}</Text>
          </View>
          <TouchableOpacity
            style={styles.voteButton}
            onPress={modifyVote(questionId, 'downvote')}
          >
            <Text>Downvote</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

QuestionBox.propTypes = ({
  questionText: PropTypes.string,
  questionId: PropTypes.number,
  questionVotes:  PropTypes.number,
  modifyVote: PropTypes.func
})

export default QuestionBox;
