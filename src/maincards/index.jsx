// import { useState } from "react";

// const ShopCart = ({ data }) => {
//   const [cart, setCart] = useState(data);

//   // Decrement qilish
//   const handleDecrement = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   // Increment qilish
//   const handleIncrement = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // Delete qilish
//   const handleDelete = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       {cart.map((value) => (
//         <div
//           key={value.id}
//           className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
//         >
//           <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//             <a href="#" className="shrink-0 md:order-1">
//               <img
//                 className="h-20 w-20 dark:hidden"
//                 src={value.img}
//                 alt={value.title}
//               />
//               <img
//                 className="hidden h-20 w-20 dark:block"
//                 src={value.img}
//                 alt={value.title}
//               />
//             </a>

//             <div className="flex items-center justify-between md:order-3 md:justify-end">
//               <div className="flex items-center">
//                 <button
//                   onClick={() => handleDecrement(value.id)}
//                   className="decrement inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
//                 >
//                   -
//                 </button>
//                 <input
//                   value={value.quantity || 1}
//                   readOnly
//                   className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
//                 />
//                 <button
//                   onClick={() => handleIncrement(value.id)}
//                   className="increment inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="text-end md:order-4 md:w-32">
//                 <p className="text-base font-bold text-gray-900 dark:text-white">
//                   {value.price.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//               <a
//                 href="#"
//                 className="text-base font-medium text-gray-900 hover:underline dark:text-white"
//               >
//                 {value.title}
//               </a>

//               <div className="flex items-center gap-4">
//                 <button
//                   type="button"
//                   className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
//                 >
//                   ❤️ Add to Favorites
//                 </button>

//                 <button
//                   onClick={() => handleDelete(value.id)}
//                   type="button"
//                   className="delete inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
//                 >
//                   ❌ Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShopCart;
