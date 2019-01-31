//    <Dry Run>_

// To connect to IRC declare a new variable, assign your hacker alias to it and
// show us a message with both your hacker alias and the ircConnectedMessage.

console.log('DRY RUN/////////////////////////////////////')

const ircConnectedMessage = ' has connected to irc.colo-solutions.net';

var hackerAlias = 'SoylentGood';

console.log( hackerAlias + ircConnectedMessage);

console.log('////////////////////////////////////////////////////')
//////////////    //////////////    //////////////    //////////////

// <Hacking Task #1>_

// To solve this next task, you first have to declare a new variable and assign your new password to it.

// If your password size is higher than minimumPasswordSizeForASecureLine, show ‘You're now in a secure line.’ and set the variable
// secureLine to true. Otherwise you should show ‘You're not in a secure line. The FBI might get a hold of you...’.

// No matter what, you should also show us that you've joined the channel by printing
// the variable ircChannelJoinedMessage.

// Increase your currentDay by the value of taskTwoDuration.

// If Elliot hasn't finished serving his time in jail, you should show what's the currentDay and
// how many days are left in his sentence. Otherwise, show the amount of days he spent jail.
console.log('TASK #1 ////////////////////////////////////////')

let hackerPassword = prompt('Pick a password, no less than 10 characters');
let secureLine = false;
const ircChannelJoinedMessage = 'You joined #th3g3ntl3man';
let currentDay = 0;
const taskTwoDuration = 10;
let elliotSentenceTime = 100;
const minimumPasswordSizeForASecureLine = 10;

if(hackerPassword.length > minimumPasswordSizeForASecureLine) {

    secureLine = true;
    console.log(ircChannelJoinedMessage + ' - Your password is good.' );
    
} else {
    
    secureLine = false;
    
    console.log(ircChannelJoinedMessage);
    console.log('You\'re not in a secure line. The FBI might get a hold of you...');
    
}

for(currentDay = 0; currentDay < taskTwoDuration; currentDay++ );

if(currentDay < elliotSentenceTime)   {

elliotSentenceTime = elliotSentenceTime - currentDay;

console.log('Today is Day '+ currentDay + ', ' + elliotSentenceTime + ' days left in Elliot\'s sentence time.');

}

console.log('////////////////////////////////////////////////////')

/////////////   /////////////   /////////////   /////////////

// <Hacking Task #2>_

// You'll have to connect to IRC everyday until you find Elliot online.
// Every time you check if Elliot is online, increase currentDay by 1.
// When you finally find him, you gotta ask what's the plan.

// When currentDay is equal to dayElliotIsOnline, print
// 'Finally... Can you tell me what the fuck is Stage 2?' and set the elliotOnline variable to true.
// But beware of the FBI, for they're on the lookout: if you talk to Elliot without a secure line his
// sentence will increase by 30 days.

// If Elliot hasn't finished serving his time in jail, you should show what's the currentDay and
// how many days are left in his sentence. Otherwise, show the amount of days he spent jail.
console.log('TASK #2 /////////////////////////////////////////')

const dayElliotIsOnline = 20;
let elliotOnline = false;
let fbiSentenceIncrease = 30;


if( currentDay < dayElliotIsOnline )  {

for( currentDay; currentDay < dayElliotIsOnline; currentDay++ ) {
      
       console.log('on day ' + currentDay + ' ' + hackerAlias + ircConnectedMessage ) 
        }  
};

if( currentDay === dayElliotIsOnline )   {
      elliotOnline = true;
      console.log('On day 20... Finally... Can you tell me what the fuck is Stage 2?')
    }

          if(secureLine === false) {
        
      elliotSentenceTime = elliotSentenceTime + fbiSentenceIncrease;
      
      console.log('The FBI is on the lookout, Elliot\'s sentence is increased by 30 days');
      }

