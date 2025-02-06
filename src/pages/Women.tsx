// import Navbar from '../Navbar'

import Mencard from "../components/Mencard";
import MencardRounded from "../components/MencardRounded";
import Footer from "../components/Footer";
import Header from "../components/Header";


const menCard = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/814b8ff4-1dec-4a6e-86b8-c26f5c40fe4c1598892518923-Biba.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/814b8ff4-1dec-4a6e-86b8-c26f5c40fe4c1598892518923-Biba.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/48aa9321-1906-4471-be70-20ef124459971598892519217-M_S.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8f070770-db34-4e20-ab80-59728106460a1598892519078-GAP.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3f125d86-5139-4ee2-8561-5a610c2624421598892519314-Only.jpg",
  },
];

const menCardRoundedItems = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg",
  },
];
const handWatch = [
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b5fb5332-cad0-4c04-bd5e-70189f5efef01597840218056-Content-accessories-mostselling-mangalsutra.png",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/bc36f35b-f5ce-4168-bd96-d3c1f65ec4e21598030134870-Content-mostselling-Accessories-Rosegoldwatch.jpeg",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png",
  },
];

function Men() {
  return (
    <div>
      <Header
        cartCount={0}
        onCategorySelect={() => {}}
        selectedCategory=""
      />
      <div>
        <img
          className="w-full mt-5"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg"
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

export default Men;
