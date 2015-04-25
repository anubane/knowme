/**
 * Created by Anurag on 2/15/2015.
 */
function clicker(btn){
	var thediv=document.getElementById('displaybox');
	if(thediv.style.display == "none" && btn == 1){
		thediv.style.display = "";
		thediv.innerHTML = "<div class='backFace' onclick='clicker()'><div class='allcontent'><div class='heading'><span class='first_char'>A</span>CADEMIA</div><div class='content'><ul type='disc'><li>Earned a B.Tech.(CSE) from Graphic Era University in 2014</li><li>Graduated XII - I.C.S.E. Board in 2009</li><li>Graduated X - I.C.S.E. Board in 2006</li></ul></div><div class='heading'><span class='first_char'>C</span>OMPUTER <span class='first_char'>B</span>ASED <span class='first_char'>S</span>KILLS</div><div class='content'><ul type='disc'><li>Web Application development in Java/J2EE</li><li>Full stack web deelopment with MEAN</li><li>C / C++ / Python</li></ul></div></div></div>";
	} else if(thediv.style.display == "none" && btn == 2) {
		thediv.style.display = "";
		thediv.innerHTML = "<div class='backFace' onclick='clicker()'><div class='allcontent'><div class='heading'><span class='first_char'>R</span>ESEARCH <span class='first_char'>P</span>UBLICATIONS</div><div class='content'><ul type='disc'><li>Anurag Banerjee, Rayan Goudar, '<i>Low Cost Pointing Deveice For Digital Handwriting Task And Other Hand Controlled Natural Events</i>', IConDM 2013, in IIITD&M Chennai and published in Procedia Engineering (ElseVier)</li></ul></div><div class='heading'><span class='first_char'>R</span>ESEARCH <span class='first_char'>I</span>NTERESTS</div><div class='content'><ul type='disc'><li>Human-Computer Interface Hardware Design</li><li>User Interface Design</li><li>AI Based Systems</li><li>Pattern Recognition</li><li>Wearable Computers</li><li>Geo-location Programming</li></ul></div></div></div>";
	} else if(thediv.style.display == "none" && btn == 3){
		thediv.style.display = "";
		thediv.innerHTML = "<div class='backFace' onclick='clicker()'><div class='allcontent'><div class='heading'><span class='first_char'>W</span>ORK <span class='first_char'>E</span>XPERIENCE</div><div class='content'><ul type='disc'><li>Programmer Analyst @ Cognizant as a Java based resource</li></ul></div><div class='heading'><span class='first_char'>P</span>ROJECTS</div><div class='content'><ul type='disc'><li><b>FindMe!</b><br/><i>This is a very simple and intuitive s.p.a that allows the user to geolocate him/her-self over internet without the requirement for a GPS device.</i><br/>&#09;Technologies used: JS, HTML5 CSS3, github</li><li><b>An OCR application</b><br/><i>The application enables the user to read lettered image with an option to translate it into the language of choice.</i><br/>&#09;Technologies used: Tess4j Library, Tesseract, Swing, Bing translation API</li><li><b>Broadcasting Chat application</b><br/><i>A GUI  based chat application for multiple users, using the concept of broadcasting.</i><br/>&#09;Technologies used: Java socket Programming, Swing</li><li><b>Simple Video Streaming Application</b><br/><i>This application creates a sync of a video file stored on the hard disk and makes it a video streaming source with a URL. A JMF player can use the URL to play the streaming video.</i><br/>&#09; Technologies used: Java, JMF</li></ul></div></div></div>";
	}else{
		thediv.style.display = "none";
		thediv.innerHTML = '';
	}
	return false;
}
