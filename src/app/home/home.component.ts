import { Component, OnInit } from '@angular/core';
import { HomeresultServiceService } from '../homeresult-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jsondata:any;
  chart:any;
  infCase:any;
  testedCase:any;
  recoveredCase:any;
  deathCase:any;
  worldCase:any;
  DateCase:any;

  dt = 2100


  constructor(private _homeres: HomeresultServiceService) {}

    ngOnInit(): void{
      this._homeres.getResultsfromServer()
      .subscribe(res => {
        this.jsondata = res

        
       
       console.log(this.jsondata['infected'])
    
      })

      this._homeres.getWorldResultfromServer()
      .subscribe((datas) => {
        this.worldCase = datas
        console.log(this.worldCase['updated'])

        var date = new Date(this.worldCase['updated']);
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
            
        console.log(`${year}-${month}-${day}`);
        var dateone = `${year}-${month}-${day}`;



        const d = new Date(dateone)
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

        let strdate = `${da}-${mo}-${ye}`;

        this.DateCase = strdate; 
      })
      
  }
}
