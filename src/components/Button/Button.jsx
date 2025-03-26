import cls from './Button.module.css';

const isPrimery = true;

export const Button = ({ onClick, children }) => {

    // const {onClick, children} = props;

    console.log(cls);
    
    return <button className={`${cls.btn} ${isPrimery ? cls.btn_primary : ''}`} onClick={onClick}>{children}</button>
}