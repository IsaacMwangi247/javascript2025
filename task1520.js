// net_salary_calculator.js
// Kenya Payroll System - Net Salary Calculator (2023/2024 rates)
// Converted from Python → JavaScript by Grok

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question) => new Promise(resolve => rl.question(question, resolve));

// Step 2: NHIF Calculation (Kenya rates)
function calculateNHIF(gross) {
  if (gross <= 5999) return 150;
  if (gross <= 7999) return 300;
  if (gross <= 11999) return 400;
  if (gross <= 14999) return 500;
  if (gross <= 19999) return 600;
  if (gross <= 24999) return 750;
  if (gross <= 29999) return 850;
  if (gross <= 34999) return 900;
  if (gross <= 39999) return 950;
  if (gross <= 44999) return 1000;
  if (gross <= 49999) return 1100;
  if (gross <= 59999) return 1200;
  if (gross <= 69999) return 1300;
  if (gross <= 79999) return 1400;
  if (gross <= 89999) return 1500;
  if (gross <= 99999) return 1600;
  return 1700;
}

// Step 6: PAYE (Tax) Calculation
function calculatePAYEE(income) {
  if (income <= 24000) {
    return income * 0.10;
  } else if (income <= 32333) {
    return (24000 * 0.10) + (income - 24000) * 0.25;
  } else {
    return (24000 * 0.10) + (8333 * 0.25) + (income - 32333) * 0.30;
  }
}

// Helper: Format number with commas and 2 decimal places
function formatCurrency(amount) {
  return amount.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Main calculator
async function calculateNetSalary() {
  console.log("=== Kenya Net Salary Calculator ===\n");

  const basicSalary = parseFloat(await ask("Basic Salary: "));
  const benefits = parseFloat(await ask("Benefits: "));

  const grossSalary = basicSalary + benefits;

  const nhif = calculateNHIF(grossSalary);
  const nssf = 0.06 * Math.min(grossSalary, 18000);
  const nhdf = 0.015 * grossSalary;

  const taxableIncome = grossSalary - (nhif + nssf + nhdf);
  const payee = calculatePAYEE(taxableIncome);

  const netSalary = grossSalary - (nhif + nhdf + nssf + payee);

  // Display results
  console.log("\n--- Kenya Payroll Summary ---");
  console.log(`Basic Salary     : KES ${formatCurrency(basicSalary)}`);
  console.log(`Benefits         : KES ${formatCurrency(benefits)}`);
  console.log(`Gross Salary     : KES ${formatCurrency(grossSalary)}`);
  console.log(`NHIF Deduction   : KES ${formatCurrency(nhif)}`);
  console.log(`NSSF Deduction   : KES ${formatCurrency(nssf)}`);
  console.log(`NHDF Deduction   : KES ${formatCurrency(nhdf)}`);
  console.log(`PAYEE (Tax)      : KES ${formatCurrency(payee)}`);
  console.log(`Net Salary       : KES ${formatCurrency(netSalary)}`);
  console.log("------------------------------------");

  rl.close();
}

// Run the calculator
calculateNetSalary().catch(err => {
  console.error("Error:", err);
  rl.close();
});