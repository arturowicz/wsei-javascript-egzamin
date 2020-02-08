// Zadanie 1
var classElements = document.querySelector('.sample_class');;

console.log(getTagsOfElements(classElements));

function getTagsOfElements(elements) {
    var tagNames = [];
    for(var i = 0; i < elements.length; i++) {
        tagNames.push(elements[i].tagName);
    }

    return tagNames;
}

// Zadanie 2

var element = document.getElementById('sample_id');

console.log(getClassesOfElement(element));

function getClassesOfElement(element) {
    var classNames = [];
    for(var i = 0; i < element.classList.length; i++) {
        classNames.push(element.classList[i]);
    }

    return classNames;
}

// Zadanie 3

var classElements2 = document.querySelector('.sample_class_2');

console.log(getInnerTextsOfElements(classElements2));

function getInnerTextsOfElements(elements) {
    var texts = [];
    for(var i = 0; i < elements.length; i++) {
        texts.push(elements[i].textContent);
    }

    return texts;
}

// Zadanie 4
var urls = document.querySelectorAll('a');

console.log(getAddressesOfElements(urls));

function getAddressesOfElements(elements) {
    var adresses = [];
    for(var i = 0; i < elements.length; i++) {
        adresses.push(elements[i].href);
    }
    return adresses;
}

// zadanie 5
var sample_class = document.querySelector('.sample_class_3');
var children = sampleParent.children;

console.log(getTagsOfElements(children)); 