import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Team} from '../interfaces/Team';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = "http://localhost:5000/teams";
  constructor(private http: HttpClient) { }


  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

  deleteTeam(team: Team): Observable<Team>  {
    const url = `${this.apiUrl}/${team.id}`;
    return this.http.delete<Team>(url);
  }

  updateTeamActive(team: Team): Observable<Team> {
    const url = `${this.apiUrl}/${team.id}`;
    return this.http.put<Team>(url, team, httpOptions);
  }

  addTask(team: Team):Observable<Team> {
    return this.http.post<Team>(this.apiUrl, team, httpOptions);
  }
}
