import React from 'react';

function Content() {
  return (
    <>
      <section className="bg-white dark:bg-gray-200">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-normal text-gray-500 sm:text-lg dark:text-black">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">About Us</h2>
            <div className="mb-4">
              <p className="mb-4">
              <b>R2S GREENWAVE</b> is more than just an import-export firm, we are catalysts for your global success story.
              </p>
              <p className="mb-4">
              Our vision is to inspire a cultural shift towards eco-conscious dining practices, where consumers prioritize products that are not only aesthetically pleasing but also environmentally friendly and socially responsible.              </p>
              <p className="mb-4">
              Driven by a relentless pursuit of excellence and a passion for forging meaningful connections across borders, we have quickly established ourselves as trusted partners for businesses of all sizes seeking to expand their horizons and reach new markets.              </p>
              <p className="mb-4">
              At R2S GREENWAVE, we believe that success is built on a foundation of integrity, reliability, and unwavering dedication to our clients' goals. We take pride in our ability to understand the unique challenges and opportunities facing each client and tailor our services to deliver tangible results that drive growth and profitability.              </p>
              <p className="mb-4">
              Our team of industry experts brings a wealth of knowledge and experience to every project, ensuring that we stay ahead of the curve and anticipate the evolving needs of the global marketplace. From sourcing the finest products to navigating complex regulatory environments and optimizing supply chain logistics, we are committed to providing end-to-end solutions that empower our clients to thrive in an increasingly interconnected world
              </p>
              <p className="mb-4">
              But our journey is not just about business; it's about building relationships, fostering innovation, and creating lasting impact. We are deeply invested in the success of our clients and the communities we serve, and we continuously strive to make a positive difference in everything we do.
              </p>
              <p className="mb-4">
              Join us on this exhilarating journey as we continue to push the boundaries of what's possible in global trade. Together, let's write the next chapter of success for your business.              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJ1c2luZXNzfGVufDB8fDB8fHww" alt="office content 2" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
