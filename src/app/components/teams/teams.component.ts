import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../services/team.service';
import {Team} from '../../interfaces/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {
    
   }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((teams) => this.teams = teams);
  }

  deleteTeam(team: Team) {
    this.teamService.deleteTeam(team).subscribe(() => this.teams = this.teams.filter(t => t.id !== team.id));
  }

  toggleActive(team: Team) {
    team.active = !team.active;
    this.teamService.updateTeamActive(team).subscribe();
  }

  addTeam(team: Team) {
    this.teamService.addTask(team).subscribe((team) => this.teams.push(team));
  }

}
