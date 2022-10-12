export interface Task {
      description?: string;
      label?: 'blue' | 'red' | 'green' | 'yellow' | 'gray' | 'purple';
}


export interface Board {
      id?: string;
      title?: string;
      priority?: number;
      tasks?: Task[];
}