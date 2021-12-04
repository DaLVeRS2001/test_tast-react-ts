import React, {FC} from 'react';
import styled from './styled.module.scss';


interface ICustomCheckbox {
    id: string
    name: string
    el: string
    // eslint-disable-next-line react/require-default-props
    type?: string
}

const CustomCheckbox: FC<ICustomCheckbox> =
    ({id, name, el, type = 'checkbox'}) => {

    return (
        <div className={styled.customCheckbox}>
            <>
                <input type={type} id={id} name={name}/>
                <label htmlFor={id}/>
            </>
            <span>{el}</span>
        </div>
    );
};

export default CustomCheckbox;
