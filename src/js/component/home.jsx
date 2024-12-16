import React,{ useState } from 'react'

const lista = []

function App() {

  const [state, setState] = useState(lista)
  const [color, setColor] = useState("")


  const agregar = () => {
    setState([...state, {color: color}])
    setColor("")
  }

  const eliminarItem = (listItemIndex) => {
    const list = state.filter((listItem, index) => {
      return index != listItemIndex
    })
    setState(list)
  }

  return (
    <>
      <h1>To Do List</h1>
      <br/>
        <input value={color}  onChange={(e) => {
          setColor(e.target.value)
        }}></input>
        <br/>
        <button onClick={agregar}>Agregar</button>
        <br/>
        <br/>
      <ul>
        {state.map((item, index) => {
          return (<>
            <li>
              {item.color} <button className='btn ' onClick={() => eliminarItem(index)}>x</button>
            </li>
          </>)
        })}
      </ul>
      <p>{state.length} Items to do</p>
    </>
  )
}

export default App;
