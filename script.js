//   +
//   +
// Get form and output element references
var form = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
// Function to capture form input and generate the resume
function generateResume(event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var university = document.getElementById("university").value;
    var inter = document.getElementById("inter").value;
    var college = document.getElementById("college").value;
    var matric = document.getElementById("matric").value;
    var school = document.getElementById("school").value;
    var skills = document.getElementById("skills").value;
    var Experience = document.getElementById("experience").value;
    // Create resume data object
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        degree: degree,
        university: university,
        inter: inter,
        college: college,
        matric: matric,
        school: school,
        skills: skills,
        Experience: Experience
    };
    // Generate and display the resume
    displayResume(resumeData);
}
// Function to display the resume data
function displayResume(data) {
    resumeOutput.innerHTML = "\n      <h1 style = \"text-align: center;\" contenteditable=\"true\">".concat(data.name, "</h1>\n      <p contenteditable=\"true\">Email: ").concat(data.email, "</p>\n      <p contenteditable=\"true\">Contact: ").concat(data.phone, "</p>\n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(data.degree, " from ").concat(data.university, "</p>\n      <p contenteditable=\"true\">intermediate in ").concat(data.inter, " from ").concat(data.college, "</p>\n      <p contenteditable=\"true\">matriculated in ").concat(data.matric, " from ").concat(data.school, "</p>\n      <h3>Work Experience</h3>\n      <p contenteditable=\"true\">").concat(data.Experience, "</p>\n      <h3>Skills</h3>\n      <ul>\n        <li contenteditable=\"true\">\n        ").concat(data.skills, "\n        </li>\n      </ul>\n    ");
}
// Add event listener for form submission
form.addEventListener("submit", generateResume);
