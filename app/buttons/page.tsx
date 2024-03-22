import { Button } from "@/components/ui/button";
import React from "react";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[15rem]">
      <Button>Defualt</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger outline</Button>
      <Button variant="super">super</Button>
      <Button variant="superOutline">super outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebar outline</Button>
    </div>
  );
};

export default ButtonsPage;
