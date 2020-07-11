import React, { useState } from 'react'
import SelectModal from './SelectModal'

interface IProps {
  label: string
  value: string
  onChange: (text: string) => void
  defaultImage: string
  modalTitle: string
  modalOptions: string[]
}

export default function SelectField(props: IProps) {
  const {
    label,
    value,
    onChange,
    defaultImage,
    modalTitle,
    modalOptions,
  } = props

  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <div className='details-box' style={{ backgroundColor: '#EFF3FF' }}>
      <div
        className='avatar-container'
        style={{ borderColor: '#B1C4F9', paddingTop: 10 }}
      >
        <img src={defaultImage} alt={label} />
      </div>
      <div className='input-field' onClick={() => setOpenModal(true)}>
        <label style={{ cursor: 'pointer' }}>{label}</label>
        <input
          type='text'
          placeholder='Enter name'
          value={value}
          style={{ cursor: 'pointer' }}
          disabled={true}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <SelectModal
        modalOpen={openModal}
        closeModal={() => setOpenModal(false)}
        title={modalTitle}
        options={modalOptions}
        onSave={(text: string) => onChange(text)}
      />
    </div>
  )
}
