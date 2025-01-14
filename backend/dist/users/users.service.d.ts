import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: {
        username: string;
        password: string;
        role: 'STAFF' | 'ADMIN';
    }): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User | null>;
}
