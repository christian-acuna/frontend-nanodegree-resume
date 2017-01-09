/*
  Bio Object
 */

var bio = {
  'name': 'Christian Miguel Acuña',
  'role': 'Front-End Developer',
  'contacts': {
    'mobile': '(415) 966-5530',
    'email': 'christian.acuna@fulbrightmail.org',
    'github': 'https://github.com/christian-acuna/',
    'linkedin': 'https://www.linkedin.com/in/christian-acuna',
    'location': 'San Francisco, CA',
  },
  'welcomeMessage': 'Welcome to my site!',
  'biopic': 'christian_acuna',
  'skills': ['Coding', 'HTML5', 'CSS3',
    'Ruby', 'iOS'],
  'fontAwesome': ['fa-code', 'fa-html5', 'fa-css3', 'fa-diamond', 'fa-mobile']
};

bio.display = function() {
  $('#header-main').append(HTMLheaderName.replace('%data%', bio.name));
  $('#header-main').append(HTMLheaderRole.replace('%data%', bio.role));
  $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
  $('#bioPic').prepend(HTMLbioPic.replace(/%image%/g, bio.biopic));
  $('#contact-list').after(HTMLcontactlist);
  $('#contacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
  $('#contacts').append(HTMLemail.replace(/%data%/g, bio.contacts.email));
  $('#contacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
  if (bio.skills.length > 0) {
    $('#skills-header').append(HTMLskillsHeader);
    $('#skills-header').append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var skillToAppend = HTMLskills.replace('%data%', bio.skills[i]);
      skillToAppend = skillToAppend.replace('%icon%', bio.fontAwesome[i]);
      $('#skills').append(skillToAppend);
    }
  }
};

bio.display();

/*
  Education Object
 */

var education = {
  'schools': [{
    'name': 'Nanjing University',
    'location': 'Nanjing, China',
    'degree': 'N/A',
    'majors': '',
    'dates': '2015-2016',
    'url': 'http://www.nju.edu.cn/english/'
  }, {
    'name': 'Tsinghua University',
    'location': 'Beijing, China',
    'degree': '(Inter-University Program for Chinese Language Studies, UC Berkeley) -',
    'majors': 'Advanced Chinese',
    'dates': 'Fall 2015',
    'url': 'http://ieas.berkeley.edu/iup/'
  }, {
    'name': 'Reed College',
    'location': 'Portland, Oregon',
    'degree': 'B.A.',
    'majors': 'History',
    'dates': '2008-2014',
    'url': 'http://www.reed.edu'
  }, {
    'name': 'Yonsei University',
    'location': 'Wonju, Korea',
    'degree': 'Critical Language Scholarship (CLS) -',
    'majors': 'Beginning Korean',
    'dates': 'Summer 2013',
    'url': 'http://www.clscholarship.org/languages/korean'
  }, {
    'name': 'National Taiwan University',
    'location': 'Taipei, Taiwan',
    'degree': 'Advanced',
    'majors': 'Chinese',
    'dates': '2012-2013',
    'url': 'http://iclp.ntu.edu.tw/'
  }],
  'onlineCourses': [{
    'title': 'JavaScript Syntax',
    'school': 'Udacity',
    'dates': 2016,
    'url': 'http://www.udacity.com/course/ud804'
  }]
};

education.display = function() {
  $('#school-header').append(HTMLschoolHeader);
  education.schools.forEach(function(school) {
    var formattedName = HTMLschoolName.replace('%data%', school.name).replace('%link%', school.url);
    var formattedDatesAndLocation = HTMLworkLocationAndDate.replace('%date%', school.dates).replace('%location%', school.location);
    var formattedDegreeAndMajor = HTMLschoolDegreeAndMajor.replace('%degree%', school.degree).replace('%major%', school.majors);
    $('#school-header').append(HTMLschoolStart);
    $('.school-container:last').append(formattedName);
    $('.school-container:last').append(formattedDatesAndLocation);
    $('.school-container:last').append(formattedDegreeAndMajor);
  });
  $('#school-header').append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(online) {
    $('#school-header').append(HTMLschoolStart);
    var formattedName = HTMLonlineTitle.replace('%data%', online.title).replace('%link%', online.url);
    var formattedSchoolAndDate = HTMLonlineSchoolAndDate.replace('%data%', online.school).replace('%date%', online.dates);
    $('.school-container:last').append(formattedName);
    $('.school-container:last').append(formattedSchoolAndDate);
  });
};

// education.display();

/*
  Work Object
 */
