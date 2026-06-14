import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  title = '';
  dueDate?: string;
  details = '';

  constructor(private ts: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.tasks = this.ts.getActive();
  }

  create() {
    if (!this.title.trim()) return;
    this.ts.create({ title: this.title.trim(), details: this.details.trim(), dueDate: this.dueDate });
    this.title = '';
    this.details = '';
    this.dueDate = undefined;
    this.load();
  }

  openDetails(t: Task) {
    this.router.navigate(['/task', t.id]);
  }

  markDone(t: Task) {
    this.ts.toggleComplete(t.id);
    this.load();
  }
}
