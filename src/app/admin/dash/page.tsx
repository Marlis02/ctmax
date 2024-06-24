'use client'
import { useCategoryStore } from '@/store/categoriesStore'
import useProductsStore from '@/store/productsStore'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './dash.module.scss'
import axios from 'axios'

type FromType = {
  title: string
  composition: string
  price: number
  note: string
  category: number
  image: File
}
const Main = () => {
  const { handleSubmit, register, reset, setValue, control } =
    useForm<FromType>()
  const { categories, getCategories } = useCategoryStore()

  const { addProducts } = useProductsStore()

  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile: File = e.target.files[0]
      setValue('image', selectedFile)
    }
  }

  const onSubmit: SubmitHandler<any> = async (data) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('composition', data.composition)
    formData.append('price', data.price.toString())
    formData.append('note', data.note)
    formData.append('category', data.category)
    if (data.image) {
      formData.append('image', data.image)
    }
    const token = JSON.parse(localStorage.getItem('token') as string)
    console.log(token.access)
    // Retrieve the access token from local storage

    console.log(formData)

    addProducts(formData, token.access)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className={styles.con}>
      <h1 className={styles.title}>Main</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <input
          type="text"
          {...register('title', { required: 'Обязательное поле' })}
          placeholder="title"
        />
        <input type="text" placeholder="Состав" {...register('composition')} />
        <input type="text" placeholder="price" {...register('price')} />
        <input type="text" {...register('note')} placeholder="Примечание" />
        {/* <input type="text" placeholder="category" {...register('category')} /> */}
        <select
          name="categoty"
          id=""
          onChange={(e: any) => setValue('category', e.target.value)}
        >
          {categories &&
            categories.map((item: any) => (
              <option
                value={item.id}
                key={item.id}
                onClick={() => {
                  console.log(item.id)
                }}
              >
                {item.title}
              </option>
            ))}
        </select>
        <Controller
          name="image"
          control={control}
          rules={{ required: false }}
          render={({ field: { value, onChange, ...field } }) => (
            <div>
              <p>Введите Имя</p>
              <input
                type="file"
                {...field}
                placeholder="Image"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null
                  onChange(file)
                }}
              />
            </div>
          )}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Main
