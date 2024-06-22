// export const scrollTo = (el: number) => {
//   // Прокручивает страницу до высоты 500 пикселей
//   window.scrollTo({
//     top: el,
//     behavior: 'smooth', // Делает прокрутку плавной
//   })
// }

// const { footerRef } = useScrollStore() // Используем scrollStore

// export const handleNavClick = (link: any) => {
//   if (link === 'footer' && footerRef) {
//     footerRef?.current?.scrollIntoView({ behavior: 'smooth' })
//   }
// }

export const groupProductsByCategory = (products: any) => {
  return products.reduce((acc: any, product: any) => {
    const { category } = product
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(product)
    return acc
  }, {})
}
