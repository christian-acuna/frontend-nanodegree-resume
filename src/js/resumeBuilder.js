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
    'location': 'Nanjing, China',
  }, {
    'location': 'Beijing, China',
  }, {
    'location': 'Portland, Oregon',
  }, {
    'name': 'Yonsei University',
    'location': 'Wonju, Korea',
  }, {
    'name': 'National Taiwan University',
    'location': 'Taipei, Taiwan',
  }]
};

/*
  Work Object
 */
var work = {
  "jobs": [
    {
      "location": "Nanjing, China",
    },
    {
      "location": "Pasadena, California",
    },
    {
      "location": "Iwade City, Japan",
    }
  ]
};


/*
  Project Object
 */

var project = {
  "projects": [
    {
      "title": "vMuse",
      "dates": "December 2016 - Present",
      "description": "Explore art from around the world in VR by creating your own collection of art from the J. Paul Getty Museum and Rijksmuseum in the Netherlands. View high-resolution images of art in 2D and then jump into your own virtual gallery where you can see all your art with different 360° backgrounds.",
      images: ['vMUSE'],
      link: 'https://vr-react-museum.herokuapp.com/'
    },
    {
      "title": "Lens of China",
      "dates": "March 2016",
      "description": "iOS app using Swift and submitted it to Apple’s WWDC Student Scholarship. As a 2015-16 China Fulbright Student Fellow, my current research project combines my interests in art, technology, and Chinese culture. This iOS app is part of a larger research project that will combine the open cultural data of museums from around the world related to Chinese art into a new type of digital museum experience.",
      images: ['lensOfChina'],
      link: 'https://christian-acuna.github.io/fend-design-mockup-portfolio/'
    }, {
      "title": "Neighborhood Map",
      "dates": "October 2016",
      "description": "Develop a single-page application featuring a map of a neighborhood you would like to visit. Add additional functionality to this application, including: map markers to identify popular locations, a search function to easily discover these locations, and a listview to support simple browsing of all locations. Research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
      images: ['neighborhood-map'],
      link: 'http://christian-acuna.me/museum-map/'
    }, {
      "title": "Website Optimization",
      "dates": "September 2016",
      "description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
      images: ['website-perf'],
      link: 'https://github.com/christian-acuna/frontend-nanodegree-mobile-portfolio'
    }, {
      "title": "Classic Arcade Game Clone",
      "dates": "September 2016",
      "description": "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
      images: ['frogger-html'],
      link: 'http://christian-acuna.me/frontend-nanodegree-arcade-game/'
    }
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

$('#mapDiv').append(googleMap);
