import ApiManager from "./ApiManager";
import Resources, { Singleton } from "./Resources";

class UserService extends Resources {
  authUser = {};
  routes = {
    login: "login",
    register: "register",
  };

  constructor() {
    super(arguments);
  }

  login = async (payload) => {
    let a = await ApiManager.post(this.routes.login, payload);
    return a;
  };
  
  register = async (payload) => {
    let a = await ApiManager.post(this.routes.register, payload);
    return a;
  };
}

export default Singleton(UserService);
