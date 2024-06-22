import { IProduct } from '@/types/types'

type Links = {
  id: string
  title: string
}

export const navLinks: Links[] = [
  {
    id: '1',
    title: 'Пицца',
  },
  {
    id: '2',
    title: 'Салаты',
  },
  {
    id: '3',
    title: 'Напитки',
  },
  {
    id: '4',
    title: 'Десерты',
  },
  {
    id: '5',
    title: 'Закуски',
  },
  {
    id: '6',
    title: 'Кофе',
  },
  {
    id: '7',
    title: 'Соусы',
  },
  {
    id: '8',
    title: 'Другие товары',
  },
  {
    id: '',
    title: 'Все',
  },
]

export interface ICardData {
  id: number
  img: string
  title: string
  note: string
  price: number
  category_title: string
}

// id: number
//   title: string
//   composition?: string
//   price: number
//   image: string
//   note: string
//   category: number
//   count?: number

export const cardData: IProduct[] = [
  {
    id: 1,
    image: '/images/pizz.png',
    title: 'Пепперони Классическая',
    note: 'Пепперони, томатный соус, моцарелла, орегано',
    price: 600,
    category_title: 'Пицца',
  },
  {
    id: 2,
    image: '/images/pizz.png',
    title: 'Маргарита',
    note: 'Томатный соус, моцарелла, базилик',
    price: 500,
    category_title: 'Пицца',
    composition: '',
  },
  {
    id: 3,
    image: '/images/pizz.png',
    title: 'Гавайская',
    note: 'Курица, ананасы, моцарелла, томатный соус',
    price: 700,
    category_title: 'Пицца',
    composition: '',
  },
  {
    id: 4,
    image: '/images/pizz.png',
    title: 'Четыре Сыра',
    note: 'Моцарелла, горгонзола, пармезан, дорблю, томатный соус',
    price: 650,
    category_title: 'Салаты',
    composition: '',
  },
  {
    id: 5,
    image: '/images/pizz.png',
    title: 'Вегетарианская',
    note: 'Томаты, болгарский перец, грибы, оливки, моцарелла, томатный соус',
    price: 600,
    category_title: 'Пицца',
    composition: '',
  },
  {
    id: 6,
    image: '/images/pizz.png',
    title: 'Барбекю',
    note: 'Курица, бекон, соус барбекю, красный лук, моцарелла',
    price: 700,
    category_title: 'Салаты',
    composition: '',
  },
  {
    id: 7,
    image: '/images/pizz.png',
    title: 'Мясная',
    note: 'Пепперони, ветчина, бекон, говядина, моцарелла, томатный соус',
    price: 750,
    category_title: 'Салаты',
    composition: '',
  },
  {
    id: 8,
    image: '/images/pizz.png',
    title: 'Морская',
    note: 'Креветки, мидии, кальмары, томатный соус, моцарелла',
    price: 800,
    category_title: 'Напитки',
    composition: '',
  },
  {
    id: 9,
    image: '/images/pizz.png',
    title: 'Дьябло',
    note: 'Пепперони, острая колбаса, халапеньо, красный лук, моцарелла, томатный соус',
    price: 700,
    category_title: 'Напитки',
    composition: '',
  },
  {
    id: 10,
    image: '/images/pizz.png',
    title: 'С грибами',
    note: 'Шампиньоны, вешенки, белые грибы, моцарелла, томатный соус',
    price: 650,
    category_title: 'Напитки',
    composition: 'Салаты',
  },
  {
    id: 11,
    image: '/images/pizz.png',
    title: 'Пепперони с артишоками',
    note: 'Пепперони, артишоки, томаты, моцарелла, томатный соус',
    price: 720,
    category_title: 'Пицца',
    composition: 'Напитки',
  },
  {
    id: 12,
    image: '/images/pizz.png',
    title: 'Прошутто',
    note: 'Прошутто, руккола, пармезан, моцарелла, томатный соус',
    price: 750,
    category_title: 'Пицца',
    composition: 'Напитки',
  },
]
