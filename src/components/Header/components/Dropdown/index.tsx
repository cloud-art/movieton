import classNames from 'classnames';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import s from './index.module.scss';

interface DropdownProps {}

const Dropdown: React.FunctionComponent<DropdownProps> = () => {
    const items = [
        {
            href: '',
            text: 'Гавная'
        },
        {
            href: '',
            text: 'Полнометражки'
        },
        {
            href: '',
            text: 'Сериалы'
        },
        {
            href: '',
            text: 'Избранное'
        }
    ];

    const { openedMenu } = useTypedSelector((state) => state.toggleReducer);
    return (
        <div className={classNames(s.dropdown, openedMenu && s.dropdownOpen)}>
            <div className={classNames(s.list)}>
                {items.map((el) => {
                    return (
                        <li key={el.text} className={s.item}>
                            {el.text}
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default Dropdown;
