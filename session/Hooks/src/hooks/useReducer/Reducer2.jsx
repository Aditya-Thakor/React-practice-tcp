import { useReducer, useRef } from "react";

/**
 * Initial state for the form
 */
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  contact: "",
};

/**
 * Reducer function
 * - MUST be a pure function
 * - NEVER mutate state directly
 */
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

const Group = ({ children }) => (
    <div className="flex flex-col gap-1 text-sm">{children}</div>
  );

  const Label = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor}>{children}</label>
  );

  /**
   * Reusable Input component
   */
  const Input = ({ name, value,dispatch, ...props }) => {
    return (
      <input
        {...props}
        name={name}
        value={value} 
        
        className="border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-gray-300 placeholder:text-xs placeholder:text-gray-300"
        onChange={(e) =>{
          
          dispatch({
            type: "CHANGE_INPUT",
            name: name,
            value: e.target.value,
          })
        }
        }
      />
    );
  };


export default function Data() {
  // useReducer hook
  const [state, dispatch2] = useReducer(reducer, initialState);
  const inputRef=useRef(null);

  /**
   * Wrapper components (UI only)
   */
  
  /**
   * Form submit handler
   */
  const handleForm = () => {
    console.log("Form Submitted");
    console.log(state);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-auto min-w-md flex flex-col gap-5 border border-gray-200 shadow-sm shadow-neutral-300 p-7 rounded-lg">

        {/* Name */}
        <Group>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            dispatch={dispatch2}
             
            value={state.name}
            placeholder="Enter Name"
          />
        </Group>

        {/* Email */}
        <Group>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            dispatch={dispatch2}
            value={state.email}
            placeholder="Enter Email"
          />
        </Group>

        {/* Password */}
        <Group>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            dispatch={dispatch2}
            id="password"
            value={state.password}
            placeholder="Enter Password"
          />
        </Group>

        {/* Confirm Password */}
        <Group>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            dispatch={dispatch2}
            value={state.confirmPassword}
            placeholder="Confirm Password"
          />
        </Group>

        {/* Contact */}
        <Group>
          <Label htmlFor="contact">Contact</Label>
          <Input
            type="number"
            name="contact"
            id="contact"
            dispatch={dispatch2}
            value={state.contact}
            placeholder="Enter Contact"
          />
        </Group>

        {/* Submit Button */}
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