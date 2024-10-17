// ZOD
// Repository
// Controller
// Persistence
// Bcrypt
// Token

import { NextApiRequest, NextApiResponse } from 'next'
// import { getConnection } from '../../../lib/database'
// import { User } from '../../../entities/User'
// import { generateToken } from '../../../lib/jwt'
// import bcrypt from 'bcrypt'
import { AlertMethod, ApiResponse } from './_utils'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== AlertMethod.POST) {
    return ApiResponse.methodNotAllowed(res)
  }

  const { email, password } = req.body

  if (!email || !password) {
    return ApiResponse.badRequest(res, 'Email and password are required')
  }

  try {
    // const connection = await getConnection()
    // const userRepository = connection.getRepository(User)

    // const user = await userRepository.findOne({ where: { email } })
    // if (!user) {
    //   return ApiResponse.unhauthorized(res, 'Invalid email or password')
    // }

    // const isPasswordValid = await bcrypt.compare(password, user.password)
    // if (!isPasswordValid) {
    //   return ApiResponse.unhauthorized(res, 'Invalid email or password')
    // }

    // const token = generateToken(user.id)

    return ApiResponse.ok(res, { token: '' })
  } catch (error) {
    return ApiResponse.serverError(res, 'An error occurred during login')
  }
}
