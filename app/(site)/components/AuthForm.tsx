'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/input";
import { data } from "autoprefixer";


import { useCallback, useState } from "react";

import {BsGithub} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import AuthSocialButton from "./AuthSocialButton";

type variant = 'LOGIN'| 'REGISTER';

const AuthForm = () =>{
    const [variant,setVariant]=useState<variant>('LOGIN');
    const [isLoading,setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=>
    { 
        if (variant=='LOGIN'){
            setVariant('REGISTER');
        }else{
            setVariant('LOGIN');
        }
    },[variant]);
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    }=useForm<FieldValues>({
        defaultValues: {
        name: '',
        email:'',
        password:''
        }
    })
const onSubmit : SubmitHandler<FieldValues>=(data)=>{
    setIsLoading(true);

    if (variant=='REGISTER'){
        //Axios register
}
    if (variant=='LOGIN'){
        //NextAuth signin
    }
}

const socialAction = (action:string)=>{
    setIsLoading(true);
    //next Auth social sign in
}
    return (
        <div
        className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md">


        <div
        className="
        bg-white
        px-4
        py-8
        shadow   
        sm:rounded-lg
        sm:px-10">   
        {/* --tw-shadow: This is a CSS custom property (variable) that defines the values for a generic shadow effect. It specifies two shadow layers: the first layer has a spread of 3px and the second layer has a spread of 2px, both with the color rgb(0 0 0 / 0.1) (10% opacity black). This creates a subtle shadow effect.--tw-shadow-colored: This is another custom property that defines a shadow effect similar to --tw-shadow, but it uses the custom property --tw-shadow-color to determine the shadow color.box-shadow: This is the CSS property that applies the shadow effect to an element. It uses several custom properties (--tw-ring-offset-shadow, --tw-ring-shadow, and --tw-shadow) to set the shadow properties. If these custom properties are not defined, it falls back to 0 0 #0000, effectively removing any shadow. */}

        <form
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}>

        {variant =='REGISTER' && (
            <Input 
                id='name' 
                label='Name' 
                register={register} 
                errors={errors}/>
        )}

        <Input 
            id='email' 
            label='Email Address' 
            register={register} 
            errors={errors}/>

        <Input 
            id='password' 
            label='Password' 
            register={register} 
            errors={errors}/>
        
        <div>
            <Button
                disabled={isLoading}
                fullWidth
                type='submit'
                >

                {variant =='LOGIN' ? 'sign-in' : 'Register'}
            </Button>
        </div>
        </form>
        <div className="mt-6">
            <div className="relative">
                <div className="absolute
                inset-0
                flex
                items-center">
                    <div className="w-full 
                    border-t
                    border-gray-300"/>
                        </div>
                        <div className="
                        relative 
                        flex 
                        justify-center 
                        text-sm">
                            <span className="bg-white 
                            px-2
                            text-gray-500">
                                or continue
                            </span>
                </div>
            </div>
            <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                        icon={BsGithub}
                        onClick ={() => socialAction('github')}/>

                        <AuthSocialButton
                        icon={BsGoogle}
                        onClick ={() => socialAction('google')}/>
            </div>
        </div>
        <div className="
        flex
        gap-2
        justify-center
        text-sm
        mt-6
        px-2
        text-gray-500">
            <div>
                {variant=='LOGIN'? 'New to Messemger':'Already have an account?'}    
            </div>
            <div
            onClick={toggleVariant}
            className="underline cursor-pointer">
                {variant=='LOGIN'? 'Create an account': 'login'}
            </div>

        </div>
    </div>
</div>
    );
}
export default AuthForm