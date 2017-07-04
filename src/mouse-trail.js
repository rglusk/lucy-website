import React, { Component } from 'react';

class MouseTrail extends Component {
    render() {
        return animate();
    }

    init() {
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        // Creates the Dot objects, populates the dots array
        for (var i = 0; i < 50; i++) {
            var d = new Dot();
            dots.push(d);
        }
    }

    // dots is an array of Dot objects,
    // mouse is an object used to track the X and Y position
    // of the mouse, set with a mousemove event listener below
    dots = [];
    mouse = {
        x: 0,
        y: 0
    };

    // The Dot object used to scaffold the dots
    Dot = function () {
        this.x = 0;
        this.y = 0;
        this.node = (function () {
            var n = document.createElement("div");
            n.className = "trail";
            document.body.appendChild(n);
            return n;
        }());
    };
    // The Dot.prototype.draw() method sets the position of 
    // the object's <div> node
    Dot.prototype.draw = function () {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    };



// This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = this.mouse.x,
        y = this.mouse.y;

    // This loop is where all the 90s magic happens
    this.dots.forEach(function (dot, index, dots) {
        var nextDot = this.dots[index + 1] || this.dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}

addEventListener("mousemove", function (event) {
    //event.preventDefault();
    this.mouse.x = event.pageX;
    this.mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
    draw();
    requestAnimationFrame(animate);
}

}

export default MouseTrail;


