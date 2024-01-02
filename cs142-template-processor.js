'use strict';
//============================= Using Function =============================
function Cs142TemplateProcessor(template) {
  this.template = template;
}
  Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    var template = this.template;

    /*Traverse the dictionary keys, if the tamplate contains key which is present,
    //in the dictionary,the value of the key would be replaced*/

    for (const key of Object.keys(dictionary)) {

      var property = new RegExp("{{" + key + "}}");
      if (property.test(template)) {

        template = template.replace(property, dictionary[key]);
      }
    }
    //Replace any undefined peoperty with space
    template = template.replace(/"{{" [A - Z] * "}}" /i, " ");
    return template;
  };
  //==================== Using class ===================================

  /*
  // window object is referenced here to fix the following error:
  //"Error processing ./cs142-test-project2.js: window.Cs142TemplateProcessor is not a constructor"
  //We need to do this explicitly to get a reference on the window object 
  // becase classes are not properties of the window object

  //----------------The code begins here--------------------------------//
  window.Cs142TemplateProcessor = class Cs142TemplateProcessor {

    constructor(template) {
      this.template = template;
    }

    fillIn(dictionary) {
      var template = this.template;

      //Traverse the dictionary keys, if the tamplate contains key which is present,
      //in the dictionary,the value of the key would be replaced

      for (const key of Object.keys(dictionary)) {

        var property = new RegExp("{{" + key + "}}");
        if (property.test(template)) {

          template = template.replace(property, dictionary[key]);
        }
      }
      //Replace any undefined peoperty with space
      template = template.replace(/"{{" [A - Z] * "}}" /i, " ");
      return template;
    }
  };
  */
