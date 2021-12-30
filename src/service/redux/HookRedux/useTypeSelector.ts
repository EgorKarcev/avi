import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '..';

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypeSelector;
