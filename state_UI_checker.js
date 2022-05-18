/* 

  React usees state but this could be for Angular or anything using this pattern. Even Vue.

  I have noticed while jumping in and seeing errors on UI issues in front end apps that all these quesitons need to be addressed for each part of the UI 
  What happens to state when these things happen OR what type of data[state] persistence do you expect to have - testing checklist sheet for these items
   newer developers or some veterans who don't ansser all the UIUX quesitons of what to do in each case need to do this more
  1. Refresh
  2. Hit back on the browser
  3. Hit back on bread crumbs or step of a process and forward to (back and forth)
  4. log in and or log out processes
  variation /random combination of all of these-- 
  TODO - use facebook as example of how this sohould be and compare to amazon or twitter 

  Things like spinner, UI dummy loader components - I have wanted to write this down and now realize I may have another docs for this ...

for talking in teams scenarios language is super important-  BUTTON CLICKS, Refresh- anything that affect state is user interaction usually so that could be templated out 
*/
- address each possible user event 
onload 
onclick 
on input /type 
on scroll 
basically all use input action 
close browser 
close tab
refresh
power of computer goes out.  

events based-  save button persistance etc 
The "state of state" in a React web app

2 processes 
API CALL - CRUD computer process - and giving the User feedback - all thoughts should keep the user up to date with what is going on. 
request track state 
CREATE - ADD button , NEW CREATE like an unpublished blog post 
READ - GET 1 ITEM BY ID or Get ALL items or get a group of Items - anytime data is shown to the user. on load or by a VIEW button on the UI 
UPDATE
EDIT button , changing text oh the UI or and data - 
DELETE CLEAR - UNDO , X button, Trash can 
THey need to know what is going on… 

'Fetch / render react blends them term render as we fetch for streaming responses
Status Boolean or String
STRING_- const [status] = useState("success")
PROS CONS 
initial, updated data, initialResource, updatedResource, isFetching, success or isSuccess, isFailure, isError, error, failure - to be used for each CRUD item 

api call user click - isLoading, reload, refresh
fallback, loader
USER UI FEEDBACK vs VARIABLES for DEV and conditional rendering code
