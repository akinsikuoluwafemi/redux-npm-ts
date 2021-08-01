import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;