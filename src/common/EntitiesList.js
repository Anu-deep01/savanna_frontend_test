import React from "react";
import { Box, List, ListItem, Container } from "@mui/material";
import EntityCard from "./EntityCard";
import ModeratorsList from "./ModerateList";

const EntitiesList = ({ data }) => {
  return (
    <>
    <Container maxWidth="lg">
      <Box className="headingnm">
          <h6>Entities</h6>
      </Box>
      <List className="tablists">
        {data.map(({ image, name, snippet, id }) => (
          <ListItem key={id}>
            <EntityCard image={image} name={name} snippet={snippet} />
          </ListItem>
        ))}
      </List>
      <ModeratorsList />
      </Container>
    </>
  );
};

export default EntitiesList;
