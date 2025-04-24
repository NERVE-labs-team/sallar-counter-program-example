import {
  MinimalEventPayload,
  EventHandler,
  ErrorHandler,
} from '@sallar-network/server';

export const on_incremented: EventHandler<
  MinimalEventPayload & { value: number }
> = ({ worker_id, value }, manager) => {
  console.log(
    `Worker "${worker_id}" incremented value. Now value is: ${value}`
  );

  manager.emit('increment', { value }, worker_id);
};

export const on_worker_connected: EventHandler<MinimalEventPayload> = (
  { worker_id },
  manager
) => {
  manager.emit('increment', { value: 0 }, worker_id);
};

export const on_error: ErrorHandler = ({ worker_id }, err) => {
  console.log(`There is problem with worker "${worker_id}". Error: ${err}`);
};
