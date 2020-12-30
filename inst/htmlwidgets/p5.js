HTMLWidgets.widget({

  name: "p5",

  type: "output",

  factory: function(el, width, height) {

    var initialized_canvas = false;
    var code;
        console.log("hallo world");

    return {
      renderValue: function(x) {

        var sketch = document.createElement('script');
        sketch.appendChild(document.createTextNode('var knitr_width = ' + width + ';'));
        sketch.appendChild(document.createTextNode('var knitr_height = ' + height + ';'));
        sketch.appendChild(document.createTextNode(x.code));
        document.head.appendChild(sketch);

      },

      resize: function(width, height) {
        // tbd
      }

    };
  }
});