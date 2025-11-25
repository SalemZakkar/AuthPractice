export class AppError {
  message!: string;
  statusCode!: number;
  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export class AppDupicateError extends AppError {
  field!: string;
  constructor(field: string, code = 400) {
    super(`${field} is duplicated`, code);
    this.field = field;
  }
}

export class AppNotFoundError extends AppError {
  constructor() {
    super("Error Not Found", 404);
  }
}

export class AppUnauthinticatedError extends AppError {
  constructor() {
    super("Unathinticated", 401);
  }
}

export class AppInternalError extends AppError {
  constructor() {
    super("Internal Server error", 500);
  }
}

export class AppInputError extends AppError {
  constructor(message = "Error Input") {
    super(message, 400);
  }
}
