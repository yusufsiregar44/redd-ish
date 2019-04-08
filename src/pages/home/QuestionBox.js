import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    marginVertical: 10,
    padding: 5
  }
})

class QuestionBox extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.questionText}</Text>
      </View>
    )
  }
}

QuestionBox.propTypes = ({
  questionText: PropTypes.string,
  questionId: PropTypes.number
})

export default QuestionBox;
