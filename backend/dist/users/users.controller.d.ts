import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: {
        username: string;
        password: string;
        role: 'STAFF' | 'ADMIN';
    }): Promise<import("./entities/user.entity").User>;
}
