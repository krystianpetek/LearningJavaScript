// komponent funkcyjny - bezstanowy
const Header = () => {
    return (
        <h1>Pierwszy komponent</h1>
    );
};

// komponent klasowy - stanowy
class Article extends React.Component {
    state = {
        number: 0
    };

    render() {
        return (
            <section>
                <h2>Artykuł</h2>
                {/* komentarz */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consectetur blanditiis tenetur impedit, reprehenderit excepturi modi delectus suscipit veritatis quo deleniti labore? Quaerat mollitia blanditiis in commodi iure sed quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, doloribus. Nemo corrupti nisi aspernatur nulla officiis sequi minima sunt. Voluptas est quia expedita iste vitae ullam animi sint atque explicabo. STATE: {this.state.number}</p>
            </section>
        );
    }
}

const Blog = () => {
    return (
        <>
            <Header />
            <Article />
        </>
    );
}

ReactDOM.render(<Blog />, document.getElementById("root"));