import React, { useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import './selectModal.sass'

interface IProps {
  modalOpen: boolean
  closeModal: () => void
  title: string
  options: any[]
  value: string
  onSave: (text: string) => void
}

export default function SelectModal(props: IProps) {
  const { modalOpen, closeModal, title, options, value, onSave } = props

  const [selectedOption, setSelectedOption] = useState<string>(value)

  const onOKPress = () => {
    closeModal()
    onSave(selectedOption)
  }

  return (
    <Modal isOpen={modalOpen} id='modal'>
      <ModalBody>
        <h2>{title}</h2>
        <div className='options'>
          {options.map((option, index) => (
            <div
              key={index}
              className='option'
              onClick={() => setSelectedOption(option)}
            >
              <input
                type='radio'
                name='tag'
                id={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
        <div className='bottom-line' />
        <div className='footer'>
          <button className='modal-btn' onClick={closeModal}>
            CANCEL
          </button>{' '}
          <button className='modal-btn primary' onClick={onOKPress}>
            OK
          </button>
        </div>
      </ModalBody>
    </Modal>
  )
}
