import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'you-should-set-a-secret-key'

export class Token {
  static generate(userId: string): string {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1d' })
  }

  static verify(token: string): { userId: number } {
    return jwt.verify(token, JWT_SECRET) as { userId: number }
  }
}
