import React from "react";
import Die from "./Die";
import Confetti from 'react-confetti'
export default function App(){
   
    const [allnewdice,setAllnewdice]=React.useState(allnewdices());
    const [tenzie,setTenzie]=React.useState(false);
    React.useEffect(()=>{
        let p=allnewdice[0].value;
        let flag=true;
        if(allnewdice[0].isHeld){
        for(let i=1;i<10;i++){
            if(allnewdice[i].value===p &&allnewdice[i].isHeld){
                flag=true;
            }
            else{
                flag=false;
                break;
            }
        }
        if(flag){
            console.log("we won");
            setTenzie(true);
        }
        }
    },[allnewdice])
    function hold(id){
        setAllnewdice(item=>item.map(die=>{
            return die.id===id?{
                ...die,isHeld:!die.isHeld
            }:die;
        }))
    }
    function handleroll(){
        if(tenzie){
            setAllnewdice(allnewdices());
            setTenzie(false);
        }
        
        setAllnewdice(item=>item.map(
            die => {
                return die.isHeld?{...die}:{...die,value:Math.floor(Math.random()*6)+1};
            }
        ));
    }
    
    function allnewdices(){
        const brr=[];    
        for(let i=0;i<10;i++){
        brr.push({
            id:i,
            value:Math.floor(Math.random()*6)+1,
        isHeld:false,
        
        });
    }
    return brr;
    }
    
    const p=allnewdice.map(square=>{
       
        return <Die val={square} hold={hold}/>
    })
    return (
        <main>
               { tenzie && <Confetti/>}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-cont">
            {p}
        </div>
        <button onClick={handleroll} className="roll-btn">{tenzie?"New Game":"Roll"}</button>
     
        </main>
    );
}