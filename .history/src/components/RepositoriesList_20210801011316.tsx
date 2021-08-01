import React, {useState} from "react";


const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');

  const onSubmit = (e) => {

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