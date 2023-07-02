/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, TextField } from '@mui/material'
import { Controller, FieldError } from 'react-hook-form';

type TextFormFieldProps = {
    name: string,
    type: "text" | "number" | "email" | "password",
    label: string,
    value?: string,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    errors?: FieldError;
    control: any;
    fullWidth?: boolean
}

export const TextFormField = ({
    label,
    name,
    value,
    endIcon,
    startIcon,
    type,
    control,
    errors,
    fullWidth = true
}: TextFormFieldProps) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
                return (
                    <TextField
                        {...field}
                        label={label}
                        value={value}
                        fullWidth={fullWidth}
                        type={type}
                        error={!!errors}
                        helperText={errors?.message}
                        InputProps={{
                            startAdornment: (
                                <Grid mr={1}>
                                    {startIcon}
                                </Grid>
                            ),
                            endAdornment: endIcon
                        }}
                    />
                )
            }}
        />
    )
}