import React, { useState, useEffect, useRef } from 'react';
import { isEmpty } from 'lodash';
export default function CustomDropdown(props) {
    const drpRef = useRef(null);
    let [state, setState]   = useState({
        show  : false,
        dropdownTxt :   '',
        //selectedTxt :   ''
    });
    //let [selState, setSelState]   = useState(props);
    
    useEffect(() => {  
        function handleClickOutside(event) {
            if (drpRef.current && !drpRef.current.contains(event.target)) {
                setState({
                    show: false,
                    ...state,
                    dropdownTxt: (!isEmpty(props.selected)) ? props.selected.value : ''
                })
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [drpRef, props.selected]);

    useEffect(() => { 
        setState({
            ...state,
            dropdownTxt: (!isEmpty(props.selected)) ? props.selected.value : ''
        })
    }, [props.selected]);
    
    const clearSrch =   ()  =>  {
        setState({
            ...state,
            dropdownTxt :''
        })
    }

    const showDrpdwn  = (e)  =>  {
        e.stopPropagation();
        setState({
            ...state,
            show :  !state.show
        })
    }    

    const handleSelect = (e, selected) => {
        e.stopPropagation();
        setState({
            show :  false,
            dropdownTxt    :   selected.value
        })
        props.onSelect(selected);
    }
    const onChangeHandle = (e) => {
        const name      =   e.target.name;
        const value     =   e.target.value;
        setState({
            [name]      :   value,
            show       :   true
        });
    }
    return (
        <div ref={drpRef} className={`select-box ${(!!state.show) ? ' sopen' : ''}`} onClick={showDrpdwn}>
            <div className="s-result">
                <input type="text" autoComplete="off" onFocus={clearSrch} placeholder={(!!props.placeholder) ? props.placeholder : 'Select'} name="dropdownTxt" value={state.dropdownTxt} onChange={onChangeHandle}/>
            </div>
            <ul className="">
                {
                    (!!props.options && props.options.length > 0) ?
                    (props.options || []).map((item, k) => {
                        if(!!item.value && item.value.toLowerCase().includes(state.dropdownTxt.toLowerCase()))
                        return <li key={k} onClick={(e) => handleSelect(e, item)}>{item.value}</li>
                    }) : <li>No Option(s)</li>                    
                }
            </ul>
        </div>
    )
}