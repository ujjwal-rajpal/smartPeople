import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable ,  throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private user = new BehaviorSubject({});

  constructor(
    private http: HttpClient,
  ) { }
  /**
   * update user when value changes
   * @param value 
   * @return observable
   */
    public updateUser(value){
      this.user.next(value);
    }
    /**
     * used to get updated user
     * @returns observable
     */
    public getUpdatedUser() : Observable<any> {
      return this.user
    }
  /**
   * used to formate errors
   * @param error 
   * @returns 
   */
   private formatErrors(error: any) {
    return  throwError(error.error);
  }
  /*
  * used to get employee list
  * @param path|page|limit
  * @return observable | error
  **/
  getEmployeeList(path: string, page:number, limit: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}?_page=${page}&_limit=${limit}`)
      .pipe(catchError(this.formatErrors));
  }

  /*
  * used delete employee
  * @param path|page|limit
  * @return observable | error
  **/
  deleteEmployee(path: string,id:number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}/${id}`)
      .pipe(catchError(this.formatErrors));
  }
  /**
   * used to store new employee
   * @param path 
   * @param id 
   * @returns observable | error
   */
  newEmployee(path: string, value: object): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, value)
      .pipe(catchError(this.formatErrors));
  }

}
