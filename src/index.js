import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from './Button';

//Styled Components

const WrapperDiv = styled.div`
   font-family: sans-serif;
   text-align; center;
`;

const BlueH1 = styled.h1`
   color: #2F4F4F;
`;

function App() {
    return (
        <wrapperDiv>
            <BlueH1>Stars Are Awesome</BlueH1>
            <Button type="Primary">Primary</Button>
            <Button type="success">success</Button>
            <Button type="danger">danger</Button>
            <Button type="warning">warning</Button>
            
        </wrapperDiv>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



