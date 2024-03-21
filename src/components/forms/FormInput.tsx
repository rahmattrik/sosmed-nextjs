import React from 'react'
import { HTMLInputTypeAttribute } from "react"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormikHandlers } from 'formik';

interface FormInputProps{
    label: string;
    name: string;
    placeholder: string;
    type: HTMLInputTypeAttribute;
    onChange: FormikHandlers["handleChange"]
    onBlur: FormikHandlers["handleBlur"]
    value: string;
    isError: boolean;
    error: string | undefined
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    name,
    placeholder,
    type,
    onChange,
    onBlur,
    value,
    isError,
    error,

}) => {
  return (
    <div className="felx flex-col space-y-1.5">
        <Label htmlFor={name} className={isError ? "text-red-500" : ""}>
            {label}
        </Label>
        <Input 
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
    { isError ? <div className="text-xs text-red-500">{error}</div> : null }
    </div>
  );
};

export default FormInput;