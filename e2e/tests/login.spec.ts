import { test, expect } from "@playwright/test";
import { login } from "./utils/login";

const user = {
  email: "titi@email.com",
  password: "azerty",
};

test("login test", async ({ page }) => {
  await login(page, user, expect);
});
