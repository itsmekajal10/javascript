var tcsInterviewEligibility = function(gradScore, hscScore, sscScore, candidateName){
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congrats! ${candidateName} you are eligible for TCS interview` : `Unfortunately ${candidateName}  you are not eligible for interview `;
    
    console.log(`${result}`);
    }
    console.log(`===========================TCS Interview Eligibility=================================`);
    tcsInterviewEligibility(80, 86, 90, "Kajal");
    tcsInterviewEligibility(70, 65, 55, "Rani");
    tcsInterviewEligibility(60, 79, 88, "Pallavi");