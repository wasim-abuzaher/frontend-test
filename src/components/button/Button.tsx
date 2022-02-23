import React from 'react';
import styles from './Button.module.css';
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
            className={clsx(styles.button, {
                [styles.standard]: variant === 'standard',
                [styles.outlined]: variant === 'outlined',
                [styles.disabled]: disabled,
            })}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
