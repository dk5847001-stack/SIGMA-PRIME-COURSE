import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Edit from "./pages/Edit"
function App() {

  return (
    <div className="bg-slate-900 min-h-screen w-full text-white py-4">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
