
export async function getMessageFromApi(params){
    const res = await fetch(`${process.env.NEXT_URL}/api/open`)
    return res.json()
} 


