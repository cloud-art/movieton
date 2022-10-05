import { FiMenu, FiX } from 'react-icons/fi';
import s from './Burger.module.scss';

interface BurgerProps {}

const Burger: React.FunctionComponent<BurgerProps> = () => {
    const openedMenu = true;

    return <button className={s.burger}>{openedMenu ? <FiX /> : <FiMenu />}</button>;
};

export default Burger;
