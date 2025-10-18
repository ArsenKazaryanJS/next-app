import Link from "next/link";
import React from "react";

const UserItem = ({ user }) => {
  return (
    
      <Link href={`users/${user.id}`} className="item">
        <div>
          <div className="item-title">{`${user.id}. ${user.name}`}</div>
          <div className="item-sub">{user.email}</div>
        </div>
        <span aria-hidden> 🢒 </span>
      </Link>
    
  );
};

export default UserItem;
