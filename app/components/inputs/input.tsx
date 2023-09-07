'use Client';

import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'

interface InputProps{
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldErrors;
    disabled?: boolean;

}
const Input:React.FC<InputProps>=({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled,
}) =>{
    return (
        <div>
            <label
                className="
                block
                text-sm
                font-medium
                leading-6
                text-gray-900"
                htmlFor={id}
                >
                {label}
            </label>
            <div className="mt-2">
            <input
            id={id}
            type={type}
            autoComplete={id}
            disabled={disabled}
            {...register(id,{required})}
            className={clsx(
                'form-input',
                'block',
                'w-full',
                'rounded-md',
                'border-0',
                'py-1.5',
                'text-gray-900',
                'shadow-sm',
                'ring-1',
                'ring-inset',
                'ring-gray-300',
                'placeholder:text-gray-400',
                'focus:ring-2',
                'focus:ring-inset',
                'focus:ring-sky-600',
                'sm:text-sm',
                'sm:leading-6',
                errors[id] && 'focus:ring-rose-500',
                disabled && 'opacity-50 cursor-default'
              )}
              
            />
            {/* errors[id] && 'focus:ring-rose-500': This part adds the 'focus:ring-rose-500' class if there are errors for the input. This class could be used to highlight the input with a specific color when it has errors.disabled && 'opacity-50 cursor-default': This part adds the 'opacity-50 cursor-default' classes if the input is disabled. These classes might reduce the opacity and change the cursor style to indicate that the input is not clickable when disabled. */}

            </div>
        </div>
    )
}
export default Input