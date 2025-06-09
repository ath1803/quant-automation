@lmsAdminLogin @lms
Feature: LMS Admin Login

  @smoke
  Scenario Outline: Scenario 1: User tries to login with valid credentials in LMS [<role>]
    Given User is on the LMS admin login page
    And Login form is displayed
    When User login with <role> "Valid Login" in LMS admin
    And User clicks on the login button in LMS
    Then User should be logged in successfully and redirected to the LMS dashboard

    Examples:
      | role |
      | "PA" |
