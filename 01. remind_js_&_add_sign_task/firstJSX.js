console.log(React);
console.log(ReactDOM);

const element = <section><div id='app'>Pierwszy element React</div></section>;

const elementHTML = React.createElement(
    "section",
    null,
    React.createElement(
        "div",
        { 
            id: "app" 
        }
    ),
    "Pierwszy element React"
);
// console.log(elementHTML);

const element3 = (
    <div>
        <p>Tekst</p>
    </div>
);

const element4 = (
    <div>
        <section></section>
        <section></section>
    </div>);
// console.log(element4);

// React.Fragment lub <>
const element5 = (
    <React.Fragment>
        <></>
        <section></section>
        <section></section>
    </React.Fragment>
);
// console.log(element5);

const element6 = (
    <>
    <div id="main" className="red">Tekst</div>
    <section></section>
    <section></section>
    </>
)
console.log(element6);
