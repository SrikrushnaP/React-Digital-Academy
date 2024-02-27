const heading1 = React.createElement("h1", {
    id: "title1"
}, "Namaste React Title 1!");
const heading2 = React.createElement("h2", {
    id: "title2"
}, "Namaste React Title 2!");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
