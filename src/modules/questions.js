// reducer

const initialState = {
  nextQuestionId: 1,
  listOfquestions: []
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'questions.addNewQuestion':
      return {
        ...state,
        listOfquestions: [...state.listOfquestions, action.questionData],
        nextQuestionId: state.nextQuestionId + 1
      }
    default:
      return state;
  }
}

// actions
export const addNewQuestion = ({ dispatch, questionData }) => (
  dispatch({type: 'questions.addNewQuestion', questionData})
);
