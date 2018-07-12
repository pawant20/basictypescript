// class for videos
class Video{
    constructor(private title:string,
                private length:number,
                private channel:string,
                private views:number,
                private publish:string,
                private dislikes:number,
                private likes:number,
                private description?:string,
                ){
            this.title=title;
            this.length =length;
            this.channel = channel;
            this.views = views;
            this.publish = publish;
            this.dislikes = dislikes;
            this.likes = likes;
            this.description = description;
    }

    getBasicInfo = ()=>{
        return "title: "+this.title+ "\n"+
                "channel: "+this.channel+ "\n"+
                "publish: "+this.publish+ "\n"+
                "length: "+this.length+ "\n"+
                "views: "+this.views+ "\n"+
                "likes: "+this.likes+ "\n"+
                "disliks: "+this.dislikes+ "\n"+
                "description: "+this.description+ "\n"    
    }

    getComments = ()=>{
        return "all comments";
    }

    getRelatedVideos = ()=>{
        return "all related videos"
    }
}
// creatin object for video class
let obj =new Video("edWisor 3rd Foundation Day Anniversary #GetSkilledGetHired",
                    20,"edWisor",455,"1 Jul 2018",4,88,
                    "We are celebrating our 3rd anniversary today! So far,"+
                    "it's been an exhilarating journey in transforming careers,"+
                    "and we're hoping our time ahead will be equally gratifying."+
                    "#edWisor #GetSkilledGetHired #3rdanniversary #foundationday"+
                    "#1stjuly2018 #startup #DataScientist #WebDeveloper #MEANStack #MachineLearning #career #DreamJob"
                );
// printing in console
console.log("youtube videos");
console.log(obj.getBasicInfo());
console.log(obj.getComments()+"\n"+obj.getRelatedVideos());



// class for facebook about profile
class Profile{
    constructor(
        private birthday:string,
        private school:string,
        private college:string,
        private livesin:string,
        private facebookid:string,
        private likes:number,
        private freinds:number,
    ){
        this.birthday = birthday;
        this.school = school;
        this.college = college;
        this.livesin = livesin;
        this.facebookid = facebookid;
        this.likes = likes;
        this.freinds = freinds;
    }

    getProfileInfo = ()=>{
        return "birthday: "+this.birthday+"\n"+
                "scholl: "+this.school+"\n"+
                "college: "+this.college+"\n"+
                "lives in: "+this.livesin+"\n"+
                "facebook Id: "+this.facebookid+"\n"+
                "likes: "+this.likes+"\n"+
                "freinds: "+this.freinds+"\n"
    }

    getPhotos = ()=>{
        return "all photos";
    }

    getFamilyMembers = ()=>{
        return "all family members"
    }
}
// object for Profile
 let profile = new Profile("17-sep-1996","mother marry","thakur","mumbai","facebook.com/pawant20",440,284);
 console.log("facebook about");
 console.log(profile.getProfileInfo());
 console.log(profile.getPhotos()+"\n"+profile.getFamilyMembers());
 
 