function color(x) {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  x.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

let btns = document.querySelectorAll('button');

for (i of btns) {
  i.addEventListener('click', function() {
    if(this.innerHTML=="Resize")
    {
      let sizeprompt= prompt("Enter size between 1 and 64");
      let size = parseInt(sizeprompt);
      while(isNaN(size) || size>64 || size<1)
      {
        alert("Please enter a size between 1 to 64!");
        size= prompt("Enter size between 1 and 64");
      }
      const list = document.getElementById("grid");
      while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
      let cell=(500/(size));
      for (let i = 0;i<size;++i)
      {
        let row = document.createElement("div");
        row.setAttribute("id", `row${i+1}`);
        document.getElementById("grid").appendChild(row);
        for(let j = 0;j<size;++j)
        {
          let column = document.createElement("div");
          column.setAttribute("class", "column");
          column.style.display="flex";
          column.style.width = `${cell}px`;
          column.style.height = `${cell}px`;
          column.style.border = "1px solid";
          column.style.borderColor="black";
          document.getElementById(`row${i+1}`).appendChild(column);
        }
      }
      elements = document.getElementsByClassName("column");
      for (var i = 0; i < elements.length; i++)
        elements[i].setAttribute('onmouseover','color(this)');
    }   
    else
    {  
      elements = document.getElementsByClassName("column");
      for (var i = 0; i < elements.length; i++)
        elements[i].style.backgroundColor="white";
    }
  })
}