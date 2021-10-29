// stores/session.js
import createPersistentStore from "../utils/createPersistentStore";

const session = createPersistentStore('business.session', localStorage);

export default session;