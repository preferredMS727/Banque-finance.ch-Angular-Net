import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  cardItems = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, send do eiusmod em siemprensi' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
