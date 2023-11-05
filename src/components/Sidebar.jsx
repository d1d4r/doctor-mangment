"use client";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
  { link: "Dashbord", path: "/dashbord", id: 1 },
  { link: "Patient", path: "/dashbord/patient", id: 2 },
  { link: "Appointment", path: "/dashbord/appointment", id: 3 },
  { link: "Expense", path: "/dashbord/expense", id: 4 },
];
const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="flex-col hidden h-full text-left mt-80 md:flex" >
        {menuItems.map((menuItem) => (
          <NavbarItem key={menuItem.id}>
            <Link href={menuItem.path}>{menuItem.link}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((menuItem) => (
          <NavbarMenuItem key={menuItem.id}>
            <Link href={menuItem.path}>{menuItem.link}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Sidebar;
//  <nav className="p-2">
//       <ul className="flex gap-2 overflow-auto md:flex-col">
//         <li className="p-2 bg-cyan-200">dashbord</li>
//         <li className="p-2 bg-cyan-200">pation</li>
//         <li className="p-2 bg-cyan-200">appoinment</li>
//         <li className="p-2 bg-cyan-200">expenase</li>
//       </ul>
//     </nav>
