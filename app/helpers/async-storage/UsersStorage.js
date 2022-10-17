import AsyncStorage from '@react-native-async-storage/async-storage';

export const registerUser= async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@users', jsonValue)
    } catch (e) {
        // saving error
    }
}


export const getUsers = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@users')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}