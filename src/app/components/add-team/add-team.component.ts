import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Team} from '../../interfaces/Team';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  @Output() onAddTeam: EventEmitter<Team> = new EventEmitter();

  teamName: string;
  mascot: string;
  active: boolean = false;

  constructor() { 
    this.teamName = "";
    this.mascot = "";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.teamName) {
      alert("Please add a team name");
      return;
    }
    const newTeam = {
      teamName: this.teamName,
      mascot: this.mascot,
      active: this.active
    }

    this.onAddTeam.emit(newTeam);

    this.teamName = "";
    this.mascot = "";
    this.active = false;
  }

}
