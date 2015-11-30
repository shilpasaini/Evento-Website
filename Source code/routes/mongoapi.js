var db_name = process.env.OPENSHIFT_APP_NAME || "evento";
var connection_string = '127.0.0.1:27017/' + db_name;
// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}
var mongojs = require("mongojs");
var db = mongojs(connection_string, ["Events"]);
//var events = db.collection("Events");

exports.fetchEventsPage = function (req, res, next) {
    var Ename = req.params.EventName;
    console.log(Ename);
    console.log("i ma here");
    db.collection('Events').find({"Name": Ename}, function (err, event) {
        if (err) {
            return next(err);
        }
        return res.render('Events',{
        	title: event[0].Name,
        	Zipcode:event[0].Zipcode,
            City:event[0].City,
            Video:event[0].video,
            Address:event[0].Address,
            description:event[0].description,
            url:event[0].url,
            population:event[0].population,
            revenueYearQuarter:event[0].revenueYearQuarter,
            revenueQuarter:event[0].revenueQuarter,
            officialdate:event[0].officialdate,
            tweet:event[0].tweet,
            datawidgetid:event[0].datawidgetid,
            rating:event[0].Rating
        });

    });

}

//should do find and modify
exports.updateStarRating=function(req,res,next){
    var Ratingval=req.params.EventName;
    var rval=req.params.Stars;
    var newvar="\'Rating."+rval+"\'";
    console.log(rval);
    console.log(newvar);
    db.collection('Events').findAndModify({
    query: { "Name": Ratingval },
    update: { $inc:{newvar:1} },
    new: true
}, function(err, doc) {
    // doc.tag === 'maintainer'
    if (err) {
            return next(err);
        }
        console.log(doc+"updated the value");
        return "value updated";
});
}

exports.fetchEventsInaCategory = function (req, res, next) {
var cat = req.params.categoryName;
console.log(cat);
console.log("i ma here");
db.collection('Events').find({"Category": cat}, function (err, event) {
if (err) {
return next(err);
}
console.log("i am here near render page"+""+event);
res.render('search',{
eventlist: event
});
});
}

exports.renderHostPage=function(req,res,next){
    console.log("i ma her");
    res.render('hostEvent');
}

exports.fetchEventsInaCity=function (req, res, next) {
var cityName = req.params.CityName;
console.log(cityName);
console.log("i ma here");
db.collection('Events').find({"City": cityName}, function (err, event) {
if (err) {
return next(err);
}
console.log("i am here near render page"+""+event);
res.render('search',{
eventlist: event
});
});
}
// exports.fetchEventsInaCategory=function(callback,categoryName){
//     console.log("i am here mongo");
//     db.collection('Events').find({"Category": categoryName}, function (err, recs) {
//     if(err){
//         throw err;
//     }else{
//         if(recs.length!=0){
//             console.log("data"+JSON.stringify(recs));
//             callback(err,recs);
//         }else{
//             callback(err,null);
//         }
//     }
// });
//     }
    


