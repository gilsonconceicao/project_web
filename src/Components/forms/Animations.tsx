import { useTransition, animated } from "@react-spring/web";
import Login from "./Login/Login";
import Register from "./Register/Register";

import "./Animations.css";
import { useAuth } from "../../Contexts/AuthContext";

const Animations = () => {
  const { stepAccess } = useAuth()
  const transitions = useTransition(true, {
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
  });

  return (
    <div>
      {transitions((style) =>
        stepAccess === 'login' ? (
          <animated.div key="login" style={style}>
            <Login />
          </animated.div>
        ) : (
          <animated.div key="register" style={style}>
            <Register />
          </animated.div>
        )
      )}
    </div>
  );
};

export default Animations;
