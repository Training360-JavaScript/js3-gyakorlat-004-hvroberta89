const checkIP =(ipNumber) =>{
    const patternIP = /^(\d*.){3}\d*$/;

    const valueTest = ipNumber.split('.').map(item => item < 256 ? true : false)
        .every(item => item);
    const patternTest = patternIP.test(ipNumber);

    return (valueTest && patternTest) ? true : false;
}

//console.log(checkIP('10.0.0.255'));

export default checkIP;