var bio = {
	'name' : 'Jamal Osman',
	'role' : 'Web Developer',
	'contacts' : {
		'email' : 'jamal@zealousy.com',
		'mobile' : '077-000-00000',
		'github' : 'github.com/faker',
		'twitter' : 'twitter.com/faker',
        'location' : '142-146 Trafalgar Rd, London SE10 9TZ'
	},
	'welcomeMessage' : 'I\'m a reliable IT professional.',
	'skills' : ['HTML','CSS','JavaScript','C#','ASP.NET','Web Development'],
    'biopic' : 'images/jamal.jpg'
}

bio.display = function(){
	$('#header').prepend(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

	$('#header').prepend(HTMLbioPic.replace('%data%', bio.biopic));
	//$('img:first', '#header').show();

	$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));

	$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

	$('#topContacts').append(
        HTMLemail.replace('%data%', bio.contacts.email) +
        HTMLmobile.replace('%data%', bio.contacts.mobile));

    $('#footerContacts').append(
        HTMLtwitter.replace('%data%', bio.contacts.twitter) +
        HTMLgithub.replace('%data%', bio.contacts.github));


	var skillsList = HTMLskillsStart;
	var formattedSkills = [];
	if (bio.skills.length){
		$('#header').append(HTMLskillsStart);
		$('#skills-h3').show();
		for (var i = 0; i < bio.skills.length; i++) {
			$('#skills').append(HTMLskills.replace('%data%',bio.skills[i]));
		};
	}
}

var work = {
	'jobs' : [
	{
		'title' : 'Junior Developer',
		'employer' : 'Cohaesus',
		'dates' : '12-09-2015 - Present',
		'location' : '22 Whitechapel Road, London, E1 1EW',
		'description' : 'Designing and implementing web solutions for digital agencies'
	},
	{
		'title' : 'Enquiry Unit Assistant',
		'employer' : 'University of Greenwich',
		'dates' : '08-09-2013 - 01-06-2015',
		'location' : '43 New Road, London E1 1HE',
		'description' : 'Dealing with University applicants through phone and web chat'
	}
	]
};

work.display = function(){
	if (work.jobs.length) {
		for(job = 0; job < work.jobs.length; job++){
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(
				HTMLworkEmployer.replace('%data%', work.jobs[job].employer) +
				HTMLworkTitle.replace('%data%', work.jobs[job].title) +
				HTMLworkDates.replace('%data%', work.jobs[job].dates) +
				HTMLworkLocation.replace('%data%', work.jobs[job].location) +
				HTMLworkDescription.replace('%data%', work.jobs[job].description));
		}
	}
}

var projects = {
	projects : [
	{
		'title' : 'House Network API',
		'dates' : '01-10-2015 - 01-11-2015',
		'description' : 'a RESTful api written in ASP.NET Web API 2',
		'images' : ['images/house_network.png']
	},
	{
		'title' : 'IELTS Sitecore Project',
		'dates' : '09-11-2015 - Present',
		'description' : 'A Sitecore website for IELTS',
		'images' : ['images/ielts.png','images/ielts2.jpg']
	}
	]
}

projects.display = function(){
	for(proj = 0; proj < projects.projects.length; proj++) {
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(
			HTMLprojectTitle.replace('%data%', projects.projects[proj].title) +
			HTMLprojectDates.replace('%data%', projects.projects[proj].dates) +
			HTMLprojectDescription.replace('%data%', projects.projects[proj].description));
		for (var i = 0; i < projects.projects[proj].images.length; i++) {
			$('.project-entry:last').append(
				HTMLprojectImage.replace('%data%', projects.projects[proj].images[i]));
		};
	}
}

var education = {
	'schools' : [
	{
		'name' : 'University of Greenwich',
        'location' : '30 Park Row, London, SE10 9LS',
		'degree' : 'BSc Computer Science',
		'majors' : ['Web Development','Mobile Development','Software Design'],
		'dates' : '01-09-2012 - 01-06-2015',
		'url' : 'www.gre.ac.uk'
	},
	{
		'name' : 'Some Form College',
        'location' : '54 High Road, London NW10 2PU',
		'degree' : 'A Levels (Mixed)',
		'majors' : ['Maths', 'Computng', 'Graphic Design'],
		'dates' : '01-09-2009 - 01-06-2011',
		'url' : 'www.someurl.ac.uk'
	}
	],
	'onlineCourses' : [
	{
		'title' : 'Front End Nanodegree',
		'school' : 'Udacity',
		'dates' : '01-11-2015 - 01-03-2016',
		'url' : 'www.udacity.com'
	}
	]
};

education.display = function(){
	for(school = 0; school < education.schools.length; school++) {
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(
			HTMLschoolName.replace('%data%', education.schools[school].name) +
			HTMLschoolDegree.replace('%data%', education.schools[school].degree) +
			HTMLschoolLocation.replace('%data%', education.schools[school].location) +
			HTMLschoolDates.replace('%data%', education.schools[school].dates));
		for (var i = 0; i < education.schools[school].majors.length; i++) {
			$('.education-entry:last').append(
				HTMLschoolMajor.replace('%data%', education.schools[school].majors[i]));
		};

	}
}


function inName(name){
	var bothNames = name.trim().split(' ');
	var firstName = bothNames[0].slice(0,1).toUpperCase() + bothNames[0].slice(1);
	var lastName = bothNames[1].toUpperCase();
	return firstName + ' ' + lastName;
}

projects.display();


education.display();

work.display();

bio.display();





$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);

(function() {

    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = 100;
        target = {x: width/2, y: height/2};

        largeHeader = document.getElementById('main');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('header-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = 0; x < width; x = x + width/20) {
            for(var y = 0; y < height; y = y + height/20) {
                var px = x + Math.random()*width/20;
                var py = y + Math.random()*height/20;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }});
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
    
})();

