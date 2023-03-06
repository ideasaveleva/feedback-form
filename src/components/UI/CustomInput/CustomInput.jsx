import { LabelForInput } from '../LabelForInput/LabelForInput.jsx'
import { MyInput } from '../../../elements.js'

export const CustomInput = ({ name, placeholder, onChange, value, style }) => {
  return (
    <>
      <LabelForInput name={name} />
      <MyInput
        style={style}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}
