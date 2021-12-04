import React, {FC, useState} from 'react';
import styled from './styled.module.scss';
import ddArrow from '../../../assets/ddArrow.svg';


interface IDropdownPart {
    partTitle: string
    dropTitle: string
}

const DropdownPart: FC<IDropdownPart> =
    ({partTitle, dropTitle, children}) => {

    const [dropped, drop] = useState(false);
    
    return (
        <div className={styled.dropdownPart}>
            <h2>{partTitle}</h2><hr/>

                <div className={styled.dropdownPart__drop}>
                    <div className={styled.dropdownPart__dropSwitcher}>
                        <div
                            onClick={() => drop(!dropped)}
                            className={styled.listTitle}
                        >
                            <img
                                src={ddArrow}
                                style={dropped ? {transform: 'scale(-1)'} : {}}
                                alt="arrow"
                            />
                            <h4>{dropTitle}</h4>
                        </div>
                        <div className={styled.dropdownPart__clear}>
                            Clear (2)
                        </div>
                    </div>
                    <div
                        className={styled.dropdownPart__list}
                        hidden={!dropped}
                    >
                            {children}
                    </div>
                </div>
        </div>
    );
};


export default DropdownPart;
