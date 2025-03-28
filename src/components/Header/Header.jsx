import ReactLogo from '../../assets/react.svg';
import { Button } from '../Button';
import cls from './Header.module.css';


export const Header = () => {
    return (
        <header className={cls.header}>
            <p>
                <img src={ReactLogo} alt="react logo" />
                <span>React Cards WS Code</span>
            </p>
            <div className={cls.headerButtons}>
                <Button isActive>Add</Button>
                <Button>Login</Button>
            </div>
        </header>
    )
}


