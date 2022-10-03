'use strict';

//console.log('hello world~~');

// 2.Variable
let globalName = 'global name';
{
    let name = 'cheon';
    console.log(name);
    name = '1111';
    console.log(name);
    console.log(globalName);
}

    // console.log(name);
    console.log(globalName);

    // 3.constant
    const daysInweek = 7;
    const maxNumber = 5;

/*
    console.log(daysInweek);
    daysInweek = 10;
    console.log(daysInweek);*/
