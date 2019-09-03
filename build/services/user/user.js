"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloDatasourceRest = require("apollo-datasource-rest");

var _config = require("../../config");

class UserApi extends _apolloDatasourceRest.RESTDataSource {
  constructor() {
    super();
    this.baseURL = _config.configuration.serviceUrl;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.authorization);
  }

  async profile() {
    const result = await this.get('user/profile');
    return result;
  }

  async login(args) {
    const {
      email,
      password
    } = args.input;
    const result = await this.post('user/login', {
      email,
      password
    });
    return result;
  }

}

var _default = UserApi;
exports.default = _default;