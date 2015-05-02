WaterSensors = new Mongo.Collection('sensors');

if(Meteor.isClient){

	Template.sensorslist.helpers({
		'showSensor' : function(){
			return WaterSensors.find()
		},
		'countSensors' : function(){
			return WaterSensors.find().count()
		},
		'selectedSensor': function(){
			var sensorId = this._id;
			var selectedSensor = Session.get('selectedSensor');
			if(sensorId == selectedSensor){
				return "selected"
			}
		}
	});

	Template.sensorslist.events({
		'click .sensor':function(){
			var sensorId = this._id;
			Session.set('selectedSensor',sensorId);
		},
		'change':function(){
			console.log("change")
		},
		'mouseover .sensor':function(){
			console.log("focus")
		}
	});
}
