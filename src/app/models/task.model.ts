export interface Task {
  id: string;
  title: string;
  details?: string;
  createdAt: string; // ISO
  dueDate?: string; // ISO optional
  completed: boolean;
}
