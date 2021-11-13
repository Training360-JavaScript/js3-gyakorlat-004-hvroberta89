const checkIP =(ipNumber) =>{
    const patternIP = /^(\d*.){3}\d*$/;
    //const patternIP =/^([0-2]*[0-9]*[0-5]*.){3}[0-2]*[0-9][0-5]*$/;

    const valueTest = ipNumber.split('.').map(item => item < 256 ? true : false)
        .every(item => item);
    const patternTest = patternIP.test(ipNumber);

    return (valueTest && patternTest) ? true : false;
}

//console.log(checkIP('256.106.138.55'));

export default checkIP;