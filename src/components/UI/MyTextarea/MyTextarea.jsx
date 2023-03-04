import { LabelForInput } from '../LabelForInput/LabelForInput.jsx'
import { TextareaContainer } from './styles.jsx'

export const MyTextarea = ({ placeholder, onChange, value, name }) => {
  return (
    <>
      <LabelForInput name={name} />
      <TextareaContainer
        cols='30'
        rows='7'
        maxlength='210'
        placeholder={placeholder}
        value={value}
        onInput={onChange}
      ></TextareaContainer>
    </>
  )
}
