import React, {useState} from "react";


const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');


  return (
    <div>
      <form onSubmit={onsubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList;