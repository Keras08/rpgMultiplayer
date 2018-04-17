var Config = module.exports = {
  //---------------------
  //Main Configurations
  //---------------------
  port: 28100,

  jwtSecret: 'azrjpoqslmgj64Zf2he32ru321',

  loggingConfig: {
    format : [
              "{{timestamp}} <{{title}}> {{message}}", //default format
              {
                error : "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}" // error format
              }
    ],
    dateformat : "HH:MM:ss.L",
    preprocess :  function(data){
      data.title = data.title.toUpperCase();
    },
    level: 'debug'
  },

  //---------------------
  //Login Configurations
  //---------------------

  //Needs to be the same as Client firstHash
  firstHash: 'd28cb767c4272d8ab91000283c67747cb2ef7cd1',

  //Mail to send activation codes from
  mailFrom: 'smtps://guillaume.jouglet08@gmail.com:keras59490@smtp.gmail.com',

  //Activation API Location
  actUrl: 'ns3056809.ip-46-105-124.eu/activate/',

  //Time until token expires (in minutes)
  tokenExpiresIn: 5,

  //Allows only one logged in user at a time.
  enforceOneUser: false,

  //Temporary Password Complexity for lost Passwords
  lostPasswordComplexity: 2,

  //Temporary Password Expiration in Milliseconds
  tempPasswordExpires: 3600000, //1 hour

  //------------------------
  //Database Configurations
  //------------------------

  mongoDBconnect: 'mongodb://keras:keras59490@ds139219.mlab.com:39219/dbname'
};
