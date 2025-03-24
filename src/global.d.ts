import { LOCALES } from "./consts";

declare global {
  namespace App {
    interface Locals {
      theme: string;
      locale: (typeof LOCALES)[number];
    }
  }
}
