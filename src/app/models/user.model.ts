export interface User {
    user: {
        email: string;
        username: string;
    }
    token: {
        access_token: string;
    };
}

export interface Register {
    email: string;
    username: string;
    password: string;
}
