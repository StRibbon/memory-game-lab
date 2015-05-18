var container = document.createElement('CONTAINER');
	// container.style.width = '100%';
	// container.style.position = 'relative';
	// container.style.margin = '0 auto';

var createDiv = function (color){
	var newDiv = document.createElement('DIV');
		newDiv.style.width = '15%';
		newDiv.style.height = '180px';
		newDiv.style.padding = '1px';
		newDiv.style.margin = '1px';
		newDiv.style.float = 'left';		
		newDiv.style.border = '3px black solid';
		newDiv.style.backgroundColor = color;
		return newDiv;
}

var animals = [];
	animals[0]= {name: "anteater", img: "http://travelcostaricanow.com/images/9/9f/Giant_anteater_costa_rica.gif"};
	animals[1]= {name: "jaguar", img: "http://www.wcs.org/news-and-features-main/~/media/Images/wcs%20org/new%20and%20noteworthy/headline/_JL%20Maher%206847%20ecuador%20jaguar%2011%2008%204.jpg"};
	animals[2]= {name: "ocelot", img: "https://www.tpwmagazine.com/archive/2010/feb/images/AFOceCrouch.jpg"};
	animals[3]= {name: "tapir", img: "https://adlayasanimals.files.wordpress.com/2015/02/tapir-conservation-project.jpg"};
	animals[4]= {name: "capybara", img: "http://news.bbcimg.co.uk/media/images/72748000/jpg/_72748973_capybara-6.jpg"};
	animals[5]= {name: "anaconda", img: "http://images.nationalgeographic.com/wpf/media-live/photos/000/004/cache/anaconda_446_600x450.jpg"};
	animals[6]= {name: "caiman", img: "http://a-z-animals.com/media/animals/images/original/caiman4.jpg"};
	animals[7]= {name: "dart frog", img: "http://www.nature.org/cs/groups/webcontent/@photopublic/documents/media/prd_010165.jpg"};
	animals[8]= {name: "harpy eagle", img: "http://birdingblogs.com/wp-content/uploads/2011/12/Harpy-Eagle-Ricardo-Koehn2-e1324844076469.jpg"};
	animals[9]= {name: "anteater", img: "http://travelcostaricanow.com/images/9/9f/Giant_anteater_costa_rica.gif"};
	animals[10]={name: "jaguar", img: "http://www.wcs.org/news-and-features-main/~/media/Images/wcs%20org/new%20and%20noteworthy/headline/_JL%20Maher%206847%20ecuador%20jaguar%2011%2008%204.jpg"};
	animals[11]={name: "ocelot", img: "https://www.tpwmagazine.com/archive/2010/feb/images/AFOceCrouch.jpg"};
	animals[12]={name: "tapir", img: "https://adlayasanimals.files.wordpress.com/2015/02/tapir-conservation-project.jpg"};
	animals[13]={name: "capybara", img: "http://news.bbcimg.co.uk/media/images/72748000/jpg/_72748973_capybara-6.jpg"};
	animals[14]={name: "anaconda", img: "http://images.nationalgeographic.com/wpf/media-live/photos/000/004/cache/anaconda_446_600x450.jpg"};
	animals[15]={name: "caiman", img: "http://a-z-animals.com/media/animals/images/original/caiman4.jpg"};
	animals[16]={name: "dart frog", img: "http://www.nature.org/cs/groups/webcontent/@photopublic/documents/media/prd_010165.jpg"};
	animals[17]={name: "harpy eagle", img: "http://birdingblogs.com/wp-content/uploads/2011/12/Harpy-Eagle-Ricardo-Koehn2-e1324844076469.jpg"};

document.body.appendChild(container);
	createGrid(container);

function createGrid(elementToAppend){
	for (var i = 0; i < 18; i++){
		var newDiv = createDiv("black");
		elementToAppend.appendChild(newDiv);		
		//newDiv.innerHTML = numArray(i);
		createListener(newDiv, i);
	}
}

function createListener(newDiv, i){
   newDiv.addEventListener("click",function(){      
     this.style.backgroundImage = "url( " + animals[i].img + ")";
     this.style.backgroundPosition = "center";
   });
}

function numArray (num){
  var arr = [];
  for(var i=0; i<=18; i++){
    arr.push(i);
  }
  return arr[num].toString();
}

function imgReturn(index){
	for(var j=0; j<animals.length; j++){
		if(index == j){
    	return(animals[j].img);
		}
	}
}

function setupEventListener(newDiv, i){
for(var j=0; j<animals.length; j++){
		if(index == j){
    	return(animals[j].img);
		}
	}
}