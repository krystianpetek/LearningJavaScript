import React from "react";
import Article from "../components/Article";

export interface IArticle {
    id: number,
    title: string,
    author: string,
    text: string
}

const articles: IArticle[] = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos omnis obcaecati, quisquam odio assumenda, eligendi sint fuga itaque non magnam porro. Eum quod voluptate optio saepe. At eveniet nulla veniam?",
    }, {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Jan Nowak",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos omnis obcaecati, quisquam odio assumenda, eligendi sint fuga itaque non magnam porro. Eum quod voluptate optio saepe. At eveniet nulla veniam?"
    }, {
        id: 3,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos omnis obcaecati, quisquam odio assumenda, eligendi sint fuga itaque non magnam porro. Eum quod voluptate optio saepe. At eveniet nulla veniam?"
    }, {
        id: 4,
        title: "Ciemna materia i ciemna energia",
        author: "Jan Nowak",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos omnis obcaecati, quisquam odio assumenda, eligendi sint fuga itaque non magnam porro. Eum quod voluptate optio saepe. At eveniet nulla veniam?"
    }
]

const HomePage = () => {
    const artList = articles.map(article => {
        return <Article key={article.id} {...article} />
    })
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;