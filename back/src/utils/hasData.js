const hasData = async (model)=>{

    const result = await model.findOne();

    return result?true:false;
}

module.exports = hasData