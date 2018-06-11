import React, { Component } from 'react';
import styled from 'styled-components';
// Loading Modules
import MultiInput from '../../containers/MultiInputContainer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(itemsArray) {
        console.log(itemsArray.slice(0, itemsArray.length - 1)
            .map(item => item.value));
    }

    render() {
        return (
            <AppWrapper>
                <MultiInput
                    items={[
                        {
                            label: "label1",
                            value: "value1"
                        }
                    ]}
                    onChange={this.onChange}/>
            </AppWrapper>
        );
    }
}

const AppWrapper = styled.div`
    box-sizing: border-box;
    height: 60%;
    width: 70%;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
    position: absolute;
    top: 20%;
    left: 15%;
`;
