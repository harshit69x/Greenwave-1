import React, { useState, useEffect } from 'react';

const BackgroundImageComponent = () => {
  const desktopImage = 'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const mobileImage = 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D';

  const [backgroundImage, setBackgroundImage] = useState(desktopImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(mobileImage);
      } else {
        setBackgroundImage(desktopImage);
      }
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="home"
      className="relative w-full h-screen bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          R2S GREENWAVE
        </h1>
        <br />
        <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 font-semibold">
          Your Premier Import-Export Partner
        </p>
        <p className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
          Welcome to  R2S GREENWAVE– Your Premier Import-Export Partner.

          At R2S GREENWAVE we are dedicated to facilitating seamles. s global trade by providing comprehensive import and export solutions tailored to meet the unique needs of our clients. We bring fresh energy and innovative approaches to the dynamic world of international commerce.

          With a deep understanding of the complexities of cross-border transactions, our team of experts is poised to navigate the intricacies of sourcing, logistics, customs clearance, and documentation, ensuring efficient and cost-effective movement of goods across borders.

          Driven by a passion for excellence and a commitment to customer satisfaction, we strive to build long-lasting partnerships with our clients, offering personalized attention and strategic guidance every step of the way. Whether you are a small business venturing into global markets or a multinational corporation seeking to optimize your supply chain, we are here to empower your success.

          Discover the possibilities with us and experience the difference of working with a trusted partner dedicated to your import-export success.

          Contact us today to explore how we can help you unlock new opportunities in the global marketplace.
        </p>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
