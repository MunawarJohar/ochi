import React from 'react'

const Reviews = () => {
  return (
    <div  className='w-full py-20'>
      <div className='w-full px-20 border-b-1 border-zinc-700 pb-20'>
        <h1 className="text-7xl tracking-tight font-['Neue_Montreal']">Clients’ reviews</h1>
      </div>
      
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          {/* Left Card */}
          <div
            className='cardContainer relative w-1/2 h-[75vh]'
            onMouseEnter={() => setHoveredCard('FYDE')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.h1
              className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[5] text-[#CDEA68] text-6xl'
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: hoveredCard === 'FYDE' ? 1 : 0,
                x: hoveredCard === 'FYDE' ? 0 : 100,
              }}
              transition={{ duration: 0.5 }}
            >
              {"FYDE".split('').map((item, index) => {
                return <span className='' key={index}>{item}</span>;
              })}
            </motion.h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <motion.img
                className='w-full h-full bg-cover'
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
                animate={{
                  scale: hoveredCard === 'FYDE' ? 0.95 : 1, // Shrinks the image on hover
                }}
                transition={{
                  duration: 0.3, // Adjust speed of the scaling
                }}
              />
            </div>
          </div>

          {/* Right Card */}
          <div
            className='cardContainer relative w-1/2 h-[75vh]'
            onMouseEnter={() => setHoveredCard('Vise')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.h1
              className='absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[5] text-[#CDEA68] text-6xl'
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: hoveredCard === 'Vise' ? 1 : 0,
                x: hoveredCard === 'Vise' ? 0 : -100,
              }}
              transition={{ duration: 0.5 }}
            >
              {"Vise".split('').map((item, index) => {
                return <motion.span className='inline-block' key={index}>{item}</motion.span>;
              })}
            </motion.h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <motion.img
                className='w-full h-full bg-cover'
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                alt=""
                animate={{
                  scale: hoveredCard === 'Vise' ? 0.95 : 1, // Shrinks the image on hover
                }}
                transition={{
                  duration: 0.3, // Adjust speed of the scaling
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews