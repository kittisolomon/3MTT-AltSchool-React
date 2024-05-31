import React from "react";
//import UserProfileCard from "./components/UserProfileCard";
import "../assets/styles/avatar.css";
import "../assets/styles/card.css";
import "../index.css";

const Components = () => {
  const users = [
    {
      avatar: "https://w3schools.com/howto/img_avatar.png",
      name: "Jon Doe",
      bio: "I'm Jon a fullstack developer from Abuja Nigeria",
    },
    {
      avatar: "https://w3schools.com/howto/img_avatar.png",
      name: "Irene  Ese",
      bio: "I'm a DevOps Engineer from Rivers Nigeria",
    },{
        avatar: "https://w3schools.com/howto/img_avatar.png",
        name: "Tony  Huzee",
        bio: "I'm a Product Manager from Minna Nigeria",
      }
  ];
  const userList = users.map((user, index) => {
    return (
      <div className="card" key={index}>
        <img
          src={user.avatar}
          alt={user.name}
          className="card-image"
          style={{ width: 100 }}
        />
        <h3 className="card-name"> {user.name} </h3>
        <p className="card-bio"> {user.bio} </p>
      </div>
    );
  });

  return <section className="main-page">{userList}</section>;
};

export default Components;