if( currentDay < elliotSentenceTime )   {
 
 elliotSentenceTime = elliotSentenceTime - taskTwoDuration;

console.log('Today is Day '+ currentDay + ', ' + elliotSentenceTime + ' days left in Elliot\'s sentence time.');

}
console.log('////////////////////////////////////////////////////')

//////////////////    ///////////////////   //////////////////

// <Hacking Task #3>_

// Find the smallest password in posibleRaysPasswords array and print it like the example below.

// e.g: femtocell
// f
// fe
// fem
// femt
// femto
// femtoc
// femtoce
// femtocel
// femtocell

// Reduce 40 days of Elliot's sentence time and increase your currentDay by the value of taskFourDuration.

// If Elliot hasn't finished serving his time in jail, you should show what's the currentDay and
// how many days are left in his sentence. Otherwise, show the amount of days he spent jail.
console.log('TASK #3 ////////////////////////////////////////')

const taskFourDuration = 15;
const possibleRaysPasswords = [
    'mobleyAndTrentonAreDead',
    'tyrellIsElliot',
    'dreadPirateRoberts'];
let taskSucess = 40;


let thePass = Math.min.apply( Math, possibleRaysPasswords.map ( function (str)  {
  return str.length; 
    }));
  
console.log('The smallest Password has '+ thePass+ ' characters.');

for( thePass of possibleRaysPasswords ) {

  if( thePass > possibleRaysPasswords ) {

    let i = 1
    function triangle(thePass)  {
      
      let len = thePass.length;
      if( len > i ) {
        console.log(thePass.substring(  0,  i ));
        i +=  1;
        return triangle(thePass);
    }
} 

triangle(thePass)
  console.log(thePass) }
}

if( currentDay < elliotSentenceTime )   {
 
elliotSentenceTime = elliotSentenceTime - taskSucess;
currentDay = currentDay + taskFourDuration;

console.log('Today is Day '+ currentDay + ', ' + elliotSentenceTime + ' days left in Elliot\'s sentence time.');
};

console.log('///////////////////////////////////////////////////')

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


// <Final Hacking Task>_

// You're given two arrays: one that holds every member of fSociety and another one
// that holds every possible suspect of the 5/9 attacks.
// Replace every fSociety member from the Bureau list with something of your taste.

// Show the new Bureau list to confirm that you've erased all the names.

// Increase the currentDay by the value of finalTaskDuration.

// If Elliot hasn't finished serving his time in jail, you should show what's the currentDay and
// how many days are left in his sentence. Otherwise, show the amount of days he spent jail.
console.log('FINAL HACKING TASK //////////////////////////////////')

const finalTaskDuration = 20;
const fSocietyMembersAlias = [
    'Mr. Robot',
    'DoloresH4ze',
    'samsepi0l',
    'Mobley',
    'Trenton'
];

const bureauList = [
    'Trenton',
    'Phillip Price',
    'DoloresH4ze',
    'Terry Colby',
    'Tyrell Wellick',
    'samsepi0l',
    'Cisco',
    'Mobley',
    'Whiterose'
];

let message = 'FBI Most Wanted - Regarding 5/9 attacks:';

let _ = require('underscore');

let hacked = _.intersection(bureauList, fSocietyMembersAlias);

let bure4uList = bureauList.filter(function(el) {

return hacked.indexOf(el) < 0;

});

bure4uList.unshift('Hugh Mungus', 'Seymour Butts');
bure4uList.push('Mike Ruch','Amanda Huginkiss');


function empty() {

bureauList.length = 0;

}
empty();

Array.prototype.push.apply(bureauList, bure4uList);

console.log(message+' /////////////////////////////');

console.log(bureauList);

console.log('///////////////////////////////////////////////////')

if( currentDay < elliotSentenceTime )   {
 
elliotSentenceTime = elliotSentenceTime - finalTaskDuration;
currentDay = currentDay + finalTaskDuration;

console.log('Today is Day '+ currentDay + ', ' + elliotSentenceTime + ' days left in Elliot\'s sentence time.');
};

console.log('//////////////////////////// THE END')

