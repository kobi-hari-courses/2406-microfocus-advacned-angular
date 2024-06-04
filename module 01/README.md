## Flattening operators and when to use them

### `MergeAll`
Use it when you want to run many observables in parallel and subscribe to all of them, and receive all the events from all the inner observables.

### `SwitchAll`
Perfect for **Searches**
Use it when you want to run several tasks in parallel, and each time a new task begins you want to ingore or even cancel the previous tasks.

### `ExhaustAll`
Perfect for **Refresh** or reload buttons.
Use it when you want to ingnore tasks while a task is already running.

### `ConcatAll`
Perfect for locking and resource
User it when you want to accumulate tasks, but not start them in parallel, but rather queue them and run them to completion one by one.
