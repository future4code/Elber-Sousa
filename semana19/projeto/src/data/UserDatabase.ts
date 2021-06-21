import { baseDatabase } from './BaseDatabase';
import { User } from '../entities/User';

export class UserDatabase extends baseDatabase {
  async insertUser(user: User) {
    try {
      await this.connection('labook_users').insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
