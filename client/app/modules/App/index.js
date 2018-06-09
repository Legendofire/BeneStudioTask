import React from 'react';
import styled from 'styled-components';
// Loading Modules
import MultiInput from '../../containers/MultiInputContainer';

export default class App extends React.Component {
    render() {
        return (
            <AppWrapper>
                <MultiInput/>
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
