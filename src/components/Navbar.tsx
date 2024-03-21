import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="cursor-pointer text-2xl font-bold">SOSMED</h1>

          <div className="flex gap-4">
            <Button className="">Login</Button>
            <Button className="">Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
