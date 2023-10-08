javascript:(function() {
  var text = document.body.innerText.trim(); // Trim whitespace
  var regex = /G\. *L\. *c\. (\d+), § ([\d\w]+)/g;
  var matches = text.match(regex);

  if (matches && matches.length > 0) {
    var uniqueCitations = Array.from(new Set(matches)); // Remove duplicates

    var citationList = document.createElement('ul');

    uniqueCitations.forEach(function(citation) {
      var parts = citation.match(/(\d+), § ([\d\w]+)/);
      if (parts && parts.length === 3) {
        var chapter = parts[1]; // Get the chapter number
        var section = parts[2]; // Get the section number
        var url = 'https://malegislature.gov/Laws/GeneralLaws/Chapter' + chapter + '/' + 'section' + section;

        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.textContent = citation;
        listItem.appendChild(link);
        citationList.appendChild(listItem);
      }
    });

    var popup = window.open('', '_blank');
    popup.document.body.appendChild(citationList);
  } else {
    alert('No citations found on this page.');
  }
})();
