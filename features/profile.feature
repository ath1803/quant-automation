@profile @lms
Feature: Profile Verification Functionality

Scenario Outline: Scenario 1: Verify the profile of user when logged in as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User clicks on the profile icon
    And User clicks on Profile option in the menu
    Then User is redirected to the Profile Details page
    Examples:
     | role |
     | "PA" |