export interface ILoginDetails {
    username: string
    password: string
    stateName: string
    districtName: string
}

export interface ILogin {
    [key: string]: ILoginDetails;
}

export interface IUsers1 {
    lmsUser: ILogin
    cmsUser: ILogin
}
