interface IUser {
    id: Number,
    username: String,
    email: String,
    password?: String,
    name: String,
    surname: String,
    role: "ADMIN" | "USER" | "GUEST",
    isAuth: boolean,
};

export default IUser