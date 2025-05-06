import {Outlet} from 'react-router-dom'
import Header from '../Components/Header'
import type { headerMenuType } from '../Types/headerTypes';


const headerMenu : headerMenuType[] = [
  { route: "/chef-birthday", name: "Compleanno Dello Chef", key: "chef-birthday" },
  { route: "/politicians", name: "BONUS: Lista dei Politici", key: "politicians" },
];

const DefaultLayout = () => {
  return (
    <div>
    <header><Header headerMenu={headerMenu}/></header>
    <main><Outlet /></main>
  </div>
  )
}

export default DefaultLayout

