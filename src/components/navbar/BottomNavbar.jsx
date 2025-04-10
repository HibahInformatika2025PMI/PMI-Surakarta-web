/***
 * This component is used to display the bottom navbar of the website.
 * Contains the navigation menu and a donation button.
 */

import { portalInfoItems, tentangKamiItems } from "../../assets/dummyData/ExampleDropdown"
import GradientColor from "../../themes/color_pallete/GradientColor"
import RedOutlineButton from "../buttons/RedOutlineButton"
import Dropdown from "../shared/Dropdown"
import NavbarTitle from "./NavbarTitle"

const BottomNavbar = () => {
  return (
    <div
      className='px-[30px] md:px-[80px] lg:px-[130px] py-1 flex justify-between'
      style={{ background: GradientColor.gradient1 }}
    >
      <ul className='flex items-center'>
        <NavbarTitle navigate={'/'}>Beranda</NavbarTitle>
        <NavbarTitle navigate={'#'}>Donor Darah</NavbarTitle>
        <NavbarTitle navigate='#'>Layanan Ambulance</NavbarTitle>
        <Dropdown items={portalInfoItems}>Portal Info</Dropdown>
        <NavbarTitle navigate='/news'>Berita</NavbarTitle>
        <Dropdown items={tentangKamiItems}>Tentang Kami</Dropdown>
        <NavbarTitle navigate='/admin-news'>Admin-Berita</NavbarTitle>
      </ul>

      <RedOutlineButton>Donasi Sekarang</RedOutlineButton>
    </div>
  )
}

export default BottomNavbar