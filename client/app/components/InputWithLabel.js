import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

InputWithLabel.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    isFocused: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onEnter: PropTypes.func
};

export default function InputWithLabel({
    label, value, isFocused, onClick, onChange, onEnter
}) {
    return (
        <InputWithLabelWrapper>
            <InputWithLabelLabel isFocused={isFocused}>{label}</InputWithLabelLabel>
            <InputWithLabelInput
                placeholder={label === '' ? 'Item Label' : 'Item Value'}
                value={value}
                isFocused={isFocused}
                onClick={onClick}
                onChange={onChange}
                onKeyPress={onEnter}/>
        </InputWithLabelWrapper>
    );
}


const InputWithLabelWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    ${props => props.label === '' && css`
        width: calc(100% - 60px);
    `}
`;

const InputWithLabelLabel = styled.h3`
    width: 100%;
    font-size: 1.5rem;
    margin: 0px;
    margin-bottom: 5px;
    color: #A4A4A4;
    ${props => props.isFocused && css`
      color: #674DE2
    `}
`;

const InputWithLabelInput = styled.input`
    width: 100%;
    border: none;
    color: black;
    font-size: 2rem;
    border-bottom: 2px solid #A4A4A4;
    padding-top: 4px;
    padding-bottom: 4px;
    ${props => props.isFocused && css`
        border-bottom: 3px solid #674DE2;
    `}
    ${props => props.label === '' && css`
        color: #A4A4A4;
    `}
`;
