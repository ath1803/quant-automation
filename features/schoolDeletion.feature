@schoolDeletion @lms
Feature: School Deletion Functionality

  Scenario Outline: Scenario 1: Check if the delete button is enabled and perform a soft deletion on the school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the School listing page
    Then the user searches for a School on listing page
    And the delete button should be enabled on school listing page
    When the user clicks on the delete button under the actions column for a school
    Then the passphrase popup should display a message for school deletion "pass-phrase.delete-school-message"
    And the user enters the correct passphrase for school deletion
    And the user clicks on the Verify button
    When the user click on ok button on delete in progress popup
    Then the school should be deleted successfully
    And the tooltip should be visible for the soft deleted district
    When User is on the District listing page
    And the user is on the School listing page
    When the user searches for an archived School on listing page
    Then the delete button should be enabled on school listing page
    When the user clicks on the delete button under the actions column for a school
    Then the passphrase popup should display a message for archived school deletion "pass-phrase.delete-school-message"
    And the user enters the correct passphrase for school deletion
    And the user clicks on the Verify button
    When the user click on ok button on delete in progress popup
    Then the school should be deleted successfully
    And the tooltip should be visible for the soft deleted district

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 2: Verify the status of soft deleted school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the School listing page
    Then the user searches for a School on listing page
    And the status should show Delete scheduled message with a black tooltip and an appropriate tooltip message for the soft deleted school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 3: Verify data is updated on the school listing page and on create school page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the School listing page
    And the user searches for a School on listing page
    Then hyphen should be visible for the counts of SA, Teachers, and Student on school listing page
    And the Add and Edit action buttons should be disabled on the school listing page
    And a restore action button should be visible instead of the delete action button on the listing page
    And the school name link text should be displayed in a non-clickable state
    And the action for the course family popup should be disabled on the listing page
    And the pagination count on the school listing page should not be updated

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 4: Verify school is not present on district listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    Then the user searches for a District on listing page
    And verifies the change in school count for district
    When user clicks on the Schools popup on district listing page
    Then the school count should be updated and soft deleted school shouldn't be displayed on the popup

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 5: Verify school is not present on district details page after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And the user searches for a District on listing page
    Then the user clicks on the district name to open the details page
    And the number of users count should be updated on district details page
    And the soft deleted school should not be visible in the school accordion list

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 6: Verify data is not present on My district page after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on My District page
    Then the number of users count should be updated on My District page
    And the count on the terms accordion should be updated
    And the terms created by the soft deleted schools shouldn't be present

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 7: Verify data is not available on class listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    Then the soft deleted school should not be visible in the filter options
    When user searches class on class listing page
    Then the pagination count should be updated on the class listing page after soft deletion
    When user search class from the soft deleted school on class listing page
    Then "class-listing.no-class-found" message should be displayed on class listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 8: Verify data is not available on SA listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then the soft deleted school should not be visible in the filter options
    When User applies state filter on SA listing page to verify the pagination count as <role>
    Then the pagination count should be updated on the SA listing page after school soft deletion
    When User searches for SA from the soft deleted school on the listing page
    Then "sa-listing.no-sa-found" message should be displayed on SA listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 9: Verify SA cannot be created for the soft deleted school and uniqueness of emailID as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    And user click on create new SA button and selected the state and district as <role>
    Then the soft deleted school should not be visible in the school option of create SA page
    When user selects a different school on create new SA page
    And user enter the same emailID as the users of the soft deleted school SA user
    Then "add-user.email-not-available" message should be displayed on add SA user page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 10: Verify soft deleted school is not present on profile page of a SA user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then user searches for SA user which is present in multiple schools on the listing page
    When the user clicks on the name of the SA user
    Then the soft deleted school should not be visible on the user profile page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 11: Verify data is not available on Teacher listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then the soft deleted school should not be visible in the filter options on Teacher listing page as <role>
    When User applies All school filter on Teacher listing page
    Then the pagination count should be updated on the Teacher listing page after soft deletion of school
    When user searches for Teacher from the soft deleted school on the listing page
    Then "teacher-listing.no-teacher-found" message should be displayed on teacher listing page
    When user searches for teacher present in multiple school
    Then the teacher present in multiple schools should be visible
    And the school column count and the count in school popup should be updated

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 12: Verify teacher cannot be created for the soft deleted school and uniqueness of emailID as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    And user click on create new teacher button
    Then the soft deleted school should not be visible in the school dropdown of create teacher page
    When user selects a different school on create teacher page
    And user enter the same emailID as the users of the soft deleted school teacher user
    Then "add-user.email-not-available" message should be displayed on add teacher user page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 13: Verify soft deleted school is not present on profile page of a teacher user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then User applies All school filter on Teacher listing page
    When user searches for teacher present in multiple school
    And the user clicks on the name of the teacher user
    Then the soft deleted school should not be visible on the user profile page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 14: Verify data is not available on Student listing pages after soft deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    Then the soft deleted school should not be visible in the filter options of Student listing page as <role>
    When User applies All school filter on Student listing page
    Then the pagination count should be updated on the Student listing page after soft deletion of school
    When user searches for Student from the soft deleted school on the listing page
    Then "user-listing.no-user-found" message should be displayed on student listing page
    When user searches for Student from multiple schools on the listing page
    Then the student present in multiple schools should be visible
    And the school column count and the count in school popup should be updated for student user
    And the class column count and the count in class popup should be updated as well

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 15: Verify student cannot be created for the soft deleted school and uniqueness of emailID as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    And user click on create new student button
    Then the soft deleted school should not be visible in the school dropdown of create student page
    When user selects a different school on create student page
    And user enter the same emailID as the users of the soft deleted school student user
    Then "add-user.email-not-available" message should be displayed on add student user page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 16: Verify soft deleted school is not present on profile page of a student user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    And User applies All school filter on Teacher listing page
    Then user searches for Student from multiple schools on the listing page
    When the user clicks on the name of the student user
    Then the soft deleted school should not be visible on the user profile page
    And the class count and course count should be updated as well

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 17: Verify score reports page do not show soft deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Score report page
    Then user has selected the course from soft deleted school on score report page
    When the user selects the district from district dropdown on score report page
    Then the soft deleted school should not be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the soft deleted school
    When user click on table view on score report page
    Then the score reports should not display any data for the soft deleted school
    When user select previous school years on score report page
    Then user selects the archived district course on score report page
    When the user selects the archived district from district dropdown on score report page
    Then the soft deleted archived school should not be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the soft deleted archived school
    When user click on table view on score report page
    Then the score reports should not display any data for the soft deleted archived school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 18: Verify score reports page do not show soft deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Score report page
    And user has selected the course from soft deleted school on score report page
    Then the soft deleted school should not be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the soft deleted school
    When user click on table view on score report page
    Then the score reports should not display any data for the soft deleted school
    And the user logs out of the app
    # Archived user
    Given User is on the LMS login page
    And user select the state from state dropdown and district with soft deleted school from district dropdown
    Then the user enters the username and password of the archived soft deleted school user as <role>
    And the user clicks on the login button on LMS login page
    When the user is on the Score report page
    And user selects the archived district course on score report page
    Then the soft deleted archived school should not be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the soft deleted archived school
    When user click on table view on score report page
    Then the score reports should not display any data for the soft deleted archived school

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 19: Verify item analysis reports page do not show soft deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    Then user has selected the course and course quiz from the soft deleted school on item analysis report page
    When the user selects the district from district dropdown on item analysis report page
    Then the soft deleted school should not be visible in the school dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the soft deleted school
    When user select previous school years on item analysis report page
    Then user has selected the course and course quiz from archived school on item analysis report page
    When the user selects the archived district from district dropdown on item analysis report page
    Then the soft deleted archived school should not be visible in the school dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the soft deleted archived school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 20: Verify Gradebook reports page do not show soft deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Gradebook report page
    Then the soft deleted school should not be present in the school dropdown on gradebook report page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 21: Verify Product Usage reports page do not show soft deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Product Usage report page
    Then user selects end users on product usage report page
    When the user selects the district on product usage report page
    Then the soft deleted school should not be visible in the school dropdown of the product usage report page
    When user selects non-district purchase end users on product usage report page
    Then user selects custom date range of 1 year on product usage report page
    When user click on go button on product usage report page
    And user search a course which is assigned to the soft deleted school on product usage reports page
    Then "product-usage-report.summary.no-course-label" message should be displayed on product usage report page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 22: Verify License reports page do not show soft deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the License report page
    And user selects course family and school assignee on license report page
    And user click on go button on license report page
    Then the soft deleted school should not be visible in the filter of license report pages
    When user searches for soft deleted school on license report page
    Then "license-report.no-licenses-found-help-text" message should be visible

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 23: Verify Login reports page do not show soft deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Login report page
    When user click on school admin tab
    And the user selects the district on the login reports page as <role>
    Then the soft deleted school should not be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search soft deleted school user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on teacher tab
    And the user selects the district on the login reports page as <role>
    Then the soft deleted school should not be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search soft deleted school user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on district student tab
    And the user selects the district on the login reports page as <role>
    Then the soft deleted school should not be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search soft deleted school user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 24: Verify soft deleted school user should not be able to login as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and district with soft deleted school from district dropdown
    And the user enters the username and password of the soft deleted school user as <role>
    And the user clicks on the login button on LMS login page
    Then the error popup should be displayed on login page
    When user select the state from state dropdown and district with soft deleted school from district dropdown
    And the user enters the username and password of the user present in multiple schools as <role>
    And the user clicks on the login button on LMS login page
    Then the user should login and soft deleted school should not be present in school selection popup

    Examples:
      | role      |
      | "SA"      |
      | "Teacher" |
      | "Student" |

  Scenario Outline: Scenario 25: Verify Dashboard updates after soft-deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Then soft deleted school should not be visible on the school dropdowns on course cards tab on the Dashboard
    When user click on schools tab
    And the user selects the district from district dropdown on the school tab as <role>
    Then the soft deleted school card should not be visible on the school tab

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 26: Verify course-related information updates on LMS after soft-deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Given the user is on the Course Catalog page
    When user search a course which is assigned to the soft deleted school on lms course catalog page
    And user click on Districts and schools column on Course Catalog page on LMS
    Then the soft deleted school should not be visible on the districts and schools popup on LMS
    And schools count should be updated on the districts and schools popup on LMS

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 27: Verify course-related information updates on LMS after soft-deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Given the user is on the Course Catalog page
    When user search a course which is assigned to the soft deleted school on lms course catalog page
    And user click on Districts and schools column on Course Catalog page on LMS
    Then the soft deleted school should not be visible on the districts and schools popup on LMS
    And schools count should be updated on the districts and schools popup for DTA user

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 28: Verify course-related information updates on CMS after soft-deleting a school as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is assigned to the soft deleted school on course catalog page
    And user click on Districts and schools column on Course Catalog page on CMS
    Then the soft deleted school should be visible on the districts and schools popup on CMS
    And schools count should remain the same on districts and schools popup on CMS

    Examples:
      | role |
      | "PA" |
      | "CA" |
      | "CE" |

  Scenario Outline: Scenario 29: Verify course deletion is blocked when the course is assigned to a soft-deleted school on CMS as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is assigned to the soft deleted school on course catalog page
    And user click on delete course button from action column on cms
    Then "course-library.delete.eventSourceFromActionsColumn.single-delete" message should be visible on cms course licensed popup

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 30: Verify license-related information updates on LMS after soft-deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the license listing page
    And user searches for a license which is assigned to the soft deleted school on license listing page
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on active license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on expired license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on unassigned license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on create new license on license listing page
    And user click on school with non district purchases on license creation page
    Then the user selects the district from district popup of license listing page
    When the user searched the soft deleted school on school popup of license listing page
    Then "create-license.license-details.popup-no-school-msg" should be displayed on school selection popup of license listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 31: Verify no user can be imported on soft-deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    When user selects user type as School Admin on import users page
    And user selects the state and district on import users page
    Then school admin user of the soft deleted school shouldn't get imported

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 32: Verify no user can be imported on soft-deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    When user selects user type as School Admin on import users page
    Then school admin user of the soft deleted school shouldn't get imported
    And user clicks on the start over button
    When user selects user type as Teacher on import users page
    Then teacher user of the soft deleted school shouldn't get imported
    And user clicks on the start over button
    When user selects user type as Student on import users page
    Then student user of the soft deleted school shouldn't get imported

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 33: Check the state of restore button and restore a soft deleted school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the School listing page
    Then the user searches for a School on listing page
    Then restore button should be displayed instead of delete button
    And the restore button should be in enabled state
    When user clicks on the restore button
    Then the user clicks on 'YES' button on restoration popup
    And user clicks on the OK button on the Restoration in progress popup
    Then the user searches for an archived School on listing page
    Then restore button should be displayed instead of delete button
    And the restore button should be in enabled state
    When user clicks on the restore button
    Then the user clicks on 'YES' button on restoration popup
    And user clicks on the OK button on the Restoration in progress popup

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 34: Verify data is updated on the school listing page after restoring a soft deleted school as [<role>]
    Given User login as a <role> in "LMS"
    When User is on the dashboard page
    Then the user is on the School listing page
    When the user searches for a School on listing page
    Then the SA, Teachers, and Student count should be visible on school listing page for the restored school
    And the Edit action button should be enabled on school listing page
    And delete action button should be visible instead of the restore action button on the school listing page
    And the school name link text should be displayed in a clickable state

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 35: Verify school is present on district listing pages after restoration as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And the user searches for a District on listing page
    Then verifies the change in school count after restoration for district
    When user clicks on the Schools popup on district listing page
    Then the school count should be updated and restored school should be displayed on the popup

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 36: Verify school is present on district details page after restoration as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And the user searches for a District on listing page
    Then the user clicks on the district name to open the details page
    And the number of users count should be updated after restoration on district details page
    And the restored school should be visible in the school accordion list

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 37: Verify data is present on My district page after restoration as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on My District page
    Then the number of users count should be updated after restoration on My District page
    And the count on the terms accordion should be updated after restoration
    And the terms created by the soft deleted schools should be present

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 38: Verify data is available on class listing pages after restoration as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    Then the restored school should be visible in the filter options
    When user searches class on class listing page
    Then the pagination count should be updated on the class listing page after restoration of school
    When user search class from the soft deleted school on class listing page
    Then the restored school class should be present on the class listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 39: Verify data is available on SA listing pages after restoration as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then the restored school should be visible in the filter options
    When User applies state filter on SA listing page to verify the pagination count after restoration as <role>
    Then the pagination count should be updated on the SA listing page after school restoration
    When User searches for SA from the soft deleted school on the listing page
    Then the SA user should be present on the SA listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 40: Verify SA can be created for the restored school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then user should be able to create a SA in restored school as a <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 41: Verify restored school is present on profile page of a SA user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then user searches for SA user which is present in multiple schools on the listing page
    When the user clicks on the name of the SA user
    Then the restored school should be visible on the user profile page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 42: Verify data is available on Teacher listing pages after restoration as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then the restored school should be visible in the filter options on Teacher listing page as <role>
    When User applies All school filter on Teacher listing page
    Then the pagination count should be updated on the Teacher listing page after restoration of school
    When user searches for Teacher from the soft deleted school on the listing page
    Then the teacher user should be displayed
    When user searches for teacher present in multiple school
    Then the teacher present in multiple schools should be visible
    And the school column count and the count in school popup should be updated after restoration

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 43: Verify teacher can be created for the restored school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then user should be able to create a Teacher user as a restored school <role> user

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 44: Verify restored school is present on profile page of a teacher user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then User applies All school filter on Teacher listing page
    When user searches for teacher present in multiple school
    And the user clicks on the name of the teacher user
    Then the restored school should be visible on the user profile page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 45: Verify data is available on Student listing pages after restoration as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    Then the restored school should be visible in the filter options on Student listing page as <role>
    When User applies All school filter on Student listing page
    Then the pagination count should be updated on the Student listing page after restoration of school
    When user searches for Student from the soft deleted school on the listing page
    Then the student user should be displayed
    When user searches for Student from multiple schools on the listing page
    Then the student present in multiple schools should be visible
    And the school column count and the count in school popup should be updated for student user after restoration
    And the class column count and the count in class popup should be updated as well after restoration

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 46: Verify student can be created for the restored school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    Then user should be able to create a Student user as a restored school <role> user

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 47: Verify restore school is present on profile page of a teacher user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    And User applies All school filter on Teacher listing page
    Then user searches for Student from multiple schools on the listing page
    When the user clicks on the name of the student user
    Then the restored school should be visible on the user profile page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 48: Verify the restored school data is present on Score report page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Score report page
    Then user has selected the course from soft deleted school on score report page
    When the user selects the district from district dropdown on score report page
    Then the restored school should be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should be displayed for the restored school as <role>
    When user click on table view on score report page
    Then the score reports should be displayed for the restored school as <role>
    When user select previous school years on score report page
    Then user selects the archived district course on score report page
    When the user selects the archived district from district dropdown on score report page
    Then the restored archived school should be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should be displayed for the restored archived school as <role>
    When user click on table view on score report page
    Then the score reports should be displayed for the restored archived school as <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 49: Verify item analysis reports page show restored school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    Then user has selected the course and course quiz from the soft deleted school on item analysis report page
    When the user selects the district from district dropdown on item analysis report page
    Then the restored school should be visible in the school dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should display attempts from students of the restored school
    When user select previous school years on item analysis report page
    Then user has selected the course and course quiz from archived school on item analysis report page
    When the user selects the archived district from district dropdown on item analysis report page
    Then the restored archived school should be visible in the school dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should display attempts from students of the restored archived school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 50: Verify the restored school data is present on the License reports page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the License report page
    And user selects course family and school assignee on license report page
    And user click on go button on license report page
    Then the restored school should be visible in the filter options
    When user searches for a license which is assigned to the soft deleted school on license listing page
    Then the restored school license should be present on the license report page
    When the user clicks on the export button
    Then the csv file should be downloaded and should contain the restored school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 51: Verify restored school user should be able to login as [<role>]
    Given User login as a <role> in "LMS"
    Then the user should be logged in and LMS dashboard page should be visible

    Examples:
      | role      |
      | "SA"      |
      | "Teacher" |
      | "Student" |

  Scenario Outline: Scenario 52: Verify the restored school data is present on the Login reports page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Login report page
    When user click on school admin tab
    When the user selects the district on the login reports page as <role>
    Then the restored school should be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored school SA user with name prefix on login report page
    Then the restored school SA user should be displayed with updated page count
    When user click on teacher tab
    And the user selects the district on the login reports page as <role>
    Then the restored school should be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored school Teacher user with name prefix on login report page
    Then the restored school teacher user should be displayed with updated page count
    When user click on district student tab
    And the user selects the district on the login reports page as <role>
    Then the restored school should be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored school Student user with name prefix on login report page
    Then the restored school student user should be displayed with updated page count

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 53: Verify Dashboard updates after restoring a soft deleted school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Then the restored school should be visible in the school dropdowns on course cards tab on the Dashboard
    When user click on schools tab
    And the user selects the district from district dropdown on the school tab as <role>
    Then the restored school card should be visible on the school tab

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 54: Verify course-related information updates on LMS after restoring a school as [<role>]
    Given User login as a <role> in "LMS"
    When User is on the dashboard page
    Then the user is on the Course Catalog page
    When user search a course which is assigned to the soft deleted school on lms course catalog page
    And user click on Districts and schools column on Course Catalog page on LMS
    Then the restored school should be visible on the districts and schools popup on LMS

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 55: Verify course-related information updates on CMS after restoration of school as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is assigned to the soft deleted school on course catalog page
    And user click on Districts and schools column on Course Catalog page on CMS
    Then the soft deleted school should be visible on the districts and schools popup on CMS
    And schools count should remain the same on districts and schools popup on CMS

    Examples:
      | role |
      | "PA" |
      | "CA" |
      | "CE" |

  Scenario Outline: Scenario 56: Verify license-related information updates on LMS after restoring a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the license listing page
    And user searches for a license which is assigned to the soft deleted school on license listing page
    Then the license from the restored school should be displayed
    When user click on active license tab
    Then the license from the restored school should be displayed
    When user click on expired license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on unassigned license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on create new license on license listing page
    And user click on school with non district purchases on license creation page
    Then the user selects the district from district popup of license listing page
    When the user searched the soft deleted school on school popup of license listing page
    Then the restored school should be visible on school popup of license listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 57: Verify the restored school is displayed on the license details page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the license listing page
    And user searches for a license which is only assigned to the restored school on license listing page
    Then the license from the restored school should be displayed
    When the user clicks on the name of the displayed license
    Then the school name should be present on the license details page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 58: Verify user can be imported after restoring a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    When user selects user type as School Admin on import users page
    And user selects the state and district on import users page
    Then user imports a School Admin in the restored school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 59: Verify user can be imported after restoring a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    When user selects user type as School Admin on import users page
    Then user imports a School Admin in the restored school
    And the user is on the import users page
    When user selects user type as Teacher on import users page
    Then teacher user of the soft deleted school should be imported
    And the user is on the import users page
    When user selects user type as Student on import users page
    Then student user of the soft deleted school should be imported

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 60: Verify a restored school user can create users and organizations as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then user should be able to create a Teacher user as a restored school <role> user
    When the user is on the Class listing page
    Then user enters all the metadata on class creation page as a restored school SA user
    And user should save the class and verify the "create-class.class-saved" message on popup
    When the user is on the Class listing page
    And user searches for the newly created class on class listing page as a restored school SA user
    Then clicks on the add button to create group in the class
    When user enters the group name for the newly created class as a restored school SA user
    Then user verifies the "group.group-name-available" message and clicks on the save button
    When the user is on the Student listing page
    Then user should be able to create a Student user as a restored school <role> user

    Examples:
      | role |
      | "SA" |

  Scenario Outline: Scenario 61: Verify a restored district user can create users and organizations as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    Then user enters all the metadata on class creation page as a restored school Teacher user
    And user should save the class and verify the "create-class.class-saved" message on popup
    When the user is on the Class listing page
    And user searches for the newly created class on class listing page as a restored school Teacher user
    Then clicks on the add button to create group in the class
    When user enters the group name for the newly created class as a restored school Teacher user
    Then user verifies the "group.group-name-available" message and clicks on the save button
    When the user is on the Student listing page
    Then user should be able to create a Student user as a restored school <role> user

    Examples:
      | role      |
      | "Teacher" |

  Scenario Outline: Scenario 62: Verify a user can assign and unassign course to a class and create assignments for the same as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    And user searches for the newly created class on class listing page as a restored school SA user
    Then user clicks on the displayed class on class listing page
    When user clicks on allocate course on class details page
    Then user searches for the static course on course selection page for assigning
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When user clicks on allocate course on class details page
    And user searches for the static course for assignment creation to assign on course selection page
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When the <role> user is on the Assignment listing page
    Then user clicks on create new assignment
    When user clicks on select content on stepper1 of assignment creation page
    And user searches for the static course for assignment creation to assign on course selection page
    Then user clicks on the assigned course on the select content popup
    When user clicks on select all checkbox with content as graded
    Then user clicks on the Done button on select content popup
    And user enters the name for the newly created assignment and moves to stepper2 as a restored school SA user
    And the user clicks on the Go button on stepper2 of assignment creation
    Then user should check the restored school class checkbox for which the assignment should be assigned as <role>
    When user clicks on the Assign button on stepper2 of assignment creation
    Then user clicks on the positive button on the confirmation popup and OK button on the success popup
    When the user is on the Class listing page
    Then user searches for the newly created class on class listing page as a restored school SA user
    When user clicks on the displayed class on class listing page
    Then user should unassign the newly assigned course from the displayed class

    Examples:
      | role |
      | "SA" |

  Scenario Outline: Scenario 63: Verify a user can assign and unassign course to a class and create assignments for the same as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    And user search class from the soft deleted school on class listing page
    Then user clicks on the displayed class on class listing page
    When user clicks on allocate course on class details page
    Then user searches for the static course on course selection page for assigning
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When user clicks on allocate course on class details page
    And user searches for the static course for assignment creation to assign on course selection page
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When the <role> user is on the Assignment listing page
    Then user clicks on create new assignment
    When user clicks on select content on stepper1 of assignment creation page
    And user searches for the static course for assignment creation to assign on course selection page
    Then user clicks on the assigned course on the select content popup
    When user clicks on select all checkbox with content as graded
    Then user clicks on the Done button on select content popup
    And user enters the name for the newly created assignment and moves to stepper2 as a restored school Teacher user
    And the user clicks on the Go button on stepper2 of assignment creation
    Then user should check the restored school class checkbox for which the assignment should be assigned as <role>
    When user clicks on the Assign button on stepper2 of assignment creation
    Then user clicks on the positive button on the confirmation popup and OK button on the success popup

    Examples:
      | role      |
      | "Teacher" |

  Scenario Outline: Scenario 64: Verify a restored district user can attempt courses and assignments as [<role>]
    Given User login as a <role> in "LMS"
    Then user is on the courses tab on dashboard page
    Then the user clicks on the open button for the course assigned to restored school
    When user launches and clicks on the start attempt button
    Then user attempts the single select question of the auto-coded cq and selects option <answer>
    And user attempts the multiselect question of the auto-coded cq with options <answer>
    And user attempts the fill in the blanks question of the auto-coded cq with inputs <answer> and answers <fibAnswers>
    And user attempts the response matrix question of the auto-coded cq with selections <answer>
    And user attempts the dropdown question of the auto-coded cq with choice <answer> and answers <ddAnswers>
    And user attempts the classify question of the auto-coded cq with categories <answer>
    And the user attempts the drag and drop question of the auto-coded cq with arrangement <answer>
    And the user attempts the essay question of the given cq
    Then the user clicks on the submit button and positive button popup
        #Assignment
    When user is on the assignments tab on dashboard page
    Then the user clicks on the open button for the given assignment
    When user launches and clicks on the start attempt button
    Then user attempts the single select question of the auto-coded cq and selects option <answer>
    And user attempts the multiselect question of the auto-coded cq with options <answer>
    And user attempts the fill in the blanks question of the auto-coded cq with inputs <answer> and answers <fibAnswers>
    And user attempts the response matrix question of the auto-coded cq with selections <answer>
    And user attempts the dropdown question of the auto-coded cq with choice <answer> and answers <ddAnswers>
    And user attempts the classify question of the auto-coded cq with categories <answer>
    And the user attempts the drag and drop question of the auto-coded cq with arrangement <answer>
    And the user attempts the essay question of the given cq
    Then the user clicks on the submit button and positive button popup

    Examples:
      | role      | answer    | fibAnswers    | ddAnswers             |
      | "Student" | "1,2,3,4" | "Delhi,Tiger" | "Delhi,Sub-Continent" |

  Scenario Outline: Scenario 65: Verify a restored district user is able to evaluate student attempts as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on Grade submission page
    Then user selects the restored class from class dropdown on grade submission page
    And selects the newly assigned course from the course dropdown on grade submission page
    When selects the course quiz of the newly assigned course from the cq dropdown on grade submission page
    Then user clicks on the go button on grade submission page
    When user clicks on the grade evaluation button
    Then user evaluates the teacher graded question and submits the evaluation

    Examples:
      | role      |
      | "Teacher" |

  Scenario Outline: Scenario 67: Verify the restored district school and class data is present on Gradebook report page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Gradebook report page
    Then user has selected the restored school, teacher, and class from dropdown on gradebook report page as <role>
    When user clicks on go button on gradebook report page
    Then the gradebook reports should be displayed for the restored school and class
    And the user logs out of the app
    # Archived user
    Given User is on the LMS login page
    And user select the state from state dropdown and district with soft deleted school from district dropdown
    Then the user enters the username and password of the archived soft deleted school user as <role>
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Gradebook report page
    Then user has selected the restored school, teacher, and class from archived district on gradebook report page as <role>
    When user clicks on go button on gradebook report page
    Then the gradebook reports should be displayed for the restored archived school and class

    Examples:
      | role      |
      | "DTA"     |
      | "SA"      |
      | "Teacher" |

  Scenario Outline: Scenario 68: Verify the restored school and class data is present on Gradebook report page as [<role>]
    Given User login as a <role> in "LMS"
    When the user is on the Gradebook report page
    Then the gradebook reports should be displayed for the restored school and class
    And the user logs out of the app
    # Archived user
    Given User is on the LMS login page
    And user select the state from state dropdown and district with soft deleted school from district dropdown
    Then the user enters the username and password of the archived soft deleted school user as <role>
    And the user clicks on the login button on LMS login page
    When the user is on the Gradebook report page
    Then the gradebook reports should be displayed for the restored archived school and class

    Examples:
      | role      |
      | "Student" |

  Scenario Outline: Scenario 69: Verify the exit card assignments can be created and assigned as restored school [<role>]
    Given User login as a <role> in "LMS"
    When User is on the dashboard page
    Then user is on the Exit card assignments page
    When user clicks on the create new assignment button on exit card assignments page
    Then user clicks on the select exit card button
    When user searches for the given exit card and selects the exit card
    Then user clicks on the Add button on select exit card page
    When user selects the course from the dropdown on assign exit card page
    And user enters the exit card assignment name
    Then user clicks on the next button and navigates to stepper2
    When user clicks on the go button on stepper2 of the assign exit card page
    Then user selects the class and clicks on the assign button

    Examples:
      | role      |
      | "Teacher" |

  Scenario Outline: Scenario 70: Verify the exit card assignment can be attempted as restored school [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When user is on the assignments tab on dashboard page
    Then the user clicks on the open button for the exit card assignment
    When user clicks on the ok button on instructions popup
    Then user clicks on the launch exit card assignment button
    And user clicks on the start button of exit card instructions popup
    When user selects the first option of the ec assignment single select question
    Then the user clicks on the submit button and positive button popup

    Examples:
      | role      |
      | "Student" |

  Scenario Outline: Scenario 71: Verify the evaluation of exit card assignment attempts and exit card reports of previous attempts as restored school [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When user is on the Exit card report page
    Then user selects the class, course, exit card, and newly created assignment from dropdown on exit card report page
    When user clicks on the go button on exit card report page
    Then user clicks on the evaluate button of the given student on exit card report page
    When user clicks on the Got it radio button
    Then user clicks on the back button on ec assignment evaluation page
    When user clicks on the report tab on exit card report page
    Then user selects the class, course, exit card, and assignment from dropdown on exit card report page
    When user clicks on the go button on exit card report page
    Then user verifies the number of student attempts and percentage on exit card reports page

    Examples:
      | role      |
      | "Teacher" |

  Scenario Outline: Scenario 72: Check the state of hard deleted school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the School listing page
    Then run cron for hard deletion

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 73: Verify the hard deleted school is not visible on school listing page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the School listing page
    And the user searches for the hard-deleted school
    Then "school-listing.no-school-found" should be displayed on school listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 74: Verify school is not present on district listing pages after hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    Then the user searches for a District on listing page
    And verifies the change in school count for district after hard deletion
    When user clicks on the Schools popup on district listing page
    Then the school count should be updated and hard deleted school shouldn't be displayed on the popup

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 75: Verify school is not present on district details page after hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And the user searches for a District on listing page
    Then the user clicks on the district name to open the details page
    And the number of users count should be updated on district details page after hard deletion of school
    And the hard deleted school should not be visible in the school accordion list

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
    #TODO

  Scenario Outline: Scenario 76: Verify data is not present on My district page after hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on My District page
    Then the number of users count should be updated on My District page after hard deletion of school
    And the count on the terms accordion should be updated after hard deletion of school
    And the terms created by the hard deleted schools shouldn't be present

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 77: Verify data is not available on class listing pages after hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    Then the hard deleted school should not be visible in the filter options
    When user search class from the hard deleted school on class listing page
    Then "class-listing.no-class-found" message should be displayed on class listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 78: Verify data is not available on SA listing pages after hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then the hard deleted school should not be visible in the filter options
    When User applies state filter on SA listing page to verify the pagination count as <role>
    Then the pagination count should be updated on the SA listing page after school hard deletion
    When User searches for SA from the hard deleted school on the listing page
    Then "sa-listing.no-sa-found" message should be displayed on SA listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 79: Verify SA cannot be created for the hard deleted school and uniqueness of emailID as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    And user click on create new SA button and selected the state and district as <role>
    Then the hard deleted school should not be visible in the school option of create SA page
    When user selects a different school on create new SA page
    And user clicks on the back button
    Then user should be able to create the SA user using the same email and username in another school as a <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 80: Verify hard deleted school is not present on profile page of a SA user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the SA listing page
    Then user searches for SA user which is present in multiple schools on the listing page
    When the user clicks on the name of the SA user
    Then the hard deleted school should not be visible on the user profile page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 81: Verify data is not available on Teacher listing pages after hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then the hard deleted school should not be visible in the filter options on Teacher listing page as <role>
    When User applies All school filter on Teacher listing page
    Then the pagination count should be updated on the Teacher listing page after hard deletion of school
    When user searches for Teacher from the hard deleted school on the listing page
    Then "teacher-listing.no-teacher-found" message should be displayed on teacher listing page
    When user searches for teacher present in multiple school
    Then the teacher present in multiple schools should be visible
    And the school column count and the count in school popup should be updated after hard deletion of school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 82: Verify teacher cannot be created for the hard deleted school and uniqueness of emailID as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    And user click on create new teacher button
    Then the hard deleted school should not be visible in the school dropdown of create teacher page
    When user selects a different school on create teacher page
    And user clicks on the back button
    Then user should be able to create the Teacher user using the same email and username in another school as a <role>

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 83: Verify hard deleted school is not present on profile page of a teacher user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then User applies All school filter on Teacher listing page
    When user searches for teacher present in multiple school
    And the user clicks on the name of the teacher user
    Then the hard deleted school should not be visible on the user profile page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 84: Verify data is not available on Student listing pages after hard deletion as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    Then the hard deleted school should not be visible in the filter options of Student listing page as <role>
    When User applies All school filter on Student listing page
    Then the pagination count should be updated on the Student listing page after hard deletion of school
    When user searches for Student from the hard deleted school on the listing page
    Then "user-listing.no-user-found" message should be displayed on student listing page
    When user searches for Student from multiple schools on the listing page
    Then the student present in multiple schools should be visible
    And the school column count and the count in school popup should be updated for student user after hard deletion of school
    And the class column count and the count in class popup should be updated after hard deletion of school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 85: Verify student cannot be created for the hard deleted school and uniqueness of emailID as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    And user click on create new student button
    Then the hard deleted school should not be visible in the school dropdown of create student page
    When user selects a different school on create student page
    And user clicks on the back button
    Then user should be able to create the Student user using the same email and username in another school as a <role>

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 86: Verify hard deleted school is not present on profile page of a student user as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    And User applies All school filter on Teacher listing page
    Then user searches for Student from multiple schools on the listing page
    When the user clicks on the name of the student user
    Then the hard deleted school should not be visible on the user profile page
    And the class count and course count should be updated as well after hard deletion

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 87: Verify score reports page do not show hard deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Score report page
    Then user has selected the course from soft deleted school on score report page
    When the user selects the district from district dropdown on score report page
    Then the hard deleted school should not be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the hard deleted school
    When user click on table view on score report page
    Then the score reports should not display any data for the hard deleted school
    When user select previous school years on score report page
    Then user selects the archived district course on score report page
    When the user selects the archived district from district dropdown on score report page
    Then the hard deleted archived school should not be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the hard deleted archived school
    When user click on table view on score report page
    Then the score reports should not display any data for the hard deleted archived school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 87: Verify score reports page do not show hard deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Score report page
    And user has selected the course from soft deleted school on score report page
    Then the hard deleted school should not be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the hard deleted school
    When user click on table view on score report page
    Then the score reports should not display any data for the hard deleted school
    And the user logs out of the app
    # Archived user
    Given User is on the LMS login page
    And user select the state from state dropdown and district with soft deleted school from district dropdown
    Then the user enters the username and password of the archived soft deleted school user as <role>
    And the user clicks on the login button on LMS login page
    When the user is on the Score report page
    And user selects the archived district course on score report page
    Then the hard deleted archived school should not be visible in the school dropdown of score report pages
    When user click on go button on score report page
    Then the score reports should not display any data for the hard deleted archived school
    When user click on table view on score report page
    Then the score reports should not display any data for the hard deleted archived school

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 88: Verify item analysis reports page do not show hard deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    Then user has selected the course and course quiz from the soft deleted school on item analysis report page
    When the user selects the district from district dropdown on item analysis report page
    Then the hard deleted school should not be visible in the school dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the hard deleted school
    When user select previous school years on item analysis report page
    Then user has selected the course and course quiz from archived school on item analysis report page
    When the user selects the archived district from district dropdown on item analysis report page
    Then the hard deleted archived school should not be visible in the school dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the hard deleted archived school

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 88: Verify item analysis reports page do not show hard deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    And user has selected the course and course quiz from the soft deleted school on item analysis report page
    Then the hard deleted school should not be visible in the school dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the hard deleted school
    And the user logs out of the app
    # Archived User
    Given User is on the LMS login page
    And user select the state from state dropdown and district with soft deleted school from district dropdown
    Then the user enters the username and password of the archived soft deleted school user as <role>
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    And user has selected the course and course quiz from archived school on item analysis report page
    Then the hard deleted archived school should not be visible in the school dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should not display attempts from students of the hard deleted archived school

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 89: Verify Gradebook reports page do not show hard deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Gradebook report page
    Then the hard deleted school should not be present in the school dropdown on gradebook report page

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 90: Verify Product Usage reports page do not show hard deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Product Usage report page
    Then user selects end users on product usage report page
    When the user selects the district on product usage report page
    Then the hard deleted school should not be visible in the school dropdown of the product usage report page
    When user selects non-district purchase end users on product usage report page
    Then user selects custom date range of 1 year on product usage report page
    When user click on go button on product usage report page
    And user search a course which is assigned to the hard deleted school on product usage reports page
    Then "product-usage-report.summary.no-course-label" message should be displayed on product usage report page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 91: Verify License reports page do not show hard deleted district data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the License report page
    And user selects course family and school assignee on license report page
    And user click on go button on license report page
    Then the hard deleted school should not be visible in the filter of license report pages
    When user searches for hard deleted school on license report page
    Then "license-report.no-licenses-found-help-text" message should be visible

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 92: Verify Login reports page do not show hard deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Login report page
    When user click on school admin tab
    And the user selects the district on the login reports page as <role>
    Then the hard deleted school should not be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search hard deleted school user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on teacher tab
    And the user selects the district on the login reports page as <role>
    Then the hard deleted school should not be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search hard deleted school user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed
    When user click on district student tab
    And the user selects the district on the login reports page as <role>
    Then the hard deleted school should not be visible in the school dropdown of login report pages
    When user click on go button on login report page
    And user click on report tab on login report page
    And user search hard deleted school user with name prefix on login report page
    Then "login-report.no-data-message" message should be displayed

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 93: Verify hard deleted school user should not be able to login as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and district with soft deleted school from district dropdown
    And the user enters the username and password of the hard deleted school user as <role>
    And the user clicks on the login button on LMS login page
    Then the error popup should be displayed on login page
    When user select the state from state dropdown and district with soft deleted school from district dropdown
    And the user enters the username and password of the user present in multiple schools as <role>
    And the user clicks on the login button on LMS login page
    Then the user should login and hard deleted school should not be present in school selection popup

    Examples:
      | role      |
      | "SA"      |
      | "Teacher" |
      | "Student" |

  Scenario Outline: Scenario 94: Verify Dashboard updates after hard deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Then hard deleted school should not be visible on the school dropdowns on course cards tab on the Dashboard
    When user click on schools tab
    And the user selects the district from district dropdown on the school tab as <role>
    Then the hard deleted school card should not be visible on the school tab

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |
      | "DTA" |

  Scenario Outline: Scenario 95: Verify course-related information updates on LMS after hard deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Given the user is on the Course Catalog page
    When user search a course which is assigned to the hard deleted school on course catalog page
    And user click on Districts and schools column on Course Catalog page on LMS
    Then the hard deleted school should not be visible on the districts and schools popup on LMS
    And schools count should be updated on the districts and schools popup after hard deletion of school on LMS

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 95: Verify course-related information updates on LMS after hard deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Given the user is on the Course Catalog page
    When user search a course which is assigned to the hard deleted school on lms course catalog page
    And user click on Districts and schools column on Course Catalog page on LMS
    Then the hard deleted school should not be visible on the districts and schools popup on LMS
    And schools count should be updated on the districts and schools popup after hard deletion of school for DTA user

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 96: Verify course-related information updates on CMS after hard deleting a school as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is assigned to the hard deleted school on lms course catalog page
    Then the district and school column count should be updated on cms for the hard deleted district course

    Examples:
      | role |
      | "PA" |
      | "CA" |
      | "CE" |

  Scenario Outline: Scenario 97: Verify course only assigned to a hard deleted school can be deleted on CMS as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    Then user search a course which is only assigned to the hard deleted school on course catalog page
    When user click on delete course button from action column on cms
    Then the hard deleted districts course should be deleted and "select-course.no-course-found" should be displayed

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 98: Verify license-related information updates on LMS after hard deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the license listing page
    And user searches for a license which is assigned to the hard deleted school on license listing page
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on active license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on expired license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on unassigned license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on create new license on license listing page
    And user click on school with non district purchases on license creation page
    Then the user selects the district from district popup of license listing page
    When the user searched the hard deleted school on school popup of license listing page
    Then "create-license.license-details.popup-no-school-msg" should be displayed on school selection popup of license listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 99: Verify no user can be imported on hard deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    When user selects user type as School Admin on import users page
    And user selects the state and district on import users page
    Then school admin user of the hard deleted school shouldn't get imported

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 100: Verify no user can be imported on hard deleting a school as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    When user selects user type as School Admin on import users page
    Then school admin user of the hard deleted school shouldn't get imported
    And user clicks on the start over button
    When user selects user type as Teacher on import users page
    Then teacher user of the hard deleted school shouldn't get imported
    And user clicks on the start over button
    When user selects user type as Student on import users page
    Then student user of the hard deleted school shouldn't get imported

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 101: Verify Gradebook reports page do not show hard deleted school data as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Gradebook report page
    Then the hard deleted school should not be present in the school dropdown on gradebook report page

    Examples:
      | role  |
      | "DTA" |
