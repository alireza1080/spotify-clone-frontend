import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import HomePage from '../pages/Home/home.page.tsx'
import AuthCallbackPage from '../pages/AuthCallback/authCallback.page.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    },
    {
        path: '/auth-callback',
        element: <AuthCallbackPage />
    }
])

export default router