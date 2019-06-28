import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loading: boolean = false;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  public doRequest(): void {
    this.loading = true;
    this.taskService.createTask({
      teste: "teste"
    })
      .subscribe((data) => {
        this.loading = false;
        console.log(data);
      },(error) => {
        this.loading = false;
        console.log(error);
      });
  }

}