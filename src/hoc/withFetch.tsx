import {FC, useEffect, useState} from 'react';

const withFetch = (Component: FC, url: string) => {

    return (props: any) => {
        const [items, setItems] = useState<any>([]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com'+url)
                .then(resolve => resolve.json())
                .then(value => {
                    setItems(value);
                    });
        }, []);

        return <Component items={items} {...props}></Component>
    }
}

export default withFetch;