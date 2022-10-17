import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserAuth = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@auth_user', jsonValue)
    } catch (e) {
        // saving error
    }
}


export const getUserAuth = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@auth_user')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

export const deleteUserAuth = async () => {
    try {
        await AsyncStorage.removeItem('@auth_user')
    } catch (e) {
        // error reading value
    }
}