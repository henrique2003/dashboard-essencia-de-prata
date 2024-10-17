// Persistence

import { NextApiRequest, NextApiResponse } from 'next'
import { ApitMethod, ApiResponse } from './_utils'
import { UserRepository } from './infra/repositories/users'
import { UserController } from './controllers'

const userController = new UserController(new UserRepository())

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== ApitMethod.POST) {
    return ApiResponse.methodNotAllowed(res)
  }

  return await userController.login(req, res)
}
