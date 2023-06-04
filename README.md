## Typescript Peloton Library

I created this project so that I could automate taking data from Peloton classes and uploading it to different fitness apps. Currently the project is in its infancy however, the ground work is done and now I just need to create all the methods and… interfaces 🫠.

## Contributing

If you wish to contribute to the project just drop me a DM or feel free to fork the project.

## How to use

```javascript
import { PelotonClientFactory } from "pelotonclient";

const USER_NAME = "my_email_address";
const PASSWORD = "my_password";

async function main(): Promise<void> {
  const pelotonClient = PelotonClientFactory.create(USER_NAME, PASSWORD);
  const workouts = await pelotonClient.getWorkouts();

  console.log(workouts);
}

main();
```

## To do

- Finish the methods for all the get calls.
- Create tests.

## Thank(s)

A big thank you to Pat Litke [geudrik](https://github.com/geudrik) for their great [API docs](https://github.com/geudrik/peloton-client-library/blob/master/API_DOCS.md), I couldn't have done this without them.
