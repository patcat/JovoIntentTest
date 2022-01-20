import { Component, BaseComponent, Intents, Handle, Global } from '@jovotech/framework';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
//@Global() // If this is uncommented out, the "Test" intent works
@Component()
export class TestComponent extends BaseComponent {
  START() {
    return this.$send({ message: `Here is the test response.`, listen: false });
  }

  @Handle({
    intents: [{ name: 'TestIntent', global: true }]
  })
  testFunction() {
    return this.$send({
      message: `Function test found!`,
      listen: false
    });
  }

  UNHANDLED() {
    return this.START();
  }
}
