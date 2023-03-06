import { InputList } from './InputList.jsx'

import { ModalContainer, ModalContent } from '../elements.js'

export const Modal = ({ active, setActive }) => {
  return active ? (
    <ModalContainer onClick={() => setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <InputList setActive={setActive} />
      </ModalContent>
    </ModalContainer>
  ) : null
}
