import { auth } from "@/auth";
import React from "react";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h3>Welocme Page </h3>
    </div>
  );
};

export default Home;
