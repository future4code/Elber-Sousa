import { SignupInputDTO } from '../entities/User';
import { IdGenerator } from '../services/idGenerator';
import { hash } from '../services/HashManager';
import { UserDatabase } from '../data/UserDatabase';

export class UserBusiness {
  async signup(input: SignupInputDTO): Promise<string> {
    try {
      if (!input.name || !input.email || !input.password) {
        throw new Error('"name", "email" and "password" must be provided');
      }

      const idGenerator = new IdGenerator();

      const id: string = idGenerator.generateId();

      const hashManager = new hash();

      const cypherPassword = await hashManager.hash(input.password);

      const user: User = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword
      }

      const userDatabase = new UserDatabase()
      await userDatabase.insertUser(user)

      const tokenManager = new TokenManager()
      const token: string = tokenManager.generateToken({ id });

      return token;

    } catch (error) {
      throw new Error(error.message);
    }
  }
}
