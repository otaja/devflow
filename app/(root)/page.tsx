import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import ROUTES from "../constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h3>Welocme Page </h3>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};

export default Home;
