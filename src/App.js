import logo from './logo.svg';
import './App.css';
import { getMenuHeader } from './gql/Query';
import { useEffect, useState } from 'react';
import { Markup } from 'interweave';

function App() {
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getMenuHeader().then(res => (
      setMenu(res),
      console.log(res)
    ))
}, [])
  return (
    <div className="App">
        <ul className="menu">
          {menu &&
            menu.menus &&
            menu.menus.edges &&
            menu.menus.edges[0] &&
            menu.menus.edges[0].node &&
            menu.menus.edges[0].node.menuItems &&
            menu.menus.edges[0].node.menuItems.edges && 
            menu.menus.edges[0].node.menuItems.edges.map((item, index) => (
              <li>{item.node.label}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;
