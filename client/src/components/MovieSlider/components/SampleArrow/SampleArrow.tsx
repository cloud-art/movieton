import React from 'react'
import Button from '../../../UI/Button/Button';
import { FiChevronLeft } from 'react-icons/fi';
import classNames from 'classnames';

interface SampleArrowProps {
    onClick: () => void;
    classname?: string;
}

const SampleArrow: React.FC<SampleArrowProps> = ({classname, onClick}) => {
  return (
    <Button className={classname} onClick={onClick}>
        <FiChevronLeft/>
    </Button>
  )
}

export default SampleArrow