import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" name="" id="" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80"
          alt=""
        />
        <div className="userChatInfo">
          <span>Erik</span>
        </div>
      </div>
    </div>
  );
};
