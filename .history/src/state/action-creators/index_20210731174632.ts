import axios from "axios";
import { ActionType } from '../action-types';
import { Action } from '../actions';

const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })
    try {
        const {data} = await axios.get('https://registry.np')

    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERRORS,
        payload: err.message
      })
    }
  }
}