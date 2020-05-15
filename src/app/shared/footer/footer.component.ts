import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  // @ViewChild("tref", { read: ElementRef }) tref: ElementRef;

  cardItems = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // outputs `I am span`
    // console.log(this.tref);
    // console.log(this.tref.nativeElement);

  }

  openDropdown(): void {
    console.log('openDropdown');
  }

  closeDropdown(): void {
    console.log('closeDropdown');
    // let close = this.tref.nativeElement['classList'];
    // close();
    // console.log($('#navbarToggleExternalContent')[0]);
    // console.log(close);
  }

}
