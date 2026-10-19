import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  contact: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        // create a new state object
        ...state,

        // dynamically update the field
        [action.name]: action.value,
      };

    default:
      return state;
  }
}

// function reducer(state, action) {
//   console.log(action.txtLabel);
//   if (action.txtLabel === "name") {
//     console.log("name called")
//     state.name +=  action.value
//   } 

//   if (action.txtLabel === "email") {
//     state.email = action.value;
//   }

//   if (action.txtLabel === "password") {
//     state.password = action.value;
//   }

//   if (action.txtLabel === "confirmPassword") {
//     state.confirmPassword = action.value;
//   }

//   if (action.txtLabel === "contact") {
//     state.contact = action.value;
//   }
//   console.log(state)
//    return {
//     ...state,
//     [action.txtLabel]: action.value,
//   };
  
// }

export default function Form() {
  const [state, setState] = useReducer(reducer, initialState);

  const Group = ({ children }) => {
    return <div className="flex flex-col gap-1 text-sm">{children}</div>;
  };

  const Label = ({ children }) => {
    return <label htmlFor="name">{children}</label>;
  };

  const Input = ({name,value, ...props }) => {
    return (
      <input
        {...props}
        className="border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-gray-300 placeholder:text-xs placeholder:text-gray-300 "
        name={name}
        value={value}
        onChange={(e) =>
          
          setState({ name: name , value: e.target.value,type:"CHANGE_INPUT" })
        }
      />
    );
  };

  const handleForm = () => {
    console.log("form submited...");
    console.log(state);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="h-auto min-w-md flex flex-col gap-5 border border-gray-200 shadow-sm shadow-neutral-300 p-7 rounded-lg ">
        <Group>
          <Label children="Name" />
          <Input
            type="text"
            value={state.name}  
            name="name"
            placeholder="Enter Name"
          />
        </Group>

        {/* <Group>
          <Label children="Email" />
          <Input
            type="email"
            value={state.email}
            name="email"
            placeholder="Enter Email"
          />
        </Group>

        <Group>
          <Label children="Password" />
          <Input
            type="text"
            value={state.password}
            name="password"
            placeholder="Enter Password"
          />
        </Group>

        <Group>
          <Label children="Confirm Password" />
          <Input
            type="text"
            value={state.confirmPassword}
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </Group>

        <Group>
          <Label children="Contact" />
          <Input
            type="number"
            value={state.contact}
            name="contact"
            placeholder="Enter Contact"
          />
        </Group> */}

        <button
          type="button"
          onClick={handleForm}
          className="border border-gray-300 py-2 rounded-xl bg-neutral-200 shadow-sm font-semibold text-sm active:scale-95 transition-all cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
