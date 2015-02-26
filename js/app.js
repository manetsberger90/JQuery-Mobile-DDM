//PROBLEM: It looks gross in smaller browser withs and therefor small devices like phones.
//Solution: Hide the Text Links and swap them out with a more appropriate navigation.

//Create a Select and Append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links.
$("#menu a").each(function() {
    var $anchor = $(this);
    
  //Create an Option
    var $option = $("<option></option>");
    
//Deal with selected options depending on current page.
    if($anchor.parent().hasClass("selected")) {
        $option.prop("selected", true);
    }
    
  //options value is the href.
$option.val($anchor.attr("href"));
    
  //options text is the text of link.
$option.text($anchor.text());

  //append options to select
$select.append($option);
});


//Bind change to the select
$select.change(function() {
    
  //Go to selects Location.
 window.location = $select.val();
});
    
//Modify CSS to hide links on small widths and show button and select.


  //Also hides select and button on larger widths and show's links.

