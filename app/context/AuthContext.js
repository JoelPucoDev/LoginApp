import { View, Text, Alert } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { deleteUserAuth, getUserAuth, saveUserAuth } from '../helpers/async-storage/AuthStorage';
import { getUsers, registerUser } from '../helpers/async-storage/UsersStorage';


export const AuthContext = createContext();

export const AuthContextProvider = ({
    children,
}) => {

    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserAuth()
            .then(res => {
                console.log('GET USER AUTH', res);
                if (!!res) {
                    console.log('USER :: ', res);
                    getUsers().then(resU => {
                        const arr = resU;
                        const userfind = arr.find(u => u.email === res.email);
                        setUser(userfind);
                        setAuth(true);
                    });
                }
            })
    }, []);

    

    useEffect(() => {
        getUsers()
            .then(res => {
                if (!!res) {
                    setUsers(res);
                }
            })
    }, [auth])



    const login = (userP) => {

        const userfind = users.find(u => u.email === userP.email )

        console.log(userfind);

        if(!userfind){
            Alert.alert('Login', 'No se encuentra este usuario registrado aun.');
            return; 
        }
        if(userP.password != userfind.password){
            Alert.alert('Login', 'Contraseña incorrecta');
            return;
        }
        setUser(userfind);
        saveUserAuth(userfind);
        setAuth(true);
    }

    const logOut = () => {
        setUser({})
        deleteUserAuth()
        setAuth(false);
    }

    const register = async (values) => {
        
        const userfind = users.find(u => u.email === values.email );

        if(userfind){
            Alert.alert('Registro de Usuario', 'Este usuario ya esta registrado.')
        }else{
            registerUser([...users, values]);
            setUsers([...users, values]);
            setUser(values);
            saveUserAuth(values);
            setAuth(true);
        }

    }

    return (


        <AuthContext.Provider
            value={{
                auth,
                logOut,
                login,
                register,

                user,
                users,
            }}
        >
            {
                children
            }
        </AuthContext.Provider>
    )
}
