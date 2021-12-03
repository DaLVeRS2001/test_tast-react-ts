import React, {FC} from 'react';
import styled from './style.module.scss';
import ddArrow from '../../../assets/ddArrow.svg';

const Dropdown: FC = () => {
    
    const dropElems: string[] =
        ['Woman', 'Man', 'Non-binary', 'Children', 'Transformer', 'ElephantGender', 'T34Gender'];
    const sizes: string[] =
        ['00', '60', '5', '709', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL', '86', '7', 'ZX', 'LARGE'];

    return (
        <div className={styled.dropdown}>
            <div className={styled.dropdown__category}>
                <h1>Category</h1>
                <div className={styled.default}>
                    <h2>Default</h2>
                    <div className={styled.categories}>
                        <img src={ddArrow} alt="arrow"/>
                        <span>Categories</span>
                        <div className={styled.categories__items}>
                            {dropElems.map((el) => (
                                <div className={styled.categories__item}>
                                    <input type="checkbox" name="categories"/>
                                    <span>{el}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styled.clear}>
                        <span>Clear (2)</span>
                    </div>
                </div>

                <div className={styled.active}>
                    <h2>Active</h2>
                    <div className={styled.categories}>
                        <img src={ddArrow} alt="arrow"/>
                        <span>Categories</span>
                        <div className={styled.categories__items}>
                            {dropElems.map((el) => (
                                <div className={styled.categories__item}>
                                    <input type="checkbox" name="categories"/>
                                    <span>{el}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styled.clear}>
                        <span>Clear (2)</span>
                    </div>
                </div>
            </div>


            <div className={styled.dropdown__size}>
                <h1>Size</h1>
                <div className={styled.default}>
                    <h2>Default</h2>
                    <div className={styled.size}>
                        <img src={ddArrow} alt="arrow"/>
                        <span>Size</span>
                        <div className={styled.size__items}>
                            {sizes.map((el, idx) => (
                                <div className={styled.size__item}>
                                    {el}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styled.clear}>
                        <span>Clear (2)</span>
                    </div>
                </div>

                <div className={styled.active}>
                    <h2>Active</h2>
                    <div className={styled.size}>
                        <img src={ddArrow} alt="arrow"/>
                        <span>Size</span>
                        <div className={styled.size__items}>
                            {sizes.map((el, idx) => (
                                <div className={styled.size__item}>
                                    {el}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styled.clear}>
                        <span>Clear (2)</span>
                    </div>
                </div>
            </div>

        </div>
    );
};



Dropdown.defaultProps = {};

export default Dropdown;
