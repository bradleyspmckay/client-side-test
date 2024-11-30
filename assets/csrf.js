function update_action_and_method(event) {
                
    event.preventDefault();

    const form = event.target;
    const csrf_form = $("#csrf_form");

    const items = ["method", "action"];
    for (const item of items) {
        csrf_form.attr(item, form.elements[item].value);
    }

    $("#chosen_csrf_url").text(form.elements["action"].value);
    $("#chosen_csrf_method").text(form.elements["method"].value);

    form.reset();

}

function add_input(event) {

    event.preventDefault();

    const form = event.target;
    const parameter_name = form.elements["parameter_to_add"].value;
    const form_to_change = $("#csrf_form");
    const csrf_submit_button = $("#csrf_submit_button");
    
    const new_label = document.createElement("label");
    new_label.setAttribute("for", parameter_name);
    new_label.innerText = parameter_name + ": ";
    form_to_change.append(new_label);

    type = check_radio_input(form);

    const new_input = document.createElement("input");
    new_input.setAttribute("type", type);
    new_input.setAttribute("name", parameter_name);
    new_input.setAttribute("id", parameter_name);
    new_input.setAttribute("class", "csrf_submission_value");
    form_to_change.append(new_input);
    
    form_to_change.append(document.createElement("br"));
    form_to_change.append(document.createElement("br"));

    form_to_change.remove(csrf_submit_button);
    form_to_change.append(csrf_submit_button);

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