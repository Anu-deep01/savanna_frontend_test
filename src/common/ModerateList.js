import React from "react";
import { Box, List, ListItem } from "@mui/material";
import ModeratorCard from "./ModeratorCard";

const ModeratorsList = () => {
  return (
    <>
    <Box className="headingnm">
        <h6>moderators</h6>
    </Box>
    <List className="tablists">
      <ListItem>
        <ModeratorCard name="Savanna" role="Our" />
      </ListItem>
    </List>
    </>
  );
};

export default ModeratorsList;
