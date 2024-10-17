import { NextApiResponse } from 'next'

export class ApiResponse {
  static ok<T>(res: NextApiResponse, data: T): void {
    return res.status(200).json(data)
  }

  static badRequest(res: NextApiResponse, message: string): void {
    return res.status(400).json({ message })
  }

  static notFound<T>(res: NextApiResponse, data: T): void {
    return res.status(404).json(data)
  }

  static methodNotAllowed(res: NextApiResponse): void {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  static unhauthorized(res: NextApiResponse, message: string): void {
    return res.status(401).json({ message })
  }

  static serverError(res: NextApiResponse, message: string): void {
    return res.status(500).json({ message })
  }
}
