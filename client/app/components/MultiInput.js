import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';

import InputWithLabel from '../components/InputWithLabel';
import CloseButton from '../components/CloseButton';
import Button from '../components/Button';

export default class MultiInput extends Component {
    render() {
        return (
            <MultiInputWrapper>
                <Text>{this.props.text}</Text>
                <MultiInputItemsWrapper>
                    {
                        this.props.items.map((item, index) => (
                            <MultiInputItemWrapper key={index}>
                                <InputWithLabel {...item}
                                    onClick={() => { this.props.focusItem(index); }}
                                    onChange={(e) => { this.props.updateItem(index, e.target.value); }}
                                    onEnter={item.label === '' ?
                                        (e) => { if (e.charCode === 13) { this.props.addItem(); } } :
                                        null}/>
                                {
                                    item.value === '' && item.label === '' ?
                                        <EmptyButton/> :
                                        <CloseButton onClick={() => { this.props.deleteItem(index); }} />
                                }
                            </MultiInputItemWrapper>
                        ))
                    }
                </MultiInputItemsWrapper>
                <MultiInputFooter>
                    <Button label={'Save'} onClick={() => { this.props.onChange(this.props.items); }}/>
                    <Button label={'Cancel'} />
                </MultiInputFooter>
            </MultiInputWrapper>
        );
    }
}

MultiInput.propTypes = {
    text: PropTypes.string,
    items: PropTypes.array,
    focusItem: PropTypes.func,
    updateItem: PropTypes.func,
    addItem: PropTypes.func,
    deleteItem: PropTypes.func,
    submitMultiInput: PropTypes.func
};

const MultiInputWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 15%;
    @media (max-width: 1024px){
      grid-template-columns: 1fr;
      grid-template-rows: 100px auto 15%;
    }
`;

const Text = styled.h1`
    box-sizing: border-box;
    padding: 20px;
`;

const MultiInputItemsWrapper = styled.div`
    box-sizing: border-box;
    height: 48vh;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    @media (max-width: 1024px){
      height: 30vh;
    }
`;

const MultiInputItemWrapper = styled.div`
    margin-right: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
`;

const EmptyButton = styled.div`
    width: 60px;
    height: 60px;
`;

const MultiInputFooter = styled.div`
    box-sizing: border-box;
    grid-column: 1/3;
    grid-row: 2/3;
    @media (max-width: 1024px){
      grid-column: auto;
      grid-row: auto;
    }
    border-top: 2px solid #A4A4A4;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    background-color: #E9EBFF;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
`;
