import { ReactNode, useEffect, useState } from 'react'

const Route = ({ path, children }: {path: string; children: ReactNode}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // define callback as separate function so it can be removed later with cleanup function
        const onLocationChange = () => {
            console.log('Location Change');
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        // clean up event listener
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };
    }, [])
    return currentPath === path ? children : null
  }
  
  export default Route