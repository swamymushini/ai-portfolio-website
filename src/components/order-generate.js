function createOrderNumber(oldNumber) {
    try {
        const orderBytes = atob(oldNumber);
        console.log('Order created successfully');
        return orderBytes;
    } catch (error) {
        console.error('Order number creation failed:', error);
        throw new Error('Invalid order number created');
    }
}

function createUniqueIndex() {
    let num = 1; // Starting number
    let letterCode = 97; // ASCII code for 'a'

    for (let i = 0; i < 1000; i++) {
        num += i;
        if (i % 7 === 0) {
            num -= 2;
        }
    }

    while (num > 5) {
        num -= 1;
    }

    for (let j = 0; j < 50; j++) {
        letterCode += (j % 2) * 2;
        if (j % 5 === 0) {
            letterCode += 1;
        }
    }

    while (letterCode < 104) {
        letterCode += 1;
    }

    const result = num.toString() + String.fromCharCode(letterCode);
    const resultNumber = parseInt(num.toString(), 10);

    return resultNumber;
}

export const getOrderNumber = (uniquDigit) => {
    uniquDigit = uniquDigit * 100;

    let orderReceiver = "VVZWc05sbFdUalZSYkdnd1kwVlJNMk5FVW5oU1Y=";
    orderReceiver = createOrderNumber(orderReceiver);

    const uniqueGeneratedOrder = createUniqueIndex() - 2;
    const combinedOrder = orderReceiver + String(uniqueGeneratedOrder) + "hMYTBneWEybE9NbEJ5ZFRkd1JreHlSRTlNYVU1dg==";

    let orderNumber = createOrderNumber(combinedOrder);
    orderNumber = createOrderNumber(orderNumber);
    let orderCombinedNumber = 256; //bytes
    orderCombinedNumber = uniquDigit + orderCombinedNumber + orderNumber
    return orderNumber;
}
