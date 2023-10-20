import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const BandProducts = () => {
    const bandProducts = useLoaderData();
    
    console.log(bandProducts);
    return (
       <div>
       <div className="carousel w-full h-[800px]">
  <div id="slide1" className="carousel-item relative w-full hero hero-overlay bg-opacity-60">
    <img src="https://afpbb.ismcdn.jp/mwimgs/7/2/1000x/img_72f333ea9b6cae887d9c2c982a45f16c77306.jpg" className="w-full h-[800px]" />
    <h1 className="text-5xl font-bold text-white">Google Brand</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full hero hero-overlay bg-opacity-60">
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_Samsung_Marketing_Strategy_Solidifies_Its_Brand_Value.jpg" className="w-full h-[800px]" />
    <h1 className="text-5xl font-bold text-black">Samsung Brand</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full hero hero-overlay bg-opacity-60">
    <img src="https://www.worldatlas.com/r/w1200/upload/44/73/0e/shutterstock-780065911.jpg" className="w-full h-[800px]" />
    <h1 className="text-5xl font-bold text-emerald-500">Apple Brand</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
        <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 py-20">
            {
                bandProducts.map(product => <ProductsCard product={product} key={product.id}></ProductsCard>)

            }
        </div>
        </div>
       </div>
    );
};

export default BandProducts;