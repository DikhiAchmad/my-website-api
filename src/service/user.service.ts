class UserService {

    getData = (message: string): string => {
        return `Hello ${message}`
    }

    greeting = () => {
        console.log('Hello')
    }

}

export default UserService;