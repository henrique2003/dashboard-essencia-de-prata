import { IUserRepository, User } from '@/app/api/_domain/users'
import Database from '../../persistence/db/context/essencia-de-prata-context'
import { UserEntityMap } from '../../persistence/db/models/user-map'

export class UserRepository implements IUserRepository {
  private db: Database

  constructor() {
    this.db = Database.getInstance()
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const dataSource = await this.db.getDataSource()
      const userRepository = dataSource.getRepository(UserEntityMap)

      const user = await userRepository.findOneBy({ email })
      if (!user) {
        return null
      }

      return User.readFromContext(user.id, user.email, user.password)
    } catch (error) {
      return null
    }

    return null
  }
}
