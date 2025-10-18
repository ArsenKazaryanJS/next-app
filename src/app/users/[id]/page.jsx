import getUser from '@/services/getUser'
import React from 'react'

const UserPage = async ({params}) => {
    const user = await getUser(params.id)
    
  return (
    	<section>
			<h2 className="section-title">User #{user.id}</h2>
			<div className="card card--user-details">
				<span className="muted">Name</span>
				<span>{user.name}</span>
				<span className="muted">Username</span>
				<span>{user.username}</span>
				<span className="muted">Email</span>
				<span>{user.email}</span>
				<span className="muted">Phone</span>
				<span>{user.phone}</span>
				<span className="muted">Website</span>
				<span>{user.website}</span>
				<span className="muted">Company</span>
				<span>{user.company?.name}</span>
				<span className="muted">Address</span>
				<span>
					{user.address?.city}, {user.address?.street}{' '}
					{user.address?.suite}
				</span>
			</div>
		</section>
  )
}

export default UserPage
