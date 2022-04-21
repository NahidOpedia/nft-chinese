import React from "react";
import { Link } from "react-router-dom";

function SingleBlog({ item }) {
  const d = new Date(item?.created);
  let year = d.getFullYear()
  const months = [
    "January", "February", 
    "March", "April", "May", 
    "June", "July", "August",
    "September", "October", 
    "November", "December"
  ];
  let m = months[d.getMonth()]
  let date = d.getDate();
  console.log(d.getDate());


  return (
    <div>
      <div style={{ margin: "10px" }} className="singlereomandation">
        <div className="blogCard productslider">
          <div className="sliderTestimonialitem ">
            <div className="img">
              <img src={item?.cover} alt="cat" />
            </div>
            <div className="blog">
              <p className="date">{`${date} ${m} ${year }`}</p>
              <p className="title">{item.title}</p>
              <p className="description">{item.content}</p>
              <Link className="Link" to={'/blog/'+ item.id}>
              <p >
              Details Here..
              </p>
                   
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
