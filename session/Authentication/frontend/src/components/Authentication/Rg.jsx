import { Check, LockIcon, Mail, User } from "lucide-react";
import { Button, Container, FormSection, Group, Heading, Heading2, Input, LOGO, TextSection } from "../index";
import { useNavigate } from "react-router-dom";
export default function Rg() {
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

  const navigate=useNavigate();

  return (
    <Container>
      <TextSection className="bg-linear-to-br from-purple-600/90 to-pink-600/90 order-2 xl:order-1">
        <Heading
          header="Start Your Financial Journey Today"
          para="Create your free account and get instant access to powerful expense tracking tools that help you achieve your financial goals."
        />
        <div className="h-auto w-full ">
            {features.map((f, ind) => (
              <div
                key={ind}
                className="h-auto max-w-lg m-auto flex gap-4 mb-6 "
              >
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
        <LOGO/>
        <Heading2 heading="Create Account" subHeading="Join thousands of users managing their finances" />
         <div className="h-auto w-full flex flex-col gap-4">
            <Group>
                <Input
                    label="Username"
                    labelStyle="after:content-['*'] after:text-red-500 after:ml-0.5"
                    name="username"
                    id="username"
                    type="text"
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
                    placeholder="Enter your password"
                    icon={<LockIcon className="size-5" />}
                />
            </Group>

            <Button name="Create Account" />

            <p className="text-center text-sm">
                <span className="text-xs text-gray-500">Already have an account? </span>
                <span 
                  className="text-blue-600 font-semibold tracking-wide cursor-pointer hover:text-blue-800"
                  onClick={()=>navigate('/login')}
                > Sign In</span>
            </p>
         </div>
      </FormSection>
    </Container>
  );
}


{/*
OLD CODE:::
import { Check, LockIcon, Mail, User, Wallet } from "lucide-react";
import Heading from "../Headings/authenticationHeading/Heading";
import { useReducer } from "react";
import LOGO from "../Logo/Logo";
import Heading2 from "../Headings/authenticationHeading/Heading2";
import { useNavigate } from "react-router-dom";

function cart_manage(state,action){
  if(action==="increment"){
    return state+1;
  }
  if(action==="decrement"){
    return state-1;
  }
  return state;
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
  const [items,abc] = useReducer(cart_manage,0);

  const navigate=useNavigate();
  return (
    <div className="sm:min-h-screen w-full font-sans flex flex-col xl:flex-row">
      {/* <h1>{items}</h1> 
      

      <div className="h-auto xl:h-screen w-full xl:w-1/2 bg-linear-to-br from-purple-600/90 to-pink-600/90 order-2 xl:order-1">
        <div className="h-full max-w-xs sm:max-w-xl m-auto flex flex-col justify-center items-center gap-10 text-neutral-50 py-4 xl:py-0">
          <Heading
            header="Start Your Financial Journey Today"
            para="Create your free account and get instant access to powerful expense tracking tools that help you achieve your financial goals."
          />

         
          <div className="h-auto w-full ">
            {features.map((f, ind) => (
              <div
                key={ind}
                className="h-auto max-w-lg m-auto flex gap-4 mb-6 "
              >
                <Check className="size-7 p-1 bg-white/25 rounded-xl" />
                <div className="flex flex-col text-white">
                  <h4 className="text-base">{f.name}</h4>
                  <p className="text-sm text-white/80">{f.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className="h-auto xl:h-screen w-full xl:w-1/2 bg-gray-50 order-1 xl:order-2">
        <div className="h-full max-w-xs sm:max-w-xl m-auto py-5">
          <div className="h-full w-full flex flex-col gap-10 ">
           
            <LOGO/>

            <Heading2 heading="Create Account" subHeading="Join thousands of users managing their finances" />
            
            <div className="h-auto w-full flex flex-col gap-4">
              <Group>
                  <Label htmlFor="username"className="after:content-['*'] after:text-red-500 after:ml-0.5">Username</Label>
                  <Input 
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    icon={<User className="size-5" />}
                  />
              </Group> 
              <Group>
                  <Label htmlFor="email" className="after:content-['*'] after:text-red-500 after:ml-0.5">Email</Label>
                  <Input 
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email" 
                    icon={<Mail className="size-5" />}
                  />
              </Group>
              <Group>
                  <Label htmlFor="password"className="after:content-['*'] after:text-red-500 after:ml-0.5">Password</Label>
                  <Input 
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    icon={<LockIcon className="size-5" />}
                    
                  />
              </Group>  
              <button 
              onClick={()=>abc("increment")}
              className="w-full py-2.5 rounded-lg text-white font-semibold active:scale-95 bg-linear-to-br from-blue-500 to-cyan-500 cursor-pointer transition">
                  Create Account
              </button>

              <p className="text-center text-sm">
                <span className="text-xs text-gray-500">Already have an account? </span>
                <span 
                  className="text-blue-600 font-semibold tracking-wide cursor-pointer hover:text-blue-800"
                  onClick={()=>navigate('/login')}
                > Sign In</span>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}



// COMPONENTS::

const Group = ({children}) =>{
  return <div className={`flex flex-col gap-2 relative has-invalid:bg-red-100 rounded-md p-2`}>
      {children}
    </div>
}

const Label = ({ children, className , ...props }) => {
  return <label {...props} className={`text-gray-700 text-sm ${className}`}>
      {children}
    </label>
}

const Input = ({className, icon , ...props}) => {
  return <div className="relative">
      <input
        {...props}
        className={`bg-white w-full py-2 pl-12 ring-1 ring-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-blue-50 placeholder:text-sm placeholder:text-gray-400/70 ${className}`}
      />
      <span className="absolute left-3 top-2.5 text-gray-400" >
        {icon}
      </span>
    </div> 
};



*/ }