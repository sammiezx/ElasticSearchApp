import React, {useState} from 'react'
import axios from "axios"
import "./app.css"

const App = () => {

  const [sug, setSug] = useState([])
  const [count, setCount] = useState(0)

  const refreshSug = async (e) => {
    await axios.post('/api/v1/first',{
      "searchWord": e.target.value
    }).then(function(response) {      
    //console.log(response.data.hits[0])
      
      setSug([response.data.hits])
      setCount(response.data.countFromController)
    }).catch(function (error){
      console.log(error)
    })
    //console.log(sug[0])
  }

  const submitFunction = () => {
    //add later
  }


  return (
    <div className="fatherClass">
       <form onSubmit={submitFunction}>
        <div className="searcher">
          <input 
          type="text" 
          onChange={refreshSug}
          />
           <input type="submit" value="Search" className="searchBtn" />
        </div>
    </form>
    <div className="sugBox">
      <h1>Total Match : {count}</h1>
      {count && sug[0].map(item => (
        <h1>{item._source.customer_full_name}-------------- Rank : {item._score}</h1>
      ))
      }
    </div>
    </div>
  )
}

export default App
