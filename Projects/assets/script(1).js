const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


// chatbot
$(document).ready(function() {
    var chatbotWindow = $('#chatbotWindow');
    var chatBody = $('#chatBody');
    var chatbotIcon = $('#chatbotIcon');
    var chatbotMessage = $('#chatbotMessage');
    var formStep = 0;
    var formData = {};
    var states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];
    var cities = {
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
        "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Roing", "Tezu"],
        "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Tezpur", "Jorhat"],
        "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
        "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Bhilai", "Korba"],
        "Goa": ["Panaji", "Margao", "Mapusa", "Vasco da Gama", "Ponda"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
        "Haryana": ["Faridabad", "Gurugram", "Hisar", "Panipat", "Rohtak"],
        "Himachal Pradesh": ["Shimla", "Dharamshala", "Solan", "Kullu", "Mandi"],
        "Jammu and Kashmir": ["Jammu", "Srinagar", "Anantnag", "Baramulla", "Pulwama"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Deoghar"],
        "Karnataka": ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
        "Manipur": ["Imphal", "Thoubal", "Kakching", "Mayang Imphal", "Lilong"],
        "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongstoin", "Baghmara"],
        "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Saiha", "Kolasib"],
        "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Zunheboto", "Tuensang"],
        "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
        "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Udaipur", "Bikaner"],
        "Sikkim": ["Gangtok", "Namchi", "Rangpo", "Singtam", "Mangan"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
        "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Bishalgarh"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Roorkee", "Rishikesh"],
        "West Bengal": ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Burdwan"]
    };

    chatbotIcon.click(function() {
        chatbotWindow.toggle();
        chatbotMessage.fadeOut();
    });

    $('.close-btn').click(function() {
        chatbotMessage.fadeOut();
    });

    $('#newAdmissionEnquiry').click(function() {
        appendMessage('Chatbot', 'Here are the available departments at KSRCT:<br><a href="#" class="department-link" data-department="CSE">B.Tech Computer Science and Engineering</a><br><a href="#" class="department-link" data-department="IT">B.Tech Information Technology</a><br><a href="#" class="department-link" data-department="ME">B.Tech Mechanical Engineering</a><br><a href="#" class="department-link" data-department="ECE">B.Tech Electronics and Communication Engineering</a>');
    });

    $(document).on('click', '.department-link', function() {
        formStep = 0;
        formData = {};
        formData.department = $(this).data('department');
        displayFormField();
    });

    $('#otherEnquiry').click(function() {
        appendMessage('Chatbot', 'For any other enquiries, you can contact us at the following numbers:<br>- 1234567890<br>- 0987654321<br>- 9876543210<br>- 7890123456<br>- 6789012345');
    });

    $('#feedback').click(function() {
        appendMessage('Chatbot', 'Please provide your feedback along with your email ID:<br><form id="feedbackForm"><textarea class="form-control" id="feedbackText" rows="3" placeholder="Enter your feedback..."></textarea><input type="email" class="form-control" id="feedbackEmail" placeholder="Enter your email ID..."><br><button type="button" class="btn btn-primary" id="submitFeedback">Submit</button></form>');
    });

    $(document).on('click', '#submitFeedback', function() {
        var feedbackText = $('#feedbackText').val().trim();
        var feedbackEmail = $('#feedbackEmail').val().trim();

        if (feedbackText !== '' && feedbackEmail !== '') {
            appendMessage('User', 'Feedback: ' + feedbackText);
            appendMessage('User', 'Email: ' + feedbackEmail);
            appendMessage('Chatbot', 'Your feedback is received, Thank you! If there are any issues, they will be solved in 2-5 working days.');
            $('#feedbackForm')[0].reset();
        } else {
            appendMessage('Chatbot', 'Please enter both feedback and email ID.');
        }
    });

    function appendMessage(sender, message) {
        var messageHTML = '<div class="message"><strong>' + sender + ':</strong> ' + message + '</div>';
        chatBody.append(messageHTML);
        chatBody.scrollTop(chatBody[0].scrollHeight);
    }
    setTimeout(function() {
        chatbotMessage.fadeIn();
    }, 3000);
    
    function displayFormField() {
        var fieldLabels = ['Name', 'Email', 'Mobile Number', 'Department', 'State', 'City'];
        var fieldPlaceholders = ['Enter your name', 'Enter your email', 'Enter your mobile number', 'Select department', 'Select state', 'Select city'];
    
        if (formStep < fieldLabels.length) {
            var formField = '<div class="form-group"><label>' + fieldLabels[formStep] + '</label>';
    
            if (formStep === 3) {
                formField += '<select class="form-control" id="department">';
                formField += '<option value="">Select department</option>';
                formField += '<option value="CSE">B.Tech Computer Science and Engineering</option>';
                formField += '<option value="IT">B.Tech Information Technology</option>';
                formField += '<option value="ME">B.Tech Mechanical Engineering</option>';
                formField += '<option value="ECE">B.Tech Electronics and Communication Engineering</option>';
                formField += '</select>';
            } else if (formStep === 4) {
                formField += '<select class="form-control" id="state">';
                formField += '<option value="">Select state</option>';
                for (var i = 0; i < states.length; i++) {
                    formField += '<option value="' + states[i] + '">' + states[i] + '</option>';
                }
                formField += '</select>';
            } else if (formStep === 5) {
                formField += '<select class="form-control" id="city">';
                formField += '<option value="">Select city</option>';
                formField += '</select>';
            } else {
                formField += '<input type="text" class="form-control" id="field' + formStep + '" placeholder="' + fieldPlaceholders[formStep] + '">';
            }
    
            formField += '<button class="btn btn-primary btn-sm" id="nextField">Next</button></div>';
    
            appendMessage('Chatbot', formField);
        } else {
            appendMessage('Chatbot', 'Thank you for providing the details. Your admission enquiry for ' + formData.department + ' has been recorded.');
            resetForm();
        }
    }
    
    $(document).on('click', '#nextField', function() {
        var fieldValue = '';
    
        if (formStep === 3) {
            fieldValue = $('#department').val();
        } else if (formStep === 4) {
            fieldValue = $('#state').val();
            updateCities(fieldValue);
        } else if (formStep === 5) {
            fieldValue = $('#city').val();
        } else {
            fieldValue = $('#field' + formStep).val().trim();
        }
    
        if (fieldValue !== '') {
            formData[formStep] = fieldValue;
            formStep++;
            displayFormField();
        } else {
            appendMessage('Chatbot', 'Please fill in the required field.');
        }
    });
    
    function updateCities(state) {
        var citySelect = $('#city');
        citySelect.empty();
        citySelect.append('<option value="">Select city</option>');
    
        if (cities[state]) {
            for (var i = 0; i < cities[state].length; i++) {
                citySelect.append('<option value="' + cities[state][i] + '">' + cities[state][i] + '</option>');
            }
        }
    }
    
    function resetForm() {
        formStep = 0;
        formData = {};
    }
    });


    // faculty modal details
    $(document).ready(function() {
        // Add click event listener to faculty cards
        $('.faculty-card').click(function() {
          var modalId = $(this).data('target');
          var facultyName = $(this).find('.card-title').text();
          var designation = $(this).find('.card-text').eq(0).text();
          var specialization = $(this).find('.card-text').eq(1).text();
          var image = $(this).find('.card-img-top').attr('src');

          // Update the modal content with the faculty data
          $(modalId + ' .modal-title').text(facultyName);
          $(modalId + ' .modal-body img').attr('src', image);
          $(modalId + ' .modal-body h5').text(designation);
          $(modalId + ' .modal-body p:first').text(specialization);
          // Update the LinkedIn profile link
          $(modalId + ' .modal-body a').attr('href', 'https://www.linkedin.com/'); // Replace with the actual LinkedIn profile URL
        });
      });



    //   Banner changable text
    window.addEventListener('DOMContentLoaded', function() {
        const changeableText = document.querySelector('.changeable-text span');
        const texts = ['#Innovate!', '#Explore!','#Execute!','#Succeed!'];
        let currentIndex = 0;
        let isDeleting = false;
        let isTyping = false;
        let typingSpeed = 60;
      
        function typeText() {
          if (!isTyping) {
            isTyping = true;
            changeableText.textContent = '';
            changeableText.classList.add('typing');
            typeWriter(texts[currentIndex], 0);
          }
        }
      
        function typeWriter(text, index) {
          if (index < text.length) {
            changeableText.textContent += text.charAt(index);
            setTimeout(function() {
              typeWriter(text, index + 1);
            }, typingSpeed);
          } else {
            isTyping = false;
            setTimeout(deleteText, 1500);
          }
        }
      
        function deleteText() {
          isDeleting = true;
          let textLength = changeableText.textContent.length;
          if (textLength > 0) {
            changeableText.textContent = changeableText.textContent.substring(0, textLength - 1);
            setTimeout(deleteText, typingSpeed / 2);
          } else {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            typeText();
          }
        }
      
        typeText();
      });