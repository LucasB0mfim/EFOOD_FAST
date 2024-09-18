import { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextProps {
  cartCount: number
  cartItems: Dish[]
  addToCart: (dish: Dish) => void
  removeFromCart: (dishId: number) => void
  clearCart: () => void
  toggleCartVisibility: () => void
  isCartVisible: boolean
}

type Dish = {
  id: number
  foto: string
  nome: string
  preco: number
  descricao: string
  porcao: string
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Dish[]>(() => {
    const savedItems = localStorage.getItem('cartItems')
    return savedItems ? JSON.parse(savedItems) : []
  })

  const [isCartVisible, setCartVisible] = useState(false)

  const cartCount = cartItems.length

  const addToCart = (dish: Dish) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems, dish]
      localStorage.setItem('cartItems', JSON.stringify(newItems))
      return newItems
    })
  }

  const removeFromCart = (dishId: number) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== dishId)
      localStorage.setItem('cartItems', JSON.stringify(newItems))
      return newItems
    })
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cartItems')
  }

  const toggleCartVisibility = () => {
    setCartVisible((prevVisible) => !prevVisible)
  }

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        toggleCartVisibility,
        isCartVisible
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
