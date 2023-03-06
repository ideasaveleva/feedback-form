import { TextareaContainer } from '../../elements.js'
import { Label } from './Label.jsx'

export const Textarea = ({ placeholder, onChange, value, name }) => {
  return (
    <>
      <Label name={name} />
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
