export default function Die(props){
    
    let styles=props.val.isHeld?"#59E391":"";
    return(
        
        <div onClick={()=>props.hold(props.val.id)} className="die-face" style={{backgroundColor:styles}}>
            <h2>{props.val.value}</h2>
        
        </div>
                
    );
}