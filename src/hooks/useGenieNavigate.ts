
import { useNavigate } from 'react-router-dom';
import { useGenieTransition } from '@/contexts/GenieTransitionContext';

export const useGenieNavigate = () => {
  const navigate = useNavigate();
  const { triggerGenie } = useGenieTransition();

  const navigateWithGenie = (path: string, delay: number = 1200) => {
    triggerGenie();
    setTimeout(() => {
      navigate(path);
    }, delay);
  };

  return navigateWithGenie;
};
