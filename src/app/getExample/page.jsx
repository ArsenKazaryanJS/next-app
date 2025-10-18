async function getMessageFromAPI(){
    const res = await fetch(`${process.env.NEXT_URL}/api/open`)
    return res.json()
}