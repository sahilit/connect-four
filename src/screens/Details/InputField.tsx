import React, { useState } from 'react'

interface IProps {
  label: string
  value: string
  onChange: (text: string) => void
  defaultImage: string
  backgroundColor: string
  borderColor: string
  image: string
  onImageChange: (text: string) => void
}

export default function InputField(props: IProps) {
  const {
    label,
    value,
    onChange,
    defaultImage,
    backgroundColor,
    borderColor,
    image,
    onImageChange,
  } = props

  const handleFileChange = (event: any) => {
    const { target } = event
    const { files } = target

    if (files && files[0]) {
      var reader = new FileReader()

      reader.onload = (event: any) => {
        onImageChange(event.target.result)
      }

      reader.readAsDataURL(files[0])
    }
  }

  return (
    <div className='details-box' style={{ backgroundColor }}>
      <div className='avatar-container' style={{ borderColor }}>
        <input type='file' accept='image/*' className="image-picker" onChange={handleFileChange} />
        <img src={image || defaultImage} alt='avatar' />
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
