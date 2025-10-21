import Button from "@/components/Button";
// import { getMessageFromApi } from "@/services/getMessageFromApi";

// export const dynamic = 'force-dynamic';


export default async function Home() {
  // const {message} = await getMessageFromApi()

  return (
    <div className="content">
      <h1>Ուսումնասիրում ենք NEXT JS</h1>
      <p>
        Next.js-ը գործիք է (ֆրեյմվորք), որը օգնում է ստեղծել ժամանակակից
        կայքեր և վեբ հավելվածներ։ Այն հիմնված է React գրադարանի վրա, բայց
        ավելացնում է շատ օգտակար հնարավորություններ, որոնք հեշտացնում և
        արագացնում են ծրագրավորումը։
      </p>
      <Button />
      {
        // message &&  <p>{message}</p>
      }
     
    </div>
  );
}
