import React from 'react'

interface IProps {
  label: string
  value: string
  onChange: (text: string) => void
  defaultImage: string
  backgroundColor: string
  borderColor: string
}

export default function InputField(props: IProps) {
  const {
    label,
    value,
    onChange,
    defaultImage,
    backgroundColor,
    borderColor,
  } = props

  return (
    <div className='details-box' style={{ backgroundColor }}>
      <div className='avatar-container' style={{ borderColor }}>
        <img src={defaultImage} alt='' />
      </div>
      <div className='input-field'>
        <label>{label}</label>
        <input
          type='text'
          placeholder='Enter name'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}
