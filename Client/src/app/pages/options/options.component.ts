import { Component, HostBinding } from "@angular/core";
import { HostListener } from "@angular/core";
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { DataService } from '../../services/data.service';
@Component({
  selector: "ngx-about",
  styleUrls: ["./options.component.scss"],
  templateUrl: "./options.component.html",
})
export class OptionsComponent {
  
  ydownpressed = false;
  yuppressed = false;
  xdownpressed = false;
  xuppressed = false;
  zdownpressed = false;
  zuppressed = false;
  key;


  constructor(private toastrService: NbToastrService, public data: DataService) {
  }
  
  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    let status = "success";

    if (this.ydownpressed) {
      if(this.checkused(event.key)) {
        this.data.ydown = event.key;
        this.ydownpressed = false;      
        this.showToastS('success');
      } else {
        this.showToastE('danger');
      }
    }
    if (this.yuppressed) {
      if(this.checkused(event.key)) {
      this.data.yup = event.key;
      this.yuppressed = false;       
      this.showToastS('success');
      } else {
        this.showToastE('danger');
      }
    }
    if (this.xdownpressed) {
      if(this.checkused(event.key)) {
      this.data.xdown = event.key;
      this.xdownpressed = false;       
      this.showToastS('success');
      } else {
        this.showToastE('danger');
      }
    }
    if (this.xuppressed) {
      if(this.checkused(event.key)) {
      this.data.xup = event.key;
      this.xuppressed = false;       
      this.showToastS('success');
      } else {
        this.showToastE('danger');
      }
    }
    if (this.zdownpressed) {
      if(this.checkused(event.key)) {
      this.data.zdown = event.key;
      this.zdownpressed = false;       
      this.showToastS('success');
      } else {
        this.showToastE('danger');
      }
    }
    if (this.zuppressed) {
      if(this.checkused(event.key)) {
      this.data.zup = event.key;
      this.zuppressed = false; 
      this.showToastS('success');
      } else {
        this.showToastE('danger');
      }
    }
    
  }

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  checkused(e) {
    let list: String[] = [e, this.data.yup, this.data.ydown, this.data.xup, this.data.xdown, this.data.zup, this.data.zdown];
    
    /*for (let entry of list) {       
      if(entry)*/
     return list.length === new Set(list).size;     
  
  }
 

  showToast(status) {
    this.toastrService.show('to bind a new key', `Press a button`, { status });
  }

  showToastS(status) {
    this.toastrService.show('to a ney key', `Changed Binding`, { status });
  }

  showToastE(status) {
    this.toastrService.show('Press another key', `Key is already used`, { status });
  }

  showToastR(status) {
    this.toastrService.show('to default', `Reseted all binding`, { status });
  }


  cbottn(val) {    
    this.showToast('primary');
    switch (val) {      
      case "ydown":        
        this.ydownpressed = true;
        break;
      case "yup":        
        this.yuppressed = true;
        break;
      case "xup":
        this.xuppressed = true;
        break;
      case "xdown":
        this.xdownpressed = true;
        break;
      case "zup":
        this.zuppressed = true;
        break;
      case "zdown":
        this.zdownpressed = true;
        break;      
    }
  }

  setDefault() {
    this.data.setDef();
    this.showToastR('success');

  }
}
