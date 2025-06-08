function nameValidation(str) {
            str = str.toLowerCase();
            let flag = true;
            let span = document.getElementById("s");
            for (var i = 0; i < str.length; i++) {
                if (!((str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) || str.charCodeAt(i) == 32)) {
                    flag = false; //when we found any char other than alphabet 
                }
            }
            if (flag) {
                span.innerHTML = "Valid Name";
                span.style.color = "green";
                span.style.padding = "20px";
            }
            else {
                span.innerHTML = "Invalid name";
                span.style.color = "red";
            }
        }

        function validateEmail(str) {
            let index = str.indexOf("@");
            let index1 = str.lastIndexOf("@");
            let span = document.getElementById("ss");
            if (index <= 0 || index != index1) {
                span.innerHTML = "Invalid email";
                span.style.color = "red";
            }
            else {
                let as = str.substring((index + 1));
                index = as.indexOf(".");
                index1 = as.lastIndexOf(".");
                if ((index == -1 || index != index1) || (index != (as.length - 4) && index != (as.length - 3))) {
                    span.innerHTML = "Invalid email";
                    span.style.color = "red";
                }
                else {
                    span.innerHTML = "valid email ";
                    span.style.color = "green";
                }
            }
        }

        function dateValidation(number) {
            let d = document.getElementById("date-dte")
            let dob = new Date(number)
            let todayDte = new Date()

            let age = todayDte.getFullYear() - dob.getFullYear()

            if (age < 18) {
                // d.innerHTML = "You must be at least 18 years old.";
                d.style.color = "red";
                alert("You must be at least 18 years old" + age)
                return false

            } else {
                // d.innerHTML = "Valid Date of Birth.";
                d.style.color = "green";
                return true
            }
        }
        document.querySelector("form").addEventListener("submit", function (e) {
            let dateInput = document.getElementById("dte").value;
            if (!dateValidation(dateInput)) {
                e.preventDefault();
            }
        });