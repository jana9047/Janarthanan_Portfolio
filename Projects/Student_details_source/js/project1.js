
document.addEventListener("DOMContentLoaded", function() {
    var othersRadio = document.getElementById('board');
    
    var othersBoardInput = document.getElementById("boardothers");
    
    othersBoardInput.style.display = "none";
    othersRadio.addEventListener('click', function () {
        console.log("jana")
        if (othersRadio.checked) {
            othersBoardInput.style.display = "block"; // Show the input field if "Others" is selected
        } else {
            othersBoardInput.style.display = "none"; // Hide the input field if "Others" is not selected
        }
            
    });
    });
    document.addEventListener("DOMContentLoaded", function() {
        var others1Radio = document.getElementById('medium');
        
        var others1mediumInput = document.getElementById("others1");
       
        others1mediumInput.style.display = "none";
        others1Radio.addEventListener('click', function () {
            console.log("jana")
            if (others1Radio.checked) {
               
                others1mediumInput.style.display = "block"; // Show the input field if "Others1" is selected
            } else {
                others1mediumInput.style.display = "none"; // Hide the input field if "Others1" is not selected
            }
                
        });
        });
        document.addEventListener("DOMContentLoaded", function() {
            var others2Radio = document.getElementById('board1');
            var others2BoardInput = document.getElementById("others2");
            others2BoardInput.style.display = "none";
            others2Radio.addEventListener('click', function () {
                console.log("jana")
                if (others2Radio.checked) {
                    others2BoardInput.style.display = "block"; // Show the input field if "others2" is selected
                } else {
                    others2BoardInput.style.display = "none"; // Hide the input field if "Others1" is not selected
                }
                    
            });
            });
            document.addEventListener("DOMContentLoaded", function() {
                var streamothersRadio = document.getElementById('stream4');
                var streamothersInput = document.getElementById("others3");
                streamothersInput.style.display = "none";
                streamothersRadio.addEventListener('click', function () {
                    console.log("jana")
                    if (streamothersRadio.checked) {
                        streamothersInput.style.display = "block"; // Show the input field if "streamothers" is selected
                    } else {
                        streamothersInput.style.display = "none"; // Hide the input field if "Others1" is not selected
                    }
                        
                });
                });
                document.addEventListener("DOMContentLoaded", function() {
                    var others3Radio = document.getElementById('medium1');
                    var others3mediumInput = document.getElementById("others4");
                    others3mediumInput.style.display = "none";
                    others3Radio.addEventListener('click', function () {
                        console.log("jana")
                        if (others3Radio.checked) {
                            others3mediumInput.style.display = "block"; // Show the input field if "others3" is selected
                        } else {
                            others3mediumInput.style.display = "none"; // Hide the input field if "Others1" is not selected
                        }
                            
                    });
                    });
                    document.addEventListener("DOMContentLoaded", function() {
                        var nstandingRadio = document.getElementById('arrear2');
                        var nstandingothersInput = document.getElementById("arreara");
                        nstandingothersInput.style.display = "none";
                        nstandingRadio.addEventListener('click', function () {
                            console.log("jana")
                            if (nstandingRadio.checked) {
                                nstandingothersInput.style.display = "block"; // Show the input field if "nstanding" is selected
                            } else {
                                nstandingothersInput.style.display = "none"; // Hide the input field if "Others1" is not selected
                            }
                                
                        });
                        });
                        document.addEventListener("DOMContentLoaded", function() {
                            var standingRadio = document.getElementById('arrear3');
                            var standingothersInput = document.getElementById("noarrear");
                            standingothersInput.style.display = "none";
                            standingRadio.addEventListener('click', function () {
                                console.log("jana")
                                if (standingRadio.checked) {
                                    standingothersInput.style.display = "block"; // Show the input field if "standing" is selected
                                } else {
                                    standingothersInput.style.display = "none"; // Hide the input field if "Others1" is not selected
                                }
                                    
                            });
                            });
                            document.addEventListener("DOMContentLoaded", function() {
                                var languagecheck = document.getElementById('others5');
                                var languageothersInput = document.getElementById("Others");
                                
                                languageothersInput.style.display = "none";
                                languagecheck.addEventListener('click', function () {
                                    
                                    
                                    console.log("jana")
                                    if (languagecheck.checked) {
                                        console.log(languagecheck.checked)
                                        languageothersInput.style.display = "block"; // Show the input field if "language" is selected
                                        console.log(languageothersInput.style.display)
                                    } else {
                                        languageothersInput.style.display = "none"; // Hide the input field if "Others1" is not selected
                                    }
                                        
                                });
                                });
                            
       
    document.addEventListener("DOMContentLoaded", function() {
        var button = document.getElementById("kamal");
    
        button.addEventListener("click", function(event){
            var othersBoardInput = document.getElementById("boardothers");
    var others1mediumInput = document.getElementById("others1");
    var others2BoardInput = document.getElementById("others2");
    var streamothersInput = document.getElementById("others3");
    var others3mediumInput = document.getElementById("others4");
    var standingothersInput = document.getElementById("noarrear");
    var nstandingothersInput = document.getElementById("arreara");
    var languageothersInput = document.getElementById("Others");
    
    
    
    var othersRadio = document.getElementById('board');
    var others1Radio = document.getElementById('medium');
    var others2Radio = document.getElementById('board1');
    var streamothersRadio = document.getElementById('stream4');
    var others3Radio = document.getElementById('medium1');
    var standingRadio = document.getElementById('arrear3');
    var nstandingRadio = document.getElementById('arrear2');
    var languagecheck = document.getElementById('others5');
    
    
    
    
    var firstNameInput = document.getElementById("fname");
    var initialInput = document.getElementById("initial");
    var numberInput = document.getElementById("number");
    var selectInput = document.getElementById("college1");
    var degreeInput=document.getElementById('degree1');
    var dobInput=document.getElementById('dateofbirth');
    var depInput=document.getElementById('dep1');
    var radioButtons = document.querySelectorAll(".myRadio");
    // 10th details
    var tenpercentageInput=document.getElementById('10thper1');
    var tenyearInput=document.getElementById('10thyear1');
    var tenboardInput=document.querySelectorAll(".board");
    var tenschoolInput=document.getElementById("10thschool1");
    var tenmediumInput=document.querySelectorAll(".medium");
    // 12th details
    var twelpercentageInput=document.getElementById('12thper1');
    var twelyearInput=document.getElementById('12thyear1');
    var twelboardInput=document.querySelectorAll(".board1");
    var twelstreamInput=document.querySelectorAll(".stream");
    var twelschoolInput=document.getElementById("12thschool1");
    var twelmediumInput=document.querySelectorAll(".medium1");
    // diploma details
    var dippercentageInput=document.getElementById('diplomaper1');
    var dipdepInput=document.getElementById('dipdep');
    var dipyearInput=document.getElementById('diplomayear1');
    var dipclassInput=document.querySelectorAll(".class");
    var dipcollegeInput=document.getElementById("diplomacollege");
    // ug semester
    var semester1Input=document.getElementById("semester1");
    var semester2Input=document.getElementById("semester2");
    var semester3Input=document.getElementById("semester3");
    var semester4Input=document.getElementById("semester4");
    var semester5Input=document.getElementById("semester5");
    var semester6Input=document.getElementById("semester6");
    var semester7Input=document.getElementById("semester7");
    var semester8Input=document.getElementById("semester8");
    var ugInput=document.getElementById("cgpa1");
    //pg semester
    var sem1Input=document.getElementById("sem1");
    var sem2Input=document.getElementById("sem2");
    var sem3Input=document.getElementById("sem3");
    var sem4Input=document.getElementById("sem4");
    var pgInput=document.getElementById("pgcgpa1");
    //arrear
    var arrearInput=document.querySelectorAll(".arr");
    var arrearattemptInput=document.getElementById("arreara");
    var arrearnoInput=document.getElementById("noarrear");
    var arreardetailsInput=document.getElementById("arreardet");
    //others
    var skillsetInput=document.getElementById("skill1");
    var languageInput=document.querySelectorAll(".lang");
    var mobileInput=document.getElementById("mobile1");
    var emailInput=document.getElementById("email1");
    var peraddressInput=document.getElementById("inputAddress1");
    var percityInput=document.getElementById("inputcity1");
    var perpincodeInput=document.getElementById("inputZip1");
    var preaddressInput=document.getElementById("inputAddress21");
    var precityInput=document.getElementById("inputCity1");
    var prepincodeInput=document.getElementById("inputZip21");
    var fatherInput=document.getElementById("father1");
    var finitialInput = document.getElementById("finitial");
    var motherInput=document.getElementById("mother1");
    var minitialInput = document.getElementById("minitial");
    var fatherocInput=document.getElementById("fatheroc1");
    var motherocInput=document.getElementById("motheroc1");
    var fmobileInput=document.getElementById("fmobile");
    var mmobileInput=document.getElementById("mmobile");
    var communityInput=document.querySelector(".community");
    var hosInput=document.querySelectorAll(".hos");
    var cutoffInput=document.getElementById("cutoff1");
    var modeInput=document.querySelectorAll(".mode");
    var firstgraduateInput=document.querySelectorAll(".gra");
    var bloodInput=document.querySelector(".blood");
    var aadhaarInput=document.getElementById("aadhar1");
    var rationInput=document.getElementById("rat1");
    var annualInput=document.getElementById("an1");
    var siblingInput=document.getElementById("sib1");
    
    
    
    
    
    
    var firstNameErrorDiv = document.querySelector(".error1");
    var initialErrorDiv = document.querySelector(".error2");
    var numberErrorDiv = document.querySelector(".error3");
    var selectErrorDiv = document.querySelector(".error4");
    var degreeErrorDiv = document.querySelector(".error5");
    var depErrorDiv = document.querySelector(".error6");
    var dobErrorDiv = document.querySelector(".error7");
    var radioErrorDiv = document.querySelector(".error8");
     // 10th details
    var tenpercentageErrorDiv=document.querySelector(".error9");
    var tenyearErrorDiv=document.querySelector(".error10");
    var tenboardErrorDiv=document.querySelector(".error11");
    var tenschoolErrorDiv=document.querySelector(".error12");
    var tenmediumErrorDiv=document.querySelector(".error13");
     // 12th details
    var twelpercentageErrorDiv=document.querySelector(".error14");
    var twelyearErrorDiv=document.querySelector(".error15");
    var twelboardErrorDiv=document.querySelector('.error16');
    var twelstreamErrorDiv=document.querySelector(".error17");
    var twelschoolErrorDiv=document.querySelector(".error18");
    var twelmediumErrorDiv=document.querySelector(".error19");
    // diploma details
    var dippercentageErrorDiv=document.querySelector('.error20');
    var dipdepErrorDiv=document.querySelector('.error21');
    var dipyearErrorDiv=document.querySelector('.error22');
    var dipclassErrorDiv=document.querySelector(".error23");
    var dipcollegeErrorDiv=document.querySelector(".error24");
    // ug semester
    var semester1ErrorDiv=document.querySelector(".error25");
    var semester2ErrorDiv=document.querySelector(".error26");
    var semester3ErrorDiv=document.querySelector(".error27");
    var semester4ErrorDiv=document.querySelector(".error28");
    var semester5ErrorDiv=document.querySelector(".error29");
    var semester6ErrorDiv=document.querySelector(".error30");
    var semester7ErrorDiv=document.querySelector(".error31");
    var semester8ErrorDiv=document.querySelector(".error32");
    var ugErrorDiv=document.querySelector(".error33");
    //pg semester
    var sem1ErrorDiv=document.querySelector(".error34");
    var sem2ErrorDiv=document.querySelector(".error35");
    var sem3ErrorDiv=document.querySelector(".error36");
    var sem4ErrorDiv=document.querySelector(".error37");
    var pgErrorDiv=document.querySelector(".error38");
    //arrear
    var arrearErrorDiv=document.querySelector(".error39");
    var arrearattemptErrorDiv=document.querySelector(".error40");
    // var arrearnoErrorDiv=document.querySelector(".error41");
    var arreardetailsErrorDiv=document.querySelector(".error42");
    //others
    var skillsetErrorDiv=document.querySelector(".error43");
    var languageErrorDiv=document.querySelector(".error44");
    var mobileErrorDiv=document.querySelector(".error45");
    var emailErrorDiv=document.querySelector(".error46");
    var peraddressErrorDiv=document.querySelector(".error47");
    var percityErrorDiv=document.querySelector(".error48");
    var perpincodeErrorDiv=document.querySelector(".error49");
    var preaddressErrorDiv=document.querySelector(".error50");
    var precityErrorDiv=document.querySelector(".error51");
    var prepincodeErrorDiv=document.querySelector(".error52");
    var fatherErrorDiv=document.querySelector(".error53");
    var finitialErrorDiv=document.querySelector(".error531");
    var motherErrorDiv=document.querySelector(".error54");
    var minitialErrorDiv=document.querySelector(".error541");
    var fatherocErrorDiv=document.querySelector(".error55");
    var motherocErrorDiv=document.querySelector(".error56");
    var fmobileErrorDiv=document.querySelector(".error57");
    var mmobileErrorDiv=document.querySelector(".error511");
    var communityErrorDiv=document.querySelector(".error58");
    var hosErrorDiv=document.querySelector(".error59");
    var cutoffErrorDiv=document.querySelector(".error60");
    var modeErrorDiv=document.querySelector(".error61");
    var firstgraduateErrorDiv=document.querySelector(".error62");
    var bloodErrorDiv=document.querySelector(".error63");
    var aadhaarErrorDiv=document.querySelector(".error64");
    var rationErrorDiv=document.querySelector(".error65");
    var annualErrorDiv=document.querySelector(".error66");
    var siblingErrorDiv=document.querySelector(".error67");
    
    
    
    
    
    
    var firstName = firstNameInput.value.trim();
    
    var initial = initialInput.value.trim();
    var number = numberInput.value.trim();
    var selectedOption = selectInput.value;
    var degreeOption = degreeInput.value;
    var depOption=depInput.value;
    var dob = dobInput.value;
    
    var anySelected = false;
    // 10th details
    var tenpercentage = tenpercentageInput.value.trim();
    var tenyear=tenyearInput.value.trim();
    var tenboard = false;
    var tenschool=tenschoolInput.value.trim();
    var tenmedium=false;
    // 12th details
    var twelpercentage = twelpercentageInput.value.trim();
    var twelyear=twelyearInput.value.trim();
    var twelboard = false;
    var twelstream=false;
    var twelschool=twelschoolInput.value.trim();
    var twelmedium=false;
    // diploma details
    var dippercentage=dippercentageInput.value.trim();
    var dipdep=dipdepInput.value;
    var dipyear=dipyearInput.value.trim();
    var dipclass=false;
    var dipcollege=dipcollegeInput.value.trim();
    // ug semester
    var semester1=semester1Input.value.trim();
    var semester2=semester2Input.value.trim();
    var semester3=semester3Input.value.trim();
    var semester4=semester4Input.value.trim();
    var semester5=semester5Input.value.trim();
    var semester6=semester6Input.value.trim();
    var semester7=semester7Input.value.trim();
    var semester8=semester8Input.value.trim();
    var ug=ugInput.value.trim();
    //pg semester
    var sem1=sem1Input.value.trim();
    var sem2=sem2Input.value.trim();
    var sem3=sem3Input.value.trim();
    var sem4=sem4Input.value.trim();
    var pg=pgInput.value.trim();
     //arrear
     var arrear=false;
     var arrearattempt=arrearattemptInput.value.trim();
     var arrearno=arrearnoInput.value.trim();
     var arreardetails=arreardetailsInput.value.trim();
    //others
    var skillset=skillsetInput.value.trim();
    var language=false;
    var mobile=mobileInput.value.trim();
    var email=emailInput.value.trim();
    var peraddress=peraddressInput.value.trim();
    var percity=percityInput.value.trim();
    var perpincode=perpincodeInput.value.trim();
    var preaddress=preaddressInput.value.trim();
    var precity= precityInput.value.trim();
    var prepincode=prepincodeInput.value.trim();
    var father=fatherInput.value.trim();
    var finitial = finitialInput.value.trim();
    var mother=motherInput.value.trim();
    var minitial = minitialInput.value.trim();
    var fatheroc=fatherocInput.value.trim();
    var motheroc=motherocInput.value.trim();
    var fmobile=fmobileInput.value.trim();
    var mmobile=mmobileInput.value.trim();
    var community=communityInput.value;
    var hos=false;
    
    var cutoff=cutoffInput.value.trim();
    var mode=false;
    var firstgraduate=false;
    var blood=bloodInput.value.trim();
    var aadhaar=aadhaarInput.value.trim();
    var ration=rationInput.value.trim();
    var annual=annualInput.value.trim();
    var sibling=siblingInput.value.trim();
    
    // var namePattern = /^[A-Z\s]+$/;
    // var initialPattern =/^[A-Z]{1}( [A-Z]{1})?$/;
    // var numberPattern= /^\d{1,15}$/;
    // const minYear = 2000;
    // const maxYear = 2008;
    // const dobDate = new Date(dob);
    // var tenpercentagePattern = /^(\d{2}(\.\d{1,2})?)?$/;
    // var tenyearPattern = /^(201[2-9]|202[0-2])$/;
    // var tenschoolPattern = /^[A-Za-z\s]+$/;
    // var twelpercentagePattern= /^(\d{2}(\.\d{1,2})?)?$/;
    // var twelyearPattern=/^(201[2-9]|202[0-2])$/;
    // var twelschoolPattern=/^[A-Za-z\s]+$/;
    // var dippercentagePattern= /^(\d{2}(\.\d{1,2})?)?$/;
    // var dipyearPattern=/^(201[2-9]|202[0-2])$/;
    // var dipcollegePattern=/^[A-Za-z\s]+$/;
    // var mobilePattern=/^\d{10}$/;
    // var emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // var perpincodePattern=/^\d{6}$/;
    // var prepincodePattern=/^\d{6}$/;
    // var fmobilePattern=/^\d{10}$/;
    // var mmobilePattern=/^\d{10}$/;
    
    // var aadhaarPattern=/^\d{12}$/;
    // var percityPattern= /^[A-Za-z\s]+$/;
    // var precityPattern= /^[A-Za-z\s]+$/;
    // var finitialPattern = /^[A-Z]{1}( [A-Z]{1})?$/
    // var minitialPattern = /^[A-Z]{1}( [A-Z]{1})?$/
    // fathernamePattern=/^[A-Z\s]+$/;
    // mothernamePattern=/^[A-Z\s]+$/;
    
         
            
            if (firstName === "" ) {
                firstNameErrorDiv.innerHTML = "Please fill in your First Name.";
                firstNameInput.classList.remove("success");
                firstNameInput.classList.add("error-border");
            } 
            // else if(!namePattern.test(firstName)){
            //     firstNameErrorDiv.innerHTML = "Please fill valid or Upper Case First Name.";
            //     firstNameInput.classList.remove("success");
            //     firstNameInput.classList.add("error-border");
            // } 
            
            else {
                firstNameErrorDiv.innerHTML = "";
                firstNameInput.classList.remove("error-border");
                firstNameInput.classList.add("success");
                
            }
    
            if (initial === "") {
                initialErrorDiv.innerHTML = "Please fill in your Initial.";
                initialInput.classList.remove("success");
                initialInput.classList.add("error-border");
            } 
            // else if(!initialPattern.test(initial)){
            //     initialErrorDiv.innerHTML = "Please fill Valid Initial.";
            //     initialInput.classList.remove("success");
            //     initialInput.classList.add("error-border");
            // } 
            else {
                initialErrorDiv.innerHTML = "";
                initialInput.classList.remove("error");
                initialInput.classList.add("success");
                
            }
            if (number === "") {
                numberErrorDiv.innerHTML = "Please fill in your Register Number.";
                numberInput.classList.remove("success");
                numberInput.classList.add("error-border");
            } 
            // else if(!numberPattern.test(number))
            // {
            //     numberErrorDiv.innerHTML = "Please fill in your Valid Register Number.";
            //     numberInput.classList.remove("success");
            //     numberInput.classList.add("error-border");
            // }
            else {
                numberErrorDiv.innerHTML = "";
                numberInput.classList.remove("error-border");
                numberInput.classList.add("success");
                
            }
            if (selectedOption === "") {
                selectErrorDiv.innerHTML = "Please select Your College.";
                selectInput.classList.remove("success");
                selectInput.classList.add("error-border");
            } else {
                selectErrorDiv.innerHTML = "";
                selectInput.classList.remove("error-border");
                selectInput.classList.add("success");
               
            }
            if (degreeOption === "") {
                degreeErrorDiv.innerHTML = "Please select Your Degree.";
                degreeInput.classList.remove("success");
                degreeInput.classList.add("error-border");
            } else {
                degreeErrorDiv.innerHTML = "";
                degreeInput.classList.remove("error-border");
                degreeInput.classList.add("success");
                
            }
            if (depOption === "") {
                depErrorDiv.innerHTML = "Please select your Department.";
                depInput.classList.remove("success");
                depInput.classList.add("error-border");
            } else {
                depErrorDiv.innerHTML = "";
                depInput.classList.remove("error-border");
                depInput.classList.add("success");
            }
            if (dob === "") {
                dobErrorDiv.innerHTML = "Please enter your Date of Birth.";
                dobInput.classList.remove("success");
                dobInput.classList.add("error-border");
            } 
            // else if (dobDate.getFullYear() < minYear || dobDate.getFullYear() > maxYear) {
            //     dobErrorDiv.innerHTML = "Please enter a valid Date of Birth between 2000 and 2008.";
            //     dobInput.classList.remove("success");
            //     dobInput.classList.add("error-border");
            // }
            else {
               
                dobErrorDiv.innerHTML = "";
                dobInput.classList.remove("error-border");
                dobInput.classList.add("success");
                
            }
            
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    anySelected = true;
                   
                    break; // Exit the loop once a radio button is checked
                }
            }
           
            if (!anySelected) {
                radioErrorDiv.innerHTML = "Please select Your Gender.";
                
            } else {
                radioErrorDiv.innerHTML = "";
                
            }
            // 10th details
            if (tenpercentage === "") {
                tenpercentageErrorDiv.innerHTML = "Please fill in your 10th percentage.";
                tenpercentageInput.classList.remove("success");
                tenpercentageInput.classList.add("error-border");
            } 
            // else if (!tenpercentagePattern.test(tenpercentage)) {
            //     tenpercentageErrorDiv.innerHTML = "Please enter a valid percentage (e.g., 85 or 85.54).";
            //     tenpercentageInput.classList.remove("success");
            //     tenpercentageInput.classList.add("error-border");
            // }
            else {
                tenpercentageErrorDiv.innerHTML = "";
                tenpercentageInput.classList.remove("error-border");
                tenpercentageInput.classList.add("success");
            }
            if (tenyear === "") {
                tenyearErrorDiv.innerHTML = "Please fill in your 10th year.";
                tenyearInput.classList.remove("success");
                tenyearInput.classList.add("error-border");
                
            } 
            // else if (!tenyearPattern.test(tenyear)) {
            //     tenyearErrorDiv.innerHTML = "Please enter a valid year between 2012 and 2022.";
            //     tenyearInput.classList.remove("success");
            //     tenyearInput.classList.add("error-border");
            // }
             else {
                tenyearErrorDiv.innerHTML = "";
                tenyearInput.classList.remove("error-border");
                tenyearInput.classList.add("success");
                
            }
            for (var i = 0; i < tenboardInput.length; i++) {
                
                if (tenboardInput[i].checked) {
                    tenboard = true;
                    
                    break; // Exit the loop once a radio button is checked
                }
            }
           
            if (!tenboard) {
                tenboardErrorDiv.innerHTML = "Please select Your 10th Board.";
                
            } else {
                tenboardErrorDiv.innerHTML = "";
                
                
                if (othersRadio && othersRadio.checked) {
                    // Check if the input field is filled when "Others" is selected
                    if (othersBoardInput.value.trim() === "") {
                        
                        tenboardErrorDiv.innerHTML = "Please fill in the 'Others' board field.";
                        
                        othersBoardInput.classList.add("error-border");
                        othersBoardInput.classList.remove("success");
                        // event.preventDefault(); // Prevent form submission
                    }
                    else {
                        tenboardErrorDiv.innerHTML = "";
                        // Add a success class to the input field
                        othersBoardInput.classList.remove("error-border");
                        othersBoardInput.classList.add("success");
                    }
                }
                
            }
            for(var i=0;i<tenmediumInput.length;i++){
                if(tenmediumInput[i].checked){
                  tenmedium=true;
                  break;
                }
               
              }
              if(!tenmedium){
                  tenmediumErrorDiv.innerHTML="Please Select 10th Medium";
                  
              }
              else{
                  tenmediumErrorDiv.innerHTML="";
                  if (others1Radio && others1Radio.checked) {
                    console.log("kam")
                    // Check if the input field is filled when "Others" is selected
                    if (others1mediumInput.value.trim() === "") {
                        console.log("kama;")
                        tenmediumErrorDiv.innerHTML = "Please fill in the 'Others' medium field.";
                        
                    others1mediumInput.classList.add("error-border");
                    others1mediumInput.classList.remove("success");
                        // event.preventDefault(); // Prevent form submission
                    }
                    else {
                        tenmediumErrorDiv.innerHTML = "";
                        // Add a success class to the input field
                        others1mediumInput.classList.remove("error-border");
                        others1mediumInput.classList.add("success");
                    }
                }
                 
              }
            if(tenschool===""){
            tenschoolErrorDiv.innerHTML="Please Enter Your 10th School";
            tenschoolInput.classList.add("error-border");
            tenschoolInput.classList.remove("success");
            }
            // else if (!tenschoolPattern.test(tenschool)) {
            //     tenschoolErrorDiv.innerHTML = "Please enter a valid school name.";
            //     tenschoolInput.classList.add("error-border");
            //     tenschoolInput.classList.remove("success");
            // }
            else{
            tenschoolErrorDiv.innerHTML="";
            tenschoolInput.classList.add("success");
            tenschoolInput.classList.remove("error-border");
            }
            
            // 12th details
            if (twelpercentage === "") {
                twelpercentageErrorDiv.innerHTML = "Please fill in your 12th percentage.";
                twelpercentageInput.classList.remove("success");
                twelpercentageInput.classList.add("error-border");
            } 
            // else if (!twelpercentagePattern.test(twelpercentage)) {
            //     twelpercentageErrorDiv.innerHTML = "Please enter a valid percentage (e.g., 85 or 85.54).";
            //     twelpercentageInput.classList.remove("success");
            //     twelpercentageInput.classList.add("error-border");
            // }
            else {
                twelpercentageErrorDiv.innerHTML = "";
                twelpercentageInput.classList.remove("error-border");
                twelpercentageInput.classList.add("success");
            }
            if (twelyear === "") {
                twelyearErrorDiv.innerHTML = "Please fill in your 12th year.";
                twelyearInput.classList.remove("success");
                twelyearInput.classList.add("error-border");
                
            }  
            // else if (!twelyearPattern.test(twelyear)) {
            //     twelyearErrorDiv.innerHTML = "Please enter a valid year between 2012 and 2022.";
            //     twelyearInput.classList.remove("success");
            //     twelyearInput.classList.add("error-border");
            // } 
            else {
                twelyearErrorDiv.innerHTML = "";
                twelyearInput.classList.remove("error-border");
                twelyearInput.classList.add("success");
                
            }
            for (var i = 0; i < twelboardInput.length; i++) {
                
                if (twelboardInput[i].checked) {
                    twelboard = true;
                    break;
                    }
                     // Exit the loop once a radio button is checked
               
            }
           
            if (!twelboard) {
                twelboardErrorDiv.innerHTML = "Please select Your 12th Board.";
                
            } else {
                twelboardErrorDiv.innerHTML = "";
                 if (others2Radio && others2Radio.checked) {
                    console.log(others2Radio)
                    console.log(others2Radio.checked)
                    // Check if the input field is filled when "Others" is selected
                    if (others2BoardInput.value.trim() === "") {
                        twelboardErrorDiv.innerHTML = "Please fill in the 'Others' Board field.";
                        
                    others2BoardInput.classList.add("error-border");
                    others2BoardInput.classList.remove("success");
                        // event.preventDefault(); // Prevent form submission
                    }
                    else {
                        twelboardErrorDiv.innerHTML = "";
                        // Add a success class to the input field
                        others2BoardInput.classList.remove("error-border");
                        others2BoardInput.classList.add("success");
                    }
                }
            }
            for (var i=0;i<twelstreamInput.length;i++){
    
                if(twelstreamInput[i].checked){
                  twelstream=true;
                  break;
                }
                
              }
              if(!twelstream){
                  twelstreamErrorDiv.innerHTML="Please Select Your 12th stream";
              }
              else{
                  twelstreamErrorDiv.innerHTML="";
                  if (streamothersRadio && streamothersRadio.checked) {
                    // Check if the input field is filled when "Others" is selected
                    if (streamothersInput.value.trim() === "") {
                        twelstreamErrorDiv.innerHTML = "Please fill in the 'Others' stream field.";
                        
                    streamothersInput.classList.add("error-border");
                    streamothersInput.classList.remove("success");
                        // event.preventDefault(); // Prevent form submission
                    }
                    else {
                        twelstreamErrorDiv.innerHTML = "";
                        // Add a success class to the input field
                        streamothersInput.classList.remove("error-border");
                        streamothersInput.classList.add("success");
                    }
                
                }
              }
            if(twelschool===""){
            twelschoolErrorDiv.innerHTML="Please Enter Your 12th School";
            twelschoolInput.classList.add("error-border");
            twelschoolInput.classList.remove("success");
            }
            // else if (!twelschoolPattern.test(twelschool)) {
            //     twelschoolErrorDiv.innerHTML = "Please enter a valid school name.";
            //     twelschoolInput.classList.add("error-border");
            //     twelschoolInput.classList.remove("success");
            // }
            else{
            twelschoolErrorDiv.innerHTML="";
            twelschoolInput.classList.add("success");
            twelschoolInput.classList.remove("error-border");
            }
            for(var i=0;i<twelmediumInput.length;i++){
              if(twelmediumInput[i].checked){
                twelmedium=true;
                break;
              }
             
            }
            if(!twelmedium){
                twelmediumErrorDiv.innerHTML="Please Select your 12th medium";
            }
            else{
                twelmediumErrorDiv.innerHTML="";
                if (others3Radio && others3Radio.checked) {
                    // Check if the input field is filled when "Others" is selected
                    if (others3mediumInput.value.trim() === "") {
                        twelmediumErrorDiv.innerHTML = "Please fill in the 'Others' medium field.";
                        
                    others3mediumInput.classList.add("error-border");
                    others3mediumInput.classList.remove("success");
                        // event.preventDefault(); // Prevent form submission
                    }
                    else {
                        twelmediumErrorDiv.innerHTML = "";
                        // Add a success class to the input field
                        others3mediumInput.classList.remove("error-border");
                        others3mediumInput.classList.add("success");
                    }
                
                }
            }
            // diploma details
            if (dippercentage === "") {
                dippercentageErrorDiv.innerHTML = "Please fill in your Diploma percentage.";
                dippercentageInput.classList.remove("success");
                dippercentageInput.classList.add("error-border");
            }  
            // else if (!dippercentagePattern.test(dippercentage)) {
            //     dippercentageErrorDiv.innerHTML = "Please enter a valid percentage (e.g., 85 or 85.54).";
            //     dippercentageInput.classList.remove("success");
            //     dippercentageInput.classList.add("error-border");
            // }
            else {
                dippercentageErrorDiv.innerHTML = "";
                dippercentageInput.classList.remove("error-border");
                dippercentageInput.classList.add("success");
            }
            if (dipdep === "") {
                dipdepErrorDiv.innerHTML = "Please select Your Diploma Department.";
                dipdepInput.classList.remove("success");
                dipdepInput.classList.add("error-border");
            } else {
                dipdepErrorDiv.innerHTML = "";
                dipdepInput.classList.remove("error-border");
                dipdepInput.classList.add("success");
               
            }
            if (dipyear === "") {
                dipyearErrorDiv.innerHTML = "Please fill in your Diploma year.";
                dipyearInput.classList.remove("success");
                dipyearInput.classList.add("error-border");
                
            } 
            //  else if (!dipyearPattern.test(dipyear)) {
            //     dipyearErrorDiv.innerHTML = "Please enter a valid year between 2012 and 2022.";
            //     dipyearInput.classList.remove("success");
            //     dipyearInput.classList.add("error-border");
            // } 
            else {
                dipyearErrorDiv.innerHTML = "";
                dipyearInput.classList.remove("error-border");
                dipyearInput.classList.add("success");
                
            }
            for(var i=0;i<dipclassInput.length;i++){
                if(dipclassInput[i].checked){
                  dipclass=true;
                  break;
                }
                
              }
              if(!dipclass){
                  dipclassErrorDiv.innerHTML="Please Select Your Diploma class Obtained";
              }
              else{
                  dipclassErrorDiv.innerHTML="";
              }
              if(dipcollege===""){
                dipcollegeErrorDiv.innerHTML="Please Enter Your Diploma College";
                dipcollegeInput.classList.add("error-border");
                dipcollegeInput.classList.remove("success");
                }
                // else if (!dipcollegePattern.test(dipcollege)) {
                //     dipcollegeErrorDiv.innerHTML = "Please enter a valid College Name.";
                //     dipcollegeInput.classList.add("error-border");
                //     dipcollegeInput.classList.remove("success");
                // }
                else{
                dipcollegeErrorDiv.innerHTML="";
                dipcollegeInput.classList.add("success");
                dipcollegeInput.classList.remove("error-border");
                }
            if(semester1===""){
                semester1ErrorDiv.innerHTML="Please Enter Your Semester 1";
                semester1Input.classList.remove("success");
                semester1Input.classList.add("error-border");
            }
           
            else{
                semester1ErrorDiv.innerHTML="";
                semester1Input.classList.remove("error-border");
                semester1Input.classList.add("success");
                
            }
            if(semester2===""){
                semester2ErrorDiv.innerHTML="Please Enter Your Semester 2";
                semester2Input.classList.remove("success");
                semester2Input.classList.add("error-border");
            }
           
            else{
                semester2ErrorDiv.innerHTML="";
                semester2Input.classList.remove("error-border");
                semester2Input.classList.add("success");
                
            }
            if(semester3===""){
                semester3ErrorDiv.innerHTML="Please Enter Your Semester 3";
                semester3Input.classList.remove("success");
                semester3Input.classList.add("error-border");
            }
           
            else{
                semester3ErrorDiv.innerHTML="";
                semester3Input.classList.remove("error-border");
                semester3Input.classList.add("success");
                
            }
            if(semester4===""){
                semester4ErrorDiv.innerHTML="Please Enter Your Semester 4";
                semester4Input.classList.remove("success");
                semester4Input.classList.add("error-border");
            }
            
            else{
                semester4ErrorDiv.innerHTML="";
                semester4Input.classList.remove("error-border");
                semester4Input.classList.add("success");
                
            }
            if(semester5===""){
                semester5ErrorDiv.innerHTML="Please Enter Your Semester 5 or NA";
                semester5Input.classList.remove("success");
                semester5Input.classList.add("error-border");
            }
           
            else{
                semester5ErrorDiv.innerHTML="";
                semester5Input.classList.remove("error-border");
                semester5Input.classList.add("success");
                
            }
            if(semester6===""){
                semester6ErrorDiv.innerHTML="Please Enter Your Semester 6 or NA";
                semester6Input.classList.remove("success");
                semester6Input.classList.add("error-border");
            }
           
            else{
                semester6ErrorDiv.innerHTML="";
                semester6Input.classList.remove("error-border");
                semester6Input.classList.add("success");
                
            }
    
            if(semester7===""){
                semester7ErrorDiv.innerHTML="Please Enter Your Semester 7 or NA";
                semester7Input.classList.remove("success");
                semester7Input.classList.add("error-border");
            }
           
            else{
                semester7ErrorDiv.innerHTML="";
                semester7Input.classList.remove("error-border");
                semester7Input.classList.add("success");
                
            }
            if(semester8===""){
                semester8ErrorDiv.innerHTML="Please Enter Your Semester 8 or NA";
                semester8Input.classList.remove("success");
                semester8Input.classList.add("error-border");
            }
           
            else{
                semester8ErrorDiv.innerHTML="";
                semester8Input.classList.remove("error-border");
                semester8Input.classList.add("success");
                
            }
            if(ug===""){
                ugErrorDiv.innerHTML="Please Enter Ug Cgpa";
                ugInput.classList.remove("success");
                ugInput.classList.add("error-border");
            }
           
            else{
                ugErrorDiv.innerHTML="";
                ugInput.classList.remove("error-border");
                ugInput.classList.add("success");
                
            }
    
    
            if(sem1===""){
                sem1ErrorDiv.innerHTML="Please Enter Your Semester 1 or NA";
                sem1Input.classList.remove("success");
                sem1Input.classList.add("error-border");
            }
           
            else{
                sem1ErrorDiv.innerHTML="";
                sem1Input.classList.remove("error-border");
                sem1Input.classList.add("success");
                
            }
                           
            if(sem2===""){
                sem2ErrorDiv.innerHTML="Please Enter Your Semester 2 or NA";
                sem2Input.classList.remove("success");
                sem2Input.classList.add("error-border");
            }
           
            else{
                sem2ErrorDiv.innerHTML="";
                sem2Input.classList.remove("error-border");
                sem2Input.classList.add("success");
                
            }
            if(sem3===""){
                sem3ErrorDiv.innerHTML="Please Enter Your Semester 3 or NA";
                sem3Input.classList.remove("success");
                sem3Input.classList.add("error-border");
            }
           
            else{
                sem3ErrorDiv.innerHTML="";
                sem3Input.classList.remove("error-border");
                sem3Input.classList.add("success");
                
            }
            if(sem4===""){
                sem4ErrorDiv.innerHTML="Please Enter Your Semester 4 or NA";
                sem4Input.classList.remove("success");
                sem4Input.classList.add("error-border");
            }
           
            else{
                sem4ErrorDiv.innerHTML="";
                sem4Input.classList.remove("error-border");
                sem4Input.classList.add("success");
                
            }
            if(pg===""){
                pgErrorDiv.innerHTML="Please Enter Pg Cgpa or NA";
                pgInput.classList.remove("success");
                pgInput.classList.add("error-border");
            }
           
            else{
                pgErrorDiv.innerHTML="";
                pgInput.classList.remove("error-border");
                pgInput.classList.add("success");
                
            }
            //arrear
            for(var i=0;i<arrearInput.length;i++){
                if(arrearInput[i].checked){
                  arrear=true;
                  break;
                }
               
              }
              if(!arrear){
                  arrearErrorDiv.innerHTML="Please Select You Arrear Status";
              }
              else{
                  arrearErrorDiv.innerHTML="";
                  if (nstandingRadio && nstandingRadio.checked) {
                    // Check if the input field is filled when "Others" is selected
                    if (nstandingothersInput.value.trim() === "") {
                        arrearattemptErrorDiv.innerHTML = "Please fill in the 'Others' field.";
                        
                     arrearattemptInput.classList.add("error-border");
                     arrearattemptInput.classList.remove("success");
                        // event.preventDefault(); // Prevent form submission
                    }
                    else {
                        arrearattemptErrorDiv.innerHTML = "";
                        // Add a success class to the input field
                        arrearattemptInput.classList.remove("error-border");
                        arrearattemptInput.classList.add("success");
                    }
                }
                if (standingRadio && standingRadio.checked) {
                    // Check if the input field is filled when "Others" is selected
                    if (standingothersInput.value.trim() === "") {
                        arrearErrorDiv.innerHTML = "Please fill in the 'Others'.";
                        
                     arrearnoInput.classList.add("error-border");
                     arrearnoInput.classList.remove("success");
                        // event.preventDefault(); // Prevent form submission
                    }
                    else {
                        arrearErrorDiv.innerHTML = "";
                        // Add a success class to the input field
                        arrearnoInput.classList.remove("error-border");
                        arrearnoInput.classList.add("success");
                    }
                }
                
              }
            //   if (arrearattempt === "") {
            //     arrearattemptErrorDiv.innerHTML = "Please fill in your Number of Attempt.";
            //     arrearattemptInput.classList.remove("success");
            //     arrearattemptInput.classList.add("error-border");
            // } else {
            //     arrearattemptErrorDiv.innerHTML = "";
            //     arrearattemptInput.classList.remove("error-border");
            //     arrearattemptInput.classList.add("success");
            // }
            // if (arrearno === "") {
            //     arrearnoErrorDiv.innerHTML = "Please fill in your Standing Arrear.";
            //     arrearnoInput.classList.remove("success");
            //     arrearnoInput.classList.add("error-border");
            // } else {
            //     arrearnoErrorDiv.innerHTML = "";
            //     arrearnoInput.classList.remove("error-border");
            //     arrearnoInput.classList.add("success");
            // }
            if (arreardetails === "") {
                arreardetailsErrorDiv.innerHTML = "Please fill in your Arrear Subject Code.";
                arreardetailsInput.classList.remove("success");
                arreardetailsInput.classList.add("error-border");
            } else {
                arreardetailsErrorDiv.innerHTML = "";
                arreardetailsInput.classList.remove("error-border");
                arreardetailsInput.classList.add("success");
            }
            //others
            if (skillset === "") {
                skillsetErrorDiv.innerHTML = "Please fill in your Skill Set.";
                skillsetInput.classList.remove("success");
                skillsetInput.classList.add("error-border");
            } else {
                skillsetErrorDiv.innerHTML = "";
                skillsetInput.classList.remove("error-border");
                skillsetInput.classList.add("success");
            }
            for(var i=0;i<languageInput.length;i++){
                if(languageInput[i].checked){
                  language=true;
                  break;
                }
                
              }
              if(!language){
                  languageErrorDiv.innerHTML="Please Select Your known Language";
              }
              else{
                languageErrorDiv.innerHTML = "";
                
                if (languagecheck && languagecheck.checked) {
                    // Check if the input field is filled when "Others" is selected
                    if (languageothersInput.value.trim() === "") {
                        languageErrorDiv.innerHTML = "Please fill in the 'Others'.";
                        
                    languageothersInput.classList.add("error-border");
                    languageothersInput.classList.remove("success");
                        // event.preventDefault(); // Prevent form submission
                    }
                    else {
                        languageErrorDiv.innerHTML = "";
                        // Add a success class to the input field
                        languageothersInput.classList.remove("error-border");
                        languageothersInput.classList.add("success");
                    }
                }
              }
            if (mobile === "") {
                mobileErrorDiv.innerHTML = "Please fill in your 10 Digit Mobile number.";
                mobileInput.classList.remove("success");
                mobileInput.classList.add("error-border");
            } 
            // else if(!mobilePattern.test(mobile)){
            //     mobileErrorDiv.innerHTML="Please Enter Valid 10 Digit mobile number";
            //     mobileInput.classList.remove("success");
            //     mobileInput.classList.add("error-border");
            // }
            else {
                mobileErrorDiv.innerHTML = "";
                mobileInput.classList.remove("error-border");
                mobileInput.classList.add("success");
            }
            if (email === "") {
                emailErrorDiv.innerHTML = "Please fill in your Email Address.";
                emailInput.classList.remove("success");
                emailInput.classList.add("error-border");
            } 
            // else if(!emailPattern.test(email)){
            //     emailErrorDiv.innerHTML="Please Enter Valid Email Address";
            //     emailInput.classList.remove("success");
            //     emailInput.classList.add("error-border");
            // }
            else {
                emailErrorDiv.innerHTML = "";
                emailInput.classList.remove("error-border");
                emailInput.classList.add("success");
            }
            if (peraddress === "") {
                peraddressErrorDiv.innerHTML = "Please fill in your Permanent Address.";
                peraddressInput.classList.remove("success");
                peraddressInput.classList.add("error-border");
            } else {
                peraddressErrorDiv.innerHTML = "";
                peraddressInput.classList.remove("error-border");
                peraddressInput.classList.add("success");
            }
            if (percity === "") {
                percityErrorDiv.innerHTML = "Please fill in your Permanent City.";
                percityInput.classList.remove("success");
                percityInput.classList.add("error-border");
            } 
            // else if (!percityPattern.test(percity)) {
            //     percityErrorDiv.innerHTML = "Please fill in your Valid Permanent City.";
            //     percityInput.classList.remove("success");
            //     percityInput.classList.add("error-border");
            // } 
            else {
                percityErrorDiv.innerHTML = "";
                percityInput.classList.remove("error-border");
                percityInput.classList.add("success");
            }
            if (perpincode === "") {
                perpincodeErrorDiv.innerHTML = "Please fill in your Permanent Pincode.";
                perpincodeInput.classList.remove("success");
                perpincodeInput.classList.add("error-border");
            } 
            // else if(!perpincodePattern.test(perpincode)){
            //     perpincodeErrorDiv.innerHTML="Please Enter Valid 6 digit Pincode";
            //     perpincodeInput.classList.remove("success");
            //     perpincodeInput.classList.add("error-border");
            // }
            else {
                perpincodeErrorDiv.innerHTML = "";
                perpincodeInput.classList.remove("error-border");
                perpincodeInput.classList.add("success");
            }
            if (preaddress === "") {
                preaddressErrorDiv.innerHTML = "Please fill in your Present Address.";
                preaddressInput.classList.remove("success");
                preaddressInput.classList.add("error-border");
            } else {
                preaddressErrorDiv.innerHTML = "";
                preaddressInput.classList.remove("error-border");
                preaddressInput.classList.add("success");
            }
            if (precity === "") {
                precityErrorDiv.innerHTML = "Please fill in your Present City.";
                precityInput.classList.remove("success");
                precityInput.classList.add("error-border");
            } 
            // else if (!precityPattern.test(precity)) {
            //     precityErrorDiv.innerHTML = "Please fill in your Valid Present City.";
            //     precityInput.classList.remove("success");
            //     precityInput.classList.add("error-border");
            // }
            else {
                precityErrorDiv.innerHTML = "";
                precityInput.classList.remove("error-border");
                precityInput.classList.add("success");
            }
           
            if (prepincode === "") {
                prepincodeErrorDiv.innerHTML = "Please fill in your Present Pincode.";
                prepincodeInput.classList.remove("success");
                prepincodeInput.classList.add("error-border");
            } 
            // else if(!prepincodePattern.test(prepincode)){
            //     prepincodeErrorDiv.innerHTML="Please Enter Valid 6 digit Pincode";
            //     prepincodeInput.classList.remove("success");
            //     prepincodeInput.classList.add("error-border");
            // }
            else {
                prepincodeErrorDiv.innerHTML = "";
                prepincodeInput.classList.remove("error-border");
                prepincodeInput.classList.add("success");
            }
            if (father === "") {
                
                fatherErrorDiv.innerHTML = "Please fill in your Father's Name.";
                fatherInput.classList.remove("success");
                fatherInput.classList.add("error-border");
            } 
            // else if(!fathernamePattern.test(father)){
            //     fatherErrorDiv.innerHTML = "Please fill valid or Upper Case Father's Name.";
            //     fatherInput.classList.remove("success");
            //     fatherInput.classList.add("error-border");
            // } 
            else {
                fatherErrorDiv.innerHTML = "";
                fatherInput.classList.remove("error-border");
                fatherInput.classList.add("success");
                }
    
            if (finitial === "") {
                    finitialErrorDiv.innerHTML = "Please fill in your Initial.";
                    finitialInput.classList.remove("success");
                    finitialInput.classList.add("error-border");
            } 
            // else if(!finitialPattern.test(finitial)){
            //         finitialErrorDiv.innerHTML = "Please fill Valid Initial.";
            //         finitialInput.classList.remove("success");
            //         finitialInput.classList.add("error-border");
            // }
             else {
                    finitialErrorDiv.innerHTML = "";
                    finitialInput.classList.remove("error");
                    finitialInput.classList.add("success");
                    
                }
            
            if (mother === "") {
                motherErrorDiv.innerHTML = "Please fill in your Mother's Name.";
                motherInput.classList.remove("success");
                motherInput.classList.add("error-border");
            } 
            // else if(!mothernamePattern.test(mother)){
            //     motherErrorDiv.innerHTML = "Please fill valid or Upper Case Mother's Name.";
            //     motherInput.classList.remove("success");
            //     motherInput.classList.add("error-border");
            // } 
                else {
                motherErrorDiv.innerHTML = "";
                motherInput.classList.remove("error-border");
                motherInput.classList.add("success");
            }
            if (minitial === "") {
                minitialErrorDiv.innerHTML = "Please fill in your Initial.";
                minitialInput.classList.remove("success");
                minitialInput.classList.add("error-border");
            } 
            // else if(!minitialPattern.test(minitial)){
            //     minitialErrorDiv.innerHTML = "Please fill Valid Initial.";
            //     minitialInput.classList.remove("success");
            //     minitialInput.classList.add("error-border");
            // } 
            else {
                minitialErrorDiv.innerHTML = "";
                minitialInput.classList.remove("error");
                minitialInput.classList.add("success");
                
            }
            if (fatheroc === "") {
                fatherocErrorDiv.innerHTML = "Please fill in your Father's Ocuupation.";
                fatherocInput.classList.remove("success");
                fatherocInput.classList.add("error-border");
            } else {
                fatherocErrorDiv.innerHTML = "";
                fatherocInput.classList.remove("error-border");
                fatherocInput.classList.add("success");
            }
            if (motheroc === "") {
                motherocErrorDiv.innerHTML = "Please fill in your Mother's Ocuupation.";
                motherocInput.classList.remove("success");
                motherocInput.classList.add("error-border");
            } else {
                motherocErrorDiv.innerHTML = "";
                motherocInput.classList.remove("error-border");
                motherocInput.classList.add("success");
            }
            if (fmobile === "") {
                fmobileErrorDiv.innerHTML = "Please fill in your Parent's Mobile Number.";
                fmobileInput.classList.remove("success");
                fmobileInput.classList.add("error-border");
            } 
            // else if(!fmobilePattern.test(fmobile)){
            //     fmobileErrorDiv.innerHTML="Please Enter Valid Father's Mobile Number";
            //     fmobileInput.classList.remove("success");
            //     fmobileInput.classList.add("error-border");
            // }
            else {
                fmobileErrorDiv.innerHTML = "";
                fmobileInput.classList.remove("error-border");
                fmobileInput.classList.add("success");
            }
            if (mmobile === "") {
                mmobileErrorDiv.innerHTML = "Please fill in your Mother's Mobile Number.";
                mmobileInput.classList.remove("success");
                mmobileInput.classList.add("error-border");
            } 
            // else if(!mmobilePattern.test(mmobile)){
            //     mmobileErrorDiv.innerHTML="Please Enter Valid Parent's Mobile Number";
            //     mmobileInput.classList.remove("success");
            //     mmobileInput.classList.add("error-border");
            // }
            else {
                mmobileErrorDiv.innerHTML = "";
                mmobileInput.classList.remove("error-border");
                mmobileInput.classList.add("success");
            }
            
              if (community === "") {
                 communityErrorDiv.innerHTML = "Please select Your Community.";
                 communityInput.classList.remove("success");
                 communityInput.classList.add("error-border");
            } else {
                 communityErrorDiv.innerHTML = "";
                 communityInput.classList.remove("error-border");
                 communityInput.classList.add("success");
            }
            if (cutoff === "") {
                cutoffErrorDiv.innerHTML = "Please fill in your Cutoff.";
                cutoffInput.classList.remove("success");
                cutoffInput.classList.add("error-border");
            } 
             else {
                cutoffErrorDiv.innerHTML = "";
                cutoffInput.classList.remove("error-border");
                cutoffInput.classList.add("success");
            }
           
            for(var i=0;i<hosInput.length;i++){
                
                if(hosInput[i].checked){
                    hos=true;
                }
                break;
              }
              if(!hos){
                hosErrorDiv.innerHTML="Please Select Hosteller/Dayscholar";
              }
              else{
                hosErrorDiv.innerHTML="";
              }
              for(var i=0;i<modeInput.length;i++){
                if(modeInput[i].checked){
                    mode=true;
                }
                break;
              }
              if(!mode){
                modeErrorDiv.innerHTML="Please Select Your mode Of Admission";
              }
              else{
                modeErrorDiv.innerHTML="";
              }
              for(var i=0;i<firstgraduateInput.length;i++){
                if(firstgraduateInput[i].checked){
                    firstgraduate=true;
                }
                break;
              }
              if(!firstgraduate){
                firstgraduateErrorDiv.innerHTML="Please Select one option";
              }
              else{
                firstgraduateErrorDiv.innerHTML="";
              }
            if (blood === "") {
                bloodErrorDiv.innerHTML = "Please select Your Blood Group.";
                bloodInput.classList.remove("success");
                bloodInput.classList.add("error-border");
           } else {
                bloodErrorDiv.innerHTML = "";
                bloodInput.classList.remove("error-border");
                bloodInput.classList.add("success");
           }
            if (aadhaar === "") {
                aadhaarErrorDiv.innerHTML = "Please fill in your Aadhaar Number.";
                aadhaarInput.classList.remove("success");
                aadhaarInput.classList.add("error-border");
            } 
            // else if(!aadhaarPattern.test(aadhaar)){
            //     aadhaarErrorDiv.innerHTML="Please Enter Valid 16 digit Number";
            //     aadhaarInput.classList.remove("success");
            //     aadhaarInput.classList.add("error-border");
            // }
            else {
                aadhaarErrorDiv.innerHTML = "";
                aadhaarInput.classList.remove("error-border");
                aadhaarInput.classList.add("success");
            }
            if (ration === "") {
                rationErrorDiv.innerHTML = "Please fill in your Ration Card Number.";
                rationInput.classList.remove("success");
                rationInput.classList.add("error-border");
            } else {
                rationErrorDiv.innerHTML = "";
                rationInput.classList.remove("error-border");
                rationInput.classList.add("success");
            }
            if (annual === "") {
                annualErrorDiv.innerHTML = "Please fill Annual Income.";
                annualInput.classList.remove("success");
                annualInput.classList.add("error-border");
            } else {
                annualErrorDiv.innerHTML = "";
                annualInput.classList.remove("error-border");
                annualInput.classList.add("success");
            }
            if (sibling === "") {
                siblingErrorDiv.innerHTML = "Please fill in your Sibling Details.";
                siblingInput.classList.remove("success");
                siblingInput.classList.add("error-border");
            } else {
                siblingErrorDiv.innerHTML = "";
                siblingInput.classList.remove("error-border");
                siblingInput.classList.add("success");
            }
    
            //   for(var i=0;i<hosInput.length;i++){
            //     if(hosInput[i].checked){
            //       hos=true;
            //     }
            //     break;
            //   }
            //   if(!hos){
            //       hosErrorDiv.innerHTML="Please Select one option";
            //   }
            //   else{
            //       hosErrorDiv.innerHTML="";
            //   }
            //   for(var i=0;i<modeInput.length;i++){
            //     if(modeInput[i].checked){
            //       mode=true;
            //     }
            //     break;
            //   }
            //   if(!mode){
            //       modeErrorDiv.innerHTML="Please Select one option";
            //   }
            //   else{
            //       modeErrorDiv.innerHTML="";
            //   }
            //   for(var i=0;i<firstgraduateInput.length;i++){
            //     if(firstgraduateInput[i].checked){
            //       firstgraduate=true;
            //     }
            //     break;
            //   }
            //   if(!firstgraduate){
            //       firstgraduateErrorDiv.innerHTML="Please Select one option";
            //   }
            //   else{
            //       firstgraduateErrorDiv.innerHTML="";
            //   }
            // Check if any input has an error class, and prevent form submission if true
             if (
             firstNameInput.classList.contains("error-border")||
             initialInput.classList.contains("error-border") ||
             numberInput.classList.contains("error-border")||
             selectInput.classList.contains("error-border")||
             degreeInput.classList.contains("error-border")||
             depInput.classList.contains("error-border")||
             dobInput.classList.contains("error-border")||
             (!anySelected) ||
             tenpercentageInput.classList.contains("error-border")||
             tenyearInput.classList.contains("error-border") ||
             (!tenboard) ||
             tenschoolInput.classList.contains("error-border") ||
             (!tenmedium) ||
             twelpercentageInput.classList.contains("error-border") ||
             twelyearInput.classList.contains("error-border") ||
             (!twelboard) ||
             (!twelstream) ||
             twelschoolInput.classList.contains("error-border") ||
             (!twelmedium) ||
             dippercentageInput.classList.contains("error-border") ||
             dipdepInput.classList.contains("error-border")||
             dipyearInput.classList.contains("error-border") ||
             (!dipclass) ||
             dipcollegeInput.classList.contains("error-border") ||
            semester1Input.classList.contains("error-border") ||
            semester2Input.classList.contains("error-border")|| 
            semester3Input.classList.contains("error-border") ||
            semester4Input.classList.contains("error-border") ||
            semester5Input.classList.contains("error-border") ||
            semester6Input.classList.contains("error-border") ||
            semester7Input.classList.contains("error-border") ||
            semester8Input.classList.contains("error-border") ||
            ugInput.classList.contains("error-border") ||
            sem1Input.classList.contains("error-border") ||
            sem2Input.classList.contains("error-border") ||
            sem3Input.classList.contains("error-border") ||
            sem4Input.classList.contains("error-border") ||
            pgInput.classList.contains("error-border") 
            (!arrear)||             
             arreardetailsInput.classList.contains("error-border") ||
            skillsetInput.classList.contains("error-border") ||
            (!language) ||
            mobileInput.classList.contains("error-border") ||
            emailInput.classList.contains("error-border") ||
            peraddressInput.classList.contains("error-border") ||
            percityInput.classList.contains("error-border") ||
            perpincodeInput.classList.contains("error-border") ||
            preaddressInput.classList.contains("error-border") ||
            precityInput.classList.contains("error-border") ||
            prepincodeInput.classList.contains("error-border") ||
            fatherInput.classList.contains("error-border") ||
            finitialInput.classList.contains("error-border") ||
            motherInput.classList.contains("error-border") ||
            minitialInput.classList.contains("error-border") ||
            fatherocInput.classList.contains("error-border") ||
            motherocInput.classList.contains("error-border") ||
            fmobileInput.classList.contains("error-border") ||
            mmobileInput.classList.contains("error-border") ||
            communityInput.classList.contains("error-border") ||
            (!hos)||
            cutoffInput.classList.contains("error-border") ||
            (!mode)||
            (!firstgraduate)||
            bloodInput.classList.contains("error-border") ||
            aadhaarInput.classList.contains("error-border") ||
            rationInput.classList.contains("error-border") ||
            annualInput.classList.contains("error-border") ||
            siblingInput.classList.contains("error-border")||
            (othersRadio && othersRadio.checked && othersBoardInput.value.trim() === "")||
            (others1Radio && others1Radio.checked && others1mediumInput.value.trim() === "")||
            (others2Radio && others2Radio.checked && others2BoardInput.value.trim() === "")||
            (streamothersRadio && streamothersRadio.checked && streamothersInput.value.trim() === "")||
            (others3Radio && others3Radio.checked && others3mediumInput.value.trim() === "")||
            (languagecheck && languagecheck.checked && languageothersInput.value.trim() === "")||
            (nstandingRadio && nstandingRadio.checked && nstandingothersInput.value.trim() === "")||
            (standingRadio && standingRadio.checked && standingothersInput.value.trim() === "") 
    
            )
            {
            
            event.preventDefault(); // Prevent form submission
            }else
            {
                 
            document.getElementById("myForm").submit();
            }
        
        });
    });
    
    
    
    
    