import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setTimer} from '../../actions';

import beep from '../../sounds/r2d2.mp3'
const audio = new Audio(beep);
audio.volume = 0.1;

export default () => {
    const dispatch = useDispatch();
    const timer = useSelector(state => state.timer);
    const [min, setMin] = useState('25');
    const [sec, setSec] = useState('00');
    const [alarm, setAlarm] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {tick()}, 1000);

        const minCalc = Math.floor(timer/60);
        const secCalc = Math.abs(timer % 60);
      
        setMin(minCalc < 10 ? ('0' + minCalc) : minCalc);
        setSec(secCalc < 10 ? ('0' + secCalc) : secCalc);

        if (timer === 0 & alarm === false){
            document.body.style.background = 'red';
            audio.play();
            setAlarm(true);
        }
        if (timer > 0 & alarm === true){
            document.body.style.background = '#282c34';
            setAlarm(false);
        }
        if (alarm){
            setMin('00');
            setSec('00');
        }

        return () => clearInterval(interval);
    }, [timer])

    const tick = () => {
        // console.log('tick: ' + timer);
        dispatch(setTimer(timer - 1));

        
    }

    const setTime = (newTime) => {
        dispatch(setTimer(newTime));
    }

    return(
        <div>
            <p>Pomodoro</p>
            {/* <p>{timer}</p> */}
            <p>{min}:{sec}</p>
            <button onClick={() => setTime(1500)}>25</button>
            <button onClick={() => setTime(300)}>5</button>
            <button onClick={() => setTime(3)}>3s</button>

            <br/>
            <button onClick={() => audio.play()}>Sound</button>
        </div>
    )
}