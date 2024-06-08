import React from 'react';

function Features() {
  return (
    <section className="m-4 md:m-8 dark:text-gray-800" id="features">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center" id="a">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Arecanut Palm Leaf Dinnerwares</h2>
          <p>Experience the Natural Elegance of Arecanut Palm Leaf Dinnerware</p>
          <p>Welcome to our product section, where we introduce you to the exquisite world of Arecanut Palm Leaf Dinnerware. Our company takes pride in exporting these eco-friendly, sustainable, and visually stunning dining solutions to global markets.</p>
        </div>
        <h3 className="text-4xl font-bold" id="featureHeader">Why Choose Arecanut Palm Leaf Dinnerware?</h3>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <img src="https://cdn-icons-png.flaticon.com/512/5806/5806342.png" alt="Icon" className="w-8 h-8 dark:text-violet-600"/>
          <h3 className="my-3 text-3xl font-semibold">Eco-friendly</h3>
          <div className="space-y-1 leading-tight">
            <p>Products are made from recycled plastic,</p>
            <p>sustainable materials like bamboo,</p>
            <p>or organic cotton.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="https://cdn-icons-png.flaticon.com/512/10258/10258253.png" alt="Icon" className="w-8 h-8 dark:text-violet-600"/>
          <h3 className="my-3 text-3xl font-semibold">Durable</h3>
          <div className="space-y-1 leading-tight">
            <p>Durable products are built to last,</p>
            <p>providing long-lasting performance</p>
            <p>even under frequent use.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="https://cdn-icons-png.flaticon.com/512/5099/5099419.png" alt="Icon" className="w-8 h-8 dark:text-violet-600"/>
          <h3 className="my-3 text-3xl font-semibold">Non-Toxic</h3>
          <div className="space-y-1 leading-tight">
            <p>These products meet or exceed safety</p>
            <p>standards set by regulatory bodies,</p>
            <p>ensuring their safety.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="https://cdn-icons-png.flaticon.com/512/2991/2991055.png" alt="Icon" className="w-8 h-8 dark:text-violet-600"/>
          <h3 className="my-3 text-3xl font-semibold">Easily Disposable</h3>
          <div className="space-y-1 leading-tight">
            <p>Products can be composted at home or in</p>
            <p>industrial composting facilities,</p>
            <p>turning into soil.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733329.png" alt="Icon" className="w-8 h-8 dark:text-violet-600"/>
          <h3 className="my-3 text-3xl font-semibold">Pricing</h3>
          <div className="space-y-1 leading-tight">
            <p>Enjoy premium quality at a budget-friendly</p>
            <p>price with our latest product offering.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="https://cdn-icons-png.flaticon.com/512/7334/7334113.png" alt="Icon" className="w-8 h-8 dark:text-violet-600"/>
          <h3 className="my-3 text-3xl font-semibold">Unique Aesthetics</h3>
          <div className="space-y-1 leading-tight">
            <p>Products with cool aesthetics feature modern</p>
            <p>sleek designs that align with</p>
            <p>current trends.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
