import { Label } from './Label.jsx'

import { MyInput } from '../../elements.js'

export const Input = ({ name, placeholder, onChange, value, style }) => {
  return (
    <>
      <Label name={name} />
      <MyInput
        style={style}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}
