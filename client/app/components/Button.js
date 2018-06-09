import React, { PropTypes } from 'react';
import styled from 'styled-components';

InputWithLabel.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.string
};

export default function InputWithLabel({
    label, onClick
}) {
    return (
        <ButtonComponent onClick={onClick}> {label} </ButtonComponent>
    );
}


const ButtonComponent = styled.button`
    border: none;
    color: #7B7D87;
    background-color: transparent;
    width: 90px;
    &:hover{
      color: #674DE2;
    }
`;
