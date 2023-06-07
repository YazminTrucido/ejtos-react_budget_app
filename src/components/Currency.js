import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';


const Currency = () => {
    const currencyList = [
        {name: "Dollar", symbol: "$"},
        {name: "Pound", symbol: "£"},
        {name: "Euro", symbol: "€"},
        {name: "Ruppee", symbol: "₹"}
    ];

    const {dispatch} = useContext(AppContext);

    const [currency, setCurrency] = useState('');

    const changeCurrency = (currency) => {
        setCurrency(currency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency.symbol
        });
    };

    return (
        <div>
            <Dropdown>
                <DropdownToggle style={{ backgroundColor: 'lightgreen', fontSize: 20, color: 'white', borderColor: 'green'}}>
                    Currency ({currency.symbol} {currency.name})
                </DropdownToggle>

                <DropdownMenu hover style={{ backgroundColor: 'lightgreen', fontSize: 20, color: 'black', borderColor: 'green'}}>
                    {currencyList.map((currency) => (
                        <DropdownItem onClick={() => changeCurrency(currency)}>
                            {currency.symbol} {currency.name}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default Currency;