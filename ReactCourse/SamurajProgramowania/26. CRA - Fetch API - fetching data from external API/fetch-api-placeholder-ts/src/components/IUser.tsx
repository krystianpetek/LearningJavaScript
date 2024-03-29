export interface IUser {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        state: string,
        country: string,
        postcode: string,
        coordinates: {
            latitude: number,
            longitude: number
        },
        timezone: {
            offset: "+9:30",
            description: string
        }
    },
    email: string,
    login: {
        uuid: string,
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string,
    },
    dob: {
        date: Date,
        age: number
    },
    registered: {
        date: Date,
        age: number
    },
    phone: string,
    cell: string
    id: {
        name: string
        value: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    },
    nat: string
}
