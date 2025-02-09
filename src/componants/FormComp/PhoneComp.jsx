import { FormHelperText, TextField } from '@mui/material';
import { ErrorMessage } from 'formik';
import { forwardRef, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';

const customPhoneInput = (props, ref) => {
    return (
        <TextField
            {...props}
            inputRef={ref}
            fullWidth
            label='Phone Number'
            variant='outlined'
            name='phone'
            sx={{
                input: {
                  color: "white",
                },
                '& .MuiFormHelperText-root': {
                  color: 'white',
                },
                '& .MuiFormHelperText-root.Mui-error': {
                  color: '#d32f2f',
                  marginLeft:'0px !important',
                },
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white',
                },
                '& .Mui-focused': {
                  color: 'var(--primary-heading-color)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'var(--primary-heading-color)',
                },
                '& .MuiInput-root': {
                  border: "1px solid var(--primary-heading-color)",
                  borderBottomColor: 'var(--primary-heading-color)',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--primary-heading-color) !important',
                },
                '& .MuiInput-root.Mui-error': {
                  color: '#d32f2f',
                  marginLeft:'0px !important',
                },
                input: {
                  color: 'var(--primary-heading-color)',
                },
              }}
        />
    )
}
const customPhoneInput1 = forwardRef(customPhoneInput)

const PhoneInputFinal = ({ name, error ,setFieldValue}) => {
    const [phone, setPhone] = useState("")
    const onChangePhoneNumber = (data) => {
        console.log("data==============", data);
        setFieldValue(name, data)
    }
    return (
        <div>
            <PhoneInput
                placeholder='Enter phone number'
                value={phone}
                onChange={onChangePhoneNumber}
                inputComponent={customPhoneInput1}
            />

            {
                error && <ErrorMessage name="phone"
                    sx={{
                        color: '#d32f2f', // Red color for error message
                    }} component={FormHelperText} />
            }
        </div>
    )
}

export default PhoneInputFinal
