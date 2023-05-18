import React from 'react'

interface SampleArrowProps {
    onClick: () => void;
    classname?: string;
}

const SampleArrow: React.FC<SampleArrowProps> = ({classname}) => {
  return (
    <div>SampleArrow</div>
  )
}

export default SampleArrow