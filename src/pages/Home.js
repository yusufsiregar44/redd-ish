import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

// components
import QuestionEditor from './home/QuestionEditor';
import QuestionBox from './home/QuestionBox';

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
})
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QuestionEditor />
        {
          this.props.listOfquestions.map((question) => {
            return (
              <QuestionBox questionText={question.text} questionId={question.id} key={question.id} />
            );
          })
        }
      </View>
    )
  }
}

// react-redux mapping to props
const mapStateToProps = state => ({
  listOfquestions: state.questions.listOfquestions
});

const mapDispatchToProps = dispatch => ({});

Home.propTypes = ({
  
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);