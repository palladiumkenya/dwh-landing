const Products = () => {
  const tiles = [
    {
      image: "/icon1.png",
      name: "App One",
      description: "This is the description for App One."
    },
    {
      image: "/icon2.png",
      name: "App Two",
      description: "This is the description for App Two."
    },
    {
      image: "/icon3.png",
      name: "App Three",
      description: "This is the description for App Three."
    },
    {
      image: "/icon4.png",
      name: "App Four",
      description: "This is the description for App Four."
    }
  ];

  return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-left">Information Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiles.map((tile, index) => (
              <div
                  key={index}
                  className={`shadow-lg rounded-lg p-4 text-center ${index % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              >
                <img src={tile.image} alt={tile.name} className="mx-auto mb-4 h-16 w-16" />
                <h2 className="text-xl font-bold mb-2">{tile.name}</h2>
                <p className="text-gray-600">{tile.description}</p>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Products;
