import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* 1 */}
      <h1>My town</h1>
      <h2>The name is "Rvne"</h2>
      <h3>Відоме з 1283 року. Магдебурзьке право з 1492 року. Перша письмова згадка про Рівне у статусі міста — 1496 рік, у Волинському короткому літописі</h3>
      <h3>Площа Рівного складає 71 км², густота населення — 3913 осіб/км². Знаходиться у північно-західній частині України.</h3>
      <h2>photos</h2>
        <img src="https://dovkola.media/wp-content/uploads/2022/10/i129069.jpeg" alt="Rivne Collage"/>
        <img src="https://www.omnivagant.com/wp-content/uploads/2019/08/023A8462-2.jpg" alt="Rivne City Council"/>

      {/* 2 */}
      <h1>My favorite book</h1>
      <h2>Назва книги: «Маленький принц»</h2>
      <h3>Автор: Антуан де Сент-Екзюпері</h3>
      <h3>Жанр: Філософська казка</h3>
      <h3>Короткий опис: «Маленький принц» розповідає історію маленького хлопчика, який подорожує різними планетами, зустрічаючи дивовижних персонажів і вивчаючи важливі життєві уроки про дружбу, любов і сенс життя.</h3>
      <img src="https://www.mamut.me/files/watermark/files/thumbs/files/images/slike_proizvoda/thumbs_1200/thumbs_w/376773_1200_1200px_w.jpg" alt="The Little Prince Book Cover"/>


      {/* 3 */}
      <h1>My favorite movie</h1>
      <h2>Назва фільму: «Форрест Ґамп» (Початок)</h2>
      <h3>Режисер: Роберт Земекіс</h3>
      <h3>Жанр: Драма, комедія</h3>
      <h3>Короткий опис: Фільм розповідає історію Форреста Ґампа, людини з низьким IQ, яка стає свідком і учасником багатьох важливих подій в історії США 20-го століття. Незважаючи на свої обмеження, Форрест досягає великих успіхів у житті завдяки своїй доброті, наполегливості та вірності.</h3>
      <img src="https://kinogo.inc/uploads/posts/2020-02/1581515741-1303433223-forrest-gamp.jpg" alt="Forrest Gump Movie Poster"/>

      {/* 4 */}
      <h1>Me</h1>
      <h2>My name is Vladyslav</h2>
      <h3>I am 16 years old</h3>
      <h3>I live in Rivne, Ukraine</h3>
      <h2>Email:</h2>
      <h3>vladyslav@gmail.com</h3>
      <h2>Phone Number:</h2>
      <h3>+380 67 123 4567</h3>
      <h2>My Photo:</h2>
      <img src="https://media.tenor.com/CwSScpmEr_IAAAAe/me-who-me.png" alt="My Photo"/>
    </>
  )
}

export default App
