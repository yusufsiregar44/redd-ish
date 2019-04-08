import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import QuestionEditor from './home/QuestionEditor';
import QuestionBox from './home/QuestionBox';

import { modifyVote } from '../modules/questions';

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12
  },
  questionEditorContainer: {
    marginBottom: 12
  }
})
class Home extends Component {

  /**
   * function to be passed as props to questionBox
   * this function will handle the upvote and downvote and their respective's data manipulation
   * @param questionId the id of the question which is being upvoted or downvoted
   * @param modifyType the type of vote, can be either 'upvote' or 'downvote'
   */
  _modifyVote = (questionId, modifyType) => () => {
    const { listOfQuestions } = this.props;

    // destructuring props so it can be mutate
    const newListOfQuestions = [...listOfQuestions];

    // logic for upvoting or downvoting
    if (modifyType === 'upvote') {
      newListOfQuestions[questionId - 1].votes =  newListOfQuestions[questionId - 1].votes + 1;
    } else if (modifyType === 'downvote') {
      newListOfQuestions[questionId - 1].votes =  newListOfQuestions[questionId - 1].votes - 1;
    }

    /**
     * returns the new listOfQuestions in which the vote of 
     * the question with the respective id has been modified
     *  */ 
    this.props.modifyVote(newListOfQuestions);
  }


  /**
   * inline data processing in rendering to accomodate re-rendering when new questions were added 
   * or votes are modified
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionEditorContainer}>
          <QuestionEditor />
        </View>
        {
          [...this.props.listOfQuestions].sort((a, b) => (a.votes < b.votes) ? 1 : -1).splice(0, 20).map((question) => {
            return (
              <QuestionBox
                questionText={question.text}
                questionId={question.id}
                questionVotes={question.votes}
                key={question.id}
                modifyVote={this._modifyVote}
              />
            );
          })
        }
      </View>
    )
  }
}

// react-redux mapping to props
const mapStateToProps = state => ({
  listOfQuestions: state.questions.listOfQuestions
});

const mapDispatchToProps = dispatch => ({
  modifyVote: newListOfQuestions => modifyVote({ dispatch, newListOfQuestions})
});

Home.propTypes = ({
  modifyVote: PropTypes.func,
  listOfQuestions: PropTypes.array

})


export default connect(mapStateToProps, mapDispatchToProps)(Home);