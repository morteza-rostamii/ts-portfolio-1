import Vehicles from './Vehicles';
import Energy from './Energy';
import Charging from './Charging';
import Discover from './Discover';
import Shop from './Shop';

const tabs = {
  VEHICLES: "Vehicles",
  ENERGY: 'Energy',
  CHARGING: 'Charging',
  DISCOVER: 'Discover',
  SHOP: 'Shop',
};

const MegaMenu = ({
  //setMegaOpen,
  activeTab,
}: any) => {
  return (
    <div
    className='
    fixed top-0 left-0 right-0
    grid place-content-center
    bg-white min-h-32 text-black
    p-10 pt-24 px-20
    z-[4]
    '
    //onMouseLeave={() => setMegaOpen(false)}
    >
      {!!(activeTab === tabs.VEHICLES) && (
        <Vehicles/>
      )}

      {!!(activeTab === tabs.ENERGY) && (
        <Energy/>
      )}
      {!!(activeTab === tabs.CHARGING) && (
        <Charging/>
      )}

      {!!(activeTab === tabs.DISCOVER) && (
        <Discover/>
      )}
      {!!(activeTab === tabs.SHOP) && (
        <Shop/>
      )}
    </div>
  )
}

export default MegaMenu