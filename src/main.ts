import { InstanceManager } from '@sallar-network/server';
import * as dotenv from 'dotenv';
import { on_error, on_incremented, on_worker_connected } from './handlers';

(async () => {
  dotenv.config();

  const manager = new InstanceManager({
    public_path: `./public`,
    http_port: Number(process.env.PORT),
    dev_mode: process.env.DEV_MODE === 'true',
    node_manager_server: process.env.NODE_MANAGER_SERVER,
    program_token: process.env.PROGRAM_TOKEN,
  });

  manager.on('incremented', on_incremented);
  await manager.launch(on_worker_connected, on_error);
})();
