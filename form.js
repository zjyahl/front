'use strict';
(function () {
    var form = document.getElementById('form1');
    EventUtil.addHandler(form, 'submit', function (event) {
        event = EventUtil.getEvent(event);
      
       //EventUtil.preventDefault(event);
       // console.log(form.elements["textarea1"].value);
       // form.elements["textarea1"].select();
       //EventUtil.selectText(form.elements["textarea1"],1,5);
    });
  EventUtil.addHandler(window, 'load', function (event) {
       frames["richedit"].document.designMode = "on";
    });

   EventUtil.addHandler(document.getElementById("fileup"), 'change', function (event) {
        var files = this.files;
        var fileNames = [];
        for(var i=0; i< files.length; i++){
            fileNames.push(files[i].name);
        } 
        alert(fileNames.join("&"));
    });

  EventUtil.addHandler(document.getElementById("button1"), 'click', function (event) {
    var selection = frames["richedit"].getSelection();
    var selectedTxt = selection.toString();
    var range = selection.getRangeAt(0);
    var span = frames["richedit"].document.createElement("span");
    span.style.backgroundColor = "yellow";
    range.surroundContents(span);
    form.elements["textarea1"].value = frames["richedit"].document.body.innerHTML;
    });

  

   /* EventUtil.addHandler(form.elements["textarea1"], 'select', function (event) {
        alert(EventUtil.getSelectedText(this));
    });*/
   /* EventUtil.addHandler(form.elements["textarea1"], 'focus', function (event) {
       this.blur();
    });*/
   /* EventUtil.addHandler(form.elements["textarea1"], 'paste', function (event) {
        var txtValue = this.value + EventUtil.getClipboardText(EventUtil.getEvent(event));
       EventUtil.preventDefault(event);
       alert(txtValue.length);
       this.value = txtValue;
    });
    EventUtil.addHandler(form.elements["textarea1"], 'keyup', function (event) {
       alert(this.value.length);
    })*/

   //form.elements["textarea1"].readOnly = true;
   form.elements["color"][0].disabled= true;
   form.elements["color"][0].checked = true;

  /* var select1 = form.elements["select1"];
   console.log(select1.options[0].text, select1.options[0].value);
   select1.options[1].selected = true;
   var newOption = document.createElement('option');
   newOption.appendChild(document.createTextNode("option text"));
   newOption.setAttribute('value', 'option value');
   select1.appendChild(newOption);
   select1.remove(0);*/
   
    //document.getElementById("radio1").checked=true


   
})();