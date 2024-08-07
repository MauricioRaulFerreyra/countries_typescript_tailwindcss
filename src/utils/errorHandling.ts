export class HttpError extends Error {
  constructor (public status: number, message: string) {
    super(message)
    this.name = 'HttpError'
  }
}

export function handleError (error: any): void {
  if (error instanceof HttpError) {
    console.error(`HTTP Error: ${error.status} - ${error.message}`)
  } else {
    console.error(`General Error: ${error.message}`)
  }
}
