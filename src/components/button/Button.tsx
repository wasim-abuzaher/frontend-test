import React from 'react';
import classes from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'standard' | 'outlined';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    variant = 'standard',
    disabled = false,
    children,
}) => {
    console.log(variant === 'standard');
    return (
        <button
            className={clsx(classes.button, {
                [classes.standard]: variant === 'standard',
                [classes.outlined]: variant === 'outlined',
                [classes.disabled]: disabled,
            })}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
