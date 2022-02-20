import React from 'react';
import './button.css';
import clsx from 'clsx';

interface ButtonProps {
    onClick: () => void;
    variant?: 'standard' | 'outlined';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    variant = 'standard',
    disabled = false,
    children,
}) => {
    return (
        <button
            className={clsx('button', {
                'button-standard': variant === 'standard',
                'button-outlined': variant === 'outlined',
                'button-disabled': disabled,
            })}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
