import { useState, useEffect} from 'react'
import './App.css'
import { Cards } from './Components/Cards'


function App() {

  const [db, setDb] = useState([])
  const [base, setBase] = useState([])

  useEffect (() =>{
    const data = async () =>{
    const getData = await fetch("https://rickandmortyapi.com/api/character")
    const res = await getData.json()
    setDb(res.results)
    }
    data()

  }, [])
   const url = db.map(el => el.episode[0])
  
   useEffect (() =>{
    const data = async (url) =>{
    const getData = await fetch(url)
    const res = await getData.json()
    return res
    }
 url.map(el => data(el)
        .then((res)=>{
         setBase(res)}))    
    }, [db])
   
  console.log(base)

  return (
    <div className="App">
    {
      db.map(el => {
        return (
          <Cards 
           key={el.id}
            img={el.image}
            name={el.name}
            status={el.status}
            location={el.location.name}
            species={el.species}
          />
        )
      })
    }
    </div>
  )
}

export default App
