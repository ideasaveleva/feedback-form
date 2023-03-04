import { ButtonContainer } from './styles.jsx'

export const MyButton = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}
