@districtHardDelete @lms
Feature: Functionality to hard-delete districts.

  Scenario Outline: Scenario 1: Check the state of hard deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    Then run cron for hard deletion

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 2: Verify the hard deleted district is not visible on district listing page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And the user searches for the hard-deleted district
    Then the "district-listing.no-district-found" status message should be displayed

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 3: Verify data is not available on school listing page and school can't be created after district hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the School listing page
    Then the hard deleted district should not be visible in the filter options
    When user applies Louisiana state filter on user listing page
    Then the updated pagination count should be displayed on the school listing page
    When user search school from the hard deleted district on school listing page
    Then "school-listing.no-school-found" should be displayed on school listing page
    When user click on create new school button and selects Louisiana state
    Then the hard deleted district should not be visible in the district dropdown of create school page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 4: Verify data is not available on class listing page after hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    Then the hard deleted district should not be visible in the filter options
    When user search class from the hard deleted district on class listing page
    Then "class-listing.no-class-found" message should be displayed on class listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 5: Verify data is not available on DTA listing page and DTA can't be created after district hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the DTA listing page
    Then the hard deleted district should not be visible in the filter options
    When user applies Louisiana state filter on user listing page
    Then the updated pagination count should be displayed on the DTA listing page
    When User searches for DTA from the hard deleted district on the listing page
    Then "da-listing.no-da-found" message should be displayed on DTA listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 6: Verify DTA can be created using the email id and username of a Hard deleted district DTA as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the DTA listing page
    Then user clicks on the create new DTA button and selects the state
    And user checks the availability of hard deleted district in dropdown
    And user should be able to create the DTA user using the same email and username in another district as a <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 7: Verify data is not available on SA listing page and SA can't be created after district hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then the hard deleted district should not be visible in the filter options
    When user applies Louisiana state filter on user listing page
    Then the updated pagination count should be displayed on the SA listing page
    When User searches for SA from the hard deleted district on the listing page
    Then "sa-listing.no-sa-found" message should be displayed on SA listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 8: Verify SA can be created using the email id and username of a Hard deleted district SA as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then user clicks on the create new SA button and selects the state as <role>
    And user checks the availability of hard deleted district in district dropdown
    When user clicks on the back button
    And user should be able to create the SA user using the same email and username in another district as a <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 9: Verify data is not available on Teacher listing pages after district hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then the hard deleted district should not be visible in the filter options of Teacher listing
    When user applies All district filter on Teacher listing page
    Then the updated pagination count should be displayed on the Teacher listing page
    When user searches for Teacher from the hard deleted district on the listing page
    Then "teacher-listing.no-teacher-found" message should be displayed on teacher listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 10: Verify data is not available on Student listing pages after district hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    Then the hard deleted district should not be visible in the filter options of Student listing
    When user applies All district filter on Student listing page
    Then the updated pagination count should be displayed on the Student listing page
    When user searches for Student from the hard deleted district on the listing page
    Then "user-listing.no-user-found" message should be displayed on student listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 11: Verify score reports page do not show hard deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Score report page
    And user has selected the course from hard deleted district on score report page
    Then the hard deleted district should not be visible in the district dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the hard deleted district
    When user click on table view on score report page
    Then the score reports should not display any data for the hard deleted district
    When user select previous school years on score report page
    And user has selected the course from hard deleted archived district on score report page
    Then the hard deleted archived district should not be visible in the district dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the hard deleted archived district
    When user click on table view on score report page
    Then the score reports should not display any data for the hard deleted archived district

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 12: Verify item analysis reports page do not show hard deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    And user has selected the course and course quiz from hard deleted district on item analysis report page
    Then the hard deleted district should not be visible in the district dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the hard deleted district
    When user select previous school years on item analysis report page
    And user has selected the course and course quiz from hard deleted archived district on item analysis report page
    Then the hard deleted archived district should not be visible in the district dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the hard deleted archived district

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 13: Verify Product Usage reports page do not show hard deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Product Usage report page
    And user selects the end users on product usage report page
    Then the hard deleted district should not be visible in the district dropdown of product usage report page
    When user click on go button on product usage report page
    And user search a course which is only assigned to the hard deleted district on product usage reports page
    Then "product-usage-report.summary.no-course-label" message should be displayed on product usage report page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 14: Verify License reports page do not show hard deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the License report page
    And user selects the course family and assignee on license report page
    And user click on go button on license report page
    Then the hard deleted district should not be visible in the filter of license report pages
    When user search hard deleted district on license report page
    Then "license-report.no-licenses-found-help-text" message should be visible

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 15: Verify Login reports page do not show hard deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Login report page
    And user click on district technical admin tab
    Then the hard deleted district should not be visible in the district dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search hard deleted district user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on school admin tab
    Then the hard deleted district should not be visible in the district dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search hard deleted district user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on teacher tab
    Then the hard deleted district should not be visible in the district dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search hard deleted district user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on district student tab
    Then the hard deleted district should not be visible in the district dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search hard deleted district user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 16: Verify hard deleted district user should not be able to login as [<role>]
    Given User is on the LMS login page
    When user selects the state from state dropdown
    Then the hard deleted district should not be visible in the district dropdown of login with Quantum page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 17: Verify Dashboard updates after hard deleting a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Then hard deleted district should not be visible on the district dropdowns on course cards tab on the Dashboard
    When user click on unallocated tab
    Then course which are only assigned to the hard deleted district should be present on unallocated tab
    When user click on schools tab
    Then the hard deleted district should not be visible on the district dropdowns on schools tab

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 18: Verify course-related information updates on LMS after hard deleting a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Given the user is on the Course Catalog page
    When user search a course which is assigned to the hard deleted district on course catalog page
    And user click on Districts and schools column on Course Catalog page on LMS
    Then the hard deleted district should not be visible on the districts and schools popup on LMS
    And districts and schools count should be updated on the districts and schools popup for the hard deleted district course

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 19: Verify course-related information updates on CMS after hard deleting a district as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is assigned to the hard deleted district on course catalog page
    And user click on Districts and schools column on Course Catalog page on CMS
    Then the hard deleted district should not be visible on the districts and schools popup on CMS
    And districts and schools count should be updated on districts and schools popup for the hard deleted district course on CMS

    Examples:
      | role |
      | "PA" |
      | "CA" |
      | "CE" |

  Scenario Outline: Scenario 20: Verify delete action should be enabled for courses assigned to a hard deleted district on CMS as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is only assigned to the hard deleted district on course catalog page
    And user click on delete course button from action column on cms
    Then the hard deleted districts course should be deleted and "select-course.no-course-found" should be displayed

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 21: Verify license-related information updates on LMS after hard deleting a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the license listing page
    And user searches for a license which is assigned to the hard deleted district on license listing page
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on active license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on expired license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on unassigned license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on create new license on license listing page
    And the user has searched the hard deleted district on district dropdown of license listing page
    Then "create-license.license-details.popup-no-district-msg" should be visible on district dropdown of license listing page
    When user click on school with non district purchases on license creation page
    And the user has searched the hard deleted district on district dropdown of license listing page
    Then "create-license.license-details.popup-no-district-msg" should be visible on district dropdown of license listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 22: Verify no user can be imported in the hard deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    And user has selected user type as District Technical Admin on import users page
    And user has selected state on import users page
    Then hard deleted district should not be visible on the district dropdowns of import users page
    When user has selected user type as School Admin on import users page
    Then hard deleted district should not be visible on the district dropdowns of import users page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 23: Verify SAML soft deleted district is not available on saml for organization page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And user searches a hard deleted saml district on district listing page
    When user is on "saml-listing.title"
    Then the hard deleted district shouldn't be visible on saml organization listing page and "saml-listing.no-results-found" should be displayed
    When user clicks on "saml-listing.create-new-saml-config" button on "global-nav.users.saml-for-organizations" page
    Then user should be on "saml-create-config.title" page
    When user clicks on "saml-create-config.select-assignee.select-district-link" on "saml-create-config.title" page
    And user searches for a hard deleted district on Select district card
    Then "create-license.license-details.popup-no-district-msg" message should be displayed along with the updated pagination count
    When user searches for a static district to configure saml on select district popup
    And user applies the district filter on saml organization page
    And user enters the issuer url used in another hard deleted saml district
    Then "saml-config-input.error-msg.unique-url-success" success subtext should be displayed

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 24: Verify hard deleted saml district user should not be able to login using SAML as [<role>]
    Given user is on the LMS SAML login page
    When user select the state from dropdown on SAML login page
    Then "user-login.no-district-placeholder" should be displayed in District dropdown

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 25: Verify that a new district with the same name as the hard-deleted district can be created as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    Then user clicks on the create new district button and selects the state and district as Other
    When the user enters the hard deleted district name for the new district name
    Then the "create-district.district-name-available" success subtext should be visible
    And the new district with hard deleted district name should be created successfully

    Examples:
      | role |
      | "PA" |
