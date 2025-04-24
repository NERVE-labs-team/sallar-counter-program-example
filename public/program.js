const program = new SallarNetworkClient.InstanceManager(io);

// To simulate heavy calculations
const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

program.on('increment', async ({ value }, manager) => {
  await sleep(500);
  manager.emit('incremented', { value: value + 1 });
});
