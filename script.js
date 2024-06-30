//Net Salary Calculator
function nhifdeductions(amount){
// NHIF deductions chart  
   let nhif=0;
   if(amount<=5999){
     nhif=150;
   }
   else if(amount>=5999 && amount<=7999){
    nhif=300;
   }
   else if(amount>=7999 && amount<=11999){
    nhif=400;
   }
   else if(amount>11999 && amount<=14999){
    nhif=500;
   }
   else if(amount>14999 && amount<=19999){
    nhif=600;
   }
   else if(amount>19999 && amount<=24999){
    nhif=750;
   }
     else if(amount>=25000 && amount<=29999){
        nhif=850;
     }
     else if(amount>29999 && amount<=34999){
        nhif=900;
     }
     else if(amount>=34999 && amount<=39999){
        nhif=950;
     }
     else if(amount>39999 && amount<=44999){
        nhif=1000;
     }
     else if(amount>44999 && amount<=49999){
        nhif=1100;
     }
     else if(amount>49999 && amount<=59999){
        nhif=1200;
     }
     else if(amount>59999 && amount<=69999){
        nhif=1300;
     }
     else if(amount>69999 && amount<=79999){
        nhif=1400;
     }
     else if(amount>79999 && amount<=89999){
        nhif=1500;
     }
     else if(amount>89999 && amount<=99999){
        nhif=1600;
     }
     else if(amount>99999){
        nhif=1700;
     }
     return nhif;
     //end function
     }
     //get payee deduction
     function payee(amount){
        let paye=0;
        if(amount<=24000){
            paye=(amount*10/100);
        }
        else if(amount>24000 && amount<=32333){
            paye=amount*25/100;
        }
        else{
            paye=amount*30/100;
        }
        return paye;
        }
        function calculateSalary(){
            //convert value to integer value by  casting
            let grosspay=parseInt(document.getElementById("Salary").value);
            let nssffee=200;
            let relief=2400;
            let benefits=parseInt(document.getElementById("benefit").value);
            let netsalary=0;
            let deductions=nhifdeductions(grosspay)+nssffee+payee(grosspay);
            netsalary=(grosspay+relief+benefits)-deductions;
            //change Dom content
            document.getElementById('netsalary').innerHTML="Your net pay is: "+netsalary+'<br/-'
      
            
        }
