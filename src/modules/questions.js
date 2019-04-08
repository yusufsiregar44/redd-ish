// reducer

const initialState = {
  nextQuestionId: 1,
  listOfQuestions: []
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'questions.addNewQuestion':
      return {
        ...state,
        listOfQuestions: [...state.listOfQuestions, action.questionData],
        nextQuestionId: state.nextQuestionId + 1
      }
    case 'questions.modifyVote':
      return {
        ...state,
        listOfQuestions: [...action.newListOfQuestions]
      }
    default:
      return state;
  }
}

// actions
export const addNewQuestion = ({ dispatch, questionData }) => (
  dispatch({type: 'questions.addNewQuestion', questionData})
);

export const modifyVote = ({ dispatch, newListOfQuestions }) => {
  dispatch({type: 'questions.modifyVote', newListOfQuestions})
}
