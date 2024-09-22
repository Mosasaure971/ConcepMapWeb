const addButton = document.getElementById('add-button');
const addArrowButton = document.getElementById('add-arrow-button');

// Fonction pour ajouter une bulle
addButton.addEventListener('click', function() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.top = '100px';
    bubble.style.left = '100px';
    
    // Texte modifiable
    const input = document.createElement('input');
    input.type = 'text';
    input.value = 'Texte';
    bubble.appendChild(input);

    // Ajoute l'élément sur la page
    document.body.appendChild(bubble);

    // Drag and drop pour les bulles
    bubble.onmousedown = function(event) {
        let shiftX = event.clientX - bubble.getBoundingClientRect().left;
        let shiftY = event.clientY - bubble.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            bubble.style.left = pageX - shiftX + 'px';
            bubble.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        bubble.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            bubble.onmouseup = null;
        };
    };

    bubble.ondragstart = function() {
        return false;
    };
});

// Fonction pour ajouter une flèche
addArrowButton.addEventListener('click', function() {
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    arrow.style.top = '200px';
    arrow.style.left = '200px';
    
    // Ajoute l'élément sur la page
    document.body.appendChild(arrow);

    // Drag and drop pour la flèche
    arrow.onmousedown = function(event) {
        let shiftX = event.clientX - arrow.getBoundingClientRect().left;
        let shiftY = event.clientY - arrow.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            arrow.style.left = pageX - shiftX + 'px';
            arrow.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        arrow.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            arrow.onmouseup = null;
        };
    };

    arrow.ondragstart = function() {
        return false;
    };
});