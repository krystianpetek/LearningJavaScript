import React from 'react';
import { IArticle } from '../pages/HomePage';

const Article = (props: IArticle) => {

    const styles = {
        marginTop: "40px",

    }

    return (
        <article style={styles}>
            <h3 style={{ marginBottom: "3px", textTransform: "uppercase" }}>{props.title}</h3>
            <span style={{ marginBottom: "10px", display: "block", fontSize: "12px" }}>{props.author}</span>
            <p style={{ fontSize: "15px", marginRight: "20px" }}>{props.text}</p>
        </article>
    )
};

export default Article;