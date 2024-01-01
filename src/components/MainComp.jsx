import "./mainComp.css"
import React, { useEffect } from 'react';
import Btn from "./Btn";

const MainComp = () => {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isSelected)
        const firstValue = dice[0].value
        const allSame = dice.every(die => die.value == firstValue)
        if(allSame && allHeld)
        {
            setTenzies(true)
        }
    },[dice])

    function allNewDice()
    {
        const newDice = []
        for(let  i=0; i<10; i++)
        {
            newDice.push(generateNewDice(i))
        }

        return newDice
    }

    function generateNewDice(key)
    {
        return{
            value: Math.ceil(Math.random()*6),
            isSelected: false,
            id: key
        }
    }

    function changeDice(id)
    {
        console.log(id + "changed!!!")
        setDice(oldDie => oldDie.map(die => {
            return die.id === id ? 
                {...die, isSelected: !die.isSelected} : 
                die
        }))
    }

    const diceEle = dice.map(die => (
        <Btn
            key={die.id}
            id = {die.id}
            value = {die.value}
            isSelected = {die.isSelected}
            Click = {() => changeDice(die.id)}
        />
    ))

    function Roll()
    {
        if(tenzies)
        {
            setDice(oldDice => oldDice.map(dice =>{
                return{
                    ...dice,
                    isSelected: false,
                    value: Math.ceil(Math.random()*6)
                }
            }))
            setTenzies(false)
        }
        else
        {
            setDice(oldDice => oldDice.map(dice =>{
                return dice.isSelected ? dice : {...dice,
                value: Math.ceil(Math.random()*6)}
            }))
        }
    }

    return (
        <div className="mainComp">
            <div className="dices">
                {diceEle}
            </div>
            <button onClick={Roll}>{tenzies ? `Reset the game` : `Roll`}</button>
        </div>
    )
}

export default MainComp