import React, {Component} from 'react'
import foods from './foods'
import {choice, remove} from './helpers'


let fruit = choice(foods)
console.log(`I'd like one ${fruit} please`)
console.log(`here you go: ${fruit}`)
console.log(`Delicious! May I have another ${fruit}?`)
let remaining=remove(foods,fruit);
console.log(`I'm sorry, we're all out. We have ${remaining.length} other foods left.`)