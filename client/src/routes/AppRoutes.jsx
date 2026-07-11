import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AddEdit from '../pages/AddEdit/AddEdit'
import ReceivedPoA from '../pages/ReceivedPoA/ReceivedPoA'
import Salespersons from '../pages/Salespersons/Salespersons'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/edit/:id" element={<AddEdit />} />
            <Route path="/received" element={<ReceivedPoA />} />
            <Route path="/salespersons" element={<Salespersons />} />
        </Routes>
    )
}

export default AppRoutes