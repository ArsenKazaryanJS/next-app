import React from 'react'

const UserItem = ({user}) => {
  return (
   <div className="item" >
            <div>
                <div className="item-title">{`${user.id}. ${user.name}`}</div>
                <div className="item-sub">{user.email}</div>

            </div>
            <span aria-hidden> 🢒 </span>
        </div>
  )
}

export default UserItem
