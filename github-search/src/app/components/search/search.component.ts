import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit {
  user!: User;

  constructor(public searchService: GithubService) { }

  searchUser(searchName:string){
    if (searchName !=='') {
      this.searchService.getUser(searchName)
      console.log(searchName)
    };
  };

  searchRepos(searchName:string){
    if (searchName !=='') {
      this.searchService.getRepositories(searchName)
      console.log(searchName)
    };
  };

  ngOnInit(): void {
    this.user = this.searchService.user;
    this.searchUser("jumaBrian");
  }

}
