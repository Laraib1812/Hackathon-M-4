
// Interface to define the structure of the resume data
interface ResumeData {
    name: string;
    email: unknown;
    phone: unknown;
    degree: string;
    university: string;
    inter: string;
    college: string;
    matric : string;
    school: string;
    skills: string;
    Experience: string;
  }
  
//   +

//   +
  // Get form and output element references
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
  
  // Function to capture form input and generate the resume
  function generateResume(event: Event): void {
    event.preventDefault();
  
    // Get form values
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    let degree = (document.getElementById("degree") as HTMLInputElement).value;
    let university = (document.getElementById("university") as HTMLInputElement).value;
    let inter = (document.getElementById("inter") as HTMLInputElement).value;
    let college = (document.getElementById("college") as HTMLInputElement).value;
    let matric = (document.getElementById("matric")as HTMLInputElement).value;
    let school = (document.getElementById("school")as HTMLInputElement).value;
    let skills = (document.getElementById("skills") as HTMLInputElement).value;
    let Experience = (document.getElementById("experience")as HTMLInputElement).value;

    // Create resume data object
    const resumeData : ResumeData = {
    name,
    email,
    phone,
    degree,
    university,
    inter,
    college,
    matric ,
    school,
    skills,
    Experience
    };
  
    // Generate and display the resume
    displayResume(resumeData);
  }
  
  // Function to display the resume data
  function displayResume(data: ResumeData): void {
    resumeOutput.innerHTML = `
      <h1 style = "text-align: center;" contenteditable="true">${data.name}</h1>
      <p contenteditable="true">Email: ${data.email}</p>
      <p contenteditable="true">Contact: ${data.phone}</p>
      <h3>Education</h3>
      <p contenteditable="true">${data.degree} from ${data.university}</p>
      <p contenteditable="true">intermediate in ${data.inter} from ${data.college}</p>
      <p contenteditable="true">matriculated in ${data.matric} from ${data.school}</p>
      <h3>Work Experience</h3>
      <p contenteditable="true">${data.Experience}</p>
      <h3>Skills</h3>
      <ul>
        <li contenteditable="true">
        ${data.skills}
        </li>
      </ul>
    `;
  }
  
  // Add event listener for form submission
form.addEventListener("submit", generateResume);
  