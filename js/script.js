
const fileTree = document.querySelector('.file_tree');
const scriptContainer = document.querySelector('#script_container');

var editor = ace.edit("script_container");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

async function readFile(filePath) {
  return await fetch(filePath).then(res => res.text())
}

filePaths.map(p => {
  const treeNode = document.createElement('li')
  treeNode.innerText = `${p.name}`
  treeNode.addEventListener('click', async (e) => {
    const code = await readFile(p.path)
    const js = ace.createEditSession(code);
    // and then to load document into editor, just call
    editor.setSession(js);
  })
  fileTree.append(treeNode)
});

