import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  margin-bottom: 10px;
  min-height: 85px;
`

export const ErrorTitle = styled.h5`
  color: red;
  font-weight: 400;
`

export const Wrapper = styled.section`
  width: 320px;
  @media (min-width: 576px) {
    width: 500px;
  }
`

export const customInput = {
  width: '100%',
  color: 'black',
  fontSize: '16px',
  padding: '10px',
  backgroundColor: 'rgb(255 255 255)',
  borderColor: 'rgb(224 224 224)',
  borderWidth: '1px',
  borderRadius: '5px',
}

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #e5e7eb;
`

export const MyInput = styled.input`
  width: 100%;
  color: black;
  font-size: 16px;
  padding: 10px;
  background-color: rgb(255 255 255);
  border-color: rgb(224 224 224);
  border-width: 1px;
  border-radius: 5px;
`

export const MyLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #07074d;
  margin-bottom: 6px;
`

export const ButtonContainer = styled.button`
  color: white;
  font-size: 14px;
  padding: 10px 15px;
  background-color: #072769;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  display: block;
`

export const TextareaContainer = styled.textarea`
  width: 100%;
  color: black;
  font-size: 17px;
  padding: 10px;
  background-color: rgb(255 255 255);
  border-color: rgb(224 224 224);
  border-width: 1px;
  border-radius: 5px;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`
