var bio = {
	"name" : "Jamal Osman",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "jamal@zealousy.com",
		"mobile" : "077-000-00000",
		"location" : "142-146 Trafalgar Rd, London SE10 9TZ"
	},
	"pictureUrl" : "images/jamal.jpg",
	"welcomeMessage" : "I'm a reliable IT professional.",
	"skills" : ["HTML","CSS","JavaScript","C#","ASP.NET","Web Development"]
}

bio.display = function(){
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedWelcomeMessage);

	var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureUrl);
	$("#header").prepend(formattedPicture);
	$("img:first", "#header").show();


	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);


	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);

	var skillsList = HTMLskillsStart;
	var formattedSkills = [];
	if (bio.skills.length){
		$("#header").append(HTMLskillsStart);
		$("#skills-h3").show();
		for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
		};
	}
}

var work = {
	"jobs" : [
	{
		"title" : "Junior Developer",
		"employer" : "Cohaesus",
		"dates" : "12-09-2015 - Present",
		"location" : "22 Whitechapel Road, London, E1 1EW",
		"description" : "Designing and implementing web solutions for digital agencies"
	},
	{
		"title" : "Enquiry Unit Assistant",
		"employer" : "University of Greenwich",
		"dates" : "08-09-2013 - 01-06-2015",
		"location" : "43 New Road, London E1 1HE",
		"description" : "Dealing with University applicants through phone and web chat"
	}
	]
};

work.display = function(){
	if (work.jobs.length > 0) {
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(
				HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
				HTMLworkTitle.replace("%data%", work.jobs[job].title) +
				HTMLworkDates.replace("%data%", work.jobs[job].dates) +
				HTMLworkLocation.replace("%data%", work.jobs[job].location) +
				HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
}

var projects = {
	projects : [
	{
		"title" : "House Network API",
		"dates" : "01-10-2015 - 01-11-2015",
		"description" : "a RESTful api written in ASP.NET Web API 2",
		"images" : ["images/house_network.png"]
	},
	{
		"title" : "IELTS Sitecore Project",
		"dates" : "09-11-2015 - Present",
		"description" : "A Sitecore website for IELTS",
		"images" : ["images/ielts.png","images/ielts2.jpg"]
	}
	]
}

projects.display = function(){
	for(proj in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(
			HTMLprojectTitle.replace("%data%", projects.projects[proj].title) +
			HTMLprojectDates.replace("%data%", projects.projects[proj].dates) +
			HTMLprojectDescription.replace("%data%", projects.projects[proj].description));
		for (image in projects.projects[proj].images) {
			$(".project-entry:last").append(
				HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]));
		};
	}
}

var education = {
	"schools" : [
	{
		"name" : "University of Greenwich",
		"degree" : "BSc Computer Science",
		"location" : "30 Park Row, London, SE10 9LS",
		"majors" : ["Web Development","Mobile Development","Software Design"],
		"dates" : "01-09-2012 - 01-06-2015",
		"url" : "www.gre.ac.uk"
	},
	{
		"name" : "Some Form College",
		"degree" : "A Levels (Mixed)",
		"location" : "54 High Road, London NW10 2PU",
		"majors" : ["Maths", "Computng", "Graphic Design"],
		"dates" : "01-09-2009 - 01-06-2011",
		"url" : "www.someurl.ac.uk"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Front End Nanodegree",
		"school" : "Udacity",
		"dates" : "01-11-2015 - 01-03-2016",
		"url" : "www.udacity.com"
	}
	]
};

education.display = function(){
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(
			HTMLschoolName.replace("%data%", education.schools[school].name) +
			HTMLschoolDegree.replace("%data%", education.schools[school].degree) +
			HTMLschoolLocation.replace("%data%", education.schools[school].location) +
			HTMLschoolDates.replace("%data%", education.schools[school].dates));
		for (major in education.schools[school].majors) {
			$(".education-entry:last").append(
				HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
		};

	}
}

projects.display();


education.display();

work.display();

bio.display();






function inName(name){
	var bothNames = name.trim().split(" ");
	var firstName = bothNames[0].slice(0,1).toUpperCase() + bothNames[0].slice(1);
	var lastName = bothNames[1].toUpperCase();
	return firstName + " " + lastName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


//    $(document).click(function(loc) {
//  		logClicks(loc.pageX, loc.pageY)
// });


// function logClicks(x, y){
// 	console.log("x-coordinate: " + x + "\n y-coordinate: " + y);
// }



