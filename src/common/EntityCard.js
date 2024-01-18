import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const EntityCard = ({ image, name, snippet }) => {
  const [id, setId] = useState('');

  useEffect(() => {
    const driveLink = image;
    const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
    const match = driveLink.match(regex);

    if (match && match[1]) {
      const fileId = match[1];
      setId("https://lh3.googleusercontent.com/d/" + fileId + "=s60?authuser=1");
    }
  }, [image]);
  console.log(id,"image")
  return (
    <Card className="maincard">
      <CardContent className="cardcontent">
        <CardMedia component="img" height="60" image={id} alt="image" className="cardmedia" />
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography>{snippet}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EntityCard;
