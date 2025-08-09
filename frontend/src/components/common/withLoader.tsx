// hoc/withLoader.tsx
import React, { useState, useEffect } from 'react';
import LoadingScreen from './Loader.tsx';

const withLoader = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  pageName: string
): React.FC<P> => {
  const LoaderWrapper: React.FC<P> = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }, []);

    return loading ? <LoadingScreen pageName={pageName} /> : <WrappedComponent {...props} />;
  };

  return LoaderWrapper;
};

export default withLoader;
