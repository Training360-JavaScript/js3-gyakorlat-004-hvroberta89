const checkMac = (macAddress) =>{
    const patternMac = /^([0-9a-fA-F]{2}(:|-)){5}[0-9a-fA-F]{2}$/;
    return patternMac.test(macAddress);
}
// console.log(checkMac('a1:23:45:6f:89:AB'));

export default checkMac;