(function(){
	console.log("It's working.");





})();

// (function games()
// {
//     var ss = document.getElementById("ss").checked;;
   
//     if(ss == true){
//     	console.log("Secret Santa Checked.");
//     }else{
//     	 return false;
//     }


// })();

	function printChecked(){
				var items=document.getElementsByName('acs');
				var selectedItems="";
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox' && items[i].checked==true)
						selectedItems+=items[i].value+"\n";
				}
			console.log("Print Checked Was Successful - function exit");
			}