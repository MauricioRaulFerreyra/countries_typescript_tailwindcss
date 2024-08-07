import axios, { AxiosInstance, AxiosResponse } from 'axios'

class HttpClient {
  private instance: AxiosInstance

  constructor (baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async get<T> (url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.get(url)
    return response.data
  }

  // Implementa otros métodos (post, put, delete) según sea necesario
}

export default HttpClient
