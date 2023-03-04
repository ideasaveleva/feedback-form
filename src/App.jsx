import { useState } from 'react'
import './App.css'
import { InfoTask } from './components/InfoTask.jsx'
import { Modal } from './components/Modal/Modal.jsx'
import { MyButton } from './components/UI/MyButton/MyButton.jsx'

function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className='App'>
      <h1>Форма обратной связи</h1>
      <MyButton onClick={() => setModalActive(true)}>Заполнить</MyButton>
      <Modal active={modalActive} setActive={setModalActive} />
      <InfoTask />
    </div>
  )
}

export default App
