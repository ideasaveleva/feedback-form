import { ButtonContainer } from '../../../elements.js'

export const MyButton = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}
