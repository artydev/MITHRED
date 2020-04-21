import m from "mithril";
import {
  InputImage
} from "./components/inputImage"

const css = (args) => args;

const GlobStyle = css `
  body {
    background: darkkhaki;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const EditorStyle = css `
  .editor {
    width: 80%;
    min-width: 160px;
    margin: 0 auto;
    background: white;
    position: relative;
    height: 80vh;
    margin-top: 5vh;
  }
`;

const ToolbarStyle = css `
  .toolbar {
    background: red;
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
  }
`;

const EditPaneStyle = css `
  .editPane {
    background: yellow;
    height: 100%;
    outline: none;
    padding: 10px;
    overflow: auto;
  }
`;

const AllStyles = [
  m("style", GlobStyle),
  m("style", EditorStyle),
  m("style", ToolbarStyle),
  m("style", EditPaneStyle),
];

const Toolbar = function () {
  const view = () => m(".toolbar",
    m(InputImage))
  return {
    view,
  };
};

const EditPane = function () {
  const view = () =>
    m(".editPane", {
      contenteditable: true
    }, [
      m.trust("<img id='insert' />")
    ]);
  return {
    view,
  };
};

const Editor = function () {
  const view = () => m(".editor", [m(Toolbar), m(EditPane)]);
  return {
    view,
  };
};

const App = function () {
  const view = () => [AllStyles, m(Editor)];
  return {
    view,
  };
};

m.mount(editor, App);

/*
// Notes
http://jsfiddle.net/hEpEL/
https://stackoverflow.com/questions/1084925/input-type-file-show-only-button
https://www.quora.com/How-do-I-add-an-image-in-a-div-with-contenteditable-true-as-done-in-Quora-Rich-Text-Editor
https://stackoverflow.com/questions/55137151/insert-image-inside-a-contenteditable-div

*/
