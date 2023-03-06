import { MyInput } from '../../elements.js'
import { Label } from './Label.jsx'

export const Input = ({ name, placeholder, onChange, value, style }) => {
  return (
    <>
      <Label name={name} />
      <Input
        style={style}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}
