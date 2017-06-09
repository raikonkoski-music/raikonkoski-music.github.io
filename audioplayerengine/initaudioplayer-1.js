jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i= 0; i< scripts.length; i++)

    {

        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);

    }

    jQuery("#amazingaudioplayer-1").amazingaudioplayer({

        jsfolder:jsFolder,

        skinsfoldername:"",

        titleinbarwidthmode:"fixed",

        timeformatlive:"%CURRENT% / LIVE",

        barbackgroundimage:"",

        showtime:false,

        titleinbarwidth:80,

        showprogress:true,

        random:false,

        titleformat:"%TITLE%",

        height:1042,

        loadingformat:"Loading...",

        prevnextimage:"prevnext-48-48.png",
		
        prevnextimageheight:180,
		
	prevnextimagewidth:180,
					
        showinfo:true,

        imageheight:180,
		
	imagewidth:180,
		
        skin:"DarkBox",

        loopimage:"loop-24-24-0.png",

        loopimagewidth:50,
		
	loopimageheight:50,
		
        showstop:false,

        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",

        stopotherplayers:true,

        showloading:false,

        forcefirefoxflash:false,

        showvolumebar:true,

        imagefullwidth:false,

        width:850,

        showtitleinbar:false,

        showloop:true,

        volumeimage:"volume-24-24-0.png",
		
		volumeimagewidth:50,
		
		volumeimageheight:50,
		
		volumebarpadding:08,
		
		volumebarheight:155,
		
        tracklistitem:26,

        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",

        tracklistarrowimage:"tracklistarrow-48-16-0.png",

        forceflash:false,

		playpauseimagewidth:180,
		
        playpauseimageheight:180,

		playpauseimage:"playpause-58-58.png",
		
        showbackgroundimage:false,

        stopimage:"stop-24-24-0.png",
		
        forcehtml5:false,

        showprevnext:true,

        backgroundimage:"",

        autoplay:false,

        progressheight:8,

        showtracklistbackgroundimage:false,

        titleinbarscroll:true,

        showtitle:true,

        defaultvolume:100,

        tracklistarrowimageheight:16,

        heightmode:"auto",

        titleinbarformat:"%TITLE%",

        showtracklist:true,

        stopimageheight:24,

        stopimagewidth:24,

        noncontinous:false,

        tracklistbackgroundimage:"",

        showbarbackgroundimage:false,

        showimage:true,

        tracklistarrowimagewidth:48,

        timeformat:"%CURRENT% / %DURATION%",

        showvolume:true,

        fullwidth:false,

        loop:1,

        preloadaudio:true

    });

});
