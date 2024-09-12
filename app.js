let pass_1 = document.querySelector(".pass-1");
let pass_2 = document.querySelector(".pass-2");
let cnfm_msg = document.querySelector(".confirm-msg");
let cnfm_msg_p = document.querySelector(".confirm-msg p");
let btn = document.querySelector(".check");
let button = document.querySelector("button");
let show = document.querySelector(".show");

const active_btn = () => {
  if (pass_1.value && pass_2.value) {
    button.removeAttribute("disabled");
    show.style.display = "block";
  }
  btn.style.cursor = "pointer";
  btn.style.opacity = "1";
};

pass_1.addEventListener("input", active_btn);
pass_2.addEventListener("input", active_btn);

const set_att = () => {
  pass_1.setAttribute("type", "password");
  pass_2.setAttribute("type", "password");
};
set_att();

const check_pass = (evt) => {
  evt.preventDefault();
  if (pass_1.value == pass_2.value) {
    cnfm_msg_p.innerText = "Password Matched!";
    cnfm_msg.style.color = "Green";
    cnfm_msg.style.backgroundColor = "#a3f7b9";
    cnfm_msg.style.display = "block";
  } else {
    cnfm_msg_p.innerText = "Incorrect Password!";
    cnfm_msg.style.color = "#cb0606";
    cnfm_msg.style.backgroundColor = "#fecbcb";
    cnfm_msg.style.display = "block";
  }
  show.style.top = "58%";
};

button.addEventListener("click", check_pass);

const show_pass = () => {
  let type = pass_1.getAttribute("type");
  let type2 = pass_2.getAttribute("type");

  if (type == "password" && type2 == "password") {
    pass_1.setAttribute("type", "text");
    pass_2.setAttribute("type", "text");
  } else {
    pass_1.setAttribute("type", "password");
    pass_2.setAttribute("type", "password");
  }
};

show.addEventListener("click", show_pass);
