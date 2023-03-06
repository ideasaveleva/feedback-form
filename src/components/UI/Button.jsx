import { ButtonContainer } from '../../elements.js'

export const Button = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}
