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
      this.data.ydown = event.key;
      this.ydownpressed = false;      
      this.showToastS('success');
    }
    if (this.yuppressed) {
      this.data.yup = event.key;
      this.yuppressed = false;       
      this.showToastS('success');
    }
    if (this.xdownpressed) {
      this.data.xdown = event.key;
      this.xdownpressed = false;       
      this.showToastS('success');
    }
    if (this.xuppressed) {
      this.data.xup = event.key;
      this.xuppressed = false;       
      this.showToastS('success');
    }
    if (this.zdownpressed) {
      this.data.zdown = event.key;
      this.zdownpressed = false;       
      this.showToastS('success');
    }
    if (this.zuppressed) {
      this.data.zup = event.key;
      this.zuppressed = false; 
      this.showToastS('success');
    }
    this.key = event.key;
  }

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

 

  showToast(status) {
    this.toastrService.show('to bind a new key', `Press a button`, { status });
  }

  showToastS(status) {
    this.toastrService.show('Changed', `Changed Binding`, { status });
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
}
