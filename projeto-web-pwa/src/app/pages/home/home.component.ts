import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loading: boolean = false;
  public taskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group(
      {
        _id: [0, [Validators.required, Validators.min(1)]],
        title: ['', Validators.required],
        description: [''],
        creationDate: [new Date(), Validators.required],
        completed: [false, Validators.required],
        priority: ["1", Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  public doRequest(): void {
    this.loading = true;
    this.taskService.createTask(this.taskForm.value)
      .subscribe((data) => {
        this.loading = false;
        console.log(data);
      },(error) => {
        this.loading = false;
        console.log(error);
      });
  }

  public getTask(id: any): void {
    this.loading = true;
    setTimeout(() => {
      this.taskService.getTask(id)
      .subscribe((data) => {
        this.loading = false;
        this.taskForm.setValue(data);
      },(error) => {
        this.loading = false;
        console.log(error);
      });
    },2000);
  }

}
