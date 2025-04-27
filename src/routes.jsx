import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Main from './Components/Main/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main/>
      },
    //   {
    //     path: 'about',
    //     element: <About />
    //   },
    //   {
    //     path: 'contact',
    //     element: <Contacts />
    //   },
    //   {
    //     path: 'projects',
    //     element: <Projects/>
    //   }
    ]
  },
  {
    path: '*',
    element: <div style={{ padding: '2rem' }}>Ошибка 404: Страница не найдена</div>
  }
])

export default router