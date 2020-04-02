import React from "react";
import { withRouter } from "react-router-dom";

function Feature(props) {
  return (
    <>
      <div className="feature-img">
        {props.features.map(imgs => {
          return (
            <div className="image1">
              <img className="image" key={imgs.id} src={imgs.images[0]} />
              <div className="price">
                Rs {imgs.item_field.price}
                <div style={{ fontSize: "x-small" }}>per person</div>
              </div>
              <h5 className="title-room">{imgs.item_field.name}</h5>
              <div className="middle">
                <h4
                  className="name-feature"
                  onClick={() => {
                    props.history.push(`/room/${imgs.item_field.slug}`);
                  }}
                >
                  feature
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default withRouter(Feature);
