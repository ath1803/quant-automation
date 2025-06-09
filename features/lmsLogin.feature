@lmsLogin @lms
Feature: LMS Login

  @smoke
  Scenario Outline: Scenario 1: User tries to login with valid credentials in LMS [<role>]
    Given User is on the LMS login page
    And Login form is displayed for different users
    When User login with <role> "Valid Login" in LMS normal login
    And User clicks on the login button in LMS login
    Then User should be logged in successfully and redirected to the LMS dashboard

    Examples:
      | role  |
      | "DTA" |
      | "SA"  |
