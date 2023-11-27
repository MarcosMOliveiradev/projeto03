import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryUsersRpository implements UsersRepository {
  public itens: User[] = []

  async findById(id: string) {
    const user = this.itens.find((item) => item.email === id)
    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string) {
    const user = this.itens.find((item) => item.email === email)
    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await {
      id: randomUUID(),
      nome: data.nome,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }
    this.itens.push(user)
    return user
  }
}
