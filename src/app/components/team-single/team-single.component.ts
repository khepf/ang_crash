import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Team} from '../../interfaces/Team';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team-single',
  templateUrl: './team-single.component.html',
  styleUrls: ['./team-single.component.css']
})
export class TeamSingleComponent implements OnInit {
  @Input() team: Team;
  @Output() onDeleteTeam: EventEmitter<Team> = new EventEmitter();
  @Output() onToggleActive: EventEmitter<Team> = new EventEmitter();

  constructor() {
    this.team = {teamName: "", mascot: "", active: false}
    this.faTimes = faTimes;
   }

   faTimes = faTimes;

  ngOnInit(): void {
  }

  onDelete(team: Team) {
    this.onDeleteTeam.emit(team);
  }
  onToggle(team: Team) {
    console.log('dblclick', team.active);
    this.onToggleActive.emit(team);
  }

}
