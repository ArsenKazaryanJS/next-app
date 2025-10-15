import getUser from '@/services/getUser'
import React from 'react'

const UserPage = async ({params}) => {
    const user = await getUser(params.id)
    
  return (
    <div>
       <div className="item" >
            <div>
                <div className="item-title">{`${user.id}. ${user.name}`}</div>
                <div className="item-sub">{user.email}</div>

            </div>
            <span aria-hidden> 🢒 </span>
        </div>
    </div>
  )
}

export default UserPage
