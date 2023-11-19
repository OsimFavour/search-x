import { useEffect } from 'react'
import Axios from 'axios'
import './App.css'

const url = 'http://127.0.0.1:8000/api'

function App() {

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `${url}/posts/`
      )
      console.log(response.data)
      
    }
    catch(e) {
      console.log(e.response)
    }
  }

  // const fetchData = async () => {
  //   const endpoint = `${url}/posts/`

  //   try {
  //     const response = await fetch(endpoint, {
  //       method: 'GET'
  //     })
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //   catch(e) {
  //     console.log(e)
  //   }
  // }

  return (
    <div className="App">
      <input type='search' placeholder='search...' />
      <ul>
        <li>Test Text</li>
      </ul>
    </div>
  );
}

export default App;
