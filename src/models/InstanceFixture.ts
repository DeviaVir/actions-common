import { Instance } from "./Instance.js";

export class InstanceFixture implements Instance {
  uri = "http://localhost:8080/bodgeit/contact.jsp";

  constructor(override: Partial<Instance> = {}) {
    Object.assign(this, override);
  }
}
