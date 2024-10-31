export type Mission = {
  _id?: string;
  name: string;
  status: Status;
  priority: Priority;
  description: string;
};

export enum Status {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}

export enum Priority {
  High = "High",
  Low = "Low",
}
