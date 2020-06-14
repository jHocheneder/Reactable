import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbSearchService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';
import { Invitation } from '../../../invitation';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})

/*interface MyObj {
  username: string;
  room: string;
}
*/
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  //invitation: JSON[] = new Array<JSON>();
  /*invitation: Invitation[] = [{
    "username": "u",
    "room":  "r"
  }];*/
  invitation: Array<Invitation> = new Array<Invitation>();
  inv: any[];

  
  

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
    {
      value: 'origin',
      name: 'Origin',
    },
  ];

  currentTheme = 'default';

  userMenu = [ 
    { 
      title: 'Profile',
      link: '/auth/profile',
      home: true
    }, 
    { 
      title: 'Log out',
      link: '/auth/logout'
    } 
  ];

  constructor(private sidebarService: NbSidebarService, private menuService: NbMenuService, private themeService: NbThemeService, private userService: UserData, private breakpointService: NbMediaBreakpointsService, private searchService: NbSearchService, private http: HttpService, private router: Router) {
    this.searchService.onSearchSubmit().subscribe((data: any) => {
      const searchData = { 
        "search" : data.term
      };
      
      this.http.searchOpponent(searchData)
    })
    
  }

  ngOnInit() {
    this.http
      .returnFoundOpponent()
      .subscribe((users: Array<string>) => {
        console.log(users[0]);
        const options = {queryParams: {names: users}};
        console.log(options)
        this.router.navigate(['auth/searchResults'], options)
      });

    this.http
      .returnInvitation()
      .subscribe((msg) => {
        this.invitation.push(msg);
        console.log(this.invitation)
      })

    this.currentTheme = this.themeService.currentTheme;

    let name;
    if(localStorage.getItem('username') == null){
      name = 'Username';
    }
    else {
      name = localStorage.getItem('username');
    }
    this.user = {name: name}

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  showInvitations(){
    let names: string[] = new Array<string>();
    let rooms: string[] = new Array<string>();
    
    console.log(this.invitation)

    for(let i = 0; i<this.invitation.length; i++){
      names.push(this.invitation[i].username)
      rooms.push(this.invitation[i].room)
    }

    /*this.invitation.forEach(l => {
      singleinv = l.parse
      console.log
    })*/
    //this.invitation[0].username

    //for(let i = 0; i<this.invitation.length;i++){
    //  names.push(this.invitation[i].room)
    //}
    

    const inv = {queryParams: {names: names, rooms: rooms}};
    this.router.navigate(['auth/invitations'], inv)
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
    
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  multiplayer() {
    if(localStorage.getItem("multiplayer") == 'true'){
      return true;
    }
    return false;
  }
  leave(){
    localStorage.setItem("multiplayer", 'false');
  }
}
