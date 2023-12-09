import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../createAssignmentTask/enums/Status';

export const correctLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return `Todo's`;
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
  }
};
