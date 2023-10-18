
const Banner = () => {
    return (
        <div>
            <div className="hero lg:h-[800px]" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1447176653/photo/circuit-board-green-computer-data-technology-artificial-intelligence.webp?b=1&s=170667a&w=0&k=20&c=GmaJOL3qyjdO9psL10swlbeSdqUKrTnN6EmLvCDKkA4=)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl font-bold">Welcome to our ElectroTech Insights</h1>
      <p className="mb-5 mt-10">ElectroTech Insights: Your tech hub for innovation. Explore cutting-edge electronics, discover the latest trends, and stay informed. Join us in unraveling the wonders of technology!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;