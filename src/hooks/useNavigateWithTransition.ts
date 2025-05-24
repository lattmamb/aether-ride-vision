
import { useNavigate } from 'react-router-dom';
import { useTransition } from '@/contexts/TransitionContext';

export const useNavigateWithTransition = () => {
  const navigate = useNavigate();
  const { triggerTransition } = useTransition();

  const navigateWithTransition = (path: string, delay: number = 2000) => {
    triggerTransition();
    setTimeout(() => {
      navigate(path);
    }, delay);
  };

  return navigateWithTransition;
};
