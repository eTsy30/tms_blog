import { log } from 'console';
import jwtDecode, { JwtPayload } from "jwt-decode";
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

    return data.access
}


export const customFetch = async (url: string, config: any = {}) => {
    let access = localStorage.getItem('access')

    let token = access ? JSON.parse(access) : null

    try {
        if (token) {
            const accessToken = jwtDecode<JwtPayload>(token)

            const expirationMillisTime = accessToken?.exp ? accessToken.exp * 1000 : 0
            const isAccessExpired = expirationMillisTime
                ? expirationMillisTime - Date.now() < 0
                : false



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

            return await response.json()
        }
    } catch (error) {
        console.log(`Error with fetching resource ${url}`, error)
    }
}