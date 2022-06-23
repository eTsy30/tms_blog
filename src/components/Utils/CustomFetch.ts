

import jwtDecode, { JwtPayload } from "jwt-decode";
import { IsAuth } from 'Redux/Auth/Auth';
//   import { store } from 'Redux/store'
interface IError {
    detail: string
}


const refreshToken = async (refresh: string) => {

    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
    }
    const response = await fetch(
        'https://studapi.teachmeskills.by/auth/jwt/refresh/',
        {
            method: 'POST',
            body: JSON.stringify({ refresh }),
            headers,
        }
    )
    const data = await response.json()


    if (!response.ok) {
        return Promise.reject(data as IError)
    }

    localStorage.setItem('access', JSON.stringify(data.access))

    localStorage.setItem('auth', 'true')
    return data.access
}


export const customFetch = async (url: string, config: any = {}) => {
    const { store } = await import('Redux/store')

    // const dispatch = useDispatch()
    let access = localStorage.getItem('access')

    let token = access ? JSON.parse(access) : null


    try {
        if (token) {
            const accessToken = jwtDecode<JwtPayload>(token)


            const expirationMillisTime = accessToken?.exp ? accessToken.exp * 1000 : 0
            const isAccessExpired = expirationMillisTime
                ? expirationMillisTime - Date.now() < 0
                : false

            store.dispatch(IsAuth(isAccessExpired))



            if (isAccessExpired) {
                try {
                    const refresh = localStorage.getItem('refresh')

                    if (refresh) {
                        token = await refreshToken(JSON.parse(refresh))
                    }
                } catch (error) {
                    console.log('Error with getting token', error)
                }
            }


            config.headers = {
                Authorization: `Bearer ${token}`,
            }

            const response = await fetch(url, config)
            // if (response.status === 401) { dispatch(IsAuth(false)) } else {
            //     dispatch(IsAuth(true))
            // }
            return await response.json()
        }
    } catch (error) {
        console.log(`Error with fetching resource ${url}`, error)
    }
}