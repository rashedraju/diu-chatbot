import React, { useEffect, useRef } from 'react';
import { Text } from './styled';

const WriteTextAnim = ({ text }) => {
    const TextRef = useRef(null);

    useEffect(() => {
        let count = 0;

        const typeWrite = () => {
            if (count <= text.length && !!TextRef.current) {
                TextRef.current.innerHTML = text.slice(0, count + 1);
                count += 1;
                setTimeout(typeWrite, 100);
            }
        };

        const typeWriteInterval = () => {
            count = 0;
            typeWrite();
            setTimeout(typeWriteInterval, 10000);
        };

        typeWriteInterval();
        return () => {
            typeWriteInterval();
        };
    }, [text]);
    return <Text ref={TextRef} />;
};

export default WriteTextAnim;
