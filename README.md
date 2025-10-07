this project is made to check whether it is possible to control through Ui elemnts via ui 
handling ui means if ai wants to show the page we want and it also decide which part of elemtn should shown to render 

this project's name is ALL in App mean any web app can be integrated to this project 

steps or architechture

1 : app.jsx is a script where  the final ouput is shown ...
2 : now we will talk about the layerd structure of multilple script which works together to give the desired results i want ..
 a) we break a page into 2 scripts i.e 

 pageScript : a script where whole page is shown

 component.jsx : a script where we create compoent/element which we want ai to handle 

 b) we break ai handling script into two part , in it ai wont handle ,here we assgn the page its id and its elmnt and id 

 componentHandler.jsx : a script where routing is handled , in this we get data from ai ,after getting the ai we decide what to do or not make the setup such a way that ai can handle it 

 tree script :  a script where the id is assigned to the component and page according to these id and the data receuve  comonenthandler handles routes
 we creatd this script in order to make the elemnt easy to undestand 
 it also helps us to render a certain elemt at a time i.e. it use object_tree which bassicaly a object where keys are id and element and grougped elemtns are component 
 a certain  component is  return by the treehandler funciton in its own pagescipt where the compoentrn should be render


Basically in the frontend there is no ai involment its a complex structure , the use of ai is in backend only 
we just setup make the frontend such that the elemtn will be dependen on the data the ai create which bascically mean ai is indirecly handling the frontend