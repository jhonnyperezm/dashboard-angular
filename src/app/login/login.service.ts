import {Injectable} from '@angular/core';
import {RutasService} from '../services/service/rutas.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';


@Injectable({
  providedIn: 'root'
})

/**
 * LoginService servicio utilizado para obtener la informacion necesaria de logueo a la aplicacion
 */
export class LoginService {
  /**
   * Constructor donde se importa la libreria http para consumo de servicios
   */
  path: any;
  private baseUrlUsuarios = 'usuarios/';

  constructor(public http: HttpClient,
              public rutasService: RutasService) {
    this.path = this.rutasService.getPath();
  }

  /**
   * Comment for method ´el servicio consulta la informacion de token y usuario segun, correo y clave enviados´ .
   * @returns       response
   */
  // postLoginCartera(user, pass) {
  //   console.log('Que llega path', this.path);
  //   console.log('user', user);
  //   console.log('pass', pass);
  //   /**
  //    * Se agrega en cabezados para el consumo del servicio
  //    */
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   console.log('headers', headers);
  //   /**
  //    * Se agrega las opciones para el consumo del servicio
  //    */
  //   const options = new RequestOptions({ headers });
  //   console.log('option', options);
  //   /**
  //    * variable con parametro especifico en el consumo del servicio de logueo
  //    */
  //
  //     // const response = this.http.get('http://gd3.gamasoftcol.com:8081/backcartera/ptigCartera/usuarios/auth/'+user+"/"+pass,options);
  //   const response = this.http.post(this.path + 'usuariosCid/auth/' + user + '/' + pass, options);
  //   return response;
  // }





  postLoginCartera(user, pass) {
    console.log('Que llega path', this.path);
    console.log('user', user);
    console.log('pass', pass);
    /**
     * Se agrega en cabezados para el consumo del servicio
     */
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log('headers', headers);
    /**
     * Se agrega las opciones para el consumo del servicio
     */
    const options = {headers};
    console.log('option', options);
    // const options = new RequestOptions({headers: headers});
    return this.http.post(this.path + 'usuariosCid/auth/' + user + '/' + pass, options);
  }

  postLogin(user, pass, ip) {
    /**
     * Se agrega en cabezados para el consumo del servicio
     */
    const headers = new HttpHeaders({'Content-Type': 'text/plain'});
    /**
     * Se agrega las opciones para el consumo del servicio
     */
    const options = {headers, responseType: 'text'};
    // const options = new RequestOptions({headers: headers});
    /**
     * variable con parametro especifico en el consumo del servicio de logueo
     */
    console.log(ip);
    // const response = this.http.post('http://localhost:8080/backgama/ptigGama/usuarios/auth/' + user + '/' + pass, options);
    return this.http.post(this.path + 'usuarios/auth/' + user + '/' + pass + '/' + ip, options);

  }


  decodeToken(token) {
    /**
     * Se agrega en cabezados para el consumo del servicio
     */
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    /**
     * Se agrega las opciones para el consumo del servicio
     */
    const options = {headers};
    // const options = new RequestOptions({headers: headers});

    // const response = this.http.get('http://localhost:8080/backgama/ptigGama/usuarios/decodeToken/' + token, options)
    // .map(res => res.json());
    return this.http.get(this.path + 'usuarios/decodeToken/' + token, options);

  }

  decodeTokenCi(token) {
    /**
     * Se agrega en cabezados para el consumo del servicio
     */
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    /**
     * Se agrega las opciones para el consumo del servicio
     */
    const options = {headers};
    // const options = new RequestOptions({headers: headers});


    // const response = this.http.get('http://localhost:8080/backgama/ptigGama/usuarios/decodeToken/' + token, options)
    // .map(res => res.json());
    return this.http.get(this.path + 'usuariosCid/decodeToken/' + token, options);

  }

  clienteAplicaciones(token) {
    /**
     * Se agrega en cabezados para el consumo del servicio
     */
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'token': token});
    /**
     * Se agrega las opciones para el consumo del servicio
     */
    const options = {headers};
    // const options = new RequestOptions({headers: headers});
    return this.http.get('/sac/' + this.path + 'clienteAplicaciones/findAplicaciones/true', options);

  }

  updateClave(DataJson) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = {headers};
    // const options = new HttpRequest({headers: headers});
    return this.http.get(this.path + this.baseUrlUsuarios + 'olvidoContrasena/' + DataJson.nombre, options);
  }
}
