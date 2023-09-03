

const addUserToDb = (username: string, password: string, age: number) => {
    console.log(username, password)
    return "User registration done"
}

interface User {
    id: number,
    uname: string,
    password: string,
    age: number
}

const updateUserData = (objUser: User) => {

    console.log(objUser.uname)

    return "Update Done";
}


export { addUserToDb, updateUserData }