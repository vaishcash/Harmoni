

// import Navbar from '../Navbar'

import Mencard from "../components/Mencard";
import MencardRounded from "../components/MencardRounded";
import Footer from "../components/Footer";
import Header from "../components/Header";


const menCard = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f20838ab-108c-4fe6-bd74-0dc7551a2bbd1604906586589-34-Essentials-Masks.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3df8a117-4db8-4cb6-ac0e-e60291d957241604906586646-35-Essentials-BabyCare.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/29baf945-9e5b-4f0e-bb05-0ce65c57f9c91604906586502-32-Essentials-Shorts.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/353fd453-6a17-45b9-b3da-a3dfd88121a31604906586547-33-Essentials-Valuepacks.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/33368b8b-8702-4108-96a9-b8fa5b7ed36f1604906586455-31-Essentials-FlipFlop_sandals.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ab2f5b3-441a-430c-a605-2ac9d06007c01604906586315-28-Essentials-Dresses.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c75a2039-4199-4174-b1b9-fecd30f7d3f91604906586359-29-Essentials-Tshirts_Tops.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/efc4b19d-179f-4437-961c-839df50299a51604906586690-36-Essentials-Night_innerwear.jpg",
  },
];

const menCardRoundedItems = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/df528847-96b6-48cc-9104-064ad788804c1604906588040-61-BudgetBuys-TshirtsUnder499.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/e42fbdcd-31cd-43de-b1eb-0f3f4351e08d1604906588093-62-BudgetBuys-DressesUnder799.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1abffc52-836d-4778-a034-a851b45e43c31604906588162-63-BudgetBuys-EthnicWearUnder999.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb9520c5-20c6-496c-811e-4693bc2828b31604906588221-64-BudgetBuys-ShortsUnder599.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/8430d7ff-a2f4-496a-bf90-b1c3a8cc7d231604906588272-65-BudgetBuys-ValuePacksUnder799.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/af518c66-a610-4ab7-91bf-b343b9c1b8501604906588337-66-BudgetBuys-FootwearUnder699.jpg",
  },
];
const handWatch = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/817ada39-86d3-4162-b10f-443c7d658f541604906587912-59b-Banner-KidsSpace.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/9906ea02-f0e5-40b8-b6db-ce3c5fd5fcf31604906587854-59a-Banner-KidsSpace.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/817ada39-86d3-4162-b10f-443c7d658f541604906587912-59b-Banner-KidsSpace.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/9906ea02-f0e5-40b8-b6db-ce3c5fd5fcf31604906587854-59a-Banner-KidsSpace.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/9906ea02-f0e5-40b8-b6db-ce3c5fd5fcf31604906587854-59a-Banner-KidsSpace.jpg",
  },

];

function Kids() {
  return (
    <div>
    <Header cartCount={0} onCategorySelect={() => {}} selectedCategory={""} />
      {/* banner section  */}
      <div>
        <img
          className="w-full mt-5"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1"
        ></img>
      </div>

      <div>
        <h3 className="text-3xl  font-bold text-left text-transform : uppercase  p-12 ">
          Biggest Deals On Top Brands
        </h3>

        <div className="flex  flex-row flex-wrap justify-center  items-center ">
          {menCard.map((items) => {
            return <Mencard imgUrl={items.imgUrl} />;
          })}
        </div>
        <h3 className="text-3xl font-bold text-left text-transform : uppercase  p-12 ">
          Categories To Shine
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

export default Kids;
