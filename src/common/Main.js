import React, { Component } from "react";
import TabsContainer from "./TabsContainer";
import EntitiesList from "./EntitiesList";
import "./Style.css";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
      selectedTab: 0,
    };
  }

  handleTabChange = (event, newValue) => {
    this.setState({
      selectedTab: newValue,
    });
  };

  extractFileId = (url) => {
    const match = url.match(/\/d\/(.+?)\/view/);
    return match ? match[1] : null;
  };

  fetchData = async () => {
    try {
      const response = await axios.get(
        "https://entities-alpha.vercel.app/entity_details"
      );
      this.setState({
        data: response.data,
        loading: false,
      });
      console.log(this.state.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchDataWithDelay();
  }

  fetchDataWithDelay = async () => {
    await this.fetchData();
    setTimeout(() => {
      this.fetchData();
    }, 1000);
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <>
      <TabsContainer
        selectedTab={selectedTab}
        handleTabChange={this.handleTabChange}
      />
      {selectedTab === 0 && <EntitiesList data={this.state.data} />}
     
      </>
    );
  }
}

export default Main;
