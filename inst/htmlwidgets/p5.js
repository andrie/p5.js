HTMLWidgets.widget({

  name: "p5",

  type: "output",

  factory: function(el, width, height) {

    return {
      renderValue: function(x) {

        var sketch = document.createElement('script');

        sketch.appendChild(document.createTextNode("new p5(function(p) {"));
        sketch.appendChild(document.createTextNode('var knitr_width = '  + width  + ';'));
        sketch.appendChild(document.createTextNode('var knitr_height = ' + height + ';'));
        sketch.appendChild(document.createTextNode('var createCanvas = p.createCanvas' + height + ';'));
        sketch.appendChild(document.createTextNode(x.code));
        sketch.appendChild(document.createTextNode('p.setup = setup;'));
        sketch.appendChild(document.createTextNode('p.draw = draw;'));
        sketch.appendChild(document.createTextNode("}, '" + el.id + "');"));


        // sketch.appendChild(document.createTextNode('var knitr_width = ' + width + ';'));
        // sketch.appendChild(document.createTextNode('var knitr_height = ' + height + ';'));
        // sketch.appendChild(document.createTextNode(x.code));

        document.head.appendChild(sketch);

      },

      resize: function(width, height) {
        // tbd
      }

    };
  }
});