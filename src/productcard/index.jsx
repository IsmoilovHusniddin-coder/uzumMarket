import { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const API = "https://dummyjson.com/products?category=fragrances";
    const getData = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data.products); // API ichidan productlarni olamiz
    };
    getData();
  }, []);

  return (
    <div className="containers">
      <div className="cards flex flex-wrap gap-5">
        {products.map((element) => (
          <div
            key={element.id}
            className="card bg-[#ffffff] inline rounded-[20px] w-[232px]"
          >
            <div className="flex w-[100%] h-[300px] text-center items-center mx-auto">
              <img
                className=""
                src={element.thumbnail} // dummyjson `img` emas, `thumbnail` beradi
                alt="rasm"
              />
              <i className="fa-regular fa-heart"></i>
            </div>
            <div>
              <h3 className="font-normal  text-[14px] leading-[20px] text-[#141821]">
                {element.title.slice(0, 20) + "..."}
              </h3>
              <div className="flex items-center justify-between">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="font-medium text-[12px] leading-[20px] text-[#C2C6D1]">
                  1 отзывов
                </p>
              </div>
              <del className="block mt-[15px] mb-[5px] font-normal text-[12] leading-[16px] text-[#94A3B8]">
                {element.price.toLocaleString()}
              </del>
              <strong className="block font-bold text-[18px] leading-[24px] text-[#006BFF]">
                {(element.price - (element.price * 10) / 100).toLocaleString()}
              </strong>
              <button className="w-[100%] p-[5px] border-[1px] border-[#FE7300] rounded-[4px] text-start mt-[8px] mb-[25px] font-normal text-[14px] leading-[20px] text-[#FE7300]">
                {/* month API'da yo'q, sen qo‘shgan field bo‘lsa alohida handle qilish kerak */}
                {((element.price * 110) / 100 / 12).toFixed(2)} x 12
              </button>
              <p className="font-normal mb-[8px] text-[12px] leading-[20px] text-[#141821]">
                {element.description.slice(0, 20) + "..."}
              </p>
              <div className="flex items-center gap-1">
                <button
                  data-id={element.id}
                  className="shop font-bold text-[13px] leading-[24px] text-[#FFFFFF] py-[10px] px-[20px] bg-[#006BFF] rounded-[10px]"
                >
                  Купить в один клик
                </button>
                <img src="./images/basket.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
