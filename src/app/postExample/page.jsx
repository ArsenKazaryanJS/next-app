import { createMessageGreeting } from "../lib/open";

const PostExample =  () => {
  const { message } =  createMessageGreeting('Yura Movsisyan');

  return (
    <section className="content">
      <h2 className="section-title">Posts request</h2>
      <code>
        <pre>
          {`  try {
     const res = await fetch(\`\${process.env.NEXT_URL}/api/open\`,{
    method:"POST",
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({message:'Yura Movsesyan'})
  })
  const data = await res.json()
  return data
  } catch (error) {
    return error
  }
 `}
        </pre>
      </code>

      {message && <p>{message}</p>}
    </section>
  );
};

export default PostExample;
