import React from 'react'
import GameScreen from './GameScreen'

const boardTest = [
    [{visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'ship'}],
    [{visible : false, content : 'water'}, {visible : true, content : 'destroy'}, {visible : true, content : 'destroy'}, {visible : false, content : 'water'}, {visible : true, content : 'hit'}],
    [{visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'hit'}],
    [{visible : false, content : 'ship'}, {visible : false, content : 'ship'}, {visible : false, content : 'ship'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}],
    [{visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}]
];

export default {
    title : 'Game Screen',
    component : GameScreen
}

export const GameScreenExample = () => <GameScreen matrix={boardTest} player='Alejo'/>