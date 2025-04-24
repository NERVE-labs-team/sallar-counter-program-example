# sallar-counter-program-example

## Description

Minimal example of program that can be run on [sallar network](https://sallar.io/).

Project is based on [@sallar-network/server](https://github.com/NERVE-labs-team/sallar-network-server-library) and [@sallar-network/client](https://github.com/NERVE-labs-team/sallar-network-client-library).

## Configuration

```env
PORT=[PORT]
DEV_MODE=[true/false] # set to true for local testing
PROGRAM_TOKEN=[PROGRAM_TOKEN]
NODE_MANAGER_SERVER=[NODE_MANAGER_SERVER]
```

Put configuration in the system vars or `.env` file.

## Running the app locally

```bash
# dev mode
$ npm run dev

# prod mode
$ npm run build
$ npm run start
```

Url will be used by our network in the following form:

```
{signed_url},{worker_id}
```

where signed url means:

```
{url}#{program_id}
```

For test purposes you can mock these values:

```
http://localhost:3000/#my-program,worker-1
http://localhost:3000/#my-program,worker-2
etc.
```

## Running the app in production

Coming soon!
