import React from 'react';

function Gallery() {
  const images = [
    "https://www.promocatering.co.uk/img/product/1712747512_c5799__round_bowl_palmleaf_12cm.jpg",
    "https://www.jiomart.com/images/product/original/rvayyutkcr/leafshelf-disposable-palm-leaf-plates-microwave-oven-safe-compostable-biodegradable-disposable-tableware-eco-friendly-use-throw-plates-party-dinner-plate-8-8-inch-pack-of-100-product-images-orvayyutkcr-p606369707-1-202311291045.jpg?im=Resize=(420,420)",
    "https://imgs.search.brave.com/5_ObBlB-mQQOudh9hQWDTw_G1js3nVTA9yNfLdKFhcI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b3VyZW5kYW5nZXJl/ZHdvcmxkLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/Ny9QcmVtaXVtLVBs/YW5ldC1iaW9kZWdy/YWRhYmxlLXBsYXRl/cy5qcGcud2VicA",
    "https://5.imimg.com/data5/WO/IJ/CS/SELLER-10830238/eco-friendly-disposable-plates.jpg",
    "https://greenpaperproducts.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0612%2F3690%2F4162%2Fproducts%2Fvegware_cutlery_vt-fk6_MEDIUM_fe90a17d-3de5-489e-bc37-4b597311a999.jpg%3Fv%3D1706026378&w=640&q=75",
    "https://m.media-amazon.com/images/I/81HzQzmE-dL.jpg",
    "https://www.theecoambassador.com/images/why-disposable-palm-leaf-plates-and-bowls-21793839.jpg",
    "https://maku.kitchen/wp-content/uploads/2023/05/2c38db5e9ad8a33e8f6a926ee19a5c89c9ff36b1e7300d69e9bfce35cd27255f.jpg",
    "https://m.media-amazon.com/images/I/81DKCTbkeJL._AC_UF894,1000_QL80_.jpg",
    "https://www.thekayacollection.com/cdn/shop/products/Square-Palm-Leaf-3-Partition-Eco-Friendly-Disposable-Dinner-Plates-Secondary.jpg?v=1625770337"
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4" id="gallery">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-full place-items-center">
        {images.map((src, index) => (
          <img
            key={index}
            className="w-72 h-72 object-cover hover:opacity-75"
            src={src}
            alt={'Gallery item ${index + 1}'}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;