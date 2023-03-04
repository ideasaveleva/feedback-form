import { LabelForInput } from '../LabelForInput/LabelForInput.jsx'
import { MyInput } from './styles.jsx'

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
