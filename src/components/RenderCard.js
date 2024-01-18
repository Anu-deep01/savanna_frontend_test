import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Card, CardContent, Tab, Tabs } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./FetchApi.css";
import image from './logo.png'
const FetchApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://entities-alpha.vercel.app/entity_details"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    const fetchDataWithDelay = async () => {
      await fetchData();
      setTimeout(() => {
        fetchData();
      }, 1000);
    };

    fetchDataWithDelay();
  }, []);

  return (
    <>
      <Box className="tabbottom">
        <img src={image}/>
        <Container maxWidth="lg">
          <Tabs
            className="tabhead"
            value={selectedTab}
            onChange={handleTabChange}
            centered
          >
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
      <Container maxWidth="lg">
        {selectedTab === 0 && (
          <>
            <Box className="headingnm">
              <h6>Entities</h6>
            </Box>
            <List className="tablists">
              {data.map(({ image, name, snippet, id }) => {
                const driveLink = image;
                const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
                const match = driveLink.match(regex);

                let imageUrl = "";
                if (match && match[1]) {
                  const fileId = match[1];
                  imageUrl = "https://lh3.googleusercontent.com/d/" + fileId + "=s60?authuser=1";
                }

                return (
                  <ListItem key={id}>
                    <Card className="maincard">
                      <CardContent className="cardcontent">
                        <CardMedia
                          component="img"
                          height="100"
                          src={imageUrl}
                          alt="image"
                          className="cardmedia"
                        />
                        <Box>
                          <Typography variant="h6">{name}</Typography>
                          <Typography>{snippet}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </ListItem>
                );
              })}
            </List>

            <Box className="headingnm">
              <h6>moderators</h6>
            </Box>

            <List className="tablists">
              <ListItem>
                <Card className="maincard">
                  <CardContent className="cardcontent">
                    <CardMedia
                      component="img"
                      height="100"
                      src={"https://lh3.googleusercontent.com/d/188ktIIsT_yrnU6zomRTgtcc2BGpHHFC6=s60?authuser=1"}
                      alt="image"
                      className="cardmedia"
                    />
                    <Box>
                      <Typography variant="h6">{"Savanna"}</Typography>
                      <Typography>{"Our"}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </ListItem>
            </List>
          </>
        )}
      </Container>
    </>
  );
};

export default FetchApi;
