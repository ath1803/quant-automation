@districtRestore @lms
Feature: Restoration of Soft Deleted District Functionality

  Scenario Outline: Scenario 1: Check the state of restore button and restore a soft deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    And User is on the District listing page
    When the user search a soft deleted district on district listing page
    Then restore button should be displayed instead of delete button
    And the restore button should be in enabled state
    When user clicks on the restore button
    Then a restore district popup should appear
    When the user clicks on 'NO' button on restoration popup
    Then the restoration popup should close
    When user clicks on the restore button
    And the user clicks on 'YES' button on restoration popup
    Then Restoration in Progress popup should appear
    And user clicks on the OK button on the Restoration in progress popup
    When the user search a soft deleted archived district on district listing page
    When user clicks on the restore button
    And the user clicks on 'YES' button on restoration popup
    Then user clicks on the OK button on the Restoration in progress popup

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 2: Verify data is updated on the district listing page after restoring a soft deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And the user search the restored district on district listing page
    Then the data in the Source and State columns should be retained after restoring a district
    And the DTA and school count should be visible on district listing page for the restored district
    And the Add and Edit action buttons should be enabled on district listing page
    And delete action button should be visible instead of the restore action button on the district listing page
    And the district name link text should be displayed in a clickable state
    And the action for the course family popup should be enabled on district listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 3: Verify data is available on school listing page and school can be created after restoration of a Soft deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    And the user is on the School listing page
    Then the restored district should be available in filter district section
    When user searches school from the soft deleted district which has been restored on school listing page
    Then the school from restored district should be available
    When user applies Louisiana state filter on listing page
    Then the pagination count should be updated on the school listing page after restoring the district
    When user click on create new school button and selected the state on school creation page
    Then user should be able to create a school in restored district as <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 4: Verify data is available on class listing page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Class listing page
    Then the restored district should be available in filter district section
    When user searches class from the soft deleted district which has been restored on class listing page
    Then the class from restored district should be available
    And the pagination count should be updated on the class listing page after restoration of district

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 5: Verify data is available on DTA listing page and DTA can be created after restoration of soft deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    And the user is on the DTA listing page
    Then the restored district should be available in filter district section
    When user searches DTA from the soft deleted district which has been restored on DTA listing page
    Then the DTA user from restored district should be available
    When user applies Louisiana state filter on listing page
    Then the pagination count should be updated on the DTA listing page after restoration of district
    When user click on create new DTA button and selected the state of the restored district
    Then user should be able to create a DTA in restored district as a <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 6: Verify data is available on SA listing page and SA can be created after restoration of soft deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    And the user is on the SA listing page
    Then the restored district should be available in filter district section
    When user searches SA from the soft deleted district which has been restored on SA listing page
    Then the SA user from restored district should be available
    When user applies Louisiana state filter on listing page
    Then the pagination count should be updated on the SA listing page after restoration of district
    And user should be able to create a SA in restored district as a <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 7: Verify data is available on Teacher listing page after restoration of soft deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Teacher listing page
    And user selects Louisiana from the state dropdown on Teacher listing page
    And user selects the restored district from the district dropdown on Teacher listing page
    And user checks the availability of school from restored district in school dropdown
    When user clicks on the apply button on Teacher listing page
    Then the pagination count should be updated on Teacher listing page after restoration
    When user searches Teacher from the restored district on Teacher listing page
    Then the teacher from the restored district should be available on the listing page
    When user clicks on the displayed teacher name on Teacher listing page
    Then "user-profile.title" header should be displayed

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 8: Verify data is available on Student listing page after restoration of soft deleted district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Student listing page
    And user selects Louisiana from the state dropdown on Student listing page
    And user selects the restored district from the district dropdown on Student listing page
    And user checks the availability of school from restored district in school dropdown
    When user clicks on the apply button on Student listing page
    Then the pagination count should be updated on Student listing page after restoration
    When user searches student from the district restored on Student listing page
    Then the student from the restored district should be available on the listing page
    When user clicks on the displayed student name on Student listing page
    Then "user-profile.title" header should be displayed

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 9: Verify the restored district data is present on Score report page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Score report page
    And user has selected the restored district course on score report page
    Then the restored district should be visible in the district dropdown of score report page
    When user click on go button on score report page
    Then the score reports should be displayed for the restored district as <role>
    When user click on table view on score report page
    Then the score reports should be displayed for the restored district as <role>
    When user select previous school years on score report page
    And user has selected the restored archived district course on score report page
    Then the restored archived district should be visible in the district dropdown of score report page
    When user click on go button on score report page
    Then the score reports should be displayed for the restored archived district as <role>
    When user click on table view on score report page
    Then the score reports should be displayed for the restored archived district as <role>

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 10: Verify the restored district data is present on Item analysis report page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    And user has selected the restored district course and course quiz on item analysis report page
    Then the restored district should be visible in the district dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should display data of the restored district
    When user select previous school years on item analysis report page
    And user has selected the restored archived district course and course quiz on item analysis report page
    Then the restored archived district should be visible in the district dropdown of item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should display data of the restored archived district

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 11: Verify the restored district data is present on the License reports page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the License report page
    And user has selected course family and district assignee on license report page
    And user click on go button on license report page
    Then the restored district should be available in filter district section
    When user searches for a restored district license on license report page
    Then the license should be present on the license report page
    When the user clicks on the export button
    Then the csv file should be downloaded and should contain the restored district

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 12: Verify restored district user should be able to login as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    Then the user should be logged in and LMS dashboard page should be visible

    Examples:
      | role      |
      | "DTA"     |
      | "SA"      |
      | "Teacher" |
      | "Student" |

  Scenario Outline: Scenario 13: Verify the restored district data is present on the Login reports page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Login report page
    And user click on district technical admin tab
    Then the restored district should be present in the district dropdown of login report pages as <role>
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district DTA user with name prefix on login report page
    Then the restored district DTA user should be displayed with updated page count
    When user click on school admin tab
    Then the restored district should be present in the district dropdown of login report pages as <role>
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district SA user with name prefix on login report page
    Then the restored district SA user should be displayed with updated page count
    When user click on teacher tab
    Then the restored district should be present in the district dropdown of login report pages as <role>
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district teacher user with name prefix on login report page
    Then the restored district teacher user should be displayed with updated page count
    When user click on district student tab
    Then the restored district should be present in the district dropdown of login report pages as <role>
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district student user with name prefix on login report page
    Then the restored district student user should be displayed with updated page count

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 14: Verify Dashboard updates after restoring a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    Then the restored district should be visible on the district dropdowns on course cards tab on the Dashboard
    When user click on unallocated tab
    Then courses which are assigned to the restored district should not be present on unallocated tab
    When user click on schools tab
    Then the restored district should be visible on the district dropdowns on schools tab

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 15: Verify course-related information updates on LMS after restoring a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    And the user is on the Course Catalog page
    When user search a course which is assigned to the restored district on course catalog page
    And user click on Districts and schools column on Course Catalog page on LMS
    Then the restored district should be visible on the districts and schools popup on LMS
    And districts and schools count should be updated for the restored district course on the districts and schools popup on LMS

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 16: Verify course-related information updates on CMS after restoring a district as [<role>]
    Given User login as a <role> in "CMS"
    And the user is on the Course Catalog page on CMS
    When User click on published tab on Course Catalog page
    And user search a course which is assigned to the restored district on course catalog page
    And user click on Districts and schools column on Course Catalog page on CMS
    Then the restored district should be visible on the districts and schools popup on CMS
    And districts and schools count should be updated for the restored district course on the districts and schools popup on CMS

    Examples:
      | role |
      | "PA" |
      | "CA" |
      | "CE" |

  Scenario Outline: Scenario 17: Verify license-related information updates on LMS after restoring a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the license listing page
    And user searches for a license which is assigned to a restored district on license listing page
    Then the license from the restored district should be displayed
    When user click on active license tab
    Then the license from the restored district should be displayed
    When user click on expired license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on unassigned license tab
    Then "license-catalog.no-licenses-found" message should be visible on license listing page
    When user click on create new license on license listing page
    And the user searches for the restored district on district dropdown of license listing page
    Then the restored district should be visible on district dropdown of license listing page
    When user click on school with non district purchases on license creation page
    And the user searches for the restored district on district dropdown of license listing page
    Then the restored district should be visible on district dropdown of license listing page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 18: Verify user can be imported after restoring a district as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the import users page
    And user selected user type as District Technical Admin of restored district on import users page
    And user selected Louisiana state on import users page
    Then restored district should be present in the district dropdown of import users page
    And user imports a District technical Admin in the restored district
    When the user is on the import users page
    When user selected user type as School Admin of restored district on import users page
    And user selected Louisiana state on import users page
    Then restored district should be present in the district dropdown of import users page
    And user imports a School Admin in the restored district

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 19: Verify restored SAML district is visible on saml for organization page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When User is on the District listing page
    And user searches a soft deleted saml district on district listing page
    Then the restore button should be in enabled state
    When user clicks on the restore button
    Then a restore district popup should appear
    And the user clicks on 'YES' button on restoration popup
    Then Restoration in Progress popup should appear
    And user clicks on the OK button on the Restoration in progress popup
    When user searches a soft deleted static district to configure saml organization on district listing page
    Then the restore button should be in enabled state
    When user clicks on the restore button
    Then a restore district popup should appear
    When the user clicks on 'YES' button on restoration popup
    And Restoration in Progress popup should appear
    Then user clicks on the OK button on the Restoration in progress popup
    When user is on "saml-listing.title"
    Then the restored district should be visible on saml organization listing page
    When user clicks on "saml-listing.create-new-saml-config" button on "global-nav.users.saml-for-organizations" page
    Then user should be on "saml-create-config.title" page
    When user clicks on "saml-create-config.select-assignee.select-district-link" on "saml-create-config.title" page
    And user searches for a restored static district on select district popup
    And user applies the district filter on saml organization page
    And user enters the required data to configure saml district
    Then user should be able to create a new saml district

    Examples:
      | role |
      | "PA" |

  Scenario Outline: Scenario 20: Verify restored saml district user should be able to login using SAML as [<role>]
    Given user is on the LMS SAML login page
    When user selects Alabama from state dropdown on SAML login page
    And user selects the restored saml district from the district dropdown on SAML login page
    Then user clicks on the Log in with SAML button
    When user enters the saml DTA username on onelogin page
    And user enters the password for the saml DTA user on onelogin page
    Then the user should be logged in and LMS dashboard page should be visible

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 21: Verify a restored district user can create users and organizations as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    When the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the School listing page
    And user click on create new school button
    Then user should be able to create a school in restored district as <role>
    When the user is on the SA listing page
    Then user should be able to create a SA in restored district as a <role>
    When the user is on the Teacher listing page
    Then user should be able to create a Teacher user as a restored district <role> user
    When the user is on the Class listing page
    And user click on create new class button and selected the school as <role>
    Then user enters all the metadata on class creation page as DTA
    And user should save the class and verify the "create-class.class-saved" message on popup
    When the user is on the Class listing page
    And user searches for the newly created class on class listing page as DTA
    Then clicks on the add button to create group in the class
    When user enters the group name for the newly created class as DTA
    Then user verifies the "group.group-name-available" message and clicks on the save button
    When the user is on the Student listing page
    Then user should be able to create a Student user as a restored district <role> user

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 22: Verify a restored district user can create users and organizations as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    When the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Teacher listing page
    Then user should be able to create a Teacher user as a restored district <role> user
    When the user is on the Class listing page
    Then user enters all the metadata on class creation page as SA user
    And user should save the class and verify the "create-class.class-saved" message on popup
    When the user is on the Class listing page
    And user searches for the newly created class on class listing page as SA
    Then clicks on the add button to create group in the class
    When user enters the group name for the newly created class as SA
    Then user verifies the "group.group-name-available" message and clicks on the save button
    When the user is on the Student listing page
    Then user should be able to create a Student user as a restored district <role> user

    Examples:
      | role |
      | "SA" |

  Scenario Outline: Scenario 23: Verify a restored district user can create users and organizations as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    When the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Class listing page
    Then user enters all the metadata on class creation page as Teacher user
    And user should save the class and verify the "create-class.class-saved" message on popup
    When the user is on the Class listing page
    And user searches for the newly created class on class listing page as Teacher
    Then clicks on the add button to create group in the class
    When user enters the group name for the newly created class as Teacher
    Then user verifies the "group.group-name-available" message and clicks on the save button
    When the user is on the Student listing page
    Then user should be able to create a Student user as a restored district <role> user

    Examples:
      | role      |
      | "Teacher" |

  Scenario Outline: Scenario 24: Verify a user can assign course to a class and create assignments for the same as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    When the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Class listing page
    And user searches for the newly created class on class listing page as DTA
    Then user clicks on the displayed class on class listing page
    When user clicks on allocate course on class details page
    Then user searches for the static course on course selection page
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When user clicks on allocate course on class details page
    And user searches for the static course for assignment creation on course selection page
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When the <role> user is on the Assignment listing page
    Then user clicks on create new assignment
    When user clicks on select content on stepper1 of assignment creation page
    And user searches for the static course for assignment creation on course selection page
    Then user clicks on the assigned course on the select content popup
    When user clicks on select all checkbox with content as graded
    Then user clicks on the Done button on select content popup
    And user enters the name for the newly created assignment and moves to stepper2 as DTA
    When user selects the school from school dropdown with class radio button selected as <role>
    And the user clicks on the Go button on stepper2 of assignment creation
    Then user should check the class checkbox for which the assignment should be assigned as <role>
    When user clicks on the Assign button on stepper2 of assignment creation
    Then user clicks on the positive button on the confirmation popup and OK button on the success popup
    When the user is on the Class listing page
    Then user searches for the newly created class on class listing page as DTA
    When user clicks on the displayed class on class listing page
    Then user should unassign the assigned course from the displayed class

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 25: Verify a user can assign course to a class and create assignments for the same as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    When the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Class listing page
    And user searches for the newly created class on class listing page as SA
    Then user clicks on the displayed class on class listing page
    When user clicks on allocate course on class details page
    Then user searches for the static course on course selection page
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When user clicks on allocate course on class details page
    And user searches for the static course for assignment creation on course selection page
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When the <role> user is on the Assignment listing page
    Then user clicks on create new assignment
    When user clicks on select content on stepper1 of assignment creation page
    And user searches for the static course for assignment creation on course selection page
    Then user clicks on the assigned course on the select content popup
    When user clicks on select all checkbox with content as graded
    Then user clicks on the Done button on select content popup
    And user enters the name for the newly created assignment and moves to stepper2 as SA
    And the user clicks on the Go button on stepper2 of assignment creation
    Then user should check the class checkbox for which the assignment should be assigned as <role>
    When user clicks on the Assign button on stepper2 of assignment creation
    Then user clicks on the positive button on the confirmation popup and OK button on the success popup
    When the user is on the Class listing page
    Then user searches for the newly created class on class listing page as SA
    When user clicks on the displayed class on class listing page
    Then user should unassign the assigned course from the displayed class

    Examples:
      | role |
      | "SA" |

  Scenario Outline: Scenario 26: Verify a user can assign course to a class and create assignments for the same as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    When the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Class listing page
    And user searches class from the soft deleted district which has been restored on class listing page
    Then user clicks on the displayed class on class listing page
    When user clicks on allocate course on class details page
    Then user searches for the static course on course selection page
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When user clicks on allocate course on class details page
    And user searches for the static course for assignment creation on course selection page
    When user clicks on the displayed course radio button on Allocate course page and moves to stepper2
    Then user clicks on the allocate course button on stepper2
    When the <role> user is on the Assignment listing page
    Then user clicks on create new assignment
    When user clicks on select content on stepper1 of assignment creation page
    And user searches for the static course for assignment creation on course selection page
    Then user clicks on the assigned course on the select content popup
    When user clicks on select all checkbox with content as graded
    Then user clicks on the Done button on select content popup
    And user enters the name for the newly created assignment and moves to stepper2 as Teacher
    And the user clicks on the Go button on stepper2 of assignment creation
    Then user should check the restored district class checkbox for which the assignment should be assigned as <role>
    When user clicks on the Assign button on stepper2 of assignment creation
    Then user clicks on the positive button on the confirmation popup and OK button on the success popup

    Examples:
      | role      |
      | "Teacher" |

  Scenario Outline: Scenario 27: Verify a restored district user can attempt courses and assignments as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    When the user clicks on the login button on LMS login page
    Then user is on the courses tab on dashboard page
    Then the user clicks on the open button for the assigned course
    When user launches and clicks on the start attempt button
    Then user attempts the single select question of the auto-coded cq and selects option <answer>
    And user attempts the multiselect question of the auto-coded cq with options <answer>
    And user attempts the fill in the blanks question of the auto-coded cq with inputs <answer> and answers <fibAnswers>
    And user attempts the response matrix question of the auto-coded cq with selections <answer>
    And user attempts the dropdown question of the auto-coded cq with choice <answer> and answers <ddAnswers>
    And user attempts the classify question of the auto-coded cq with categories <answer>
    And the user attempts the drag and drop question of the auto-coded cq with arrangement <answer>
    And the user attempts the essay question of the cq
    Then the user clicks on the submit button and positive button popup
        #Assignment
    When user is on the assignments tab on dashboard page
    Then the user clicks on the open button for the assignment
    When user launches and clicks on the start attempt button
    Then user attempts the single select question of the auto-coded cq and selects option <answer>
    And user attempts the multiselect question of the auto-coded cq with options <answer>
    And user attempts the fill in the blanks question of the auto-coded cq with inputs <answer> and answers <fibAnswers>
    And user attempts the response matrix question of the auto-coded cq with selections <answer>
    And user attempts the dropdown question of the auto-coded cq with choice <answer> and answers <ddAnswers>
    And user attempts the classify question of the auto-coded cq with categories <answer>
    And the user attempts the drag and drop question of the auto-coded cq with arrangement <answer>
    And the user attempts the essay question of the cq
    Then the user clicks on the submit button and positive button popup

    Examples:
      | role      | answer    | fibAnswers    | ddAnswers             |
      | "Student" | "1,2,3,4" | "Delhi,Tiger" | "Delhi,Sub-Continent" |

  Scenario Outline: Scenario 28: Verify a restored district user is able to evaluate student attempts as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    When the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When User is on Grade submission page
    Then user selects the class from class dropdown on grade submission page
    And selects the course from the course dropdown on grade submission page
    When selects the course quiz from the cq dropdown on grade submission page
    Then user clicks on the go button on grade submission page
    When user clicks on the grade evaluation button
    Then user evaluates the teacher graded question and submits the evaluation

    Examples:
      | role      |
      | "Teacher" |

  Scenario Outline: Scenario 29: Verify the restored district data is present on Product usage report page as [<role>]
    Given User login as a <role> in "LMS"
    And User is on the dashboard page
    When the user is on the Product Usage report page
    And user has selected end users on product usage report page for the restored district
    Then the restored district should be available in the district dropdown of product usage report page
    When user click on go button on product usage report page
    And user search a course which is only assigned to the restored district on product usage reports page
    Then the course should be displayed on product usage report page

    Examples:
      | role  |
      | "PA"  |
      | "TSO" |

  Scenario Outline: Scenario 30: Verify the restored district school and class data is present on Score report page as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Score report page
    Then the user selects restored district course from dropdown on score report page
    When user click on go button on score report page
    Then the score reports should be displayed for the restored district school and class as <role>
    When user click on table view on score report page
    Then the score reports should be displayed for the restored district school and class as <role>
    And the user logs out of the app
    # Archived user
    Given User is on the LMS login page
    And user select the state from state dropdown and restored archived district from district dropdown
    Then the user enters the username and password of the restored archived district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Score report page
    Then user has selected the restored archived district course on score report page
    When user click on go button on score report page
    Then the score reports should be displayed for the restored archived district school and class as <role>
    When user click on table view on score report page
    Then the score reports should be displayed for the restored archived district school and class as <role>

    Examples:
      | role      |
      | "DTA"     |
      | "SA"      |
      | "Teacher" |

  Scenario Outline: Scenario 31: Verify the restored district school and class data is present on Score report page as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    When the user is on the Score report page
    Then the user selects restored district course from dropdown on score report page
    When the user clicks on the learning object tab on student reports page
    Then the score reports should be displayed for the restored district school and class as <role>
    And the user logs out of the app
    # Archived user
    Given User is on the LMS login page
    And user select the state from state dropdown and restored archived district from district dropdown
    Then the user enters the username and password of the restored archived district <role> user
    And the user clicks on the login button on LMS login page
    When the user is on the Score report page
    When the user clicks on the learning object tab on student reports page
    Then the score reports should be displayed for the restored archived district school and class as <role>

    Examples:
      | role      |
      | "Student" |

  Scenario Outline: Scenario 32: Verify the restored district school and class data is present on Gradebook report page as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Gradebook report page
    Then user has selected the school, teacher, and class from dropdown on gradebook report page as <role>
    When user clicks on go button on gradebook report page
    Then the gradebook reports should be displayed for the restored district school and class
    And the user logs out of the app
    # Archived user
    Given User is on the LMS login page
    And user select the state from state dropdown and restored archived district from district dropdown
    Then the user enters the username and password of the restored archived district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Gradebook report page
    Then user has selected the school, teacher, and class from archived district on gradebook report page as <role>
    When user clicks on go button on gradebook report page
    Then the gradebook reports should be displayed for the restored archived district school and class

    Examples:
      | role      |
      | "DTA"     |
      | "SA"      |
      | "Teacher" |

  Scenario Outline: Scenario 33: Verify the restored district school and class data is present on Gradebook report page as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    When the user is on the Gradebook report page
    Then the gradebook reports should be displayed for the restored district school and class
    And the user logs out of the app
    # Archived user
    Given User is on the LMS login page
    And user select the state from state dropdown and restored archived district from district dropdown
    Then the user enters the username and password of the restored archived district <role> user
    And the user clicks on the login button on LMS login page
    When the user is on the Gradebook report page
    Then the gradebook reports should be displayed for the restored archived district school and class

    Examples:
      | role      |
      | "Student" |

  Scenario Outline: Scenario 34: Verify the restored district data is present on Item analysis report page as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    And the user selects restored district course and course quiz on item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should display the restored district data
    And the user logs out of the app
    # Archived User
    When User is on the LMS login page
    And user select the state from state dropdown and restored archived district from district dropdown
    Then the user enters the username and password of the restored archived district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Item Analysis report page
    And user has selected the restored archived district course and course quiz on item analysis report page
    When user click on go button on item analysis report page
    Then the item analysis reports should display the restored archived district data

    Examples:
      | role      |
      | "DTA"     |
      | "SA"      |
      | "Teacher" |

  Scenario Outline: Scenario 35: Verify the restored district data is present on the Login reports page as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Login report page
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district SA user with name prefix on login report page
    Then the restored district SA user should be displayed with updated page count
    #Step2
    When user click on teacher tab
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district teacher user with name prefix on login report page
    Then the restored district teacher user should be displayed with updated page count
    #Step3
    When user click on district student tab
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district student user with name prefix on login report page
    Then the restored district student user should be displayed with updated page count

    Examples:
      | role  |
      | "DTA" |

  Scenario Outline: Scenario 36: Verify the restored district data is present on the Login reports page as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Login report page
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district teacher user with name prefix on login report page
    Then the restored district teacher user should be displayed with updated page count
    When user click on district student tab
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district student user with name prefix on login report page
    Then the restored district student user should be displayed with updated page count

    Examples:
      | role |
      | "SA" |

  Scenario Outline: Scenario 37: Verify the restored district data is present on the Login reports page as [<role>]
    Given User is on the LMS login page
    When user select the state from state dropdown and restored district from district dropdown
    Then the user enters the username and password of the restored district <role> user
    And the user clicks on the login button on LMS login page
    And User is on the dashboard page
    When the user is on the Login report page
    When user click on go button on login report page
    And user click on report tab on login report page
    And user searches for a restored district student user with name prefix on login report page
    Then the restored district student user should be displayed with updated page count

    Examples:
      | role      |
      | "Teacher" |
