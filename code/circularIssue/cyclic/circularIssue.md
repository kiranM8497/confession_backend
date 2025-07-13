it is a case where 2 or more modules  load each other.
like team.js and user.js when we excute user.js
it will try to load team.js  then goes that file but it sees that file itself
tries to user.js because thread is just at line one in user.js it hasn come to a line where we are doing module.export for user so in team.js when we try to require it it will be an empty object ({}).and rest of the code will be executed . by the time user.js lst line where weare exporting its too late this is cyclic or circular dependedncy.
this above code is excuted we wont face any error but a warning will be there!
to solve this we can move the module.export line at top it will work fine then. but its important to use normal fucntions only.