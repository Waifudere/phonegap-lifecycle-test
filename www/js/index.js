var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("Welcome to Waifudere");
    }
	
	function updateDisplay() {
		$("#launched").text("Waifu: " + launched_count);
		$("#resumed").text("Where the waifu go?: " + paused_count);
		$("#paused").text("Waifu has returned: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("Waifu is ready for pleasure");
        
		document.addEventListener("Waifu returned", onResume, false);
		document.addEventListener("Waifu gone", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("Where the waifu?");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("Found the waifu");
		resumed_count++;
		updateDisplay();
    }
