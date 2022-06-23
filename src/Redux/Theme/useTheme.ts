import { useAppDispatch, useAppSelector } from '../hooks';
import { setTheme } from "../Theme/ThemeReduser";


export const useTheme = () => {
    const theme = useAppSelector(state => state.theme.value)
    const dispatch = useAppDispatch()

    const toggleTheme = (newTheme: any) => dispatch(setTheme(newTheme))

    return {
        theme,
        toggleTheme,
    }
}