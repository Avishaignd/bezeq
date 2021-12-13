// let numArr = Array.from(document.getElementsByClassName('number'))
// // numArr.forEach((item) => addEventListener('click', console.log(item)))
// for (let i = 0; i < numArr.length; i++) {
//     numArr[i].addEventListener("click", function() {
//       console.log("you clicked region number " + i);
//     });
//   }
// let template = '<span class="test"><span class="number">5</span> <img src="images/star-1.svg" /></span>'
// // const wrapperArray = Array.from(document.getElementsByClassName('stars-wrapper'))



// function createStars(parent) {
//     for (let i = 5; i >= 1; i--) {
//         let star = document.createElement('span')
//         star.innerHTML = `<span class="test"><span class="number">${i}</span> <img src="images/star-1.svg" /></span>`
//         star.addEventListener("click", function() {
//             star.classList.add('selected')
//         })
//         parent.append(star)
//     }
// }

// createStars(document.getElementById('test'))

// if(document.getElementsByClassName('selected').length > 0){
//     console.log('hey');
// }
let numArr = Array.from(document.getElementsByClassName('test'))
numArr.forEach(element => element.addEventListener("click", function() {
    element.classList.add('selected')
}))