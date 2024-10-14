import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext({
  name: "danish",
  // setText,
});

// console.log(UserContext);
export default UserContext;
