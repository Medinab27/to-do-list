
const actions = {
    //actions in useEffect that loads todos
    fetchTodos: 'fetchTodos',
    loadTodos: 'loadTodos',
    //found in useEffect and addTodo to handle failed requests
    setLoadError: 'setLoadError',
    //actions found in addTodo
    startRequest: 'startRequest',
    onAddTodo: 'onAddTodo',
    endRequest: 'endRequest',
    //found in helper functions 
    updateTodo: 'updateTodo',
    completeTodo: 'completeTodo',
    //reverts todos when requests fail
    revertedTodos: 'revertedTodos',
    //action on Dismiss Error button
    clearError: 'clearError',

  //BARBARA BELOW: actions in useEffect that loads todos
    fetchTodos: 'fetchTodos',
    //handleAddTodo
    handleAddTodo: 'handleAddTodo',
    //updateTodo Async
    updateTodo: 'updateTodo',
    revertedTodos: 'revertedTodos',

    //completeTodo Async
    originalTodo: 'originalTodo',
    completeTodo: 'completeTodo',
    updatedTodo: 'updatedTodo',
    //TodosViewForm? errorMessage appears here
};

function reducer (state = initialState, action){
    switch (action.type){
        case actions.fetchTodos:
            return {...state};
    case actions.handleAddTodo:
        return {...state};
        case actions.updateTodo:
            return {...state};
            case actions.revertedTodos:
                return {...state};
                case actions.originalTodo:
                    return{...state};
                    case actions.completeTodo:
                        return {...state};
                        case actions.updatedTodo:
                            return {...state};
}
}

const initialState ={
todoList: [],
isLoading: false,
isSaving: false
errorMessage: ''};

export {initialState, actions};