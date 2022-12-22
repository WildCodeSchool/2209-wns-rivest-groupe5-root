import { test, expect } from "@playwright/test";
import { registerNewUser } from "./utils/register";
const userOne = {
  firstname: "toto",
  lastname: "toto",
  email: "toto@email.com",
  password: "azerty",
  passwordconfirm: "azerty",
};



test("new user registration", async ({ page }) => {
  await registerNewUser(page, userOne);
});
