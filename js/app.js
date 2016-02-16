
/*
 * Model of a set of Players to be selected into a team
 */
var TeamModel = {
		
		//this is manually set for testing purposes for now
		arrPlayers: [
	                   {name:"Vincent Kompany", position:"DEF"},
	                   {name:"Wayne Rooney", position:"FWD"},
	                   {name:"Juan Mata", position:"MID"},
	                   {name:"Dalay Blind", position:"DEF"},
	                   {name:"Eden Hazard", position:"FWD"},
	                   {name:"Riyad Mahrez", position:"MID"},
	                   {name:"Jamie Vardy", position:"FWD"},
	                   {name:"John Terry", position:"DEF"},
	                   {name:"Aaron Ramsey", position:"MID"},
	                   {name:"Mesut Ozil", position:"MID"},
	                   {name:"Chris Smalling", position:"DEF"}
	                 ],
		
		
		
		
		
		//get players from server
		getPlayers: function(){
			//TODO following is just a static array for testing purposes
			//TeamModel.arrPlayers = [];
			
			
		},
		
		//initialize this model
		init: function(){
			TeamModel.getPlayers();
		}
		
};


/*
 * jQuery functions once doc is ready
 */
$(document).ready(function(){
	TeamModel.init();
	$(".player-box").draggable({
		stack: '.player-box',
		revert: 'invalid'
	});
	$("#player-field").droppable({
		activeClass : "",
		//specify what happens in the drop event
		drop: function(event, ui){
			console.log("event obj: "+event);
			console.log("ui dom: "+ui);
			$(".defenders").append(ui.draggable);
		}
		
	});
	
	
});

/*
 * Angular functions
 */

var PlayerSelApp = angular.module("PlayerSelApp", []);

//bench controller
PlayerSelApp.controller("benchController", function($scope){
	$scope.arrPlayers = TeamModel.arrPlayers;
});

//field controller
PlayerSelApp.controller("fieldController", function($scope){
	
});

