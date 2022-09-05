import React from "react";
import { useSpring, animated } from "react-spring";

 const FadeEffect = (props) => {
  const onLoadStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: props.delay,
  });
  return <animated.div style={onLoadStyle}>{props.children}</animated.div>;
};

export default FadeEffect