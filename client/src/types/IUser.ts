export default interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    role: 'ADMIN' | 'USER' | 'GUEST';
    isAuth?: boolean;
}
