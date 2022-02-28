let num ;

let meterEl = document.getElementById("support-text-meter")
let volEl = document.getElementById("support-text-volume")
let massEl = document.getElementById("support-text-mass")

window.addEventListener('keydown',(e) => {
   if(e.key == "Enter")
  { 
     num = document.getElementById("numToCon").value
      meter(), volume() ,mass(),
      document.getElementById("numToCon").value=""
  }
});

function meter() {
    let meterResult = num * 3.2808398950131;
    let result1 = meterResult.toFixed(3)
    let feetResult = num * 0.3048;
    let result2 = feetResult.toFixed(3)
    meterEl.textContent = num +" meters = " + result1 + " feet | " + num + " feet = " + result2 +" meters";
}

function volume() {
    let literResult = num * 0.264172;
    let result1 = literResult.toFixed(3)
    let gallonsResult = num * 3.785411784;
    let result2 = gallonsResult.toFixed(3)
    volEl.textContent = num +" liters: " + result1 + " gallons | " + num + " gallons: " + result2 +" liters";
}

function mass() {
    let kiloResult = num * 2.20462262185;
    let result1 = kiloResult.toFixed(3)
    let poundResult = num * 0.45359237;
    let result2 = poundResult.toFixed(3)
    massEl.textContent = num +" kilos: " + result1 + " pounds | " + num + " pounds: " + result2 +" kilos";
}
