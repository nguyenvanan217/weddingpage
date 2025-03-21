const Footer = () => {
  return (
    <div className="relative h-auto sm:h-[600px]">
      <img
        src="https://tuart.net/wp-content/uploads/2022/01/270284502_1589108414821889_2158477857562109361_n.jpg"
        alt=""
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-300">
        <div
          className=" absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 bg-white bg-opacity-50 flex flex-col justify-center items-center leading-[35px]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          <h1 className="text-5xl sm:text-7xl">Thank you</h1>
          <h3 className="italic text-2xl sm:text-4xl">Rất hân hạnh được đón tiếp</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
