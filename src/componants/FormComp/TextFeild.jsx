import React from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { MdDangerous } from "react-icons/md";

const TextFeildComp = ({ field, meta, isLight, ...props }) => {

  return (
    <div>
      <TextField
        {...field}
        {...props}
        error={meta?.touched && Boolean(meta?.error)}
        helperText={meta?.touched && meta?.error}
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
    </div>
  );
};

export default TextFeildComp;
