import React from 'react'
import classes from './UI.module.css';

export const Container = ({children, ...props}) => {
    return (
    <div className={classes.container} {...props}>
        {children}
    </div>);
};

export const Card = ({children, ...props}) => {
    return (
        <div className={classes.card} {...props}>
            {children}
        </div>
    );
};

export const Form = ({children, ...props}) => {
    return (
        <form className={classes.form} {...props}>
            {children}
        </form>
    );
};

export const Input = React.forwardRef((props, ref) => {
    return <input className={classes.input} ref={ref} {...props} />
});

export const Button = (props) => {
    return (
        <button className={classes.btn} {...props}></button>
    );
};

export const Label = (props) => {
    return (
        <label className={classes.label} {...props}></label>
    );
};

export const Alert = ({children, ...props}) => {
    return (
        <div 
        className={`${classes.alert} ${classes[props.addClass]}`}>
            {children}
        </div>
    );
}

