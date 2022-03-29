import './App.css';
import Categories from "./components/Categories"


function App() {
  return (
    <div style={menuWrapperStyle} className="menu-wrapper">
          <Categories />
    </div>
  );
}


const menuWrapperStyle = {
  display : "flex",
  justifyContent : "center",
  flexDirection : "column"
}

export default App;
