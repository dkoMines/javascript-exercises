const ftoc = function(ftemp) {
  let ctemp =  (ftemp - 32) * 5 / 9
  return +ctemp.toFixed(1)
};

const ctof = function(ctemp) {
  let ftemp = (ctemp * 9 / 5) + 32;
  return +ftemp.toFixed(1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
