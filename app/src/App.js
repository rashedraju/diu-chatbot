import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './Context/authContext';
import Layout from './HOC/Layout';
import { UserRoutes } from './Routes';

const App = () => (
    <Router>
        <Layout>
            <AuthProvider>
                <UserRoutes />
            </AuthProvider>
        </Layout>
    </Router>
);
export default App;
