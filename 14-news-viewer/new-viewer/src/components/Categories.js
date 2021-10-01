import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
    {name: 'all',
text: 'all'},
{name: 'business',text: 'business'},
{name: 'entertainment', text:'entertainment'},
{name: 'health', text:'health'},
{name: 'science', text:'science'},
{name: 'sports', text:'sports'},
{name: 'technology', text:'technology'}
];

const CategoriesBlock = styled.div`

display: flex;
padding: 1rem;
width: 768px;
margin: 0 auto;
@media screen and (max-width: 768) {
    width: 100%auto;
    overflow-x: auto;
}
`

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    ${props => props.active && css`
        font-weight: 600;
        border-bottom: 2px colod #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #bc9dbb;
        }
    `}

    & + & {
        margin-left: 1rem;
    }
`
const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}

export default Categories;