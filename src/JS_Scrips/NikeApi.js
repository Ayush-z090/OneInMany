// const url = 'https://nike-api.p.rapidapi.com/get-womens-shoes?next_token=%23SHOE%2310002124';
// console.log("run")
// const shoeTarget = {
//     men : "get-mens-shoes",
//     women : "get-womens-shoes",
// }

// function dynaminUrl(target){
//     return `https://nike-api.p.rapidapi.com/${shoeTarget[target]}?next_token=%23SHOE%2310002124`;
// }

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '4c96888008msh3fb7637c1898aacp103c11jsn77b4c2a92b0d',
// 		'x-rapidapi-host': 'nike-api.p.rapidapi.com'
// 	}
// };

// export default async function getShoeData(target){
//     try {
//         const response = await fetch(dynaminUrl(target), options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getShoeData("men");  