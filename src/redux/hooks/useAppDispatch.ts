import { useDispatch } from 'react-redux';
import { AppDispatch } from '../storeInstance';


export const useAppDispatch = () => useDispatch<AppDispatch>();
