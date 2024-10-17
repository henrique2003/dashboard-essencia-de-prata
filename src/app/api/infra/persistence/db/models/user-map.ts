import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user_tb')
export class UserEntityMap {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
