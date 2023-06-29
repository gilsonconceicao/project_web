import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

import "./Animations.css";

const Animations = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const transitions = useTransition(isLoginForm, {
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
  });

  return (
    <div>
      {transitions((style, item) =>
        item ? (
          <animated.div key="login" style={style}>
            <Login handleSwitchForm={handleSwitchForm} />
          </animated.div>
        ) : (
          <animated.div key="register" style={style}>
            <Register handleSwitchForm={handleSwitchForm} />
          </animated.div>
        )
      )}
    </div>
  );
};

export default Animations;
