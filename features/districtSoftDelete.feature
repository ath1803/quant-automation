@districtSoftDelete @lms
Feature: District Deletion Functionality

  Scenario Outline: Scenario 1: Check if the delete button is enabled and perform a soft delete a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    Then the user searches for a district on district listing page
    And the delete button should be enabled
    When the user clicks on the delete button under the actions column for a district
    Then the passphrase popup should display a message "pass-phrase.delete-district-message"
    When the user clicks the Cancel button under dialog box
    Then the dialog box should no longer be displayed
    When the user clicks on the delete button under the actions column for a district
    And the user enters an incorrect passphrase under dialog box
    And the user clicks on the Verify button
    Then an error message should be displayed "pass-phrase.invalid"
    When the user clicks on the delete button under the actions column for a district
    And the user enters the correct passphrase
    And the user clicks on the Verify button
    When the user click on ok button on delete in progress popup
    Then the district should be deleted successfully
    When the user searches for an archived district on district listing page
    Then the user clicks on the delete button under the actions column for a district
    When the user enters the correct passphrase
    Then the user clicks on the Verify button
    When the user click on ok button on delete in progress popup
    Then the district should be deleted successfully

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 2: Verify SAML soft deleted district is not available on saml for organization page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And user searches a saml district on district listing page
    Then the delete button should be enabled
    When the user clicks on the delete button under the actions column for a district
    And the user enters the correct passphrase
    And the user clicks on the Verify button
    When the user click on ok button on delete in progress popup
    Then the district should be deleted successfully
    When user is on "saml-listing.title"
    Then the district shouldn't be visible on saml organization listing page and "saml-listing.no-results-found" should be displayed
    When user clicks on "saml-listing.create-new-saml-config" button on "global-nav.users.saml-for-organizations" page
    Then user should be on "saml-create-config.title" page
    When user clicks on "saml-create-config.select-assignee.select-district-link" on "saml-create-config.title" page
    And user searches for a soft deleted district on Select district card
    Then "create-license.license-details.popup-no-district-msg" message should be displayed with the updated pagination count
    When user searches for a static district on select district popup
    And user applies the district filter on saml organization page
    And user enters the issuer url used in another soft deleted saml district
    Then "saml-config-input.error-msg.unique-url-error" should be displayed

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 3: Verify soft deleted saml district user should not be able to login using SAML as [<role>]
    Given user is on the LMS SAML login page
    When user select the state from state dropdown on SAML login page
    Then "user-login.no-district-placeholder" should be displayed in District dropdown

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 4: Soft delete a district and verify the status of deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    Then the status should show Delete scheduled message with a black tooltip and an appropriate tooltip message

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 5:Verify data is updated on the district listing page and on create district page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    Then the user searches for a district on district listing page
    Then the data in the Source and State columns should be retained
    And hyphen should be visible instead of the DTA and school count on district listing page
    And the Add and Edit action buttons should be disabled on the listing page
    And a restore action button should be visible instead of the delete action button on the listing page
    And the district name link text should be displayed in a non-clickable state
    And the action for the course family popup should be disabled on the listing page
    When user clicks on the create new district button and selects the state and district as other
    And the user enters the district with the same name as the soft-deleted district on the create district page
    Then "create-district.district-name-not-available" error message should be visible on create district page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 6: Verify data is not available on school listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the School listing page
    Then the soft deleted district should not be visible in the filter options
    When user applies state filter on school listing page
    Then the pagination count should be updated on the school listing page
    When user search school from the soft deleted district on school listing page
    Then "school-listing.no-school-found" message should be displayed on school listing page
    When user click on create new school button and selected the state
    Then the soft deleted district should not be visible in the district dropdown of create school page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 7: Verify data is not available on class listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    Then the soft deleted district should not be visible in the filter options
    When user search class on class listing page
    Then the pagination count should be updated on the class listing page
    When user search class from the soft deleted district on class listing page
    Then "class-listing.no-class-found" message should be displayed on class listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 8: Verify data is not available on DTA listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the DTA listing page
    Then the soft deleted district should not be visible in the filter options
    When User applies state filter on DTA listing page
    Then the pagination count should be updated on the DTA listing page
    When User searches for DTA from the soft deleted district on the listing page
    Then "da-listing.no-da-found" message should be displayed on DTA listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 9: Verify DTA cannot be created for the soft-deleted district and uniqueness of emailID as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the DTA listing page
    And user click on create new DTA button and selected the state
    Then the soft deleted district should not be visible in the district dropdown of create DTA page
    When user select the district on create new DTA page
    And user enter the same emailID as the users of the soft deleted district
    Then "add-user.email-not-available" message should be displayed on add DTA user page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 10: Verify data is not available on SA listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then the soft deleted district should not be visible in the filter options
    When User applies state filter on SA listing page as <role>
    Then the pagination count should be updated on the SA listing page
    When User searches for SA from the soft deleted district on the listing page
    Then "sa-listing.no-sa-found" message should be displayed on SA listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 11: Verify SA cannot be created for the soft-deleted district and uniqueness of emailID as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    And user click on create new SA button and selected the state as <role>
    Then the soft deleted district should not be visible in the district dropdown of create SA page
    When user select the district on create new SA page
    And user enter the same emailID as the users of the soft deleted district
    Then "add-user.email-not-available" message should be displayed on add SA user page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 12: Verify data is not available on Teacher listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then the soft deleted district should not be visible in the filter options of Teacher listing
    When User applies district filter on Teacher listing page
    Then the pagination count should be updated on the Teacher listing page
    When User searches for Teacher from the soft deleted district on the listing page
    Then "teacher-listing.no-teacher-found" message should be displayed on teacher listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 13: Verify data is not available on Student listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    Then the soft deleted district should not be visible in the filter options of Student listing
    When User applies district filter on Student listing page
    Then the pagination count should be updated on the Student listing page
    When User searches for Student from the soft deleted district on the listing page
    Then "user-listing.no-user-found" message should be displayed on student listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 14: Verify score reports page do not show soft deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Score report page
    And user has selected the course on score report page
    Then the soft deleted district should not be visible in the district dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the soft deleted district
    When user click on table view on score report page
    Then the score reports should not display any data for the soft deleted district
    When user select previous school years on score report page
    And user has selected the archived district course on score report page
    Then the soft deleted archived district should not be visible in the district dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the soft deleted archived district
    When user click on table view on score report page
    Then the score reports should not display any data for the soft deleted archived district

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 15: Verify item analysis reports page do not show soft deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    And user has selected the course and course quiz on item analysis report page
    Then the soft deleted district should not be visible in the district dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the soft deleted district
    When user select previous school years on item analysis report page
    And user has selected the course and course quiz from archived district on item analysis report page
    Then the soft deleted archived district should not be visible in the district dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the soft deleted archived district

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 16: Verify Product Usage reports page do not show soft deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Product Usage report page
    And user has selected end users on product usage report page
    Then the soft deleted district should not be visible in the district dropdown of product usage report page
    When user click on go button on product usage report page
    And user search a course which is only assigned to the soft deleted dsitrcit on product usage reports page
    Then "product-usage-report.summary.no-course-label" message should be displayed on product usage report page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 17: Verify License reports page do not show soft deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the License report page
    And user has selected course family and assignee on license report page
    And user click on go button on license report page
    Then the soft deleted district should not be visible in the filter of license report pages
    When user search soft deleted district on license report page
    Then "license-report.no-licenses-found-help-text" message should be visible

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 18: Verify Login reports page do not show soft deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Login report page
    And user click on district technical admin tab
    Then the soft deleted district should not be visible in the district dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search soft deleted district user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on school admin tab
    Then the soft deleted district should not be visible in the district dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search soft deleted district user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on teacher tab
    Then the soft deleted district should not be visible in the district dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search soft deleted district user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on district student tab
    Then the soft deleted district should not be visible in the district dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search soft deleted district user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 19: Verify soft deleted district user should not be able to login as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown
    Then the soft deleted district should not be visible in the district dropdown of login with Quantum page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 20: Verify Dashboard updates after soft-deleting a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Then soft deleted district should not be visible on the district dropdowns on course cards tab on the Dashboard
    When user click on unallocated tab
    Then course which are only assigned to the deleted district should be present on unallocated tab
    When user click on schools tab
    Then the soft deleted district should not be visible on the district dropdowns on on schools tab

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 21: Verify course-related information updates on LMS after soft-deleting a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Given the user is on the Course Catalog page
    When user search a course which is assigned to the soft deleted district on course catalog page
    And user click on Districts and schools column on Course Catalog page on LMS
    Then the soft deleted district should not be visible on the districts and schools popup on LMS
    And districts and schools count should be updated on the districts and schools popup on LMS

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 22: Verify course-related information updates on CMS after soft-deleting a district as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is assigned to the soft deleted district on course catalog page
    And user click on Districts and schools column on Course Catalog page on CMS
    Then the soft deleted district should be visible on the districts and schools popup on CMS
    And districts and schools count should remain the same on districts and schools popup on CMS

    Examples:
      | role |
      | "PA" |
      | "CA" |
      | "CE" |

  Scenario Outline: Scenario 23: Verify delete action should be disable for courses assigned to a soft-deleted district on CMS as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is assigned to the soft deleted district on course catalog page
    And user click on delete course button from action column on cms
    Then "course-library.delete.eventSourceFromActionsColumn.single-delete" message should be visible on cms course licensed popup

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 24: Verify license-related information updates on LMS after soft-deleting a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the license listing page
    And user searches for a license which is assigned to the soft deleted district on license listing page
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on active license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on expired license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on unassigned license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on create new license on license listing page
    And the user searched the soft deleted district on district dropdown of license listing page
    Then "create-license.license-details.popup-no-district-msg" should be visible on district dropdown of license listing page
    When user click on school with non district purchases on license creation page
    And the user searched the soft deleted district on district dropdown of license listing page
    Then "create-license.license-details.popup-no-district-msg" should be visible on district dropdown of license listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 25: Verify no user can be imported on soft-deleting a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    And user selected user type as District Technical Admin on import users page
    And user selected state on import users page
    Then soft deleted district should not be visible on the district dropdowns of import users page
    When user selected user type as School Admin on import users page
    Then soft deleted district should not be visible on the district dropdowns of import users page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
