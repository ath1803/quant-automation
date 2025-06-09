@textLO @lms
Feature: Profile Verification Functionality

Scenario Outline: Scenario 1: Navigate to the Text LO Creation Page.
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User clicks on the Content option in the navbar
    And User clicks on Learning Object Library in the menu
    Then User is redirected to Learning Object Library page
    And User clicks on the Create New Learning Object button
    Then User is redirected to the Create New Learning Object popup
    And User selects the Text option from the popup
    Then User is redirected to the Create New Text LO page
    And User clicks on the dropdown for Course family
    Then User Selects the Success Coach Course Family
    When User clicks on LO name field
    And User Enters the LO name
    Then User clicks on the dropdown for Subject
    And  User Selects Science as Subject
    Then User clicks on the dropdown for Language
    And  User Selects Science as Subject
    Then User clicks on the Select Grades button
    And User is redirected to the Grade Selection popup
    Then User Selects a Grade from the Grade popup
    
    Examples:
     | role |
     | "PA" |
