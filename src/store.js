import {createStore} from 'redux';
import reducerTodo from './redux/reducer.js'


export  const store = createStore(
    reducerTodo,
)

