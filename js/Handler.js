function openurl(Pathname){
var Url="";

  switch(Pathname){
        case "Linkedin":
            Url="https://www.linkedin.com/in/amalmuralidharan5/";
            break;
        case "github":
            Url="https://github.com/cmamal5";
            break;
        case "instagram":
            Url="https://www.instagram.com/___ame_errante/";
            break;
        case "stack-overflow":
            Url="https://stackoverflow.com/users/11957624/amal";
            break;
        case "resume":
            Url="Docs/Amal+Resume.pdf";
            break
  }

  window.open(Url);
}