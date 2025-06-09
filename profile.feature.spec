** Generated from: features\profile.feature */
import { test } from "../../steps/common/customTest.fixture.ts";

test.describe("Profile Verification Functionality", () => {

  test.describe("Scenario 1: Verify the profile of user when logged in as [<role>]", () => {

    test("Scenario 1: Verify the profile of user when logged in as [\"PA\"]", { tag: ["@profile", "@lms"] }, async ({ Given, page, loginData, And, When, Then, testData }) => {
      await Given("User login as a \"PA\" in \"LMS\"", null, { page, loginData });
      await And("User is on the dashboard page", null, { page });
      await When("User clicks on the profile icon", null, { page });
      await And("User clicks on Profile option in the menu", null, { page });
      await Then("User is redirected to the Profile Details page", null, { testData });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\profile.feature"),
  $bddWorldFixtures: ({ page, context, browser, browserName, request }, use) => use({ page, context, browser, browserName, request }),
  $scenarioHookFixtures: ({ page, testData }, use) => use({ page, testData }),
});

const testMetaMap = {
  "Scenario 1: Verify the profile of user when logged in as [<role>]|Scenario 1: Verify the profile of user when logged in as [\"PA\"]": {"pickleLocation":"12:6","tags":["@profile","@lms"]},
};
