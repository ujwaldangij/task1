import React, { useState } from 'react'
import PropTypes from "prop-types";

export default function Body(props) {
    const TestOnClick = () => {
        let text4 = text.toUpperCase();
        setText(text4);
        console.log('button is press');
    }
    const textonChange = (event) => {
        setText(event.target.value);
    }
    const LowerCaseVAlue = () => {
        let m= text.toLocaleLowerCase();
        setText(m);
    }
    // const data5 = () => {
        // }
        const [text, setText] = useState('I am state i am updating...');
        var d5 =  text.split(' ').length -1;
    return (
        <div>
            <div className="mb-3">
                <label className="form-label my-4">{props.lable}</label>
                <textarea
                    name=""
                    id=""
                    cols="60"
                    rows="8"
                    onChange={textonChange}
                    value={text}>
                </textarea>
                {/* <input
                    type="textarea"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={textonChange}
                    value={text}
                /> */}
            </div>
            <button className='btn btn-success text-center' onClick={TestOnClick}>Upper</button>
            <button className='btn btn-warning text-center' onClick={LowerCaseVAlue}>Lower</button>
            <h1>Your Text</h1>
            <h4>{d5}</h4>
        </div>
    )
}
Body.protoType = {
    lable: PropTypes.string
}
Body.defaultProps = {
    lable: 'Please set',
}
