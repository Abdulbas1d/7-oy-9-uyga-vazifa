import React from 'react'
import './index.css'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'react-hot-toast'

function HomeworkTwo() {
  const {register, handleSubmit, formState: {errors}, watch, reset} = useForm()

  function onSubmit(data) {
    console.log(data);
    toast.success("User added successfully!")
    reset()
  }

  return (
    <div className='container-two'>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Foydalanuvchi ma'lumotlari</h2>
        <label>Ismingizni kiriting:</label>
        <input {...register('name', {required: "Ismingizni kiritishingiz kerak!"})} type="text" placeholder='Enter your name...' />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Email Addressingizni kiriting:</label>
        <input {...register('email', {required: "Emailingizni kiritishingiz kerak!", pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "To'g'ri email kiritishingiz kerak!"}})} type="email" placeholder='Enter your email...' />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Passwordni kiriting:</label>
        <input {...register('password', {required: "Password ni kiritishingiz kerak!"})} type="password" placeholder='Enter your password...' />
        {errors.password && <p>{errors.password.message}</p>}

        <label>RePasswordni kiriting:</label>
        <input {...register('repassword', {required: "Password ni qayta kiriting", validate: (value) => value === watch('password') || "Password lar mos emas!"})} type="password" placeholder='Enter your repassword...' />
        {errors.repassword && <p>{errors.repassword.message}</p>}

        <button className='btn-two' type='submit'>Yuborish</button>
        <Toaster />
      </form>
    </div>
  )
}

export default HomeworkTwo
