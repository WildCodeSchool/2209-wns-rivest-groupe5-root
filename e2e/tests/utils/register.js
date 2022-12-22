import { expect } from "@playwright/test";

export async function registerNewUser(page, userToRegister) {
  await page.goto("http://localhost:3000/register");

  const firstNameInput = page.locator("#firstname");
  const lastNameInput = page.locator("#lastname");
  const emailInput = page.locator("#email");
  const passwordInput = page.locator("#password");
  const passwordconfirmInput = page.locator("#passwordconfirm");
  const submitbutton = page.locator("#submit-button");

  await firstNameInput.fill(userToRegister.firstname);
  await lastNameInput.fill(userToRegister.lastname);
  await emailInput.fill(userToRegister.email);
  await passwordInput.fill(userToRegister.password);
  await passwordconfirmInput.fill(userToRegister.passwordconfirm);
  await submitbutton.click();
//   await expect(page).toHaveURL(/login/, { timeout: 9000 });
}