import Image from "next/image"

const AboutPage = () => {
  return (
   <section className="content">
     <h2 className="section-title">About</h2>
     <Image src='/photo-1454165804606-c3d57bc86b40.jpeg' alt="mg" width="500" height="300" priority/>
   </section>
  )
}

export default AboutPage
