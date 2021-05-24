import { Component, OnInit } from '@angular/core';
import { ZenService } from '../../services/zen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  zen = '';

  constructor(private zenService: ZenService) { }

  ngOnInit() {
    this.zenService.get().subscribe(zen => this.zen = zen);
  }
}
