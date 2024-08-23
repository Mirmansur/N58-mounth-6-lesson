// import { useRouter } from "next/router";

// const Singil = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const productId = Number(id);

//   const data = {
//     products: [
//       {
//         id: 1,
//         title: "Germany",
//         population: "81,770,900",
//         region: "Europe",
//         capital: "Berlin",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
//       },
//       {
//         id: 2,
//         title: "United States of America",
//         population: "323,947,000",
//         region: "Americas",
//         capital: "Washington, D.C.",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/640px-Flag_of_the_United_States_%28Pantone%29.svg.png",
//       },
//       {
//         id: 3,
//         title: "Brazil",
//         population: "211,049,000",
//         region: "South America",
//         capital: "Brasília",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
//       },
//       {
//         id: 4,
//         title: "Uzbekistan",
//         population: "34,233,000",
//         region: "Central Asia",
//         capital: "Tashkent",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
//       },
//       {
//         id: 5,
//         title: "Afghanistan",
//         population: "38,928,000",
//         region: "South Asia",
//         capital: "Kabul",
//         image:
//           "https://cdn.britannica.com/40/5340-050-AA46700D/Flag-Afghanistan.jpg",
//       },
//       {
//         id: 6,
//         title: "Åland Islands",
//         population: "30,000",
//         region: "Europe",
//         capital: "Mariehamn",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg",
//       },
//       {
//         id: 7,
//         title: "Albania",
//         population: "2,827,000",
//         region: "Europe",
//         capital: "Tirana",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3oC2fAPycTMRBwivt_59S07mU48t--9m8Q&s",
//       },
//       {
//         id: 8,
//         title: "Algeria",
//         population: "44,178,000",
//         region: "Africa",
//         capital: "Algiers",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AXjU6yAF43uaFGcyZew1WRxpfRCVb3bgEw&s",
//       },
//     ],
//   };

//   const product = data.products.find((p) => p.id === productId);

//   if (!product || isNaN(productId)) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="ProductDetail bg-gray-100 min-h-screen p-8">
//       <div className="container mx-auto">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <img
//             className="w-full h-48 object-cover"
//             src={product.image}
//             alt={product.title}
//           />
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
//             <p className="text-gray-600 mb-1">
//               <strong>Population:</strong> {product.population}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Region:</strong> {product.region}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Capital:</strong> {product.capital}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Singil;
