import ApiManager from "./ApiManager";
import Resources, { Singleton } from "./Resources";

class UserService extends Resources {
  authUser = {};
  routes = {
    login: "login",
  };

  constructor() {
    super(arguments);
  }

  login = async (payload) => {
    let a = await ApiManager.post(this.routes.login, payload);
    return a;
  };
}

export default Singleton(UserService);
