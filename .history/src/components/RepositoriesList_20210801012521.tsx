import React, { useState } from "react";
import { useDispatch} from 'react-redux';



const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>)   => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList;