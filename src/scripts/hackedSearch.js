/**
 * Creates a Semantic UI Search module instance with Categories and a customized template.
 *
 * Dependencies: (these should be handled via NPM, with sub-modules ideally!)
 * JS:
 * https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
 * https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js
 * CSS:
 * https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css
 * JSON:
 * https://api.npoint.io/201b29709686e07a6978
 */

// The basic DOM elements required for the UI.

import $ from "jquery";

var uiRoot = $(".autobot");
var uiSearch = $(".ui.search");
var uiBox = $(".ui.search").parent();

// Makes jQuery.ajax request to a JSON file.
// and takes a callback function name as arg to execute on success.
function startErUp(cb) {
  // Loading 'real' sample data from https://codepen.io/YoungElPaso/pen/bOJLvg.
  // var data = data.data.recommendations.items;
  // Trying this endpoint instead. https://api.npoint.io/201b29709686e07a6978
  // Works, that's nice.
  // This endpoint has about 300 items in it. Pretty good amount.
  var data = $.ajax("https://api.npoint.io/201b29709686e07a6978", {
    success: function (res) {
      // Fire the callback w/ the now loaded data.
      cb(res);
    },
    error: function (err) {
      // Some sort of feedback that this thing won't work, cause can't load data.
      // Mainly for illustrative purposes, not Prod.
      uiBox.addClass("red");
    },
  });
}

// Do this only when someone has even begun to use the search box.
// Lazy load as much as possible!
uiRoot.on("mouseenter", function (e) {
  // Call start up (i.e load resources via AJAX etc.)
  console.log("Autobots, rollout!!!");
  startErUp(autoBotsRollOut);
  // Remove this handler so it fires but once a page load.
  $(this).off("mouseenter");
});

// Another option:
// Could use click on the search bar.
// $(".ui.search").bind('click', function(e) {
//   // CAll start up (i.e load resources via AJAX etc.)
//   startErUp(autoBotsRollOut);
//   // Only ever do this once, so unbind this behaviour when we're done.
//   $(this).unbind('click');
// })

// Callback function to set up the auto-suggest search.
function autoBotsRollOut(data) {
  // Show a difference in 'active' vs 'inactive' search box. Illustrative mainly. Turn's blue when data is loaded.
  uiBox.addClass("blue");

  // The root of the data items.
  var data = data.data.recommendations.items;

  // Init a new array to hold the mapped data.
  var newData = [];

  // Map the data to the format required by Semantic UI search module w/ categories.
  $.each(data, function (i, d) {
    // Remap JSON values.
    var obj = {
      category: d.item.category.name.name,
      title: d.item.title,
      description: d.item.description.processed,
      url: d.item.url.uri,
    };
    newData.push(obj);
  });

  // If want most of default category type behaviour, need to directly override the category type template, since template is derived from type and some other behaviour is also tied to type. This is surely much easier in the React version!
  $.fn.search.settings.templates.category = function (response, fields) {
    // Template for added icons to search result categories based on type.
    // Supports places, programs, courses for now.
    var categoryIconMap = {
      Place: `<i class="icons grey">
            <i class="map marker icon blue"></i>
          </i>`,
      Program: `<i class="icons grey">
            <i class="graduation cap icon blue"></i>
          </i>`,
      Course: `<i class="icons">
            <i class="book icon blue"></i>
          </i>`,
      Person: `<i class="icons">
            <i class="user icon blue"></i>
          </i>`,
    };
    var html = "",
      escape = $.fn.search.settings.templates.escape;
    // Sadly, we cannot append non-categorized results below.
    // Opened issue on Semantic UI repo. https://github.com/Semantic-Org/Semantic-UI/issues/6732

    if (response[fields.categoryResults] !== undefined) {
      // each category
      $.each(response[fields.categoryResults], function (index, category) {
        if (
          category[fields.results] !== undefined &&
          category.results.length > 0
        ) {
          // Template for rendering the results w/ category, an icon etc.
          html += '<div class="category">';

          if (category[fields.categoryName] !== undefined) {
            html += '<div class="name">';
            if (categoryIconMap[category[fields.categoryName]] !== undefined) {
              html += categoryIconMap[category[fields.categoryName]];
            }
            html += category[fields.categoryName].toUpperCase();
            html += "</div>";
          }

          // each item inside category
          html += '<div class="results">';
          $.each(category.results, function (index, result) {
            if (result[fields.url]) {
              html += '<a class="result" href="' + result[fields.url] + '">';
            } else {
              html += '<a class="result">';
            }
            // Don't plan on supporting images in the drop-down.
            // if (result[fields.image] !== undefined) {
            //   html +=
            //     "" +
            //     '<div class="image">' +
            //     ' <img src="' +
            //     result[fields.image] +
            //     '">' +
            //     "</div>";
            // }
            html += '<div class="content">';
            if (result[fields.price] !== undefined) {
              html += '<div class="price">' + result[fields.price] + "</div>";
            }
            if (result[fields.title] !== undefined) {
              html += '<div class="title">' + result[fields.title];
              // Adds an icon to indicate a 'result' has an external, direct url to go to. (if no url is specified, fall back to default search actions.)
              if (result[fields.url] !== undefined) {
                html += '&nbsp; <i class="external small icon"></i>';
              }
              html += "</div>";
            }

            if (result[fields.description] !== undefined) {
              html +=
                '<div class="description">' +
                result[fields.description].slice(0, 66) +
                "...";
              html += "</div>";
            }
            html += "" + "</div>";
            html += "</a>";
          });
          html += "</div>";
          html += "" + "</div>";
        }
      });
      if (response[fields.action]) {
        html +=
          "" +
          '<a href="' +
          response[fields.action][fields.actionURL] +
          '" class="action">' +
          response[fields.action][fields.actionText] +
          "</a>";
      }
      return html;
    }
    return false;
  };

  // Creates a Semantic UI search w/ categories component.
  var search = uiSearch.search({
    // Set source property to get categories data.
    source: newData,
    type: "category",
    duration: 100,
    maxResults: 5,
    showNoResults: true,
    fullTextSearch: "exact",
    searchFields: ["title"], // Only searching title, not description.
  });
}
