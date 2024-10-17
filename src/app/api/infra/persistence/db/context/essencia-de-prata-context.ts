import { DataSource } from 'typeorm'
import { UserEntityMap } from '../models/user-map'

class Database {
  private static instance: Database
  private dataSource: DataSource | null = null

  private constructor() { }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  public async getDataSource(): Promise<DataSource> {
    if (!this.dataSource) {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [UserEntityMap],
        synchronize: true
      })

      await this.dataSource.initialize()
    }

    return this.dataSource
  }
}

export default Database
