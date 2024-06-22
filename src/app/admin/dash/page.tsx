'use client'
import { useCategoryStore } from '@/store/categoriesStore'
import useProductsStore from '@/store/productsStore'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from '@/styles/pages/dash.module.scss'

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
    formData.append('category', data.category.toString())
    if (data.image) {
      formData.append('image', data.image)
    }

    console.log(data)

    // try {
    //   const response = await fetch('http://192.168.123.163:8000/products/', {
    //     method: 'POST',
    //     body: formData,
    //   })

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok')
    //   }

    //   const result = await response.json()
    //   console.log(result)
    //   // Handle success (e.g., reset form, display success message)
    //   reset()
    // } catch (error) {
    //   console.error('There was a problem with your fetch operation:', error)
    //   // Handle error (e.g., display error message)
    // }

    addProducts(formData)
    reset()
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
        />
        <input type="text" {...register('composition')} />
        <input type="text" placeholder="price" {...register('price')} />
        <input type="text" {...register('note')} />
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
