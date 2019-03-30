import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-workshop';
  score: number = 100;
  name: string = "นาย เอ็น นามสกุล อุ่น"
  student:any = {
    name: "peter",
    studentId: "5921602663",
    weight: 64,
    height: 175
  }

  studentlist = [{
    name: "เอ็นอุ่น",
    studentId: "5921602663",
    weight: 63,
    height: 175
  },
  {
    name: "นายเอ ",
    studentId: "5921600237",
    weight: 70,
    height: 173
  },
  {
    name: "นายบี ",
    studentId: "5921600123",
    weight: 80,
    height: 163
  }

  ]

  constructor() {
    this.studentlist.map((object,index)=>{
      console.log(object);
      console.log(index);
      let obj:any = object;
      obj.bmi = (object.weight/((object.weight/100)*(object.weight/100))).toFixed(2);
      return obj;
    })
    console.log(this.studentlist)

    this.student.bmi = (this.student.weight/((this.student.height/100)*this.student.height/100)).toFixed(2);
      
    console.log(this.student)
  }

  
}
