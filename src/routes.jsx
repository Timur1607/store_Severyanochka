import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Main from './Components/Main/Main'
import Catalog from './Components/Catalog/Catalog'
import Select from './Components/Select/Select'
import Orders from './Components/Orders/Orders'
import Basket from './Components/Basket/Basket'
import Vacancies from './Components/Vacancies/Vacancies'
import Articles from './Components/articles/articles'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'

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
      {
        path: 'vacancies',
        element: <Vacancies/>
      },
      {
        path: 'articles',
        element: <Articles/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contacts',
        element: <Contacts/>
      },
    ]
  },
  {
    path: '*',
    element: <div style={{ padding: '2rem' }}>Ошибка 404: Страница не найдена</div>
  }
])

export default router