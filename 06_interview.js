var tcsInterviewEligibility = function(gradScore, hscScore, sscScore, candidateName){
    if(gradScore>=70 || hscScore>=80 || sscScore>90){
console.log(`Congrats! "${candidateName}" : You are eligible for interview`);
    }else{
        console.log(`Unfortunately "${candidateName}" : You are not eligible for interview`);
            }
        }
    
tcsInterviewEligibility(80, 86, 90, "Kajal")
tcsInterviewEligibility(70, 65, 55, "Pragati")
tcsInterviewEligibility(60, 79, 88, "Saru")
