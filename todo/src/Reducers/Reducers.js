
export const initialState= {
    item: "Learn React",
    completed: false,
    id: ''
}

export const ToDoReducer = (state, action) =>{
    switch(action.type){
        case "Toggle_Complete":
            return{
                ...state,
                completed: !state.completed
            };
        case "Toggle_Clear":
            return{

            }
        case "Toggle_Add":
            return{
                ...state,
                item: action.payload,
                id: Date.now()
            }
        default:
            return state;
    }
}