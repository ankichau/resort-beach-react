import React from "react";
import { Component } from "react";
import items from "../data";
import Feature from "./feature";
import Title from "./title";

class RoomsData extends Component {
  state = {
    feature: [],
    loading: true
  };
  componentDidMount() {
    let rooms = this.fordata(items);
    let feature = rooms.filter(room => room.item_field.featured === true);

    console.log(feature);
    this.setState({
      feature: feature,
      loading: false
    });
  }
  fordata(items) {
    let temi = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let item_field = item.fields;
      let rooms = { item_field, images, id };
      return rooms;
    });
    return temi;
  }
  render() {
    const { feature } = this.state;
    return (
      <>
        <Title>Featured Rooms</Title>
        <Feature features={feature}></Feature>
      </>
    );
  }
}

export default RoomsData;
