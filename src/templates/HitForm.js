import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendData } from '../utils/dataSlice';
import {drawNewPoint, drawPreview, reDrawPoints} from '../script/drawer';
import { validate } from '../script/validator';

function HitForm() {
    const dispatch = useDispatch();
    const { data, sendingData, sendDataError } = useSelector((state) => state.data);

    const [xm2, setXm2] = useState('');
    const [xm1p5, setXm1p5] = useState('');
    const [xm1, setXm1] = useState('');
    const [xm0p5, setXm0p5] = useState('');
    const [x0, setX0] = useState('');
    const [x0p5, setX0p5] = useState('');
    const [x1, setX1] = useState('');
    const [x1p5, setX1p5] = useState('');
    const [x2, setX2] = useState('');

    const [y, setY] = useState('');

    const [rm2, setRm2] = useState('');
    const [rm1p5, setRm1p5] = useState('');
    const [rm1, setRm1] = useState('');
    const [rm0p5, setRm0p5] = useState('');
    const [r0, setR0] = useState('');
    const [r0p5, setR0p5] = useState('');
    const [r1, setR1] = useState('');
    const [r1p5, setR1p5] = useState('');
    const [r2, setR2] = useState('');

    useEffect(() => {
        let xValues = [xm2, xm1p5, xm1, xm0p5, x0, x0p5, x1, x1p5, x2].filter(x => x !== '')

        let rChecked = [rm2, rm1p5, rm1, rm0p5, r0, r0p5, r1, r1p5, r2].filter(r => r !== '')


        if (xValues.length === 0) return;
        if (rChecked.length === 0) return;

        let r = rChecked[0]
        let x = xValues[0]

        reDrawPoints(data, r);
        drawPreview(x, y, r);

    }, [data, xm2, xm1p5, xm1, xm0p5, x0, x0p5, x1, x1p5, x2, y, rm2, rm1p5, rm1, rm0p5, r0, r0p5, r1, r1p5, r2]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate(y)) return;

        let xValues = [xm2, xm1p5, xm1, xm0p5, x0, x0p5, x1, x1p5, x2].filter(x => x !== '')

        let rChecked = [rm2, rm1p5, rm1, rm0p5, r0, r0p5, r1, r1p5, r2].filter(r => r !== '')


        for (let i = 0; i < rChecked.length; i++) {
            let r = rChecked[i]
            for (let j = 0; j < xValues.length; j++) {
                let x = xValues[j]
                console.log(x, y, r)
                dispatch(sendData({x, y, r}));
                drawNewPoint(x, y, r);
            }
        }
    };

    return (
        <div className="form-div">
            <form id="user-input" onSubmit={handleSubmit}>

                <label htmlFor="choiceX">X:</label>
                <div id="choiceX">
                    <label className="boolCheckX">
                        -2
                        <input type="checkbox"
                               id="xm2"
                               name="xm2"
                               value="-2"
                               onChange={(e) => setXm2(e.target.value)}/>
                    </label>

                    <label className="boolCheckX">
                        -1.5
                        <input type="checkbox"
                               id="xm1p5"
                               name="xm1p5"
                               value="-1.5"
                               onChange={(e) => setXm1p5(e.target.value)}/>
                    </label>

                    <label className="boolCheckX">
                        -1
                        <input type="checkbox"
                               id="xm1"
                               name="xm1"
                               value="-1"
                               onChange={(e) => setXm1(e.target.value)}/>
                    </label>

                    <label className="boolCheckX">
                        -0.5
                        <input type="checkbox"
                               id="xm0p5"
                               name="xm0p5"
                               value="-0.5"
                               onChange={(e) => setXm0p5(e.target.value)}/>
                    </label>

                    <label className="boolCheckX">
                        0
                        <input type="checkbox"
                               id="x0"
                               name="x0"
                               value="0"
                               onChange={(e) => setX0(e.target.value)}/>
                    </label>

                    <label className="boolCheckX">
                        0.5
                        <input type="checkbox"
                               id="x0p5"
                               name="x0p5"
                               value="0.5"
                               onChange={(e) => setX0p5(e.target.value)}/>
                    </label>

                    <label className="boolCheckX">
                        1
                        <input type="checkbox"
                               id="x1"
                               name="x1"
                               value="1"
                               onChange={(e) => setX1(e.target.value)}/>
                    </label>

                    <label className="boolCheckX">
                        1.5
                        <input type="checkbox"
                               id="x1p5"
                               name="x1p5"
                               value="1.5"
                               onChange={(e) => setX1p5(e.target.value)}/>
                    </label>

                    <label className="boolCheckX">
                        2
                        <input type="checkbox"
                               id="x2"
                               name="x2"
                               value="2"
                               onChange={(e) => setX2(e.target.value)}/>
                    </label>

                </div>

                <label htmlFor="y-value">Y: </label>
                <input
                    type="text"
                    id="y-value"
                    name="y-value"
                    value={y}
                    onChange={(e) => setY(e.target.value)}
                />

                <label htmlFor="choiceR">R:</label>
                <div id="choiceR">
                    <label className="boolCheckR">
                        -2
                        <input type="checkbox"
                               id="rm2"
                               name="rm2"
                               value="-2"
                               onChange={(e) => setRm2(e.target.value)}/>
                    </label>

                    <label className="boolCheckR">
                        -1.5
                        <input type="checkbox"
                               id="rm1p5"
                               name="rm1p5"
                               value="-1.5"
                               onChange={(e) => setRm1p5(e.target.value)}/>
                    </label>

                    <label className="boolCheckR">
                        -1
                        <input type="checkbox"
                               id="rm1"
                               name="rm1"
                               value="-1"
                               onChange={(e) => setRm1(e.target.value)}/>
                    </label>

                    <label className="boolCheckR">
                        -0.5
                        <input type="checkbox"
                               id="rm0p5"
                               name="rm0p5"
                               value="-0.5"
                               onChange={(e) => setRm0p5(e.target.value)}/>
                    </label>

                    <label className="boolCheckR">
                        0
                        <input type="checkbox"
                               id="r0"
                               name="r0"
                               value="0"
                               onChange={(e) => setR0(e.target.value)}/>
                    </label>

                    <label className="boolCheckR">
                        0.5
                        <input type="checkbox"
                               id="r0p5"
                               name="r0p5"
                               value="0.5"
                               onChange={(e) => setR0p5(e.target.value)}/>
                    </label>

                    <label className="boolCheckR">
                        1
                        <input type="checkbox"
                               id="r1"
                               name="r1"
                               value="1"
                               onChange={(e) => setR1(e.target.value)}/>
                    </label>

                    <label className="boolCheckR">
                        1.5
                        <input type="checkbox"
                               id="r1p5"
                               name="r1p5"
                               value="1.5"
                               onChange={(e) => setR1p5(e.target.value)}/>
                    </label>

                    <label className="boolCheckR">
                        2
                        <input type="checkbox"
                               id="r2"
                               name="r2"
                               value="2"
                               onChange={(e) => setR2(e.target.value)}/>
                    </label>

                </div>

                <input type="submit" value="Отправить" id="submit-button"/>
            </form>

            {sendingData && <p>Отправляю ...</p>}
            {sendDataError && <p>Ошибка: {sendDataError}</p>}
        </div>
    );
}

export default HitForm;
