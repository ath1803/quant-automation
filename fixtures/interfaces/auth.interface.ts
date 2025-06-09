export interface ILoginData {
    username: string
    password: string
    stateName: string
    districtName: string
}

export interface IUserData {
    validLogin: ILoginData
    invalidLogin: ILoginData
    EmptyLogin: ILoginData
}

export interface IUsers {
    [key: string]: IUserData;
}

export interface IAuthenticationTestData {
    lmsUsers: IUsers
}