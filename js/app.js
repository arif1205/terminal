let input = [...document.querySelectorAll('input#command')];

// autofocus on every time: 
window.onload = () => {
  autofocus(input);
};
window.onclick = () => {
  autofocus(input);
};

function autofocus(inputs) {
  inputs[inputs.length - 1].focus();
}

// terminal
const terminal = document.getElementById('terminal');
const help = document.getElementById('help');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const skill = document.getElementById('skill');
const mainContainer = document.querySelector('.main-container');
const wrong = document.getElementById('wrong');

function nodeClone(cloneItem) {
  return cloneItem.cloneNode(true);
}

function terminalCommand(item) {
  // cloning
  const clone = nodeClone(item);
  clone.style.display = 'block';
  const terminalClone = nodeClone(terminal);
  // appending 
  mainContainer.insertAdjacentElement('beforeend', clone);
  mainContainer.insertAdjacentElement('beforeend', terminalClone);
  // new input value change and make editable
  input = [...document.querySelectorAll('input#command')];
  input[input.length - 1].value = '';
  input[input.length - 1].readOnly = false;
  autofocus(input);
}

setInterval(() => {
  input[input.length - 1].onkeydown = terminalOpen;
}, 10);

function terminalOpen(e) {
  // while press enter 
  if(e.key == 'Enter') {
    // stop editable mode on current input
    e.target.setAttribute('readonly', '');
    const value = e.target.value.toLowerCase();
    // check about value 
    if(value == 'skills') {
      terminalCommand(skill);
    }  else if (value == 'contact') {
      terminalCommand(contact)
    } else if (value == 'about') {
      terminalCommand(about);
    } else if (value == 'help') {
      terminalCommand(help);
    } else if (value == 'home') {
      // all terminal remove expect last 
      let terminals = [...document.querySelectorAll('#terminal')];
      while(1) {
        if(terminals.length == 1) break;
        terminals[0].remove();
        terminals.shift();
      }
      input = [...document.querySelectorAll('input#command')];
      input[input.length - 1].value = '';
      input[input.length - 1].readOnly = false;

      // all contact remove
      let contacts = [...document.querySelectorAll('#contact')];
      while (1) {
        if (contacts.length == 1) break;
        contacts[0].remove();
        contacts.shift();
      }

      // all about remove
      let abouts = [...document.querySelectorAll('#about')];
      
      while (1) {
        if (abouts.length == 1) break;
        abouts[0].remove();
        abouts.shift();
      }

      // all contact remove
      let wrongs = [...document.querySelectorAll('#wrong')];
      while (1) {
        if (wrongs.length == 1) break;
        wrongs[0].remove();
        wrongs.shift();
      }

      // all skills remove
      let skills = [...document.querySelectorAll('#skill')];
      while (1) {
        if (skills.length == 1) break;
        skills[0].remove();
        skills.shift();
      }

      // all contact remove expect first
      let helps = [...document.querySelectorAll('#help')];
      while (1) {
        if (helps.length == 1) break;
        helps[helps.length - 1].remove();
        helps.pop();
      }
    } else {
      terminalCommand(wrong);
    }

    mainContainer.scrollTo(0, mainContainer.scrollHeight);
  }
}
