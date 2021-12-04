import React, {FC, useState} from 'react';
import styled from './style.module.scss';
import CustomCheckbox from '../../atoms/CustomCheckbox';
import DropdownPart from '../../atoms/DropdownPart';

const Dropdown: FC = () => {
    const dropdownTitles = ['Active', 'Default'];
    const [allCategories, viewAllCategories] = useState(false);

    const dropElems: string[] =
        ['Woman', 'Man', 'Non-binary', 'Children', 'Transformer', 'ElephantGender', 'T34Gender'];
    const sizes: string[] =
        ['00', '60', '5', '709', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL', '86', '7', 'ZX', 'LARGE'];


    return (
        <div className={styled.dropdown}>
            <div className={styled.dropdown__category}>
                <h1>Category</h1>
                <div className={styled.wrapper}>
                    <DropdownPart partTitle="Default" dropTitle="Categories">
                        {dropElems.map((el, idx) => (
                            idx < 2 && (
                                <CustomCheckbox key={el} id={`cDefault${idx}`} name="cDefault" el={el}/>
                            )
                        ))}
                    </DropdownPart>

                    <DropdownPart partTitle="Active" dropTitle="Categories">
                        {dropElems.map((el, idx) => {
                            const count = allCategories ? dropElems.length : 4;
                            return idx < count && (
                                <CustomCheckbox key={el} id={`cActive${idx}`} name="cActive" el={el}/>
                            );
                        })}
                        {!allCategories && (
                            <small onClick={() => viewAllCategories(!allCategories)} style={{cursor: 'pointer'}}>
                                View all({dropElems.length - 4})
                            </small>
                        )}
                    </DropdownPart>
                </div>
            </div>


            <div className={styled.dropdown__size}>
                <h1>Size</h1>
                <div className={styled.wrapper}>
                    {dropdownTitles.map((title) => (
                        <DropdownPart partTitle={title} dropTitle="Size">
                            <div className={styled.dropdown__sizeBlock}>
                                {sizes.map((el, idx) => (
                                    <div key={el}>
                                        <input type="checkbox" name={el} id={`size${idx + title}`}/>
                                        <label htmlFor={`size${idx + title}`}>
                                            {el}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </DropdownPart>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Dropdown;
