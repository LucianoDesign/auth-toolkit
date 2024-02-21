import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email invalido"
    }),
    password: z.string().min(6,{
        message: "Se necesita contraseña"
    }),
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email invalido"
    }),
    password: z.string().min(6,{
        message: "Minimum 6 caracters required"
    }),
    name: z.string().min(1, {
        message: "Name is required" 
    })
});