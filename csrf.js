function update_action_and_method(event) {
                
    event.preventDefault();

    const form = event.target;
    const form_to_update = $("#csrf_form");

    form_to_update.attr("action", form.elements["action"].value);
    form_to_update.attr("method", form.elements["method"].value);

    document.getElementById("chosen_csrf_url").innerText = form.elements["action"].value;
    document.getElementById("chosen_csrf_method").innerText = form.elements["method"].value;

    form.reset();

}

function add_input(event) {

    event.preventDefault();

    const form = event.target;
    const parameter_name = form.elements["parameter_to_add"].value;
    const form_to_change = document.getElementById("csrf_form");
    const csrf_submit_button = document.getElementById("csrf_submit_button");
    
    const new_label = document.createElement("label");
    new_label.setAttribute("for", parameter_name);
    new_label.innerText = parameter_name + ": ";
    form_to_change.appendChild(new_label);

    type = check_radio_input(form);

    const new_input = document.createElement("input");
    new_input.setAttribute("type", type);
    new_input.setAttribute("name", parameter_name);
    new_input.setAttribute("id", parameter_name);
    new_input.setAttribute("class", "csrf_submission_value");
    form_to_change.appendChild(new_input);
    
    form_to_change.appendChild(document.createElement("br"));
    form_to_change.appendChild(document.createElement("br"));

    form_to_change.removeAttribute(csrf_submit_button);
    form_to_change.appendChild(csrf_submit_button);

    form.reset();
}

function check_radio_input(form) {

    if (form["file"].checked == true) {
        return "file";
    }

    else {
        return "text";
    }

}