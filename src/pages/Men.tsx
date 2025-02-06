// import Navbar from '../Navbar'

import Mencard from "../components/Mencard";
import MencardRounded from "../components/MencardRounded";
import Footer from "../components/Footer";
import Header from "../components/Header";


const menCard = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
  },
];

const menCardRoundedItems = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg",
  },
];
const handWatch = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png",
  },
];

function Men() {
  return (
    <div>
      <Header cartCount={0} onCategorySelect={() => {}} selectedCategory="" />

      <div>
        <img
          className="w-full mt-5"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg"
        ></img>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-left text-transform : uppercase  p-12 ">
          Biggest Deals On Top Brands
        </h3>

        <div className="flex flex-wrap justify-center w-full items-center ">
          {menCard.map((items) => {
            return <Mencard imgUrl={items.imgUrl} />;
          })}
        </div>
        <h3 className="text-3xl font-bold text-left text-transform : uppercase  p-12 ">
          Categories To Bag
        </h3>
        <div className="flex flex-wrap justify-center w-full items-center gap-5">
          {menCardRoundedItems.map((items) => {
            return <MencardRounded imgUrl={items.imgUrl} />;
          })}
        </div>

        <h3 className="text-3xl font-bold text-left text-transform : uppercase  p-12 ">
          Trending In Accessories
        </h3>
        <div className="flex flex-wrap justify-center w-full items-center gap-16">
          {handWatch.map((item) => {
            return <MencardRounded imgUrl={item.imgUrl} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Men;
