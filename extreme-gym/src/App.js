
import { GlobalStyle } from './styles/global';

import { Home } from './components/Home'

function App() {
  return (<>
    <GlobalStyle />
    <Home></Home>

  </> 
  );
}

export default App;




// 320px — 480px: Mobile devices.
// 481px — 768px: iPads, Tablets.
// 769px — 1024px: Small screens, laptops.
// 1025px — 1200px: Desktops, large screens.
// 1201px and more — Extra large screens, TV.