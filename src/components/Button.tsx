import React, { HTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'


const classNames = cva('border h-12 rounded-full px-6 font-medium', {
    variants: {
        variant: {
            primary: 'bg-lime-400 text-neutral-950 border-lime-400',
            secondary: 'border-white text-white bg-transparent'
        }
    }
})

const Button = (props: {variant: "primary" | "secondary"} & HTMLAttributes<HTMLButtonElement>) => {
    const { variant, className, ...otherProps } = props;

    return (
        <button 
            className={classNames({ variant, className })}
            { ...otherProps }
        />
    )
}

export default Button