const checkVisa = (cardNumber) => {
    const patternVisa = /^4\d{15}$/;
    
    return patternVisa.test(cardNumber);
}

//console.log(checkVisa(4123123412341234));

export default checkVisa;