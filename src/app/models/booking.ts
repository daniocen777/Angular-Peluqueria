import { IBooking } from "../interfaces/i-booking";
import * as _ from "lodash";

export class Booking implements IBooking {
  constructor(data) {
    _.set(this, "data", data);
  }

  get name() {
    return _.get(this, "data.name");
  }

  get date() {
    return _.get(this, "data.date");
  }

  get services() {
    return _.get(this, "data.services");
  }

  getData() {
    return _.get(this, "data");
  }
}
