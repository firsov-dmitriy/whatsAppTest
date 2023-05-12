import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppRootState } from '../storeInstance';


export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
