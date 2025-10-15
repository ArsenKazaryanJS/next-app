async function getUser(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cache: 'no-store',
    })
    if (!res.ok) throw new Error('Failed to fetch user')

        return res.json()
}

export default getUser;