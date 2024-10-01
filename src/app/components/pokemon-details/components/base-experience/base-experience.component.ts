import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-experience',
  templateUrl: './base-experience.component.html',
  styleUrl: './base-experience.component.scss'
})
export class BaseExperienceComponent implements OnInit{
  @Input() experience : string | undefined

  ngOnInit(): void {
    
  }
}
