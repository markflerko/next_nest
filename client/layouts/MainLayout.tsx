import { Container } from "@mui/material";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
    </>
  );
};

export default MainLayout;
