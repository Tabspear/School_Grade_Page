const student = [{
        id: 0,
        Name: 'Bukola Aladokun',
        subject: 'Maths',
        score: 30,
    },

    {
        id: 1,
        Name: 'Tomi Lanleyin',
        subject: 'Maths',
        score: 30,
    },

    {
        id: 2,
        Name: 'Tobi Lanleyin',
        subject: 'Maths',
        score: 25,
    },

    {
        id: 3,
        Name: 'Wisdom Musa',
        subject: 'Maths',
        score: 20,
    },

    {
        id: 4,
        Name: 'Wesley Musa',
        subject: 'Maths',
        score: 5,
    },

    {
        id: 5,
        Name: 'Anisah Musa',
        subject: 'Maths',
        score: 10,
    },
]


let madName = document.getElementById('nameField')
let subject = document.getElementById('subjectField')
let scorefield = document.getElementById('scoreField')

function getGrade(score, grade){
    
    if(score>= 25 && score<=30){
         grade.innerHTML = 'A'
    }
    else if(score>= 20 && score<=25){
          grade.innerHTML = 'B'
    }
    else if(score>= 15 && score<=20){
         grade.innerHTML = 'C'
    }
    else if(score>= 10 && score<=15){
         grade.innerHTML = 'D'
    }
    else if(score>= 5 && score<=10){
        grade.innerHTML = 'D'
    }
    else if(score> 0 && score<=5){
      grade.innerHTML = 'E'
    }
    else {
        console.log('invalid')
    }
 }

const madGrade = document.querySelector('.grade')
const btn = document.getElementById('btn')
// This is to test if the butn clicks and displays values
let Name;
let Subject;
btn.addEventListener('click', display)


function display() {

    //Check if the display works  
    //  console.log(subject.value)
    //  Create a function that loops through the arrays 
    function findContent(namekey, myArray,subjects,scores) {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].Name === namekey) {
                return myArray[i]
            }
            else if(myArray[i].subject === subjects) {
                return myArray[i]
            }
            else if(myArray[i].score === scores) {
                return myArray[i]
            }
        }
    }
    
    //console.log(madName.value)
    // Check if the name is valid using functions
    if(madName.value === 'Wesley Musa'){
     findContent('Wesley Musa', student)   
    }
    else if(madName.value ==='Anisah Musa'){
        findContent('Anisah Musa', student)  
    }
    else if(madName.value ==='Wisdom Musa'){
        findContent('Wisdom Musa', student)  
    }
    else if(madName.value ==='Bukola Aladokun'){
        findContent('Bukola Aladokun', student)  
    }
    else if(madName.value ==='Tomi Lanleyin'){
        findContent('Tomi Lanleyin', student)  
    }
    else if(madName.value ==='Tobi Lanleyin'){
        findContent('Tobi Lanleyin', student)  
    }
    else{
        console.log('invalid')
    }
   
 // Check if the subject inputed is valid using function
    if(subject.value === "Maths"){
        findContent('Maths', student)
    }

    else{
        alert('invalid')
    }
 
//Check if score is valid using function
// Create a fucntion that gives a grade to the value in the input field
 
     if(Number(scorefield.value) === 30){
        console.log(scorefield.value)
        findContent(30, student)
       console.log(getGrade(scorefield.value, madGrade))

    }
    else if (Number(scorefield.value) === 25){
        findContent(25, student)
        getGrade(scorefield.value, madGrade)
    }
    
    else if (Number(scorefield.value) === 15){
        findContent(15, student)
        getGrade(scorefield.value, madGrade)
    }

    else if (Number(scorefield.value) === 10){
        findContent(10, student)
        getGrade(scorefield.value, madGrade)
    }
    else if (Number(scorefield.value) === 5){
        findContent(5, student)
        getGrade(scorefield.value, madGrade)
    }
    // else {
    //     console.log('invalid')
    // }
}



//This is to find the name of the student and ensure the Name is valid
// student.forEach(content)
// function content() {
// if(student.some(student=>student.Name === student.Name)){
//     document.getElementById('nameField').value = student.Name
//      console.log(student.Name)
//     document.querySelector('.score').innerHTML = student.score

// }

// if (student.some(student =>student.subject=== student.subject)){
//     document.getElementById('subjectField').value = student.subject
//  document.querySelector('.score').innerHTML = student.score
// }

// else{
//     alert('invalid!!!')
// }




// student.forEach(getGrade);
//  function getGrade(){
//     if(student.score > 25 && student.score < 30 ){

//         madGrade.innerHTML = A
//     }

//     else if(student.score > 20 && student.score < 25) {
//         madScore.innerHTML = student.score
//         madGrade.innerHTML = B
//     }

//     else if(student.score > 15 && student.score < 20) {
//         madScore.innerHTML = student.score
//         madGrade.innerHTML = C
//     }

//     else if(student.score > 10 && student.score < 15) {
//         madScore.innerHTML = student.score
//         madGrade.innerHTML = D
//     }

//     else if(student.score > 5 && student.score < 10) {
//         madGrade.innerHTML = E
//     } 
//     else if(student.score = 0 && student.score < 5) {
//         madScore.innerHTML = student.score
//         madGrade.innerHTML = F
//         console.log(madGrade.innerHTML )
//     }
// }