const Banner = () => {
  return (
      <div className="max-w-7xl mx-auto banner bg-cover bg-center justify-center items-center py-8">
        <div className=" px-4 flex items-center space-x-8">
          <div className="text-left">
            <h1 className="text-4xl font-bold">2372</h1>
            <p className="text-sm">Facilities</p>
          </div>
          <div className="border-l border-white h-16"></div>
          <div className="text-left">
            <h1 className="text-4xl font-bold">44</h1>
            <p className="text-sm">Counties</p>
          </div>
          <div className="border-l border-white h-16"></div>
          <div className="text-left">
            <h1 className="text-4xl font-bold">40</h1>
            <p className="text-sm">SDPs</p>
          </div>
        </div>
      </div>
  );
}

export default Banner;