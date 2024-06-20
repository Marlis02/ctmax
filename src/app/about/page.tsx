'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

const About = () => {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  useEffect(() => {
    const data = axios
      .get('http://192.168.123.163:8000/products/categories/')
      .then((res) => {
        setData(res.data)
      })
  }, [])

  console.log(data, 'asdljfakls')

  return (
    <div>
      {data.length > 0 &&
        data.map((item: any) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
    </div>
  )
}

export default About
