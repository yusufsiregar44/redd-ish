import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

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

  _modifyVote = (questionId, modifyType) => () => {
    const { listOfQuestions } = this.props;
    const newListOfQuestions = [...listOfQuestions];
    if (modifyType === 'upvote') {
      newListOfQuestions[questionId - 1].votes =  newListOfQuestions[questionId - 1].votes + 1;
    } else if (modifyType === 'downvote') {
      newListOfQuestions[questionId - 1].votes =  newListOfQuestions[questionId - 1].votes - 1;
    }
    this.props.modifyVote(newListOfQuestions);
  }

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
  
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);