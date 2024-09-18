import { Routes, Route } from 'react-router-dom'

import RestaurantList from './pages/RestaurantList'
import DishesList from './pages/DishesList'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<RestaurantList />} />
    <Route path="/product/:id" element={<DishesList />} />
  </Routes>
)

export default Rotas
