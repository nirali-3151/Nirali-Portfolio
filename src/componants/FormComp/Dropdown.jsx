import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Select, FormControl, FormHelperText } from "@mui/material";

export default function DropDownComp({
  field,
  value,
  meta,
  label,
  options,
  handleChange,
  ...props
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        fullWidth
        variant="outlined"
        error={meta.touched && !!meta.error}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          {...field}
          value={value || ""}
          label={label}
          onChange={handleChange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          {...props}
          sx={{
            input: {
              color: "white",
            },
            '& .MuiFormHelperText-root': {
              color: 'white',
            },
            '& .MuiFormHelperText-root.Mui-error': {
              color: '#d32f2f',
              marginLeft: '0px !important',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: 'white',
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
              marginLeft: '0px !important',
            },
            input: {
              color: 'var(--primary-heading-color)',
            },
          }}
        >
          {options?.map((o) => (
            <MenuItem key={o.value} value={o}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
        {meta.touched && meta.error && (
          <FormHelperText>{meta.error}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}
