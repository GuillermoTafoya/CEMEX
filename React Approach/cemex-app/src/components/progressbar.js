import React from 'react'

const Progress_bar = ({mainColor,bgColor,progress,height,w}) => {
    
    const Parentdiv = {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 0,
        height: height,
        width: `${w}%`,
        backgroundColor: bgColor,
        borderRadius: 40,
    }
    
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: mainColor,
        borderRadius:40,
        textAlign: 'right'
    }
    
    const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900
    }
        
    return (
    <div style={Parentdiv}>
        <div style={Childdiv}>
            <span  style={progresstext}>{`${progress}%`}</span>
        </div>
    </div>
    )
}

export default Progress_bar;