var work = {
  "jobs": [
    {
      "title": "Fulbright Researcher",
      "employer": "Fulbright",
      "dates": "2015-2016",
      "location": "Nanjing, China",
      "description": "Implemented  first version of iOS app using Swift and submitted it to Apple’s WWDC Student Scholarship"
    },
    {
      "title": "User Interface Designer",
      "employer": "Wai Chinese",
      "dates": "2015",
      "location": "Pasadena, California",
      "description": "Collaborated remotely with product manager to design the web user interface for an AngularJS app"
    },
    {
      "title": "JET Program Assistant Language Teacher",
      "employer": "Iwade Board of Education",
      "dates": "2014-2015",
      "location": "Iwade City, Japan",
      "description": "Served as a cultural ambassador by creating engaging presentations on American and Chinese culture"
    }
  ]
};

work.display = function() {
  $('#resume-header').append(HTMLworkHeader);
  work.jobs.forEach(function(job) {
    var formattedWorkTitleAndEmployer = HTMLworkTitleAndEmployer.replace('%title%', job.title).replace('%employer%', job.employer);
    var formattedDatesAndLocation = HTMLworkLocationAndDate.replace('%date%', job.dates).replace('%location%', job.location);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
    $('#resume-header').append(HTMLworkStart);
    $('.work-container:last').append(formattedWorkTitleAndEmployer);
    $('.work-container:last').append(formattedDatesAndLocation);
    $('.work-container:last').append(formattedWorkDescription);
  });
};

// work.display();

/*
  Project Object
 */

var project = {
  "projects": [
    {
      "title": "Lens of China",
      "dates": "March 2016",
      "description": "iOS app using Swift and submitted it to Apple’s WWDC Student Scholarship. As a 2015-16 China Fulbright Student Fellow, my current research project combines my interests in art, technology, and Chinese culture. This iOS app is part of a larger research project that will combine the open cultural data of museums from around the world related to Chinese art into a new type of digital museum experience.",
      images: ['lensOfChina'],
      link: 'https://christian-acuna.github.io/fend-design-mockup-portfolio/'
    }, {
      "title": "Neighborhood Map",
      "dates": "September 2016",
      "description": "Develop a single-page application featuring a map of a neighborhood you would like to visit. Add additional functionality to this application, including: map markers to identify popular locations, a search function to easily discover these locations, and a listview to support simple browsing of all locations. Research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
      images: ['pic05'],
      link: '#'
    }, {
      "title": "Feed Reader Testing",
      "dates": "September 2016",
      "description": "In this project, you will be learning about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as 'test-driven development' or TDD. This is when developers write tests first, before they ever start developing their application.",
      images: ['pic05'],
      link: '#'
    }, {
      "title": "Portfolio Site",
      "dates": "September 2016",
      "description": "Replicate website from PDF design mockup in HTML and CSS. Develop a responsive website that displays optimived images, descriptions and links to portfolio projects.",
      images: ['pic05'],
      link: 'https://christian-acuna.github.io/fend-design-mockup-portfolio/'
    }, {
      "title": "Mockup to Article",
      "dates": "September 2016",
      "description": "Convert a mockup of a blog article into a real website",
      images: ['pic05'],
      link: 'https://github.com/christian-acuna/frontend-mockup-to-article'
    }, {
      "title": "Classic Arcade Game Clone",
      "dates": "September 2016",
      "description": "Use JavaScript object-oriented programming features to implement a classic arcade game.",
      images: ['pic05'],
      link: '#'
    }, {
      "title": "Website Optimization",
      "dates": "September 2016",
      "description": "Optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
      images: ['pic05'],
      link: '#'
    },
  ]
};

project.display = function() {
  project.projects.forEach(function(proj) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
    var formattedDates = HTMLprojectDates.replace("%date%",proj.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",proj.description);
    var formattedImage = HTMLprojectImage.replace(/%image%/g, proj.images[0]);
    var formattedLink = HTMLprojectLink.replace("%data%", proj.link);

    $('#projects').append(HTMLprojectStart);
    $('.spotlight:last').append(formattedImage);
    $('.spotlight:last').append(HTMLprojectContent);
    $('.content:last').append(formattedTitle);
    $('.content:last').append(formattedDescription);
    $('.content:last').append(formattedDates);
    $('.content:last').append(formattedLink);
  });
};

project.display();

// var inName = function(name) {
//   name = name.trim().split(' ');
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0][0] + name[0].slice(1).toLowerCase();
//   return name[0] + " " + name[1];
// };

// $('#main').append(internationalizeButton);

// $(document).click(function(loc) {
//   /* Act on the event */
//   logClicks(loc.pageX, loc.pageY);
// });

$('#mapDiv').append(googleMap);
