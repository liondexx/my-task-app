import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html'
})
export class CompletedComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private ts: TaskService) {}

  ngOnInit(): void {
    this.load();
  }

  load() { this.tasks = this.ts.getCompleted(); }

  undo(t: Task) { this.ts.toggleComplete(t.id); this.load(); }
}
