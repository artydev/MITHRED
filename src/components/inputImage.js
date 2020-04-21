import m from "mithril";
import b from "bss";

const div = "div";
const eltById = (id) => document.getElementById(id);

function selectImage() {
    eltById("selectimage").click();
}

function insertImage(image) {
    var reader = new FileReader();
    reader.onload = function (e) {
        let target = eltById("insert");
        target.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(image);
}

const InputImage = function () {
    const view = () =>
        m(div, [
            m("input" + b `d none`, {
                type: "file",
                id: "selectimage",
                onchange: (e) => insertImage(e.target.files[0]),
            }),
            m("button", {
                onclick: selectImage
            }, "Image"),
        ]);
    return {
        view,
    };
};

export {
    InputImage
};
