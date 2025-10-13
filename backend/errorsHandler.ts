export default class errosHandle extends Error {
  public readonly statuscode: number;
  constructor(menssage: string, statuscode: number) {
    super(menssage);
    this.statuscode = statuscode;
  }
}
