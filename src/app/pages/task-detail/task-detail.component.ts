import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html'
})
export class TaskDetailComponent implements OnInit {
  task?: Task;
  editMode = false;
  title = '';
  details = '';
  dueDate?: string;

  constructor(private route: ActivatedRoute, private ts: TaskService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.load(id);
  }

  load(id: string) {
    this.task = this.ts.getById(id);
    if (!this.task) {
      this.router.navigate(['/']);
      return;
    }
    this.title = this.task.title;
    this.details = this.task.details || '';
    this.dueDate = this.task.dueDate ? this.task.dueDate.split('T')[0] : undefined;
  }

  save() {
    if (!this.task) return;
    this.ts.update(this.task.id, { title: this.title, details: this.details, dueDate: this.dueDate });
    this.editMode = false;
    this.load(this.task.id);
  }

  toggle() {
    if (!this.task) return;
    this.ts.toggleComplete(this.task.id);
    this.router.navigate(['/']);
  }

  edit() { this.editMode = true; }
}
