import { Redirect, Route, Switch } from 'react-router-dom';
import Chat from '../Containers/Chat/Chat';
import Home from '../Containers/Home/Home';
import { useAuthStore } from '../Context/authContext';
import ChatProvider from '../Context/chatContext';
import withAsyncComponent from '../HOC/withAsyncComponent';

const asyncAuth = withAsyncComponent(() => import('../Containers/Auth/Auth'));

export const UserRoutes = () => {
    const { isAuthenticated } = useAuthStore();
    return (
        <Switch>
            {isAuthenticated && (
                <Route exact path="/chat">
                    <ChatProvider>
                        <Chat />
                    </ChatProvider>
                </Route>
            )}
            <Route exact path="/auth" component={asyncAuth} />
            <Route exact path="/">
                <Home />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
