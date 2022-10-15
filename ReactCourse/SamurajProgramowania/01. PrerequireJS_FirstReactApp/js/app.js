class App extends React.Component {
    state = {
        counter: 0,
    };
    render() {
        return (
            <div>
                <h1>Hello!</h1>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById("root"));

const classBig = "big";

const handleClick = () => alert("kliknął");

const text = "Stopka...";

const largeText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error amet illum molestias, facere obcaecati commodi! Aliquam culpa sint quo voluptates numquam obcaecati ab laboriosam, debitis optio ratione eius dolorum.";

const header = (
    <h1 className="title">Witaj na stronie!</h1>
);

const main = (
    <div>
        <h1 onClick={handleClick} className="red">Pierwszy artykuł</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo molestias? Fugit dolorum ab totam tenetur. Temporibus odit delectus velit aliquam eum officia, earum vel nihil esse? Accusantium, corrupti quibusdam.</p>
    </div>
);

const footer = (
    <footer>
        <p className={classBig}>{text}</p>
        {largeText}
    </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
