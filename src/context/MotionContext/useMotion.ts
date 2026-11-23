import { useContext } from 'react';

import { MotionContext } from './MotionContext';

export const useMotion = () => useContext(MotionContext);
