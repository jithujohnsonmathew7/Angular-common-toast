import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
  
export class ToasterComponent implements OnInit {

  isToastMessageOpen: boolean = false
  toasterMessgae: string = "";
  toasterType: string = "";

  constructor(private toaster: CommonService) { }

  ngOnInit(): void {
    this.toaster.status.subscribe((msg: string) => {
      this.toasterType = JSON.parse(JSON.stringify(this.toaster?.toasterType))?._value;
      
      if (msg== null) {
        this.isToastMessageOpen = false
      }
      else {
        this.isToastMessageOpen = true
        this.toasterMessgae = msg;
      }
    })
  }

  closeToast():boolean {
    return this.isToastMessageOpen = false;
  }

}
