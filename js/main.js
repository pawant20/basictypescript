// class for videos
var Video = /** @class */ (function () {
    function Video(title, length, channel, views, publish, dislikes, likes, description) {
        var _this = this;
        this.title = title;
        this.length = length;
        this.channel = channel;
        this.views = views;
        this.publish = publish;
        this.dislikes = dislikes;
        this.likes = likes;
        this.description = description;
        this.getBasicInfo = function () {
            return "title: " + _this.title + "\n" +
                "channel: " + _this.channel + "\n" +
                "publish: " + _this.publish + "\n" +
                "length: " + _this.length + "\n" +
                "views: " + _this.views + "\n" +
                "likes: " + _this.likes + "\n" +
                "disliks: " + _this.dislikes + "\n" +
                "description: " + _this.description + "\n";
        };
        this.getComments = function () {
            return "all comments";
        };
        this.getRelatedVideos = function () {
            return "all related videos";
        };
        // this.title=title;
    }
    return Video;
}());
var obj = new Video("edWisor 3rd Foundation Day Anniversary #GetSkilledGetHired", 20, "edWisor", 455, "1 Jul 2018", 4, 88, "We are celebrating our 3rd anniversary today! So far," +
    "it's been an exhilarating journey in transforming careers," +
    "and we're hoping our time ahead will be equally gratifying." +
    "#edWisor #GetSkilledGetHired #3rdanniversary #foundationday" +
    "#1stjuly2018 #startup #DataScientist #WebDeveloper #MEANStack #MachineLearning #career #DreamJob");
// printing in console
console.log("youtube videos");
console.log(obj.getBasicInfo());
console.log(obj.getComments() + "\n" + obj.getRelatedVideos());
var Profile = /** @class */ (function () {
    function Profile(birthday, school, college, livesin, facebookid, likes, freinds) {
        var _this = this;
        this.birthday = birthday;
        this.school = school;
        this.college = college;
        this.livesin = livesin;
        this.facebookid = facebookid;
        this.likes = likes;
        this.freinds = freinds;
        this.getProfileInfo = function () {
            return "birthday: " + _this.birthday + "\n" +
                "scholl: " + _this.school + "\n" +
                "college: " + _this.college + "\n" +
                "lives in: " + _this.livesin + "\n" +
                "facebook Id: " + _this.facebookid + "\n" +
                "likes: " + _this.likes + "\n" +
                "freinds: " + _this.freinds + "\n";
        };
        this.getPhotos = function () {
            return "all photos";
        };
        this.getFamilyMembers = function () {
            return "all family members";
        };
        this.birthday = birthday;
        this.school = school;
        this.college = college;
        this.livesin = livesin;
        this.facebookid = facebookid;
        this.likes = likes;
        this.freinds = freinds;
    }
    return Profile;
}());
var profile = new Profile("17-sep-1996", "mother marry", "thakur", "mumbai", "facebook.com/pawant20", 440, 284);
console.log("facebook about");
console.log(profile.getProfileInfo());
console.log(profile.getPhotos() + "\n" + profile.getFamilyMembers());
