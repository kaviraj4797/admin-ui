import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './table.constants';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
editName:any
editEmail:any
editRole:any
searchTerm: any;

  url='https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
values:any
v=''
selected=false
 idvalues : number[] = [];
kavi=[]
page = 1;
  pageSize = 4;

// value:any
data:data|undefined
  folderObjs: any;
  sortedArray: any;
  collectionSize: any;
  
  constructor(public http:HttpClient) {
    
   }







  
  name = 'Angular';
  enableEdit = false;
  enableEditIndex = null;
  backendData = [{
    "name": 'Target',
    "value": '100',
    "description": 'abc'
  },
  {
    "name": 'Size',
    "value": '20',
    "description": 'def'
  },
  {
    "name": 'Industry',
    "value": '40',
    "description": 'ghi'
  }]

  enableEditMethod(e:any) {
    this.enableEdit = true;
    // this.enableEditIndex = i;
    console.log( e);
  }

  
  onKey(event: any) { // without type info
    this.editName += event.target.value;
console.log(this.editName)
  }


    onKeyUp(event: any) {
        this.v = event.target.value;
        console.log(this.v)
       
        this.folderObjs=this.values.filter((val:any) => {
          console.log(this.v)
          return val.name.toLowerCase().indexOf(this.v) > -1||val.id.toLowerCase().indexOf(this.v) > -1||val.email.toLowerCase().indexOf(this.v) > -1||val.role.toLowerCase().indexOf(this.v) > -1;
         
         
       });
       this.collectionSize = this.folderObjs.length;





        console.log(this.values)
        console.log(this.folderObjs)

    
    };
 
  
        
    

      //     return this.http.delete('http://example.com ' + id)
      // .map((response:Response) => response.json())

      // this.departments = this.departments.filter(item => item != name);

      editDomain(domain: any){
        console.log("kavii")

        
        domain.name
        
      }

      deleteRow(d:any){


            // this.folderObjs = this.folderObjs.filter((item:any) => item != name);
            const index = this.folderObjs.findIndex((rec:any)=> rec.id === d);
            console.log(index);
            
            this.folderObjs.splice(index,1)
          
    }


    // updateUsers(){
    //   const oldRecords = localStorage.getItem("users")
    //   if(oldRecords !==null){
    //     const newRecords = JSON.parse(oldRecords)
    //     // console.log(newRecords.splice(newRecords.findIndex((rec:any)=> rec.id === this.users.id),1));  
    //     newRecords.splice(newRecords.findIndex((rec:any)=> rec.id === this.users.id),1)
    //     newRecords.push(this.users)
    //     localStorage.setItem("users", JSON.stringify(newRecords))
    //   }
    //   this.router.navigateByUrl("")
    // 


    edit(){

      // const a=event.target.value
      this.folderObjs.setItem("kavi")
      console.log("kaviiiiii")

    }


    delAll(){
      for(let a of this.idvalues){

       const index = this.folderObjs.findIndex((rec:any)=> rec.id === a);
        console.log(index);
        
        this.folderObjs.splice(index,1)

      }
     
    
    }
   

    GetStats(event:any) {

     const a=event.target.value
     if(event.target.checked==true){
      this.idvalues.unshift((a))
     }
     else{
      this.idvalues.includes(a).valueOf()
      this.idvalues=this.idvalues.filter(item => item!== a);
      
     }
      console.log(event.target.value);
      console.log(this.idvalues+"kavi")
      console.log(event.target.checked)
  }
 
  
  // onKeyUp(value: any): void {
  //   this.folderObjs = this.folderObjs.filter((val:any) => val.name.toLowerCase().includes(value));
  //   this.collectionSize = this.folderObjs.length;
  // }
    // deleteRow(id:any){
    //   for(let i = 0; i < this.folderObjs.length; ++i){
    //       if (this.folderObjs[i].id === id) {
    //           this.folderObjs.splice(i,1);
    //       }
    //   }
  // }
  ngOnInit(): void {
    // .subscribe((data: Config) => this.config = {
      this.folderObjs=this.values

      this.http.get<data>(this.url).subscribe(response=>{
this.values=response
console.log(this.values)
this.folderObjs=this.values

      })
     

      this.collectionSize = this.folderObjs.length;
    

  }

  

}


