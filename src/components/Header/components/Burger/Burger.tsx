import Button from '../../../Button/Button';
import { FiMenu, FiX } from 'react-icons/fi';
import s from './Burger.module.scss';

interface BurgerProps {}

const Burger: React.FunctionComponent<BurgerProps> = () => {
    const openedMenu = true;

    return <Button className={s.burger}>{<FiMenu />}</Button>;
    // return <Button className={s.burger}>{openedMenu ? <FiX /> : <FiMenu />}</Button>;
};

export default Burger;
