import * as Jwt from "jsonwebtoken";

export function signToken(params: object): string {
  return Jwt.sign(params, process.env.JWT!, { expiresIn: "90d" });
}

export function check(jwt: string): boolean {
  try {
    Jwt.verify(jwt, process.env.JWT!); // throws if invalid
    return true;
  } catch (err) {
    return false;
  }
}

export function decode(jwt: string): Jwt.JwtPayload | string | null {
  try {
    const decoded = Jwt.verify(jwt, process.env.JWT!);
    return decoded;
  } catch (err) {
    return null;
  }
}
