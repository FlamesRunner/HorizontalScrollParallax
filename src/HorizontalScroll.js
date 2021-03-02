import ReactIScroll from "react-iscroll";
import iScroll from "iscroll-zoom-probe";
import { useRef, useState } from "react";

function HorizontalScroll(props) {
  const keyRef = useRef(null);
  const orangeRef = useRef(null);
  const [orangeRotationState, setOrangeRotationState] = useState(
    "rotate(0deg)"
  );
  const [leftState, setLeftState] = useState(25);

  function onScrollEnd(isc) {
    let s = Math.abs(
      Math.abs(isc.maxScrollX) - Math.abs(isc.x) + isc.maxScrollX
    );
    setLeftState(s < 25 ? 25 : s);
    onScroll(isc);
  }

  function onScroll(isc) {
    let s = Math.abs(
      Math.abs(isc.maxScrollX) - Math.abs(isc.x) + isc.maxScrollX
    );
    let sp = s / Math.abs(isc.maxScrollX);
    setOrangeRotationState("rotate(" + sp * 360 + "deg)");
  }

  return (
    <div>
      <ReactIScroll
        ref={keyRef}
        iScroll={iScroll}
        onScrollEnd={onScrollEnd}
        options={{
          mouseWheel: true,
          scrollbars: true,
          scrollX: true,
          snap: "li",
          probeType: 2,
          keyBindings: {
            left: 37,
            right: 39
          }
        }}
        tabIndex="0"
      >
        <div
          style={{
            width: "200%",
            height: "300px",
            display: "inline-block"
          }}
        >
          <ul style={{ display: "flex", listStyleType: "none" }}>
            {props.listOfItems.map((item, index) => (
              <li
                key={index}
                style={{ width: "300px", height: "250px", textAlign: "center" }}
              >
                <img
                  className="img-responsive"
                  src={item.filename}
                  alt={item.alt}
                />
                <p>
                  {index} - {item.alt}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </ReactIScroll>
      <span
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: "orange",
          borderRadius: "50%",
          display: "inline-block",
          position: "absolute",
          left: leftState,
          transition: "all 0.5s",
          marginTop: "25px"
        }}
        ref={orangeRef}
      ></span>
      <div
        style={{
          paddingLeft: "300px"
        }}
      >
        <span
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: "orange",
            borderRadius: "50%",
            display: "inline-block",
            position: "absolute",
            left: "25px",
            marginTop: "90px",
            transform: orangeRotationState,
            color: "white",
            textAlign: "center",
            animation: "spin 1s, rotate 1s",
            WebkitTransition: "1s ease-in-out",
            MozTransition: "1s ease-in-out",
            transition: "1s ease-in-out"
          }}
        >
          <div
            style={{
              backgroundColor: "green",
              height: "10px",
              width: "8px",
              borderRadius: "50%",
              left: "22px",
              marginTop: "-3px",
              position: "absolute",
              textAlign: "center"
            }}
          ></div>
        </span>
      </div>
    </div>
  );
}

export default HorizontalScroll;
