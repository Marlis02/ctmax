type Links = {
  id: number
  title: string
}

export const navLinks: Links[] = [
  {
    id: 1,
    title: 'Пицца',
  },
  {
    id: 2,
    title: 'Комбо',
  },
  {
    id: 3,
    title: 'Закуски',
  },
  {
    id: 4,
    title: 'Десерты',
  },
  {
    id: 5,
    title: 'Напитки',
  },
  {
    id: 6,
    title: 'Кофе',
  },
  {
    id: 7,
    title: 'Соусы',
  },
  {
    id: 8,
    title: 'Другие товары',
  },
]

export interface ICardData {
  id: number
  img: string
  title: string
  desc: string
  price: number
}

export const cardData: ICardData[] = [
  {
    id: 1,
    img: '/images/pizz.png',
    title: 'Пепперони Классическая',
    desc: 'Пепперони, томатный соус, моцарелла, орегано',
    price: 600,
  },
  {
    id: 2,
    img: '/images/pizz.png',
    title: 'Маргарита',
    desc: 'Томатный соус, моцарелла, базилик',
    price: 500,
  },
  {
    id: 3,
    img: '/images/pizz.png',
    title: 'Гавайская',
    desc: 'Курица, ананасы, моцарелла, томатный соус',
    price: 700,
  },
  {
    id: 4,
    img: '/images/pizz.png',
    title: 'Четыре Сыра',
    desc: 'Моцарелла, горгонзола, пармезан, дорблю, томатный соус',
    price: 650,
  },
  {
    id: 5,
    img: '/images/pizz.png',
    title: 'Вегетарианская',
    desc: 'Томаты, болгарский перец, грибы, оливки, моцарелла, томатный соус',
    price: 600,
  },
  {
    id: 6,
    img: '/images/pizz.png',
    title: 'Барбекю',
    desc: 'Курица, бекон, соус барбекю, красный лук, моцарелла',
    price: 700,
  },
  {
    id: 7,
    img: '/images/pizz.png',
    title: 'Мясная',
    desc: 'Пепперони, ветчина, бекон, говядина, моцарелла, томатный соус',
    price: 750,
  },
  {
    id: 8,
    img: '/images/pizz.png',
    title: 'Морская',
    desc: 'Креветки, мидии, кальмары, томатный соус, моцарелла',
    price: 800,
  },
  {
    id: 9,
    img: '/images/pizz.png',
    title: 'Дьябло',
    desc: 'Пепперони, острая колбаса, халапеньо, красный лук, моцарелла, томатный соус',
    price: 700,
  },
  {
    id: 10,
    img: '/images/pizz.png',
    title: 'С грибами',
    desc: 'Шампиньоны, вешенки, белые грибы, моцарелла, томатный соус',
    price: 650,
  },
  {
    id: 11,
    img: '/images/pizz.png',
    title: 'Пепперони с артишоками',
    desc: 'Пепперони, артишоки, томаты, моцарелла, томатный соус',
    price: 720,
  },
  {
    id: 12,
    img: '/images/pizz.png',
    title: 'Прошутто',
    desc: 'Прошутто, руккола, пармезан, моцарелла, томатный соус',
    price: 750,
  },
]
