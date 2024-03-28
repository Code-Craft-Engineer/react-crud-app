import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header"
import Tables from "./components/Tables"
import AddForm from "./components/AddForm";
import UpadateForm from "./components/UpadateForm";
import { useState } from "react";


function App() {

  const [user, setUser] = useState([])
  console.log(user)
  return (
    <>

      <Router>
        <div className="dark:bg-gray-800 h-screen">
          <Header />
          <Routes>
            <Route index element={<Tables user={user} />} />
            <Route path="/add" element={<AddForm setUser={setUser} />} />
            <Route path="/update/:id" element={<UpadateForm user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
