export default class ErrorHandler extends Error {
  public readonly statuscode: number;
  constructor(menssage: string, statuscode: number) {
    super(menssage);
    this.statuscode = statuscode;
  }
}

export class notFoundError extends ErrorHandler {
  constructor(message: string) {
    super(message, 404);
  }
}

export class NotAuthorized extends ErrorHandler {
  constructor(message: string) {
    super(message, 401);
  }
}

export class BadRequest extends ErrorHandler {
  constructor(message: string) {
    super(message, 400);
  }
}

export class ManyRequests extends ErrorHandler {
  constructor(message: string) {
    super(message, 429);
  }
}
