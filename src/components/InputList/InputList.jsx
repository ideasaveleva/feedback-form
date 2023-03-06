import { useState } from 'react'
import InputMask from 'react-input-mask'
import { Form } from '../Form/Form.jsx'
import { CustomInput } from '../UI/CustomInput/CustomInput.jsx'
import { LabelForInput } from '../UI/LabelForInput/LabelForInput.jsx'
import { MyButton } from '../UI/MyButton/MyButton.jsx'
import { MyTextarea } from '../UI/MyTextarea/MyTextarea.jsx'
import { customInput, ErrorTitle, Wrapper } from '../../elements.js'

export const InputList = ({ setActive }) => {
  const [inputs, setInputs] = useState({ phone: '', username: '', message: '' })
  const [valid, setValid] = useState(true)
  // const [sentText, setSentText] = useState(false)

  const convertedNumber = inputs.phone.replace(/[^0-9\+]/g, '')
  const convertedUsername = inputs.username.replace(/[^a-zA-Zа-яА-Я]+/g, '')
  const resultName =
    convertedUsername.charAt(0).toUpperCase() + convertedUsername.slice(1)
  const convertedMessage =
    inputs.message.charAt(0).toUpperCase() + inputs.message.slice(1)

  const labelInput = {
    phone: {
      name: 'Номер телефона',
      view: '+7 (999) 999-99-99',
    },
    username: {
      name: 'Имя',
      view: 'Введите ваше имя',
    },
    message: {
      name: 'Сообщение',
      view: 'Введите ваше сообщение',
    },
  }

  const validate = () => {
    let errors = {}
    let isValid = true

    if (convertedNumber.length < 12) {
      isValid = false
      errors['phone'] = 'Пожалуйста введите ваш телефон'
    }

    if (convertedUsername.length === 0) {
      isValid = false
      errors['username'] = 'Пожалуйста введите ваше имя'
    }

    if (convertedMessage.length === 0) {
      isValid = false
      errors['message'] = 'Пожалуйста введите сообщение'
    }

    setValid({ errors })
    return isValid
  }

  const addTextHandler = (text, name) => {
    setInputs({ ...inputs, [name]: text.target.value })
    setValid(false)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (validate()) {
      const newInputs = {
        ...inputs,
        phone: convertedNumber,
        username: convertedUsername,
      }
      const alertMessage = [
        'Cообщение отправлено на сервер',
        JSON.stringify(newInputs),
      ]
      alert(alertMessage)

      // setInputs({ phone: '', username: '', message: '' })
      setActive(false)
    }
  }

  return (
    <Wrapper>
      <Form>
        <LabelForInput name={labelInput.phone.name} />
        <InputMask
          style={customInput}
          mask='+7 (999) 999-99-99'
          // name={labelInput.phone}
          value={convertedNumber}
          onChange={(phone) => addTextHandler(phone, 'phone')}
          type='tel'
          placeholder={labelInput.phone.view}
        />
        {Object.keys(valid).length !== 0 ? (
          <ErrorTitle>{valid.errors.phone}</ErrorTitle>
        ) : (
          ''
        )}
      </Form>
      <Form>
        <CustomInput
          name={labelInput.username.name}
          onChange={(username) => addTextHandler(username, 'username')}
          placeholder={labelInput.username.view}
          value={resultName}
        />
        {Object.keys(valid).length !== 0 ? (
          <ErrorTitle>{valid.errors.username}</ErrorTitle>
        ) : (
          ''
        )}
      </Form>
      <Form>
        <MyTextarea
          name={labelInput.message.name}
          onChange={(message) => addTextHandler(message, 'message')}
          placeholder={labelInput.message.view}
          value={convertedMessage}
        />

        {Object.keys(valid).length !== 0 ? (
          <ErrorTitle>{valid.errors.message}</ErrorTitle>
        ) : (
          ''
        )}
      </Form>

      {/* {sentText && (
        <h3 style={{ paddingBottom: '20px' }}>
          Cообщение отправлено на сервер
        </h3>
      )} */}
      <MyButton onClick={handleFormSubmit}>Отправить</MyButton>
    </Wrapper>
  )
}
