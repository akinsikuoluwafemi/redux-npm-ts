
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
  
}



const reducer = (state: RepositoriesState, action: Action): RepositoriesState => { 
  switch (action.type) {
    case 'search_repositories':
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


