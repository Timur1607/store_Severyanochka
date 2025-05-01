import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Main from './Components/Main/Main'
import Catalog from './Components/Catalog/Catalog'
import Select from './Components/Select/Select'
import Orders from './Components/Orders/Orders'
import Basket from './Components/Basket/Basket'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main/>
      },
      {
        path: 'catalog',
        element: <Catalog/>
      },
      {
        path: 'select',
        element: <Select/>
      },
      {
        path: 'orders',
        element: <Orders/>
      },
      {
        path: 'basket',
        element: <Basket/>
      },
    ]
  },
  {
    path: '*',
    element: <div style={{ padding: '2rem' }}>Ошибка 404: Страница не найдена</div>
  }
])

export default router