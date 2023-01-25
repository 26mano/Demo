/* 
React Context is a way to manage state globally.
It can be used together with the useState Hook to share state between deeply nested components 
more easily than with useState alone.
*/
import { useState, createContext } from "react";
import Component2 from "./Component2";


const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  setUser(user);
  console.log(user)
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 userCon={UserContext} />
    </UserContext.Provider>
  );
}

export default Component1;









