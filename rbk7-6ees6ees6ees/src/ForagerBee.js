class ForagerBee extends HoneyMakerBee {
  constructor(){
  	super();
  	this.age = 10;
  	this.job = 'find pollen';
  	this.canFly = true;
  	this.treasureChest = new Array();
  }

  forage(treasue) {
  	this.treasureChest.push(treasue);
  }
};
