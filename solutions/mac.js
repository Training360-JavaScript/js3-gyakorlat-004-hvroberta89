const checkMac = (macAddress) =>{
    const patternMac = /^([0-9a-fA-F]{2}(:|-)){5}[0-9a-fA-F]{2}$/;
    return patternMac.test(macAddress);
}
//console.log(checkMac('1f:12:12:12:12:ag'));

export default checkMac;