// cashier(33.12, 44);

// Price: 33.12€
// Paid amount: 44€
// Change: 10.88€
// 1 x 10€
// 1 x 0.5€
// 1 x 0.2€
// 1 x 0.1€
// 1 x 0.05€
// 1 x 0.02€
// 1 x 0.01€

// Step 1:
//     I need to give back 10.88
//     I check my twenties.
//         No twenties cause 10.88 < 20
// Step 2:
//     I check my tens
//         I can fit a ten
//         New amount = oldAmount - numberOfTens*ten
//                     = 10.88 - 1*10 = 0.88
// Step 3:    
//     I check my fives
//         No fives
// Step 4:    
//     I check my twos
//         No twos
// Step 5:         
//     I check my ones
//         No ones
// Step 6: 
//     I check my 50c
//         I can fit one
//         NewAmount = .88 - 1*.50 = .38
// Step 7:        
//     I check my 20c
//         I can fit one
//         New amount = .18


cashier(3.79, 50);
cashier(13.75, 40);
cashier(1.74, 5);
cashier(10.75, 5);
cashier(33, 50);
cashier(33.12, 44);
cashier(22.13, 44);


function cashier(price, paid) {
    // Print out the transaction details
    let amountOfNotes;
    let change = parseFloat((paid - price).toFixed(2));
    console.log(`Price: ${price} \nPaid Amount: ${paid} \nChange: ${change}`)

    let curr1 = 20;
    if (change >= curr1) {
        amountOfNotes = Math.floor(change / curr1);
        change = parseFloat((change % curr1).toFixed(2));
        console.log(`${amountOfNotes} x ${curr1}`)
    }

    let curr2 = 10;
    if (change >= curr2) {
        amountOfNotes = Math.floor(change / curr2);
        change = parseFloat((change % curr2).toFixed(2));
        console.log(`${amountOfNotes} x ${curr2}`)
    }

    let curr3 = 5;
    if (change >= curr3) {
        amountOfNotes = Math.floor(change / curr3);
        change = parseFloat((change % curr3).toFixed(2));
        console.log(`${amountOfNotes} x ${curr3}`)
    }

    let curr4 = 2;
    if (change >= curr4) {
        amountOfNotes = Math.floor(change / curr4);
        change = parseFloat((change % curr4).toFixed(2));
        console.log(`${amountOfNotes} x ${curr4}`)
    }

    let curr5 = 1;
    if (change >= curr5) {
        amountOfNotes = Math.floor(change / curr5);
        change = parseFloat((change % curr5).toFixed(2));
        console.log(`${amountOfNotes} x ${curr5}`)
    }

    let curr6 = .5;
    if (change >= curr6) {
        amountOfNotes = Math.floor(change / curr6);
        change = parseFloat((change % curr6).toFixed(2));
        console.log(`${amountOfNotes} x ${curr6}`)
    }

    let curr7 = .2;
    if (change >= curr7) {
        amountOfNotes = Math.floor(change / curr7);
        change = parseFloat((change % curr7).toFixed(2));
        console.log(`${amountOfNotes} x ${curr7}`)
    }

    let curr8 = .1;
    if (change >= curr8) {
        amountOfNotes = Math.floor(change / curr8);
        change = parseFloat((change % curr8).toFixed(2));
        console.log(`${amountOfNotes} x ${curr8}`)
    }

    let curr9 = .05;
    if (change >= curr9) {
        amountOfNotes = Math.floor(change / curr9);
        change = parseFloat((change % curr9).toFixed(2));
        console.log(`${amountOfNotes} x ${curr9}`)
    }

    let curr10 = .02;
    if (change >= curr10) {
        amountOfNotes = Math.floor(change / curr10);
        change = parseFloat((change % curr10).toFixed(2));
        console.log(`${amountOfNotes} x ${curr10}`)
    }

    let curr11 = .01;
    if (change >= curr11) {
        amountOfNotes = Math.floor(change / curr11);
        change = parseFloat((change % curr11).toFixed(2));
        console.log(`${amountOfNotes} x ${curr11}`)
    }


    console.log(`---------------------------`)
}