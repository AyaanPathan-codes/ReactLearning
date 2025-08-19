import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({handleFormSubmitData}) => {
  const{register,handleSubmit,reset}=useForm()
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data)
  reset() 
}
  return (
    <div className='mt-10 flex justify-center items-center'>
      <form className=" flex gap-10" onSubmit={handleSubmit( handleFormSubmit)}>
        <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold border-2  outline-none' type="text" placeholder='name'  />
        <input  {...register('email')}className='rounded-md px-2 py-1 text-base font-semibold border-2 outline-none'type="text" placeholder='email' />
        <input  {...register('image')}className='rounded-md px-2 py-1 text-base font-semibold border-2 outline-none' type="text" placeholder='image url' />
        <input className='px-2 py-1 rounded-md bg-blue-600'type="submit" />
      </form>
      </div>
  )
}

export default Form