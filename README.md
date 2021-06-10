# Examples of bad practices within tests

## How to use these examples
Run the tests using `npm t` and try to fix them in the order defined below.

The broken tests are in the main branch. The fixed tests are in a branch called `fixed`. Have fun!

## Test issues
### Not waiting for asynchronous code

Files:
- `async.js`
- `async.test.js`

If during a test you are asserting expectations based on the result of asynchronous code, it is necessary to wait for that asynchronous code to complete!

Mocha provides `done` to `beforeEach`, `beforeAll`, `afterEach`, `afterAll` and `it` blocks as a method of flagging to the runner that asynchronous code is being called. The runner then awaits `done` to be called before moving on.

#### What's the problem?
Without waiting for the code to return, often your test is not waiting for the assertions to be run. Mocha will then report a passing test as no errors were thrown during its runtime (the errors are instead thrown afterwards when the code finally calls back).

#### How to fix it
Use `done` or return Promises. Alternatively, the above mentioned blocks can all be run asynchronously using `async`/`await`.

### Logging output

Files:
- `console.js`
- `console.test.js`

Sometimes within our code we need to output things to the console. During our tests however, it's better to not have extraneous output polluting the test report.

#### What's the problem?
Uncaught `console.logs` etc pollute the reporter output and make debugging tests and reading the report difficult.

#### How to fix it
Best case, design your code so that your logging methods are passed in. This helps you to separate output from your logic and means your functions don't have unnecessary side-effects - meaning more functional style programming solutions.

Alternatively, you can stub out the `console` or outputting method. This has the additional benefit of allowing you to assert that the output is called as expected. If you're calling `console.log` for a reason, you should be testing that code!

### Cleanup

Files:
- `cleanup.js`
- `cleanup.test.js`

It is possible within code to leave handlers open. Normally when we use `ctrl-c` to kill the process or the process dies on error these handlers are stopped. However, within our tests these handlers live on.

#### What's the problem?
Handlers which don't die don't allow Mocha to cleanly close. The Mocha process then continues and never finishes. We use the flag `--exit` to tell Mocha to be stricter with finishing, which forces these handlers to clean themselves up, but isn't a good practice. This also prevents you from easily re-running your tests using `--watch` as Mocha never knows when the tests are complete.

#### How to fix it
Our code should be designed to be cleaned up. We should always ensure that any timers, intervals, subscriptions etc are all cleaned up when our code has finished running. To support this is tests we can export these handlers so they can be cancelled after a test is run.

### Global

Files:
- `global.js`
- `global.test.js`

Our tests should be able to run independently of one another and in any order. Tests should not rely on system state created by another test suite. Tests should always ensure they clean up after themselves.

#### What's the problem?
Unclean state and leftover stubs can cause tests to pass which shouldn't and can lead to issues with debugging code.

#### How to fix it
Ensure that any changes to the system state through editing of global variables or stubbing etc is undone after your test runs.

### Expensive External

Files:
- `expensiveExternal.js`
- `expensiveExternal.test.js`

Tests run like any other code. As such you can do anything you can do with normal code. This includes calling external services. However, there's a specific type of test which does this, and it isn't in the remit of our unit tests. Therefore, when writing unit tests you should always keep the scope of the test local.

#### What's the problem?
Tests which call external services not only put undue pressure on those systems (think how many times Hapi or Tripapp's tests are run each day), but if you're offline or that system goes down then your tests will fail. If you go offline by turning off your WIFI and running the tests then this test will fail.

#### How to fix it
As I mentioned, there are integration tests which focus on the conversations between systems, but when writing unit tests you should stub out the communication between systems. Again, a good functional programming way of doing this would be to pass the interface for the connection into your function. That way, during your tests you can swap out the real thing for a fake. Alternatively, you can stub the test as is shown in the example.