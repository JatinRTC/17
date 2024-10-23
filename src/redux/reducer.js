// src/redux/reducer.js
import { ADD_TASK, REMOVE_TASK } from '../redux/action.js';

const initialState = {
    tasks: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { id: Date.now(), text: action.payload },
                ],
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export default taskReducer;
