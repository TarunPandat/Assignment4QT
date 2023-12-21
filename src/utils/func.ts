export const getErrorMsgs = (error: any) => {
   if(error?.errors) { 
    let errors = Object.keys(error?.errors).reduce((r: any, i: any) => {
        r.push(error[i][0])
        return r
    }, [])

    return {...error, errors, message: errors[0]}

   }
   return {...error, message: error?.message || 'Something went wrong'}
}


export const getFilterRoutes = (Routes: any, auth: boolean) => {
    return Object.keys(Routes).reduce((r: any, i: any) => {
        if(auth ? Routes[i]?.auth : !Routes[i]?.auth) {
            r.push(Routes[i])
        }
        return r
    }, [])
}