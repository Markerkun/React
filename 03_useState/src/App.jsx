import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNum from './components/AddNum.jsx'


function App() {

  // ex 1, 2, 3 creating a counter
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const [Name, setName] = useState('Restaurant')
  const [Address, setAddress] = useState('Big street 1')
  const [Rating, setRating] = useState(5)
  const [Kitchen, setKitchen] = useState('Italian')

  return (  
  <>  
    <div>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
    <div>
      <h1>{count1}</h1>
      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={() => setCount1(AddNum(1))}>+1</button>
        <button onClick={() => setCount1(AddNum(10))}>+10</button>
        <button onClick={() => setCount1(AddNum(100))}>+100</button>
      </div>
    </div>

    {/* ex 4, 5 creating a restaurant */}


    <div style={{display: 'flex', gap: '10px'}}>
      <h1>{Name}</h1>
      <input style={{height: '30px', marginTop: '50px'}} type="text" onChange={(event) => setName(event.target.value)}/>
    </div>
    <div style={{display: 'flex', gap: '10px'}}>
      <h2>{Address}</h2>
      <input style={{height: '30px', marginTop: '25px'}} type="text" onChange={(event) => setAddress(event.target.value)}/>
    </div>
    <div style={{display: 'flex', gap: '10px'}}>
      <h2>{Rating}</h2>
      <div>
      <input style={{height: '30px', marginTop: '25px'}} name = "radio" type="radio" onChange={(event) => setRating(event.target.value)} value={1}/>1
      <input style={{height: '30px', marginTop: '25px'}} name = "radio" type="radio" onChange={(event) => setRating(event.target.value)} value={2}/>2
      <input style={{height: '30px', marginTop: '25px'}} name = "radio" type="radio" onChange={(event) => setRating(event.target.value)} value={3}/>3
      <input style={{height: '30px', marginTop: '25px'}} name = "radio" type="radio" onChange={(event) => setRating(event.target.value)} value={4}/>4
      <input style={{height: '30px', marginTop: '25px'}} name = "radio" type="radio" onChange={(event) => setRating(event.target.value)} value={5}/>5
      </div>
    </div>
    <div style={{display: 'flex', gap: '10px'}}>
      <h2>{Kitchen}</h2>
      <div style={{marginTop: '25px'}}>
      <select value={Kitchen} onChange={(event) => setKitchen(event.target.value)}>
      <option value="European">European</option>
      <option value="Asian">Asian</option>
      <option value="FastFood">Fast food</option>
      <option value="Vegetarian">Vegetarian</option>
    </select>
      </div>
    </div>

    </>
  )
}

export default App;
