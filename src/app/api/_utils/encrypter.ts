import bcrypt from 'bcrypt'

export class Encrypter {
  static async encrypt(text: string): Promise<string> {
    return await bcrypt.hash(text, 10)
  }

  static async compare(text: string, compareText: string): Promise<boolean> {
    return await bcrypt.compare(text, compareText)
  }
}
