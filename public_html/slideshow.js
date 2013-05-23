    //If using image buttons as controls, Set image buttons' image preload here true
    //(use false for no preloading and for when using no image buttons as controls):

    var preload_ctrl_images=true;

    //And configure the image buttons' images here:
    //Icons from: http://www.mricons.com/show/iconset:primo-icons/page-7
    var previmg='http://www.mealsatthebridge.org/images/button_rew_icon.png';
    var stopimg='http://www.mealsatthebridge.org/images/button_stop_icon.png';
    var playimg='http://www.mealsatthebridge.org/images/button_play_icon.png';
    var nextimg='http://www.mealsatthebridge.org/images/button_ffw_icon.png';

    var slideShow=[]; // SLIDESHOW

    //configure the below images and descriptions to your own, note optional links, target and window specifications.

    slideShow[0] = ["./images/Ozmmaus_images/Gallery 008.jpg", "By: Trevor Brown Title: My Journey", "http://www.mealsatthebridge.org/", "width=955, height=300, location, resizable, scrollbars"];
	slideShow[1] = ["./images/Ozmmaus_images/Gallery 006.jpg", "By: Graham Richmond Title: Former Victorian police commissioner Sinclair Miller", "http://www.mealsatthebridge.org/", "_new", "top=250, left=300, width=955, height=300, location, resizable, scrollbars"];
    slideShow[2] = ["./images/Ozmmaus_images/Gallery 009.jpg", "By: Steven Bishop", "http://www.mealsatthebridge.org/", "width=955, height=300, location, resizable, scrollbars"];
	slideShow[3] = ["./images/Ozmmaus_images/Gallery 010.jpg", "By: Samuel Roussel Title: Flowers 2013", "http://www.mealsatthebridge.org/", "width=955, height=300, location, resizable, scrollbars"];
	slideShow[4] = ["./images/Ozmmaus_images/Gallery 011.jpg", "By: Samuel Roussel Title: Flowers 2013", "http://www.mealsatthebridge.org/"];
	slideShow[5] = ["./images/Ozmmaus_images/Gallery 012.jpg", "By: Samuel Roussel Title: Flowers 2013", "http://www.mealsatthebridge.org/"];
	slideShow[6] = ["./images/Ozmmaus_images/Gallery 013.jpg", "By: Samuel Roussel Title: Flowers 2013", "http://www.mealsatthebridge.org/"];
	slideShow[7] = ["./images/Ozmmaus_images/Gallery 014.jpg", "By: Samuel Roussel Title: Flowers 2013", "http://www.mealsatthebridge.org/"];
	slideShow[8] = ["./images/Ozmmaus_images/Gallery 015.jpg", "By: Samuel Roussel Title: Flowers 2013", "http://www.mealsatthebridge.org/"];
	slideShow[9] = ["./images/Ozmmaus_images/Gallery 016.jpg", "By: Steven Bishop", "http://www.mealsatthebridge.org/"];
	slideShow[10] = ["./images/Ozmmaus_images/Gallery 017.jpg", "By: C. Ashton Title: 2012", "http://www.mealsatthebridge.org/"];
	slideShow[11] = ["./images/Ozmmaus_images/Gallery 021.jpg", "By: Djarro Lambasfee Title: The dreamtime & the rainbow dreaming ", "http://www.mealsatthebridge.org/"];
	slideShow[12] = ["./images/Ozmmaus_images/Gallery 022.jpg", "By: Djarro Lambasfee Title: The dreaming is quest & the questnis a dreaming", "http://www.mealsatthebridge.org/"];
    slideShow[13] = ["./images/Ozmmaus_images/Gallery 019.jpg", "8/10 By: C. Sweetman Title: Tree of life", "http://www.mealsatthebridge.org/"];
//	slideShow[0] = ["1-big.jpg", "Seagulls", "http://www.2webvideo.com", "_new", "top=250, left=300, width=500, height=300, location, resizable, scrollbars"];


    //optional properties for these images:

    slideShow.no_descriptions=0; //use for no descriptions displayed
    slideShow.pause=1; //use for pause onmouseover
    slideShow.image_controls=1; //use images for controls
    slideShow.button_highlight='#6495ED'; //onmouseover background-color for image buttons (requires image_controls=1)
    slideShow.specs='width=960, height=250' //global specifications for this show's new window(s)
    slideShow.random=0; //set a random slide sequence on each page load
    slideShow.manual_start=0; //start show in manual mode (stopped)
    slideShow.delay=1000; //sets miliseconds delay between slides
    slideShow.no_added_linebreaks=1; //use for not adding line breaks in formatting of texts and controls
    //Notes:

    //slides#.target will set a target for a slide group, will be overridden by slides#[#][3], if present
    //slides#.specs will set new window specifications for a slide group, will be overridden by slides#[#][4], if present
    //slides#.fadecolor will set fading images background color, defaults to white
    //slides#.no_controls will set a slide show with no controls
    //slides#.random will set a random slide sequence on each page load
    //slides#.delay=4000 will set miliseconds delay between slides for a given show, may also be set in the call as the last parameter
    //slides#.jumpto=1 will display added controls to jump to a particular image by its number
    //slides#.no_added_linebreaks=1; use for no added line breaks in formatting of texts and controls

    //use below to create a customized onclick event for linked images in a given show:
    //slides#.onclick="window.open(this.href,this.target,'top=0, left=0, width='+screen.availWidth+', height='+screen.availHeight);return false;"