// form.js

debugOn = 0;

// controlCheck(objId)
// Check the checkbox or first radio.
function controlCheck(objId) {
  if (debugOn) alert('controlCheck('+objId+")");
  obj = document.getElementById(objId);  // Get object.
  formId = document.getElementById(objId).form.name;  // Get form Id.
  if (obj.type != 'radio') {
    document[formId][objId].checked = false;
  } else {
    objLen =  document[formId][objId].length;
    document[formId][objId][0].checked = false; // Check the first radio.
  }
}

// checkboxGetValue(objId)
// Get the checkbox value.
function checkboxGetValue(objId) {
  if (debugOn) alert('checkboxGetValue('+objId+")");
  obj = document.getElementById(objId);  // Get object.
  formId = document.getElementById(objId).form.name;  // Get form Id.
  if (obj.type != 'radio') {
    checkboxValue = document[formId][objId].checked;
  } else {
    objLen =  document[formId][objId].length;
    checkboxValue = document[formId][objId][0].checked;
  }
  if (debugOn) alert('checkboxValue=['+checkboxValue+"]");
  return checkboxValue;
}

// controlUncheck(objId)
// Uncheck the checkbox or first radio.
function controlUncheck(objId) {
  if (debugOn) alert('controlUncheck('+objId+")");
  obj = document.getElementById(objId);  // Get object.
  formId = document.getElementById(objId).form.name;  // Get form Id.
  if (obj.type != 'radio') {
    document[formId][objId].checked = false;
  } else {
    objLen =  document[formId][objId].length;
    for(var i = 0; i < objLen; i++) {
      document[formId][objId][i].checked = false; // Uncheck the first radio.
    }
  }
}

// elementDisable(objId)
// Disable the form element.
function elementDisable(objId) {
  if (debugOn) alert('elementDisable('+objId+")");
  obj = document.getElementById(objId);  // Get object.
  formId = document.getElementById(objId).form.name;  // Get form Id.
  objLen =  document[formId][objId].length;
  if (obj.type != 'radio') {
    document[formId][objId].disabled = true;
  } else {
    for(var i = 0; i < objLen; i++) {
      document[formId][objId][i].disabled = true;
    }
  }
}

// elementEnable(objId)
// Enable the form element.
function elementEnable(objId) {
  if (debugOn) alert('elementEnable('+objId+")");
  obj = document.getElementById(objId);  // Get object.
  formId = document.getElementById(objId).form.name;  // Get form Id.
  objLen =  document[formId][objId].length;
  if (obj.type != 'radio') {
    document[formId][objId].disabled = false;
  } else {
    for(var i = 0; i < objLen; i++) {
      document[formId][objId][i].disabled = false;
    }
  }
}

// elementHide(objId)
// Hide the form element.
function elementHide(objId) {
  if (debugOn) alert('elementHide('+objId+")");
  obj = document.getElementById(objId);  // Get object.
  formId = document.getElementById(objId).form.name;  // Get form Id.
  objLen =  document[formId][objId].length;
  if (obj.type != 'radio') {
    document[formId][objId].style.visibility = "hidden";
  } else {
    for(var i = 0; i < objLen; i++) {
      document[formId][objId][i].style.visibility = "hidden";
    }
  }
}

// elementShow(objId)
// Show the form element.
function elementShow(objId) {
  if (debugOn) alert('elementShow('+objId+")");
  obj = document.getElementById(objId);  // Get object.
  formId = document.getElementById(objId).form.name;  // Get form Id.
  objLen =  document[formId][objId].length;
  if (obj.type != 'radio') {
    document[formId][objId].style.visibility = "visible";
  } else {
    for(var i = 0; i < objLen; i++) {
      document[formId][objId][i].style.visibility = "visible";
    }
  }
}

// radioGetValue(radioName)
// Returns the value of the radio button that is checked.
// Returns empty string if no buttons selected or radio control does not exist.
function radioGetValue(radioName) {
	if (!radioName) return "";
  console.log('radioGetValue('+radioName+')');
	var radioObj = document.getElementsByName(radioName);
  var radioLength = radioObj.length;
  if ( radioLength == undefined ) {
    // Only one radio button.
		if ( radioObj.checked ) {
      return radioObj.value;
		} else {
      return "";
		}
	} else {
		
		for(var i = 0; i < radioLength; i++) {
			if (radioObj[i].checked) {
				return radioObj[i].value;
			}
		}
	}
  return "";
}

// radioSetValue(objId, newValue)
// Sets the radio button with the given value as being checked.
// Does nothing if there are no radio buttons.
// If the given value does not exist, all the radio buttons are reset to unchecked.
function radioSetValue(objId, newValue) {
  if (debugOn) alert('radioSetValue('+objId+","+newValue+")");
  obj = document.getElementById(objId);  // Get radio object.
  formId = obj.form.name;  // Get form name.
  objLen =  document[formId][objId].length;
  for(var i = 0; i < objLen; i++) {
    document[formId][objId][i].checked = false;
    if (document[formId][objId][i].value == newValue.toString()) {
      document[formId][objId][i].checked = true;
    }
  }
}

function getElementValue(formElement) {
  //alert('formElement='+formElement);
  obj = document.getElementById(formElement);  // Get object.
  if (obj) {
    if (obj.length != null) var type = obj[0].type;
    if ((typeof(type) == 'undefined') || (type == 0)) var type = obj.type;
    //alert('0bj='+obj+' type='+type);
    switch(type) {
			case 'undefined': return;
			case 'radio':
        for(var x=0; x < obj.length; x++) 
          if (obj[x].checked == true)
        return obj[x].value;
			case 'select-multiple':
        var myArray = new Array();
        for(var x=0; x < obj.length; x++) 
          if (obj[x].selected == true)
            myArray[myArray.length] = obj[x].value;
        return myArray;
			case 'checkbox': return obj.checked;
      default: return obj.value;
    }
  } else {
    alert(obj+' undefined');
  }
}
