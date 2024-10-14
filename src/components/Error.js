import { useRouteError } from "react-router-dom";
const Error = () => {
    console.log(useRouteError());
    return (
      <div>
            <h1>Opps Something Went Wrong</h1>
            <h2>{useRouteError().status}</h2>
      </div>
    );
};

export default Error;
