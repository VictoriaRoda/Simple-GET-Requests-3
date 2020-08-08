'use strict';

function getDogImage(userInput) {
  const url = `https://dog.ceo/api/breed/${userInput}/images/random/1`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status === 'success') {
    $('.notfound').hide();
    $('.results').show();
    $('.results, .results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`)
  }
  else {
    handleNot(responseJson);
  }
}



function handleNot(responseJson) {
  $('.results').hide();
  $('.notfound').show();
  $('.notfound').html(
    `<h1> ${responseJson.message}</h1>`);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $('.breed').val();
    getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});