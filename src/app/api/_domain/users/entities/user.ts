import { Entity } from '@/app/api/_domain/core';

export class User extends Entity {
  private constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly password: string
  ) {
    super(id)
  }

  static create(email: string, password: string): User {
    // if (!email || !password) {

    // }

    return new User('', email, password)
  }

  static readFromContext(id: string, email: string, password: string): User {
    return new User(id, email, password)
  }
}
