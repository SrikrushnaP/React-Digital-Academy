import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1 id="title" key="h1">Namaste React!</h1>
}

const Title2 = () => {
    return (
        <h2>Namaste React Title2!</h2>
    )
}


const Title3 = () => {
        return <h3>Namaste React Title3!</h3>
}

const Title4 = () => (
    <h4>Namaste React Title4!</h4>
)

const title5 = () => (
    <h5>
        Namaste React Title5!
    </h5>
)

const title6 = (
    <h6>
        Namaste React Title6!
    </h6>
)


const HeaderComponent = () => {
    return (
        <div>
            <Title />
            <Title2 />
            <Title3 />
            <Title4 />
            {title5()}
            {title6}
            <h2>Namaste React Functional Component</h2>
            <h2>Heading tag 2</h2>
        </div>
    )
}


console.log("test babelrc");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);