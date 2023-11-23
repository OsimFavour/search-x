import { useEffect, useState } from 'react'
import Axios from 'axios'
import './App.css'
import useDebounce from './hooks/use-debounce'

const url = 'http://127.0.0.1:8000/api'

function App() {
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('')

  const debounce = useDebounce(searchText, 500)

  useEffect(() => {
    fetchData()
  }, [debounce])

  // const fetchData = async () => {
  //   try {
  //     const response = await Axios.get(
  //       `${url}/posts/`
  //     )
  //     console.log(response.data)
      
  //   }
  //   catch(e) {
  //     console.log(e.response)
  //   }
  // }

  const fetchData = async () => {
    const endpoint = `${url}/posts?title=${searchText}`

    try {
      const response = await fetch(endpoint, {
        method: 'GET'
      })
      const data = await response.json()
      console.log(data)
      setData(data)
    }
    catch(e) {
      console.log(e)
    }
  }

  return (
    <div className="App">
      <input 
        type='search' 
        placeholder='search...'
        value={searchText}
        onChange={e => setSearchText(e.target.value)} />
      <ul>
        {data && data.map((el) => <li key={el.id}>{el.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
