var target = document.getElementById("target");

function newSquare() {

    // New square.
    square = document.createElement('div');
    square.id = "square";
    square.className = 'square blue';

    // Remove square.
    square.onclick = function() {

        this.remove();

        newButton();

    }

    // Add square to target.
    target.appendChild(square);

    // Change square color (class).
    window.setInterval(function() {

        if (square.className == "square blue") {

          square.className = "square black";

        } else {

          square.className = "square blue";
        }

    }, 3000);
}

function newButton() {

    // New button.
    button = document.createElement('button');
    button.className = "btn btn-primary";
    button.innerHTML = "restore the square";

    // Remove square.
    button.onclick = function() {

        this.remove();

        newSquare();
    }

    // Add square to target.
    target.appendChild(button);
}

var square = document.getElementById("square");

if (!square) {

    newSquare();

} else {

    newButton();

}