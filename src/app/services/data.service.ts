import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

 baseurl="https://reqres.in/api/users?page=1"

 
  constructor(private http:HttpClient) {
    
   }

  getData(){
    return this.http.get(this.baseurl)
  }


}

