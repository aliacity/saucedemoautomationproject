# saucedemoautomationproject
Automation of basic test cases for various pages on the sauce demo test website

This project demonstrates frontend automation of basic tests using the Cypress framework.
To successfully execute these scripts the instructions are as follows:

  1. Ensure you have node version 12 or above installed 
      You can check your node version by running ' node--v '
      You can also download node here https://nodejs.org/en/download/
    
  2. Create a project folder and install cypress using the following commands
        1. ' mkdir <your desirred project name> '
        2. ' cd <your desirred project name> '
        3. ' npm init-y '
        4. ' npm install cypress '
      
  3. Once cypress is installed you can open the cypress application using the following command
  
       ' npx cypress open '
       
  4. Next youll need to clone this repository into your project folder
  
        1. Navigate to the main page of the repository in github
        2. click " Code" and copy the url for the repository
        3. Open terminal and navigate to your project folder
        4. Type ' git clone <repository url> '
        5. hit enter
 
       
       Other methods can be found here https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
       
  5. Once the project has been cloned, you simply run the tests using the command:
       1. ' npx cypress run '
        
  6. Test execution reports can be found in the cypress/results folder
         Copy the path from any of the html files generated, open in a browser to view the report for that spec file
    
   
