//Modules -Encapsulated Code ( only share minimum)
//ComonJS , every file is module (by default)
//
let names = require('./4-names')
let funSay = require('./5-utils')
let data= require('./6-alternative-flavor')


funSay('Zed')
funSay(names.mumuste)
funSay(names.mend)
console.log(data)
require('./7-mind-grenade')  //this calls and runs the whole module  (any console log on the module will be called )

