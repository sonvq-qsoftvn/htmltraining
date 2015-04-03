var wizard = {
	name : '',
	age : '',
	type : '',
};

/* =======================================
		Check availability of storages
   ======================================= */ 
//Local

//Indexed
var idbSupported = false;
document.addEventListener("DOMContentLoaded", function(){
 
    if("indexedDB" in window) {
        idbSupported = true;
    }
 
},false);


/* =======================================
		Core functions
   ======================================= */ 
var ls = {
	addNewWizard : function (name, age, type) {
		
	}
}

var idb = {
	//Initial function to open database
	open: function () {
		if(idbSupported) {
			var openRequest = indexedDB.open("qogwart",1);
	 
			openRequest.onupgradeneeded = function(e) {
				console.log("Upgrading...");
			}
	 
			openRequest.onsuccess = function(e) {
				console.log("Success!");
				db = e.target.result;
			}
	 
			openRequest.onerror = function(e) {
				console.log("Error");
				console.dir(e);
			}
		}
	},
	//Insert new wizard
	addNewWizard : function (name, age, type) {
		
	}
}

