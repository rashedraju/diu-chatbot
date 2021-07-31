/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Backdrop from '../Components/UI/Backdrop/Backdrop';
import { ProcessLoader } from '../Components/UI/Loader/Loader';
import PageNotFound from '../Components/UI/PageNotFound/PageNotFound';

const withAsyncComponent = (importComponent) => {
    const AsyncComponent = () => {
        const [component, setComponent] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(false);

        useEffect(() => {
            const fetchCompoent = async () => {
                setLoading(true);
                setError(false);
                try {
                    const cmp = await importComponent();
                    setComponent(cmp.default);
                } catch (err) {
                    setError(true);
                } finally {
                    setLoading(false);
                }
            };

            fetchCompoent();
        }, []);

        if (component) {
            const C = component;
            return <C />;
        }

        if (error) return <PageNotFound />;

        return (
            <Backdrop>
                <ProcessLoader />
            </Backdrop>
        );
    };

    return AsyncComponent;
};

export default withAsyncComponent;
