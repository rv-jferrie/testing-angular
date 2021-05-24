import { Component, OnInit } from '@angular/core';
import { ReposService } from 'src/app/services/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos: any = [];
  loading = true;

  constructor(private reposService: ReposService) { }

  ngOnInit() {
    this.reposService.get().subscribe(repos => {
      this.repos = repos;
      this.loading = false;
    });
  }
}
