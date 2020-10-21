import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

function HeroImg() {
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 250, friction: 100 },
    }));
    return (
        <div
            className="container hero-img-box"
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
            }
        >
            {/* <animated.div /> */}
            <animated.div
                className="card1 frontendSvg"
                style={{
                    height: "100%",
                    width: "100%",
                    transform: props.xy.interpolate(trans1),
                }}
            />
        </div>
    );
}
export default HeroImg;
