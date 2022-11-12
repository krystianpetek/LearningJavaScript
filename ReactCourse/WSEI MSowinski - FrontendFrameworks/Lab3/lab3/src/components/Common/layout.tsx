import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Menu } from "./menu";

const Wrapper = styled.div`
    width: 100%;
`;

const Content = styled.div`
    width: 1024px;
    margin: 0 auto;
`

interface IProps {
    children: React.ReactNode;
}

export const Layout: FC<IProps> = (props) => {
    const [users, setUsers] = useState<{}[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(usersArr => {
                console.log(usersArr);
                setUsers(usersArr);
            })
    }, []);

    return (
        <Wrapper>
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
            <Menu param1={"kdsdawkadoawo"} />
            <Content>
                {props.children}
                {/* {users.map(element => <div>{element}</div>)} */}
            </Content>
        </Wrapper>
    )
}
