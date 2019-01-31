// ("html element", data, children)
// const Header = (React.createElement("h1", null, "Hello React");)
const Header = (props) => {
  const { place } = props;
  const myColor = place === "React Land" ? "red": "black";
  return React.createElement("h1", {style:{color:myColor}}, 'Hello ${place}');
};
// Components


const App = React.createElement("div", null,
  Header({place: "React Land"}),
  Header({place: "Angular Land"}),
  React.createElement("p", null, "Horray more things!!")
);

ReactDOM.render(App, document.getElementById("root"))
