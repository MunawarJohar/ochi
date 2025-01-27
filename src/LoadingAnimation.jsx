// import React, { useEffect } from 'react';
// import gsap from 'gsap';

// const LoadingAnimation = ({ onComplete }) => {
//   useEffect(() => {
//     // GSAP animation when component mounts
//     const tl = gsap.timeline();

//     tl.from(".loading-container", {
//       opacity: 0,
//       duration: 0.5,
//       delay: 0.2,
//     })
//     .from(".loading-container", {
//       scaleX: 0.7,
//       scaleY: 0.2,
//       y: "80%",
//       borderRadius: "150px",
//       duration: 2,
//       ease: "expo.out",
//     })
//     .from("nav", {
//       opacity: 0,
//       delay: -0.2,
//     })
//     .from(".loading-container h1, .loading-container p, .loading-container div", {
//       opacity: 0,
//       duration: 0.5,
//       stagger: 0.2,
//     })
//     .eventCallback("onComplete", onComplete); // Trigger onComplete once animation finishes

//   }, [onComplete]);

//   return (
//     <div className="loading-container flex justify-center items-center w-full h-screen bg-black text-white">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">Loading...</h1>
//         <p className="text-lg">Welcome to my website!</p>
//         <div className="loader mt-4 w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     </div>
//   );
// };

// export default LoadingAnimation;
