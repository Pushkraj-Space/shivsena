import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
    children,
    to,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    fullWidth = false,
    type = 'button',
    icon,
    iconPosition = 'right',
    ...props
}) => {
    const buttonClasses = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`;

    const buttonContent = (
        <>
            {icon && iconPosition === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>}
            <span className="btn-text">{children}</span>
            {icon && iconPosition === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
        </>
    );

    const buttonMotion = {
        rest: {
            scale: 1,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        },
        hover: {
            scale: 1.03,
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
        },
        tap: {
            scale: 0.98,
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
        }
    };

    // If it's a link to an internal route
    if (to) {
        return (
            <motion.div
                className="btn-wrapper"
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={buttonMotion}
            >
                <Link to={to} className={buttonClasses} {...props}>
                    {buttonContent}
                </Link>
            </motion.div>
        );
    }

    // If it's a link to an external URL
    if (href) {
        return (
            <motion.div
                className="btn-wrapper"
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={buttonMotion}
            >
                <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
                    {buttonContent}
                </a>
            </motion.div>
        );
    }

    // If it's a button
    return (
        <motion.button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            type={type}
            initial="rest"
            whileHover={!disabled ? "hover" : "rest"}
            whileTap={!disabled ? "tap" : "rest"}
            variants={buttonMotion}
            {...props}
        >
            {buttonContent}
        </motion.button>
    );
};

export default Button;