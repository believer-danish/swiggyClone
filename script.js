const heading = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child1" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
  React.createElement("div", { class: "child2" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(heading);
