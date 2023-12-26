export const getImage = (imageUrl: string) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME as string
  return `https://res.cloudinary.com/${cloudName}/image/upload/${imageUrl}`
}
