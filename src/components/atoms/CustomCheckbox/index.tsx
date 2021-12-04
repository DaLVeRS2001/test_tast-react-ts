import React, {FC} from 'react';
import styled from './styled.module.scss';


interface ICustomCheckbox {
    id: string
    name: string
    el: string
}

const CustomCheckbox: FC<ICustomCheckbox> =
    ({id, name, el}) => {

    return (
        <div className={styled.customCheckbox}>
            <>
                <input type="checkbox" id={id} name={name}/>
                <label htmlFor={id}/>
            </>
            <span>{el}</span>
        </div>
    );
};

export default CustomCheckbox;
