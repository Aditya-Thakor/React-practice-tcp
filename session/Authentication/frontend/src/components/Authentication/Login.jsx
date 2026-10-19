import { LockIcon, Mail, Wallet } from "lucide-react";
import Card from "../Card";
import Container from "../container/Container";
import TextSection from "../container/sections/TextSection";
import Heading from "../Headings/authenticationHeading/Heading";
import FormSection from "../container/sections/FormSection";
import LOGO from "../Logo/Logo";
import Heading2 from "../Headings/authenticationHeading/Heading2";
import Group from "../Forms/Group";
import Input from "../Forms/Input";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change_input":
      return { ...state, [action.name]: action.value };

    default:
      return state;
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cardData = [
    {
      title: "10000+",
      sub: "Active User",
    },
    {
      title: "₹50Cr+",
      sub: "Tracked",
    },
    {
      title: "99.9%",
      sub: "Uptime",
    },
    {
      title: "4.9/5",
      sub: "User Rating",
    },
  ];
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('userdata')
    console.log(state);    
  };

  return (
    <Container>
      <TextSection className=" bg-linear-to-br from-blue-500 to-cyan-400 order-2 sm:order-1 xl:order-2 selection:bg-cyan-300 ">
        <Heading
          header="Track Every Rupee, Achieve Every Goal"
          para="Join thousands of users who have taken control of their financial future with our smart expense tracking platform."
        />
        <div className="h-auto w-full grid grid-cols-2 gap-3">
          {cardData.map((c, ind) => (
            <Card key={ind} title={c.title} sub={c.sub} />
          ))}
        </div>
      </TextSection>
      <FormSection
        className={"order-1 sm:order-2 xl:order-1 selection:bg-cyan-200"}
      >
        <LOGO />
        <Heading2
          heading="Welcome Back"
          subHeading="Sign in to continue tracking your expenses"
          className="mt-5"
        />
        <div className="h-auto w-full flex flex-col gap-4">
          <Group>
            <Input
              label="Email Address"
              name="email"
              id="email"
              type="email"
              value={state.name}
              dispatch={dispatch}
              placeholder="Enter your email"
              icon={<Mail className="size-5" />}
            />
          </Group>
          <Group>
            <Input
              label="Password"
              name="password"
              id="password"
              type="text"
              value={state.name}
              dispatch={dispatch}
              placeholder="Enter your password"
              icon={<LockIcon className="size-5" />}
            />
          </Group>
          <Button name="Sign In" onClick={handleLogin} />

          <p className="text-center text-sm">
            <span className="text-xs text-gray-500">
              Don't have an account?{" "}
            </span>
            <span
              className="text-blue-500 font-semibold tracking-wide cursor-pointer hover:text-blue-800"
              onClick={() => navigate("/register")}
            >
              Sign Up for free
            </span>
          </p>
        </div>
      </FormSection>
    </Container>
  );
}
