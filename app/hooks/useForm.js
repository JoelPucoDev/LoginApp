import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default useForm = (initValues) => {

    const [values, setValues] = useState(initValues);

    const onChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        })
    }

    const onReset = () => {
        setValues(initValues);
    }

    return {
        values,
        onChange,
        onReset
    }

}

