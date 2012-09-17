
// CollapsibleTOC template, by neilw, 2009
// Versions
//    1.00    9/2/09    neilw
//    1.01    4/19/10   neilw        Use wiki.toc() instead of page.toc to reduce FOUC
//    1.10    8/9/10    neilw        added option to remove numbering
//    1.20    3/8/11    neilw        Eliminated use of wiki.toc().  Now just do it all in JS
//    1.21    10/13/11  neilw        Added class "collapsibleTOC" to container div

// USAGE: CollapsibleTOC()
//    This outputs a collapsible table of contents for the current page.  The output is
//    "raw", without any enclosing table or anything, so you can wrap it in whatever
//    style you like.
// -----------------------------------------------------------------------------

$(function() {

 var toctree_wrapper = $('.toctree-wrapper ul');












});





/*
var numbering = $0 ?? $numbering ?? true;

// Output
<html>
// Scripts go in the head
<head>
//
// First script element is unique to each template call, passing args to the common code
//
//<script type="text/javascript">"
//DekiWiki.$(document).ready(function($) { collapse_toc($, "..json.emit(@id)..","..json.emit(numbering).."); });
//"</script>
//
// This script element is always the same, so only one copy will end up on the page even if the
// template is called multiple times
//


<script type="text/javascript">"
function collapse_toc($, id, numbers) {

// Insert the TOC into the container
    var $div = $('#' + id);
    $div.html($('#pageToc').html());
    $div.find('.pageToc').show().find('h5:first').hide();

// Find the list
    var $list = $div.find('ol:first');
    if ($list.length == 0) {
	alert(\"ERROR: CollapsibleTree: can\'t find the TOC\"); 
	return;
    }

// Recursively traverse list
    collapse_toc_recurse($, $list, numbers);

// Show it!
    $div.show();
}





function collapse_toc_recurse($, $list, numbers) {
// Make each list item collapsible
    $list.children('li').each(function () {

    // Get rid of bullet and insert icon in front of each list item
        $(this).css({'margin-left':'0', 'padding-left':'0', 'list-style-type':'none'}).
            prepend('<span class=\"icon\"><img style=\"vertical-align: middle; margin-bottom: 5px\" src=\"/skins/common/icons/icon-trans.gif\" /> </span>');

    // Remove numbering if necessary
    //    if (!numbers) $(this).find('span:eq(1)').remove();

    // Find and hide inner OL, if any
        var $ol  = $(this).children('ol:first').hide();
        var $img = $(this).find('img:first');

    // If appropriate, link icon to toggle function and recurse
        if ($ol.length) {
            $img.attr('class', 'contract');
            $img.css('cursor','pointer').click(function() {
                if ($ol.css('display') == 'none') {
                    $ol.slideDown('fast');
                    $(this).attr('class', 'expand');
                }
                else {
                    $ol.slideUp  ('fast');
                    $(this).attr('class', 'contract');
                }
                return(false);
            });
        // recurse
            collapse_toc_recurse($, $ol, numbers);
        }
    });
}
"</script>
</head>






// Content goes in the body
<body>
    <div id=(@id) class="collapsibleTOC" style="display:none;" />;
</body>
</html>
*/