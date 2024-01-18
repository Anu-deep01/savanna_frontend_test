import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const ModeratorCard = ({ name, role }) => {
  return (
    <Card className="maincard">
      <CardContent className="cardcontent">
        <CardMedia component="img" height="60" src="https://lh3.googleusercontent.com/d/188ktIIsT_yrnU6zomRTgtcc2BGpHHFC6=s60?authuser=1" alt="image" className="cardmedia" />
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography>{role}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ModeratorCard;
