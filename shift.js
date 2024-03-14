function determineShift() {
    const shift = document.getElementById("shift").value;
    const inputDate = new Date(document.getElementById("date").value);
    const startDate = new Date("2024-03-17"); // Starting from March 14, 2024
  
    const timeDiff = inputDate - startDate;
    const dayDiff = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  
    const cycleDay = (dayDiff % 12 + 12) % 12; // Ensure positive modulo
  
    let result = "";
  
    switch (shift) {
        case "A":
            result = "Shift A ";
        if (cycleDay < 3) {
            result += `(Day ${cycleDay + 1} morning duty)`;
        } else if (cycleDay < 6) {
            result += `(Day ${cycleDay - 2} night duty)`;
        } else {
            result += `(Day ${cycleDay - 5} off duty)`;
        }
        break;
          

        case "B":
        result = "Shift B ";
        if (cycleDay < 3) {
            result += `(Day ${cycleDay + 4} off duty)`;
        } else if (cycleDay < 6){
            result += `( Day ${cycleDay - 2}) morning duty`;
        }
         else if (cycleDay < 9) {
            result += `(Day ${cycleDay - 5} night duty)`;
        }
         else {
            result += `(Day ${cycleDay -8} off duty)`;
        }
        break;


        
        case "C":
        result = "Shift C ";
        if (cycleDay < 3) {
            result += `(Day ${cycleDay + 1} off duty)`;
        } else if (cycleDay < 6) {
            result += `(Day ${cycleDay + 1} off duty)`;
        } else if (cycleDay < 9) {
            result += `(Day ${cycleDay - 5} morning duty)`;
        } else {
            result += `(Day ${cycleDay - 8} night duty)`;
        }
        break;
          
        case "D":
        result = "Shift D ";
        if (cycleDay < 3) {
          result += `(Day ${cycleDay + 1} night duty)`;
        } else if (cycleDay < 6) {
          result += `(Day ${cycleDay - 2} off duty)`;
        }else if (cycleDay < 9){
            result += `(Day ${cycleDay - 2} off duty)`
        }
         else {
          result += `(Day ${cycleDay - 8} morning duty)`;
        }
        break;
      default:
        result = "Invalid shift";
    }
  
    document.getElementById("result").innerText = result;
  }
  