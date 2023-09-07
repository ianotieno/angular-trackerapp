import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-task';
import {HttpClient,HttpHeaders} from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }
  getTask():Observable<Task[]>{
    const tasks =of(TASKS);
    return tasks;
  }
}
