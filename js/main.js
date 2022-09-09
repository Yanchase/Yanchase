// Functions for each action-command.

function help() {
  return '<h2><span style="color:#eb926d;">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with me</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download my CV</td>\
  </tr></table>';
}

function contact() {
  return '<h2><span style="color:#cc6666;">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href="mailto:yanww0226@163.com">yanww0226@163.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href="tel:+86 13215725626">+86 13215725626</a></td>\
  </tr>\
  </table>';
}

function about() {
  return "<p>  My genuine interest in computer science derives from an in fact unfortunate experience in the hospital back in high school. Accidentally broke my arm and had to remain hospitalized, I was not able to join the class in person. Yet online courses and other educational resources online allowed me to keep up with my schoolwork and throughout the experience, I could not stop thinking about how computer science and the internet could find their place in benefiting almost every aspect of our life. Despite I initially entered university as an animal medicine student in the first year, the next year I changed my major to Computer Science and Technology to further my passion. Such inspiration continues to drive me and ultimately leads to my pursuit of a master’s degree in Computer Science.</p>\n<p>My undergraduate studies at Hainan University have endowed me with a solid background in programming, software development, operating system and computer network. Not only have I developed proficiency in C++ and Java in the <b><i>C++ Programing Object-Oriented</i></b> and <b><i>Object-Oriented Programing</i></b>, but I applied my knowledge to solve problems through designing and developing software in the courses of <b><i>Software Engineering</i></b> and <b><i>Analysis and Design of Algorithms</i></b>. I was also able to obtain some advanced techniques in <b><i>Compiler theory</i></b>, <b><i>Computer Graphics</i></b>, and <b><i>Graph Theory</i></b> and Its Application. Beyond the classroom, I also engaged in <b><i>Asia and Pacific Mathematical Contest in Modeling</i></b> and won a second prize. Not to mention being the president of the <b><i>Electronic Technology Student Association</i></b> as well as a member of the Association for Robotics and Acritical Intelligence, where I got to expand my understanding of computer science to other practical fields like robotics and intelligent cars. Members of association and I completed a project of RobotWeb: a Robot teaching and experiment plantform together. Our project won the awards in <b><i>The Challenge Cup</i></b> and <b><i>China College Students' 'Internet+'Innovation and Entrepreneurship Competition</i></b>. As a highly self-motivated individual who could never be satisfied by mere class content, I have always been excited about applying what I learned in class to real-life contexts and utilizing the power of computer science to make a change in people's daily lives. </p>\n<p>My opportunity finally arrived in January 2021 when I first obtained the opportunity of working as a front-end web developer at Hainan Provincial Government, where I participated in the development of the <b><i>Yecheng Service App</i></b>, a smartphone application integrating a variety of functions from serving for the high-tech enterprise. I was responsible for registration, login, and activity release modules by applying the skills and techniques learned in class. My graduation dissertation <b><i>Research on DDoS Attack detection and defense Method based on Honeypot</i></b> applied Mininet, Ryu controller and four approaches of Mechine Learing to simulate DDoS attacks and redirect to Honeypot. Such experience was one of the most rewarding professional experiences not merely for I further honed my skills in software development in a real-life context as well as reconsolidated my passion for computer science, but more importantly, I was approaching my goal of using software to make people’s lives easier, although step by step.</p>\n<p>At my current internship position as a quality engineer developer at <b><i>Haojing Cloud Computing Technologies</i></b>, I am fully exposed to the complete testing process of our product from initial software architecture to the final deployment of our product as well as environment testing. I am also responsible for tracking, analyzing, and drafting reports on software problems identified during the tests as well as accurately and effectively addressing such issues. The biggest takeaway from my position, on top of my improved proficiency in architecture and class library, is that I came to realize the huge difference between working on a practical project in a real-life setting and everything taught about software development in class. While class learnings provided me a theoretical ground and problem-solving techniques, the way software is developed could be drastically different when the factors of scenario, objective, and potential users become very complicated. I could not stop thinking about how I should tackle such challenges from increasingly complicated scenarios.<p>\n<p>In the short term, I aim to become a professional software development engineer at an internet company dedicated to technological advancement and providing practical and effective solutions. Yet my ambition would never stop there, and I aspire to make the best use of the experience, skills, and sensitivity of the market accumulated to start my own business and technical crew. From the high school girl watching an online course in the hospital, I dream to make people’s lives easier in my own way. Nevertheless, seeing the need to arm me with more versatile knowledge and skillsets particularly in designing and implementation, I, therefore, decided to look for opportunities at graduate schools to help me draw closer to what I have been striving to do. </p>\n<p></p>";
}

function cv() {
  return '<span style="color:#8abeb7;"><h2>CV:</h2></span><p>\tDownload from <a href="src/cv.pdf" target="_blank" style="text-decoration: underline;">here</a>.</p>';
}

//on load
window.onload = function () {
  document.getElementById("injected").innerHTML =
    about() + "\n\n\n" + contact() + "\n\n\n" + cv();
};
// Main Function
function commandProcessor(e) {
  //Check if the enter key is pressed
  if (e.keyCode == 13) {
    //Clear the area where info will be printed
    document.getElementById("injected").innerHTML = "";

    //Get user input
    var txtInput = document.getElementById("txtBox").value;

    //Select what info to print according to command
    if (txtInput == "help") {
      document.getElementById("injected").innerHTML = help();
    } else if (txtInput == "all") {
      document.getElementById("injected").innerHTML =
        about() + "\n\n\n" + contact() + "\n\n\n" + cv();
    } else if (txtInput == "about") {
      document.getElementById("injected").innerHTML = about();
    } else if (txtInput == "contact") {
      document.getElementById("injected").innerHTML = contact();
    } else if (txtInput == "cv") {
      document.getElementById("injected").innerHTML = cv();
    } else {
      document.getElementById("injected").innerHTML = help();
    }

    //Clear input text box
    document.getElementById("txtBox").value = "";
  }
}
