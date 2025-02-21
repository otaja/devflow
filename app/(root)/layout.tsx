import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import RightSidbar from "@/components/navigation/navbar/RightSidbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main className="background-light850_dark100 relative">
        <Navbar />
        <div className="flex">
          <LeftSidebar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </section>
          <RightSidbar />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
