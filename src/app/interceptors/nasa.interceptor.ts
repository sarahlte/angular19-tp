import { NasaService } from "@/services/nasa.service";
import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";


export const NasaInterceptor: HttpInterceptorFn = (req, next) => {
  const nasaService = inject(NasaService);
  const nasaToken = nasaService.getToken();

  if(nasaToken){
    const nasaReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${nasaToken}`)
    });
    return next(nasaReq);
  }

  return next(req);
};