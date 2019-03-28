import { useState } from 'react';

const useTracking = (message) => {
    const [count, setCount] = useState(0);

    const track = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    console.log(message, count);

    return [count, track];
};

export default useTracking;
