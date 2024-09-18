import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'

import Footer from './components/Footer'
import Cart from './components/Cart'

import { CartProvider } from './Utils'

import { AppContainer, GlobalStyles, MainContent } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppContainer>
            <MainContent>
              <Rotas />
            </MainContent>
            <Footer />
            <Cart />
          </AppContainer>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  )
}

export default App
