// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */


// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
    getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
    getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
    document.querySelector("#mashedPotatoesImg").style.display = `block`;
  }, (error) => console.log(error));
  }, (error) => console.log(error));
  }, (error) => console.log(error));
  }, (error) => console.log(error));
  }, (error) => console.log(error));



//Mashed Potatoes - using async and await
  /* const makeMashedPotatoes = async () => {
    try {
      const step1 = await obtainInstruction('mashedPotatoes', 0);
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  
      const step2 = await obtainInstruction('mashedPotatoes', 1);
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  
      const step3 = await obtainInstruction('mashedPotatoes', 2);
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  
      const step4 = await obtainInstruction('mashedPotatoes', 3);
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

      const step5 = await obtainInstruction('mashedPotatoes', 4);
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
      document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
      document.querySelector("#mashedPotatoesImg").style.display = `block`;
    }
    catch (error) {
      console.error(error);
    }
  }

  makeMashedPotatoes() */
  

// Iteration 2 - using promises
// ...
 obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").style.display = `block`;
  })
  .catch((error) => {
    console.log(error);
});


//Steak - using async and await
/* const makeSteak = async () => {
  try {
    const step1 = await obtainInstruction('steak', 0);
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('steak', 1);
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('steak', 2);
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('steak', 3);
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction('steak', 4);
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction('steak', 5);
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;

    const step7 = await obtainInstruction('steak', 6);
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;

    const step8 = await obtainInstruction('steak', 7);
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").style.display = `block`;
  }
  catch (error) {
    console.error(error);
}
}

makeSteak() */

// Iteration 3 using async/await
// ...
const makeBroccoli = async () => {
  try {
    const step1 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    const step7 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").style.display = `block`;
  }
  catch (error) {
    console.error(error);
}
}

makeBroccoli()


// Bonus 2 - Promise all
// ...
const makeBrusslesSprouts = async () => {
  const instructionsBrusselsSprouts = [];
  brusselsSprouts.forEach((eachStep, currentIndex) => {
    instructionsBrusselsSprouts.push(obtainInstruction('brusselsSprouts', currentIndex));
  });

  Promise.all(instructionsBrusselsSprouts).then((step) => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[0]}</li>`;
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[1]}</li>`;
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[2]}</li>`;
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[3]}</li>`;
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[4]}</li>`;
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[5]}</li>`;
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[6]}</li>`;
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[7]}</li>`;
    document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").style.display = `block`;
  });
}

makeBrusslesSprouts()

//Brussel Sprouts - using async and await
/* const makeBrusselsSprouts = async () => {
  try {
    const step1 = await obtainInstruction('brusselsSprouts', 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('brusselsSprouts', 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('brusselsSprouts', 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('brusselsSprouts', 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction('brusselsSprouts', 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction('brusselsSprouts', 5);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;

    const step7 = await obtainInstruction('brusselsSprouts', 6);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;

    const step8 = await obtainInstruction('brusselsSprouts', 7);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").style.display = `block`;
  }
  catch (error) {
    console.error(error);
}
}

makeBrusselsSprouts() */