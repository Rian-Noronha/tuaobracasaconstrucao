import { HttpInterceptorFn } from '@angular/common/http';



const getToken = () => {
  return localStorage.getItem('authToken');
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = getToken();

  if(token){
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(clonedReq);
  }
  return next(req);
};
