import React from 'react'

const Progress_bar = ({mainColor,bgColor,progress,height,w}) => {
    
    const Parentdiv = {
        border: ("1px", "solid", "rgba(0, 64, 128, 0.7)"),
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 0,
        height: height,
        width: `${w}%`,
        backgroundColor: bgColor,
        borderRadius: 40,
        gridColumnStart: 2,
        gridColumnEnd: 6
    }
    
    const Childdiv = {
        height: '100%',
        width: `${100}%`,
        backgroundColor: mainColor,
        borderRadius:40,
        textAlign: 'middle',
        verticalAlign: 'middle'
    }
    
    const progresstext = {
        verticalAlign: 'middle',
        color: 'white',
        fontWeight: 900
    }
        
    return (
    <div style={Parentdiv}>
        <div style={Childdiv}>
            <span  style={progresstext}>{`${progress}`}</span>
        </div>
    </div>
    )
}

export default Progress_bar;