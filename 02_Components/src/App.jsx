import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsCard from './components/NewsCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewsCard
        title="На маршруті Рівне – Городок знову з’явився тролейбус: стартували перші випробування"
        image="https://www.prorivne.rv.ua/wp-content/uploads/2026/01/519595.jpg.webp"
        description="У понеділок, 6 січня, з Рівного в напрямку Городка вирушив тролейбус. Це був перший технічний рейс, який мав на меті перевірити справність оновленої контактної мережі. Відновлення мережі виконала Служба відновлення у Рівненській області."
        source="https://www.prorivne.rv.ua/news/na-marshruti-rivne-gorodok-znovu-zyavyvsya-trolejbus-startuvaly-pershi-vyprobuvannya/"
      />
    </>
  )
}

export default App
