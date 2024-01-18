import React from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import image from './logo.png'

const TabsContainer = ({ selectedTab, handleTabChange }) => {
  return (
    <>
    <Box className="tabbottom">

    <img src={image} alt="logo"/>
      <Container maxWidth="lg">
        <Tabs className="tabhead" value={selectedTab} onChange={handleTabChange} centered>
          <Tab
            label="Entities"
            sx={{
              fontWeight: "bold",
            }}
          />
          <Tab
            label="Manage Teams"
            sx={{
              fontWeight: "bold",
            }}
          />
        </Tabs>
      </Container>
    </Box>
    </>
  );
};

export default TabsContainer;
