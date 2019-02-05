//left nav bar

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
  
// copy function

window.onload = function () {
  // Get all the elements that match the selector as arrays
  var copyTextareaBtn = Array.prototype.slice.call(document.querySelectorAll('.js-textareacopybtn'));
  var copyTextarea = Array.prototype.slice.call(document.querySelectorAll('.js-copytextarea'));

  // Loop through the button array and set up event handlers for each element
  copyTextareaBtn.forEach(function(btn, idx){
  
    btn.addEventListener("click", function(){
    
      // Get the textarea who's index matches the index of the button
      copyTextarea[idx].select();

      try {
        var msg = document.execCommand('copy') ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Whoops, unable to copy');
      } 
      
    });
    
  });
}


//other copy functions. They work if there is only one per page. for future.


// const span = document.querySelector("span");

// span.onclick = function() {
//   document.execCommand("copy");
// }

// span.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//     console.log(event.clipboardData.getData("text"))
//   }
// });
  
//   // copy code

//   //copy
//   function copy_password() {
//   var copyText = document.getElementById("copy");
//   var textArea = document.createElement("textarea");
//   textArea.value = copyText.textContent;
//   document.body.appendChild(textArea);
//   textArea.select();
//   document.execCommand("Copy");
//   textArea.remove();
// }

// function copyDivToClipboard() {
//   var range = document.createRange();
//   range.selectNode(document.getElementById("copy1"));
//   window.getSelection().removeAllRanges();
//   window.getSelection().addRange(range);
//   document.execCommand("copy")
// }