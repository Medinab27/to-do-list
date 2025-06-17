const actions = {
  //actions in useEffect that loads todos
  fetchTodos: 'fetchTodos',
  loadTodos: 'loadTodos',
  //found in useEffect and addTodo to handle failed requests
  setLoadError: 'setLoadError',
  //actions found in addTodo
  startRequest: 'startRequest',
  addTodo: 'addTodo',
  endRequest: 'endRequest',
  //found in helper functions
  updateTodo: 'updateTodo',
  completeTodo: 'completeTodo',
  //reverts todos when requests fail
  revertTodo: 'revertTodo',
  //action on Dismiss Error button
  clearError: 'clearError',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    //useEffect
    case actions.fetchTodos:
      return { ...state, isLoading: true };

    // todos loaded
    case actions.loadTodos: {
      const todos = action.records.map((record) => ({
        id: record.id,
        title: record.fields.title ?? '',
        isCompleted: record.fields.isCompleted ? true : false,
      }));
      return { ...state, todoList: todos, isLoading: false };
    }
    //load error handling
    case actions.setLoadError:
      return {
        ...state,
        errorMessage: action.error.message,
        isLoading: false,
      };

    //addTodo request started
    case actions.startRequest:
      return { ...state, isSaving: true };

    //addTodo successfully
    case actions.addTodo: {
      const record = action.records[0];
      const fields = record.fields;
      const savedTodo = {
        id: record.id,
        title: fields.title,
        isCompleted: fields.isCompleted ? true : false,
      };

      return {
        ...state,
        todoList: [...state.todoList, savedTodo],
        isSaving: false,
      };
    }

    //request finished
    case actions.endRequest:
      return { ...state, isLoading: false, isSaving: false };

    //revertTodos
    case actions.revertTodo:
    //fall through to updateTodo
    // eslint-disable-next-line no-fallthrough
    case actions.updateTodo: {
      const updatedTodos = state.todoList.map((todo) =>
        todo.id === action.editedTodo.id
          ? { ...todo, ...action.editedTodo }
          : todo
      );

      const updatedState = {
        ...state,
        todoList: updatedTodos,
      };

      if (action.error) {
        updatedState.errorMessage = action.error.message;
      }

      return updatedState;
    }

    case actions.completeTodo: {
      const updatedTodos = state.todoList.map((todo) =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      return { ...state, todoList: updatedTodos };
    }
    case actions.clearError:
      return { ...state, errorMessage: '' };

    default:
      return state;
  }
}

const initialState = {
  todoList: [],
  isLoading: false,
  isSaving: false,
  errorMessage: '',
};

export { reducer, initialState, actions };
