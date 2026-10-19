import { Check, LockIcon, Mail, User } from "lucide-react";
import {
  Container,
  FormSection,
  Group,
  Input,
  Heading,
  Heading2,
  LOGO,
  TextSection,
  Button,
} from "../index";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "./formSlice";

const initialState ={
  username:'',
  email:'',
  password:''
};

function reducer(state, action) {
  switch(action.type){
    case "change_input":
      return{
        ...state,

        [action.name]: action.value,
      }

      default:
        return state;
  }
}


export default function Register() {
  const features = [
    {
      name: "Free Forever Plan",
      tag: "Start tracking without any commitment",
    },
    {
      name: "Secure & Private",
      tag: "Bank-level encryption for your data",
    },
    {
      name: "No Credit Card Required",
      tag: "Get started in less than 30 seconds",
    },
  ];
  // const [state, dispatch] = useReducer(reducer, initialState);

  const a = useSelector(state=>state.form);
  const newDispatch = useDispatch();
  
  // const [username,setUsername]=useState('');
  // const [email,setEmail]=useState('');
  // const [password,setPassword]=useState('');

  const formdata = new FormData();

  const handleSubmit = ()=>{
    // formdata.append("username",username);
    // formdata.append("email",email);
    // formdata.append("password",password);
    console.log("user...");
    console.log(a);
    
  }

  const navigate = useNavigate();
  return (
    <Container>
      <TextSection className="bg-linear-to-br from-purple-600/90 to-pink-600/90 order-2 xl:order-1">
        <Heading
          header="Start Your Financial Journey Today"
          para="Create your free account and get instant access to powerful expense tracking tools that help you achieve your financial goals."
        />
        <div className="h-auto w-full ">
          {features.map((f, ind) => (
            <div key={ind} className="h-auto max-w-lg m-auto flex gap-4 mb-6 ">
              <Check className="size-7 p-1 bg-white/25 rounded-xl" />
              <div className="flex flex-col text-white">
                <h4 className="text-base">{f.name}</h4>
                <p className="text-sm text-white/80">{f.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </TextSection>
      <FormSection className="order-1 xl:order-2">
        <LOGO />
        <Heading2
          heading="Create Account"
          subHeading="Join thousands of users managing their finances"
        />
        <div className="h-auto w-full flex flex-col gap-4">
          <Group>
            <Input
              label="Username"
              labelStyle="after:content-['*'] after:text-red-500 after:ml-0.5"
              name="username"
              id="username"
              type="text"
              // value={state.name}
              // dispatch={dispatch}
              onChange={(e)=>newDispatch(setValue({name:e.target.value,type:"username"}))}
              placeholder="Enter your username"
              icon={<User className="size-5" />}
            />
          </Group>

          <Group>
            <Input
              label="Email"
              labelStyle="after:content-['*'] after:text-red-500 after:ml-0.5"
              name="email"
              id="email"
              type="email"
              // value={state.name}
              // dispatch={dispatch}
              onChange={(e)=>newDispatch(setValue({name:e.target.value,type:"email"}))}
              placeholder="Enter your email"
              icon={<Mail className="size-5" />}
            />
          </Group>

          <Group>
            <Input
              label="Password"
              labelStyle="after:content-['*'] after:text-red-500 after:ml-0.5"
              name="password"
              id="password"
              type="password"
              // value={state.name}
              // dispatch={dispatch}
              onChange={(e)=>newDispatch(setValue({name:e.target.value,type:"password"}))}
              placeholder="Enter your password"
              icon={<LockIcon className="size-5" />}
            />
          </Group>

          <Button name="Create Account" onClick={handleSubmit} />

          <p className="text-center text-sm">
            <span className="text-xs text-gray-500">
              Already have an account?{" "}
            </span>
            <span
              className="text-blue-600 font-semibold tracking-wide cursor-pointer hover:text-blue-800"
              onClick={() => navigate("/login")}
            >
              {" "}
              Sign In
            </span>
          </p>
        </div>
      </FormSection>
    </Container>
  );
}
