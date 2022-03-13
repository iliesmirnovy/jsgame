"use strict"

// Нажатие на элемент .setup-open удаляет класс hidden у блока setup
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var openPopupEscPress = function() {
    document.addEventListener('keydown', function(evt) {
        if (evt.keyCode === ESC_KEYCODE) {
            closePopup();
        }
    });
}

var openPopup = function() {
    setup.classList.remove('hidden');
    openPopupEscPress();
}

var closePopup = function() {
    setup.classList.add('hidden');
}

setupOpen.addEventListener('click', function() {
    openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    } 
 });

setupClose.addEventListener('click', function() {
    closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        closePopup();
    } 
 });



var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117),', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsNumber = 4;

var generateWizards = function(quantity) {
    var wizardsArray = [];
    for (var i = 0; i < quantity; i++) {
        var wizardObject = {
            wizardName: wizardsNames[Math.floor(Math.random()*wizardsNames.length)],
            wizardSurname: wizardsSurnames[Math.floor(Math.random()*wizardsSurnames.length)],
            wizardCoatColor: wizardsCoatsColors[Math.floor(Math.random()*wizardsCoatsColors.length)],
            wizardsEyesColor: wizardsEyesColors[Math.floor(Math.random()*wizardsEyesColors.length)]
        }
        wizardsArray.push(wizardObject);
    }
    return wizardsArray;
};

var wizards = generateWizards(wizardsNumber);

var renderWizard = function() {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].wizardName + ' ' + wizards[i].wizardSurname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].wizardCoatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].wizardsEyesColor;
    
    return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
fragment.appendChild(renderWizard(wizards[i]));
};
similarListElement.appendChild(fragment);    

