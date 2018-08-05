import App from 'containers/App'
import { PageHome, PageRepo, AuthWrapper, PageProfile } from 'containers'

export default [
  {
    path: '/',
    exact: true,
    component: PageHome
  },
  {
    path: '/repo/:organization/:project',
    component: PageRepo,
  },
  {
    component: AuthWrapper,
    routes:[
      {
        path: '/profile',
        component: PageProfile,
      },
    ]
  },
]
