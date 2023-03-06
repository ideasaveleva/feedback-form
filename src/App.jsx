import { useState } from 'react'
import './App.css'

import { InfoTask } from './components/InfoTask.jsx'
import { Modal } from './components/Modal.jsx'
import { Button } from './components/UI/Button.jsx'

function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className='App'>
      <h1>Форма обратной связи</h1>
      <Button onClick={() => setModalActive(true)}>Заполнить</Button>
      <Modal active={modalActive} setActive={setModalActive} />
      <InfoTask />
    </div>
  )
}

export default App
