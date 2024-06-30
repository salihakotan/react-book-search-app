import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookDetail from "./pages/BookDetail";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="pageContent">


          <Routes>
            <Route path="/book/:id" element={<BookDetail/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>


        
        </div>
          
          <Footer/>
    </div>
  );
}

export default App;
