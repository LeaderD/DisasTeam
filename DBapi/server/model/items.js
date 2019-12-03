const approot = require('app-root-path');
const config = require(approot+"/config"); 
const types = config.types;
const DB = require(types.DB_PATH);

module.exports = class itemsDB extends DB {
  constructor(data){
    super("items", ["id","users_id","item_name","exp_month","exp_year","type","img"]);
    this.data = data;
    this.returns = ["*"];
    this.config = {};
  }
  
  set set_data(d){
    this.data = d;
  }

  set set_returns(d){
    if(d){
      this.returns = d;
    }
  }

  set set_config(d){
    if(d){
      this.config = d;
    }
  }

  async insert(){
    super.set_config = {
      
      
      ...this.config
    };

    var result = await super.insert(this.data, this.returns);
    return result;
  }
  
  async read(){
    super.set_config = {
      order:["id"],
      
      ...this.config
    };

    var result = await super.read(this.data, this.returns)
    return result;
  }
  
  async update(){
    super.set_config = {
      
      
      query_where:["id"],
      ...this.config
    };

    var result = await super.update(this.data, this.returns);
    return result;
  }
  
  async delete(){
    super.set_config = {
      ...this.config
    };
    
    var result = await super.delete(this.data);
    return result;
  }

  async custom(){
    /*
      your own custom query
    */
    var query = `
INSERT INTO items(item_name, users_id, type, img) VALUES('Canned Tomatoes', $1, 'h', 'tomatoes'),('Crackers', $1, 'h', 'crackers'),('Granola', $1, 'h', 'granola'),('Cooking Water', $1, 'h', 'cookwater'),('First Aid', $1, 'h', 'firstaid'),('Flashlight', $1, 'h', 'flashlight'),('Can Opener', $1, 'h', 'canopener'),('Whistle', $1, 'h', 'whistle'),('Radio', $1, 'h', 'radio'),('Flare', $1, 'h', 'flare'),('Documents', $1, 'h', 'documents'),('Drinking Water', $1, 'h', 'drinkwater'),('Spare Keys', $1, 'h', 'sparekeys'),('Candles', $1, 'h', 'candles'),('Clothes', $1, 'h', 'clothes'),('Snow Brush', $1, 'h', 'snowbrush'),('Medication', $1, 'h', 'medication'),('Money', $1, 'h', 'money'),('ID Copy', $1, 'h', 'idcopy'),('Shovel', $1, 'h', 'shovel'),('Matches', $1, 'h', 'matches'),('Clothes', $1, 'g', 'clothes'),('Medication', $1, 'g', 'medication'),('First Aid Kit', $1, 'g', 'firstaid'),('Granola Bar', $1, 'g', 'granola'),('Drinking Water', $1, 'g', 'drinkwater'),('Whistle', $1, 'g', 'whistle'),('Flashlight', $1, 'g', 'flashlight'),('ID Copy', $1, 'g', 'idcopy'),('Money', $1, 'g', 'money'),('Clothes', $1, 'w', 'clothes'),('Medication', $1, 'w', 'medication'),('First Aid Kit', $1, 'w', 'firstaid'),('Granola Bar', $1, 'w', 'granola'),('Drinking Water', $1, 'w', 'drinkwater'),('Whistle', $1, 'w', 'whistle'),('Flashlight', $1, 'w', 'flashlight'),('ID Copy', $1, 'w', 'idcopy'),('Money', $1, 'w', 'money'),('Whistle', $1, 'v', 'whistle'),('Flare', $1, 'v', 'flare'),('First Aid Kit', $1, 'v', 'firstaid'),('Granola Bar', $1, 'v', 'granola'),('Drinking Water', $1, 'v', 'drinkwater'),('Blankets', $1, 'v', 'blankets'),('Matches', $1, 'v', 'matches'),('Candles', $1, 'v', 'candles'),('Shovel', $1, 'v', 'shovel'),('Snow Brush', $1, 'v', 'snowbrush'),('Documents', $1, 'v', 'documents'),('ID Copy', $1, 'v', 'idcopy'),('Flashlight', $1, 'v', 'flashlight'),('Clothes', $1, 'v', 'clothes'),('Spare Keys', $1, 'v', 'sparekeys');
`
    return await super.runquery(query, this.data, null);
  }
}