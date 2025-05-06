import { useNavigate } from 'react-router-dom';
import type { headerMenuType } from '../Types/headerTypes';

type HeaderProps = {
  headerMenu: headerMenuType[]
}

const Header = ({headerMenu} : HeaderProps) => {
  const navigate = useNavigate()

  return (
    <header className="bg-gray-800">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600 cursor-pointer" onClick={() => navigate("/")}>
          <img src="./fabio.png" style={{ maxWidth: '50px'}} />
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="block">
            <ul className="flex items-center gap-6 text-sm">
              {headerMenu.map(item => (
                  <li key={item.key}>
                    <a className="text-white transition hover:text-teal-400 cursor-pointer" onClick={() => navigate(item.route)}>{item.name} </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

