
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: 'search_repositories';
}

interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
}

type Action =
    SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction 

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERRORS = 'search_repositories_error'
}


const reducer = (state: RepositoriesState,action:Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.:
      return { loading: true, error: null, data: [] };
    case 'search_repositories_success':
      return { loading: false, error: null, data: action.payload };

    case 'search_repositories_error':
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
   }
}
 
export default reducer;


