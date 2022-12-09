# Typing-Assistant
Typing Assistant is a highly efficient and precise google extension that can be used in any web pages that the user uses to make the users writing and reading easier and effective.
Problem Statement:
We all have been in that moment where we are authoring a huge essay and want to make it more formal with all those extravagant words. Human always have the tendency to be do things faster rather than trying to take time and check to proofread. The same way we also hesitate to open a huge dictionary and search all terms and synonyms. So, in order to make this work easier we have come up with a solution.

Solution:
We have come up with an idea of creating a typing assistant that is available as a browser extension in any browser that people wish to use. This typing assistant keeps running behind your browser whenever you are editing and authoring your paper. It gives suggestion on which sentences are good and which sentences are more formal and informal. It also has the ability to translate any languages to the one that the user prefers. It acts as a dictionary that automatically searches the word on the internet and displays the search results right on the tab that you are typing out on.


The project in simple words:
The coding for the typing assistant consists of seven separate files of different document type which needs to be coded simultaneously to make the extension work. They are:
•	manifest.json
•	content.js
•	background.js
•	main.css
•	popup.html
•	popup.js
•	pop.html
So first we started with the manifest.json where all the specifications and the default files and folders of the extension is entered in. Whenever a google extension is made all the information that appears on the settings are basically extracted from this file.
And then we did the content.js where all the functions and the JavaScript that happens in the entire extension is placed. This file is the most important of all as the scripts that are added in this has an effect in the background and the used part of the extension. So first we started by adding a function that creates a context in context menu of the webpage which creates an option where any word from the web page can be selected and when double clicked a drop-down list appears which has an option asking to find the meaning of the selected word. When the user clicks on this option it automatically searches the word in Cambridge dictionary and redirects to a new tab showing the user the result. Although this option is effective, people are not so aware of it, so it was not enough to make a dictionary. 
So, we created another function to send a message to the console of the extension whenever a word is being selected in the webpage. Note: Sending a message to the console does not have any effect on the web page, it only runs in the background. Then we designed a popup using WYSIWYG editor which made our work more efficient, creative, and easier rather than spending our time typing separate codes for every sentence. And to run the background scripts of the popup.html it is linked to another file which is popup.js. 
Then we created popup.js where we included all the JavaScript for the typing assistant. In order to do this, we first created a function that reads and responds to the message send by content.js to the console log to extract the word selected by the user. Then we created numerous functions for different properties of the dictionary, one for phonetics, one for definition, one for the navigators, and one for the example of the word in a sentence. Then we made an async function that extracts the definition and all the details needed for a dictionary from a website called Wiktionary.com and we added it all to the popup.html. So, apparently whenever a word is selected, and the popup is opened it shows the default popup in the top and in the bottom, it shows the definition, phonetics, synonyms, and example of the word in a sentence. Besides, we have also solved the RAM issue by keeping our codes simple and extracting data from a website rather than storing a dictionary in the source files. 
