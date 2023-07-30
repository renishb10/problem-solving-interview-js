
const fileTree = document.querySelector('.file_tree');
const scriptContainer = document.querySelector('#script_container');

const editor = ace.edit("script_container");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// Load launch session
document.addEventListener('DOMContentLoaded', async (e) => {
  const code = await readFile(filePaths[0].path)
  const js = ace.createEditSession(code);
  // and then to load document into editor, just call
  editor.setSession(js);

  if (window.console) console = { 
    log: function(){
        let output='',
            console=document.getElementById('console_container');
        for (let i=0;i<arguments.length;i++) {
            output+=arguments[i]+' ';
        }
        console.innerText+=output+"\n";
    },
    error: function(){
      let output='',
          console=document.getElementById('console_container');
      for (let i=0;i<arguments.length;i++) {
          output+=arguments[i]+' ';
      }
      console.innerText+=output+"\n";
  }
  };

  eval(code)
})

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
    document.getElementById('console_container').innerHTML = '';
    // clean and run code

    eval(code)
  })
  fileTree.append(treeNode)
});

