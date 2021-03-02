import ReactDOM from "react-dom";
import HorizontalScroll from "./HorizontalScroll";

const rootElement = document.getElementById("root");

let arr = [
  {
    filename: "sample.png",
    alt: "Sample image"
  },
  {
    filename: "sample.png",
    alt: "Sample image 2"
  },
  {
    filename: "sample.png",
    alt: "Sample image 3"
  },
  {
    filename: "sample.png",
    alt: "Sample image 4"
  },
  {
    filename: "sample.png",
    alt: "Sample image 5"
  },
  {
    filename: "sample.png",
    alt: "Sample image 6"
  }
];

ReactDOM.render(
  <div
    style={{
      width: "750px",
      display: "block"
    }}
  >
    <input type="text" />
    <HorizontalScroll listOfItems={arr} />
  </div>,
  rootElement
);
