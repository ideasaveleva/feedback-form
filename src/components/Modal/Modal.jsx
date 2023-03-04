import { InputList } from '../InputList/InputList.jsx'
import { ModalContainer, ModalContent } from './styles.jsx'

export const Modal = ({ active, setActive }) => {
  return active ? (
    <ModalContainer onClick={() => setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <InputList setActive={setActive} />
      </ModalContent>
    </ModalContainer>
  ) : null
}
