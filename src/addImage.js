import flexboxPoster from './css-flexbox-poster.png';
import "./addImage.css";

const addImage = () => {
  const img = document.createElement('img');
  img.alt = 'Flexbox-poster';
  img.src = flexboxPoster;
  img.width = 300;
  const body = document.querySelector('body');
  body.appendChild(img);

    let btn = document.createElement('button');
    btn.innerHTML = "Change bgcolor";
    btn.classList.add("btn");
    btn.onclick = () => {
        body.style.backgroundColor = "red";
}
body.appendChild(btn);
body.handleClick();
}

export default addImage;