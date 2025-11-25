// Task 20 - Calculate Net Salary (Kenya Payroll System)

// Input: Basic salary and benefits
let basicSalary = Number(prompt("Basic Salary: "));
let benefits = Number(prompt("Benefits: "));

// Step 1: Calculate Gross Salary
let grossSalary = basicSalary + benefits;

// Step 2: Calculate NHIF 
function calculateNHIF(gross) {
    if (gross <= 5999) return 150;
    else if (gross <= 7999) return 300;
    else if (gross <= 11999) return 400;
    else if (gross <= 14999) return 500;
    else if (gross <= 19999) return 600;
    else if (gross <= 24999) return 750;
    else if (gross <= 29999) return 850;
    else if (gross <= 34999) return 900;
    else if (gross <= 39999) return 950;
    else if (gross <= 44999) return 1000;
    else if (gross <= 49999) return 1100;
    else if (gross <= 59999) return 1200;
    else if (gross <= 69999) return 1300;
    else if (gross <= 79999) return 1400;
    else if (gross <= 89999) return 1500;
    else if (gross <= 99999) return 1600;
    else return 1700;
}

let nhif = calculateNHIF(grossSalary);

// Step 3: Calculate NSSF (6% capped at 18,000 gross)
let nssf = 0.06 * Math.min(grossSalary, 18000);

// Step 4: Calculate NHDF (1.5% of gross salary)
let nhdf = 0.015 * grossSalary;

// Step 5: Calculate Taxable Income
let taxableIncome = grossSalary - (nhif + nssf + nhdf);

// Step 6: Calculate PAYEE (Kenya PAYE tax brackets)
function calculatePAYEE(income) {
    if (income <= 24000) {
        return income * 0.10;
    } else if (income <= 32333) {
        return (24000 * 0.10) + (income - 24000) * 0.25;
    } else {
        return (24000 * 0.10) + (8333 * 0.25) + (income - 32333) * 0.30;
    }
}

let payee = calculatePAYEE(taxableIncome);

// Step 7: Calculate Net Salary
let netSalary = grossSalary - (nhif + nhdf + nssf + payee);

// Step 8: Display Results
console.log("\n--- Kenyan Payroll Summary ---");
console.log(`Basic Salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`NHIF Deduction: ${nhif}`);
console.log(`NSSF Deduction: ${nssf}`);
console.log(`NHDF Deduction: ${nhdf}`);
console.log(`PAYEE (Tax): ${payee}`);
console.log(`Net Salary: ${netSalary}`);
console.log("------------------------------");