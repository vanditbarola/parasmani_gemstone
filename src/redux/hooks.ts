
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const UseAppDispatch = () => useDispatch<AppDispatch>();

export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector