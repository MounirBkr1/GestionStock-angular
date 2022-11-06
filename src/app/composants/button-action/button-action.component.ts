import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {

  @Output()
  clickEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonNouveauClick():void{
    this.clickEvent.emit();
  }

}
