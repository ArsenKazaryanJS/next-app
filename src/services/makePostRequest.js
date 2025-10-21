// export async function makePostRequest() {
//   try {
//     const res = await fetch(`${process.env.NEXT_URL}/api/open`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message: "Yura Movsesyan" }),
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// }