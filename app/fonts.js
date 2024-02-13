import localFont from 'next/font/local'

const chillax_medium = localFont({ src: '../public/assets/fonts/Chillax/Medium/Chillax-Medium.woff2' })
const chillax_semibold = localFont({ src: '../public/assets/fonts/Chillax/Semibold/Chillax-Semibold.woff2' })
const rosaline = localFont({ src: '../public/assets/fonts/Rosaline/Rosaline-Regular.woff2' })

export const Chillax_Medium = chillax_medium.className
export const Chillax_Semibold = chillax_semibold.className
export const Rosaline = rosaline.className