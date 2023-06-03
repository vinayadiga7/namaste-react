// create h1 tag with welcome message
// extarct root element from DOM => create root element
// append h1 tag to root as child => render h1 element on to the root

// Part 4: try to create nested tags
{
  /* <div id="narayana">
    <div id="varapradha">
        <h1>I am Varunya</h1>
        <h2>I am Vishishta</h2>
    </div>
    <div id="manohara">
        <h1>I am Surbhi</h1>
        <h2>I am Suhasini</h2>
    </div>
</div> */
}

const narayana = React.createElement("div", { id: "narayana, sriLaxmi" }, [
  React.createElement("div", { id: "varapradha" }, [
    React.createElement("h1", {}, "I am Varunya"),
    React.createElement("h2", {}, "I am Vishishta"),
  ]),
  React.createElement("div", { id: "manohara" }, [
    React.createElement("h1", {}, "I am Surbhi"),
    React.createElement("h2", {}, "I am Suhasini"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    "data-cities": ["krpura", "yeshwanthapura", "byatarayanapura"],
    "data-undefined": undefined,
    "data-null": null,
    "data-bool": true,
  },
  "Hello world from React!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("From the index.html ---------->", narayana);
root.render(narayana);
