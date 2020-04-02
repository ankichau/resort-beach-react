import React from "react";
import Hero from "../Component/hero";
import Banner from "../Component/banner";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
import items from "../data";
import RoomList from "../Component/roomlist";
import Title from "../Component/title";

class Room extends React.Component {
  state = {
    sortedrooms: [],
    rooms: [],
    type: "all",
    maxprice: 600,
    capacity: 1,
    price: 0,
    minprice: 0,
    breakfast: false
  };
  componentDidMount() {
    let rooms = this.fordata(items);
    this.setState({ rooms, sortedrooms: rooms });
  }
  fordata(items) {
    let temi = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let item_field = item.fields;
      let name = item_field.name;
      let rooms = { name, item_field, images, id };
      return rooms;
    });
    return temi;
  }
  handelchange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterdata
    );
    console.log(name, value);
  };

  filterdata = () => {
    let { rooms, price, type, capacity, breakfast } = this.state;
    let temprooms = [...rooms];

    capacity = parseInt(capacity);

    price = parseInt(price);

    if (type !== "all") {
      temprooms = temprooms.filter(room => {
        return room.item_field.type === type;
      });
    }

    if (capacity !== 1) {
      temprooms = temprooms.filter(
        room => room.item_field.capacity >= capacity
      );
    }

    // if (price) {
    //   temprooms = temprooms.filter(room => room.item_field.price <= price);
    // }

    if (breakfast) {
      temprooms = temprooms.filter(room => room.item_field.breakfast === true);
    }

    this.setState({ sortedrooms: temprooms });
  };
  render() {
    let {
      rooms,
      sortedrooms,
      type,
      maxprice,
      minprice,
      price,
      capacity,
      breakfast
    } = this.state;

    let listt = new Set(
      rooms.map(ro => {
        return ro.item_field.type;
      })
    );
    let types = ["all", ...listt];
    types = types.map(ty => {
      return <option value={ty}>{ty}</option>;
    });
    let cap = new Set(
      rooms.map(ro => {
        return ro.item_field.capacity;
      })
    );
    cap = [...cap];
    cap = cap.map(ty => {
      return <option value={ty}>{ty}</option>;
    });
    var prices = rooms.map(room => room.item_field.price);
    return (
      <>
        <Hero hero="hero-rooms">
          <Banner
            title="lunxirous rooms"
            subtitle="these rooms start with RS:1000"
          >
            <Link to="/" className="btn-primary">
              Home
            </Link>
          </Banner>
        </Hero>
        <Title>Search Rooms</Title>
        <div className="filter-header">
          Names:{" "}
          <select
            name="type"
            id="type"
            value={type}
            onChange={this.handelchange}
            className="type-filter"
          >
            {types}
          </select>
          People in a room:{" "}
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={this.handelchange}
            className="type-filter"
          >
            {cap}
          </select>
          {/* <input
            name="price"
            type="range"
            min={minprice}
            max={maxprice}
            value={price}
            onChange={this.handelchange}
          /> */}
          breakfast:{" "}
          <input
            type="checkbox"
            name="breakfast"
            checked={breakfast}
            onChange={this.handelchange}
          ></input>
        </div>
        <div style={{ margin: 10 }}></div>
        <RoomList rooms={sortedrooms} prices={prices} />
      </>
    );
  }
}

export default withRouter(Room);
