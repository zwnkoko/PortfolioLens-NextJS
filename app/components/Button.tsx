'use client';

import { ReactNode } from "react";
import { GestureWrapper, GestureWrapperProps } from "./MotionWrapper";

interface ButtonProps extends GestureWrapperProps{
    label: string;
    id: string;
    prefix?: ReactNode,
    suffix?: ReactNode,
    onClick?: () => void;
    variant?: "primary" | "secondary" | "tertiary";
    animation?: boolean,
    href?: string,
  }
  
const Button = ({ label, id, prefix, suffix, onClick, variant = "primary", animation=false, hoverScale, tapScale, href }: ButtonProps) => {
    const variantClasses = 
    {
        primary: "bg-primary hover:bg-primary-hover active:bg-primary-active",
        secondary:"bg-secondary hover:bg-secondary-hover active:bg-secondary-active",
        tertiary: "bg-tertiary hover:bg-tertiary-hover active:bg-tertiary-active",
    };

    const handleClick = () => {
        if(onClick){
            // to be implemented
        }
        if(href){
            window.open(href, '_blank');
        }
    }

    const buttonElement = (
        <button
            type="button"
            className={`font-bold rounded-md py-3 px-4 ${variantClasses[variant]} text-white text-sm lg:text-base size-full`}
            id={id}
            onClick={handleClick}
        >
            <div className="flex items-center justify-around space-x-2">
                {prefix}
                <p>{label}</p>
                {suffix}
            </div>

        </button>
    )
    
    return animation ?
    (
        <GestureWrapper hoverScale={hoverScale} tapScale={tapScale}>
            {buttonElement}
        </GestureWrapper>
    ) : 
    (
        <div>
            {buttonElement}
        </div>
    )
};

export default Button;