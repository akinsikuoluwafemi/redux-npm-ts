import { combineReducers} from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
});



export default reducers;

// makes react-redux know about our store
export type RootState = ReturnType<typeof reducers>