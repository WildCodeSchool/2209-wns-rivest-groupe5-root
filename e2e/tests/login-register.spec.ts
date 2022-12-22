import { test, expect } from "@playwright/test";
import { registerNewUser } from "./utils/register";
import { login } from "./utils/login";

const userOne = {
  firstname: "toto",
  lastname: "toto",
  email: "toto@email.com",
  password: "azerty",
  passwordconfirm: "azerty",
};

test("new user registration and login", async ({ page }) => {
  await registerNewUser(page, userOne);
  await login(page, userOne, expect);
});
