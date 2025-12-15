
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    tabs.forEach(t => t.setAttribute('aria-selected' , 'false'));
    panels.forEach(p => p.classList.remove('active'));

    //Activar tab menu
    tab.setAttribute('aria-selected', 'true');
  
    const id = tab.getAttribute('aria-controls');  //nombre de aria control del menu
    document.getElementById(id).classList.add('active');  

  });
  
});