import React from "react";

const BasketTotal = (props) => {
 let form = new Intl.NumberFormat ('en-GB', {
    style: 'currency',
    currency: 'GBP'
 })
    return (
    <div>{((props.basketTotal))}</div>
    )
}

export default BasketTotal;
