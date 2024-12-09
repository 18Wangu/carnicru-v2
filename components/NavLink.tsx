import * as React from "react";
import { NavLinkProps } from "./petSimulator/types/types";

export const NavLink: React.FC<NavLinkProps> = ({ label }) => (
  <div className="self-stretch my-auto">{label}</div>
);
