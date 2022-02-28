import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        New User
      </Route>
    </section>
  );
};

export default Welcome;
