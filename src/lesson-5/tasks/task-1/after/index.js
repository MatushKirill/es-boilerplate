'use strict';

export const Entity = function (obj) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.surName = obj.surName;
    this.lastName = obj.lastName;
    this.sex = obj.sex;
};

export const talk = {
    sayAge() {
        if (typeof  this.age === 'undefined')
            +console.log(`hm undefined? Lets fix it...`);
        else
            console.log(`I'm ${this.age} years old, success!`);
    },
    say() {
        console.log("Hahahahaha. Oh wait you’re serious. Let me laugh even harder.");
    }
};

export const age = {
    fixAge(age) {
        if (typeof  age === 'undefined')
            +console.log(`hm undefined? Lets fix it...`);
        else {
            this.age = isNumInRange(age,1,100) ? age : 0;
            console.log(`I'm now ${age} years old, let's check it...`);
        }
    }
};

const isNumInRange = (arg, min, max) => {
    return (arg => min) && (arg <= max);
};
