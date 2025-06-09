@cmsLogin @cms
Feature: CMS Login

  @smoke
  Scenario Outline: Scenario 1: User tries to login with valid credentials in CMS [<role>]
    Given User is on the CMS login page
    And CMS Login form is displayed
    When User login with <role> "Valid Login" in CMS
    And User clicks on the login button in CMS
    Then User should be logged in successfully and redirected to the CMS dashboard

    Examples:
      | role |
      | "PA" |
      | "CA" |
      | "CE" |
      | "CR" |
