import { Entity } from '@/app/api/_domain/core';

export class User extends Entity {
  private constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly password: string
  ) {
    super(id)
  }

  static create(id: number, email: string, password: string): User {
    // if (!email || !password) {

    // }

    return new User(id, email, password)
  }
}
