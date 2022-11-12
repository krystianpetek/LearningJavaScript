import { FC } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { SomeSpan } from "./components";
import { stackColor } from "./../styledHelpers/colors";

const Wrapper = styled.div`
border: 10px solid ${stackColor.black};
`
const SecondSpan = styled(SomeSpan)`
    border: 3px solid yellow;
    &:hover{
    }
`;

const ExampleDiv = styled.div<{ isActive: boolean }>`
    background: yellow;
    ${props => props.isActive && css`
        background: blue;
        `}
`;

interface IProps {
    param1: string;
}

export const Menu: FC<IProps> = (props) => {
    return (
        <Wrapper>
            {props.param1}
            <SecondSpan></SecondSpan>
            <ExampleDiv isActive>jakiś div</ExampleDiv>
            <ExampleDiv isActive={false}>jakiś div</ExampleDiv>
            <Link to="posts">Posts</Link>
            <Link to="/">Home</Link>
        </Wrapper>
    )
}