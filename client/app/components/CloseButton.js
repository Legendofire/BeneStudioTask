import React, { PropTypes } from 'react';
import styled from 'styled-components';

CloseButton.propTypes = {
    onClick: PropTypes.func
};

export default function CloseButton({ onClick }) {
    return (
        <ButtonComponent onClick={onClick}>
            <DeleteIcon viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </DeleteIcon>
        </ButtonComponent>
    );
}


const ButtonComponent = styled.button`
    margin-top: 30px;
    height: 60px;
    width: 60px;
    border: none;
    background-color: white;
`;

const DeleteIcon = styled.svg`
    stroke: black;
    fill: transparent;
    stroke-width: 3;
    ${ButtonComponent}:hover &{
      stroke: #674DE2;
      stroke-width: 5;
    }
`;
