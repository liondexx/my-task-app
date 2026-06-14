import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'tasks_app_tasks_v1';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.load();
  }

  private mockData(): Task[] {
    const now = new Date();
    return [
      {
        id: uuidv4(),
        title: 'Comprar mantimentos',
        details: 'Leite, pão, ovos e frutas',
        createdAt: now.toISOString(),
        dueDate: new Date(now.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Enviar relatório',
        details: 'Enviar relatório semanal ao professor',
        createdAt: new Date(now.getTime() - 3 * 24 * 3600 * 1000).toISOString(),
        completed: true,
      },
    ];
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
  }

  private load() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        this.tasks = JSON.parse(raw) as Task[];
      } catch {
        this.tasks = this.mockData();
        this.save();
      }
    } else {
      this.tasks = this.mockData();
      this.save();
    }
  }

  getAll(): Task[] {
    return [...this.tasks].sort((a,b) => b.createdAt.localeCompare(a.createdAt));
  }

  getActive(): Task[] {
    return this.getAll().filter(t => !t.completed);
  }

  getCompleted(): Task[] {
    return this.getAll().filter(t => t.completed);
  }

  getById(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  create(payload: Partial<Task>): Task {
    const now = new Date().toISOString();
    const task: Task = {
      id: uuidv4(),
      title: payload.title || 'Sem título',
      details: payload.details || '',
      createdAt: now,
      dueDate: payload.dueDate,
      completed: false,
    };
    this.tasks.push(task);
    this.save();
    return task;
  }

  update(id: string, patch: Partial<Task>): Task | undefined {
    const t = this.getById(id);
    if (!t) return undefined;
    Object.assign(t, patch);
    this.save();
    return t;
  }

  toggleComplete(id: string): Task | undefined {
    const t = this.getById(id);
    if (!t) return undefined;
    t.completed = !t.completed;
    this.save();
    return t;
  }
}
