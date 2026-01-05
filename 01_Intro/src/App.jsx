import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My favorit music band</h1>
      <h2>The name is "Shmalgauzen"</h2>
      <h3>participants</h3>
      <ul>
        <li>JВладислав Михальчук</li>
        <li>Михайло Матюхін</li>
        <li>Георгій Ярмоленко</li>
        <li>Роман Дебрін</li>
        <li>Євгеній Запояско</li>
        <li>Кирило Липко</li>
        <li>Андрій Ширко</li>
      </ul>
      <h2>About:</h2>
      <p>"Shmalgauzen" is a popular band known for their unique sound and energetic performances. They have a dedicated fan base and have released several hit albums over the years.</p>
      <h2>Example of album:</h2>
      <img src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/11/af/95/11af95cd-1f8f-982e-01a3-6d91ae3a0178/artwork.jpg/600x600bf-60.jpg" alt="Album Cover" />
      <h3>Songs in this album</h3>
      <ol>
        <li>Боги</li>
        <li>Бріджит</li>
        <li>Втомлена стріт</li>
      </ol>
      

    </>
  )
}

export default App
