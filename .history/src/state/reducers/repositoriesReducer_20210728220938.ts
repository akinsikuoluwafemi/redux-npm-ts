
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  date: string[];
}


const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    case 'search_repositories':
      return {loadi}
    case 'search_repositories_success':
      case 'search_repositories_error':

    default:
      return state;
   }
}
 
export default reducer;


