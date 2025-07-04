import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';

// Lazy load heavy 3D components
const EarthCanvas = lazy(() => import('./canvas/Earth'));
const BallCanvas = lazy(() => import('./canvas/Ball'));
const ComputersCanvas = lazy(() => import('./canvas/Computers'));
const StarsCanvas = lazy(() => import('./canvas/Stars'));

// Generic lazy canvas wrapper
const LazyCanvas = ({ 
  component: Component, 
  fallback = <Loader />, 
  ...props 
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

// Optimized canvas components with error boundaries
export const LazyEarthCanvas = (props) => (
  <LazyCanvas component={EarthCanvas} {...props} />
);

export const LazyBallCanvas = (props) => (
  <LazyCanvas component={BallCanvas} {...props} />
);

export const LazyComputersCanvas = (props) => (
  <LazyCanvas component={ComputersCanvas} {...props} />
);

export const LazyStarsCanvas = (props) => (
  <LazyCanvas component={StarsCanvas} {...props} />
);

export default LazyCanvas;
