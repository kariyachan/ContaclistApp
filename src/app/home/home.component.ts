import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient, HttpParams } from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';
import { first } from 'rxjs';
import { ArrayType } from '@angular/compiler';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

users:any
list=[]
id:any
userData:any


f_name=[]
l_name=[]
email=[]
img=[]

value=""

  constructor(private ds:DataService,private http:HttpClient){ 
    
  }
      
  ngOnInit(): void {
 
    this.ds.getData().subscribe((data=>{
      // console.log("data is ",data);
      this.users=data;
      this.list=this.users["data"]
      // console.log("Data ngoninit",this.list);
      this.sortByName(this.list)
    }))
  }
//on page loading contacts will sorted by name
  sortByName(list=[]){
  const sortbyname = list.sort((a,b)=>a["first_name"]>b["first_name"]?1:-1)
  console.log("sort by",sortbyname);
    
    }



//to get the id of selected user
  getUserInfo(userinfo:any){
  
    const userid:number=userinfo["id"]
    let userurl=`https://reqres.in/api/users/${userid}`
    return this.http.get(userurl).subscribe((data=>{
          this.userData=data;
          this.f_name=this.userData["data"]["first_name"]
          this.l_name=this.userData["data"]["last_name"]
          this.email=this.userData["data"]["email"]
          this.img=this.userData["data"]["avatar"]
          console.log("User Array",this.f_name);
          
    }))
    
    // return userid;
    
  }
//sorting by first name
  ascending(){
    const list=this.list
    console.log("ascending");
      const sortinasec = list.sort((a,b)=>a["first_name"]>b["first_name"]?1:-1)
      console.log("sort by ascending",sortinasec);     
    
  }

  descending(){
    const list=this.list
    console.log("descending");
      const sortindes = list.sort((a,b)=>a["first_name"]<b["first_name"]?1:-1)
      console.log("sort by descending",sortindes);     
    
  }

//sorting by last name
lname_ascending(){
  const list=this.list
  console.log("ascending");
    const sortinasec = list.sort((a,b)=>a["last_name"]>b["last_name"]?1:-1)
    console.log("sort by ascending",sortinasec);     
  
}

lname_descending(){
  const list=this.list
  console.log("descending");
    const sortindes = list.sort((a,b)=>a["last_name"]<b["last_name"]?1:-1)
    console.log("sort by descending",sortindes);     
  
}

//search


}
