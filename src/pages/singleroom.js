import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import items from "../data";
import StyledHero from "../Component/styledcomponent";
import Banner from "../Component/banner";
class SingleRoom extends Component {
  state = {
    roomDetails: null
  };
  componentDidMount() {
    // console.log(this.props)
    const { slug } = this.props.match.params;
    // console.log(slug)
    items.map(item => {
      /* console.log(item)*/
      if (item.fields.slug === slug) {
        this.setState({ roomDetails: { ...item.fields } });
      }
    });
  }
  render() {
    if (!this.state.roomDetails) {
      return null;
    }
    const {
      roomDetails: {
        breakfast,
        capacity,
        description,
        images,
        slug,
        price,
        name,
        size,
        extras
      }
    } = this.state;
    return (
      <div>
        {console.log(images[0].fields.file.url)}
        <StyledHero img1={images[0].fields.file.url}>
          <Banner title={name}>
            <Link to="/rooms/" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <div className="img-flex">
          {/* <a className="bla"> */}
          <img
            tabindex="1"
            src={images[1].fields.file.url}
            className="detail-img bla"
          />
          {/* </a> */}
          <img
            tabindex="1"
            className="detail-img bla"
            src={images[2].fields.file.url}
          />
          <img
            tabindex="1"
            className="detail-img bla"
            src={images[3].fields.file.url}
          />
        </div>
        <div className="details">
          <div className="details-left">
            <h3>Details</h3>
            <br></br>
            <h4>
              Description<br></br>
            </h4>
            <br></br>
            <p>{description}</p>
          </div>
          <div className="details-rgt">
            <h3>Info</h3>
            <br></br>
            <p>Price :{price}</p>
            <br></br>
            <p>Size :{size}</p>
            <br></br>
            <p>Capacity allowed :{capacity}</p>
            <br></br>
          </div>
        </div>
        <div className="extras">
          <h3>Extras</h3>
          <ul className="extras-line">
            <li style={{ marginRight: 8, marginLeft: 46 }}>
              {" "}
              &rarr; {extras[0]}&nbsp; &rarr;{extras[1]}&nbsp; &rarr;{extras[2]}
            </li>
            <li style={{ marginLeft: 46 }}>
              &rarr; {extras[3]} &rarr;{extras[4]}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleRoom);
