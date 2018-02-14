# Materialize Notes

## 1.1 CSS

### Color
* can set background color of divs in class
* <div class="card-panel teal lighten-2">
* same thing for text color

### Grid Layout
* similar to usage in bootstrap
*  one large container to wrap all content
#### Columns
* uses <div class="col s1"> rather than <div class="col-md-1">
* can also offset columns easily
* use <div class="col s6 offset-s6">
* columns can be pushed (column > push) or pulled (column < pull)
* <div class="col s7 push-s5">
#### Layouts
* section class has top and bottom padding
* dividers are 1 pixel line breaks
#### Responsive Layouts
* inside of a column class can add responsive elements
* e.g. <div class="col s12 m4 l3"> 
* this div is 12 columns in mobile, 4 in medium, and 3 in large
* another <div class="col s12 m6">
* VERY USEFUL s12 is commonly used to cause a cascading effect of panels in mobile
### Helpers
* can vertically align things in a class
* <div class="valign-wrapper">
* can align text in a div 
* <h5 class="left-align">
* .left-align, .right-align, .center-align
* can also float things left and right 
* - !important can avoid specificity issues (?)
* .hide and .show, can be modulated for screens like .show-on-medium-and-up 
* .truncate hides long lines of text in an ellipsis
* .hoverable adds an undershadow to a div when hovered on
### Media
* .responsive-img class to an image gives mad-width 100% and height auto
* .circle class attached to images rounds the edges
* .video-container makes video embeds responsive
* - .responsive-video does the same thing with html5 videos
### Pulse effect
* <a class="btn btn-floating pulse btn-large">
* demonstration of the pulse effect on a button
### Shadow
* <p class="z-depth-1"></p>
* example of giving an item z depth to give it a shadowed effect on the page
### Scale
* <a class = "scale-transition">