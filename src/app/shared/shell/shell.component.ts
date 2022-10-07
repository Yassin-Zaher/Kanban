import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { filter, map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {



  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    console.log(this.isHandset$);

  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(map(result => result.matches))



}
