import { expect } from "@playwright/test";
import { Profile } from "../../pages/profilePages/profile.page";
import { createBddCustom } from "../common/createBddCustom";

const { Given, When, Then, Before } = createBddCustom();
let profile: Profile;

Before({ tags: '@profile' }, async ({ page }) => {
  profile = new Profile(page);
});

// Scenario Steps
When('User clicks on the profile icon', async function ({ page }) {
  await profile.clickProfileIcon();
});

When('User clicks on Profile option in the menu', async function ({ page }) {
  await profile.clickProfileOption();
});

Then('User is redirected to the Profile Details page', async function ({ testData }) {
  const actualUsername = await profile.getUsername();
  const expectedUsername = testData.profile.PA.username;
  expect(actualUsername).toBe(expectedUsername);
});



