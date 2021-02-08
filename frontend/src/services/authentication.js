import axios from "axios";
import { baseAPIURL } from "../configs/index";

class AuthenticationService {
  isLoggedIn = false;

  login = (username, password) => {
    return axios
      .get(`${baseAPIURL}/admin/authentication`, {
        auth: {
          username: username,
          password: password,
        },
      })
      .then((respone) => {
        const token = respone.headers["authorization"];
        sessionStorage.setItem("token", token);
        if (token) {
          sessionStorage.setItem("user", JSON.stringify(respone.data));
          this.isLoggedIn = true;
        }
        return respone.data;
      });
  };

  logout = () => {
    return new Promise((resolve, reject) => {
      try {
        sessionStorage.clear();
        this.isLoggedIn = false;
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  validateUserSession = () => {
    return new Promise((resolve, reject) => {
      const sessionToken = sessionStorage.getItem("token");
      if (!sessionToken) {
        return reject(false);
      } else {
        return resolve(true);
      }
    });
  };
}

export default new AuthenticationService();
