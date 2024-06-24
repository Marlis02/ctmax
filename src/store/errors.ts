export const responseErrors = (response: any) => {
  let errorMessage = 'An unknown error occurred'

  if (response.status >= 400 && response.status < 500) {
    errorMessage = 'Client error occurred'
  } else if (response.status >= 500) {
    errorMessage = 'Server error occurred'
  }

  return errorMessage
}
