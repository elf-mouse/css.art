var width;

// Selectors
var Pupille_g_d = document.getElementById("Pupille_gauche_droite");
var Pupille_g_g = document.getElementById("Pupille_gauche_gauche");
var Pupille_d_d = document.getElementById("Pupille_droite_droite");
var Pupille_d_g = document.getElementById("Pupille_droite_gauche");
var Cheveux = document.getElementById("Ombre_cheveux");
var Sourcil_g = document.getElementById("Sourcil_gauche");
var Sourcil_d = document.getElementById("Sourcil_droit");
var Nez = document.getElementById("Nez");
var Bouche = document.getElementById("Bouche");
var Peau = document.getElementById("Peau");
var Alo = document.getElementById("Alo");

var count = 0;

document.addEventListener("mousemove", function(event) {
  mouse_position(event);
});

function mouse_position(e) {
  var x = e.clientX; //Mouse position detection

  width = document.body.clientWidth;

  //If the mouse cursor is at the left side of the window
  if (x <= width / 2)
  //Display left look
  {
    Pupille_g_d.style.display = "none";
    Pupille_g_g.style.display = "block";
    Pupille_d_d.style.display = "none";
    Pupille_d_g.style.display = "block";
  } else
  //Display right look
  {
    Pupille_g_d.style.display = "block";
    Pupille_g_g.style.display = "none";
    Pupille_d_d.style.display = "block";
    Pupille_d_g.style.display = "none";
  }
}


//On click on the SVG
document.getElementById("Alo").addEventListener("click", Rage);

function Rage() {


  //Second state
  if (count == 0) {
    Peau.classList.remove("st11");
    Peau.classList.add("Rougit");
  }
  //Third state
  if (count == 1) {
    Peau.classList.add("Rougit_2");
  }

  //Fourth state
  if (count == 2) {
    Peau.classList.add("Rougit_3");
    Nez.classList.remove("st3");
    Nez.classList.add("Rougit_3_nez");
    Bouche.classList.remove("st3");
    Bouche.classList.add("Rougit_3_nez");
    Alo.classList.add("Shake");
    Cheveux.classList.remove("st10");
    Cheveux.classList.add("Rougit_3_cheveux");
    Sourcil_d.classList.remove("st8");
    Sourcil_d.classList.add("Rougit_3_nez");
    Sourcil_g.classList.remove("st8");
    Sourcil_g.classList.add("Rougit_3_nez");
  }

  //Reset the SVG to his first state
  if (count == 3) {
    count = -1;
    Peau.classList.add("st11");
    Peau.classList.remove("Rougit_3");
    Peau.classList.remove("Rougit_2");
    Nez.classList.add("st3");
    Nez.classList.remove("Rougit_3_nez");
    Bouche.classList.add("st3");
    Bouche.classList.remove("Rougit_3_nez");
    Alo.classList.remove("Shake");
    Cheveux.classList.add("st10");
    Cheveux.classList.remove("Rougit_3_cheveux");
    Sourcil_d.classList.add("st8");
    Sourcil_d.classList.remove("Rougit_3_nez");
    Sourcil_g.classList.add("st8");
    Sourcil_g.classList.remove("Rougit_3_nez");

  }

  count++;
}
