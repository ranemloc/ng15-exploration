export interface TodoItem {
  readonly title: string;
  readonly description?: string;
  readonly deadline?: Date;
}
