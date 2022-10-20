import Button from '../../../Button/Button';

import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { FiMenu, FiX } from 'react-icons/fi';
import s from './Burger.module.scss';
import { useState } from 'react';

interface BurgerProps {}

const Burger: React.FunctionComponent<BurgerProps> = () => {
    const { openedMenu } = useTypedSelector((state) => state.toggleReducer);
    const { toggleMenu } = useActions();

    const handleOpen = () => toggleMenu(!openedMenu);

    return (
        <Button className={s.burger} onClick={handleOpen}>
            {openedMenu ? <FiX /> : <FiMenu />}
        </Button>
    );
};

export default Burger;
