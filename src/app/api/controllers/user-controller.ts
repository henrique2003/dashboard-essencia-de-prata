import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse, Encrypter, Token } from '../_utils'
import { IUserRepository } from '../_domain/users'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export class UserController {
  constructor(private readonly _iUserRepository: IUserRepository) { }

  async login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { email, password } = loginSchema.parse(req.body)

    if (!email || !password) {
      return ApiResponse.badRequest(res, 'Email and password are required')
    }

    const user = await this._iUserRepository.findByEmail(email)
    if (!user) {
      return ApiResponse.unhauthorized(res, 'Invalid email or password')
    }

    const isPasswordValid = await Encrypter.compare(password, user.password)
    if (!isPasswordValid) {
      return ApiResponse.unhauthorized(res, 'Invalid email or password')
    }

    return ApiResponse.ok(res, {
      user,
      token: Token.generate(user.id)
    })
  }
}
