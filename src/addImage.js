import flexboxPoster from './css-flexbox-poster.png';

const addImage = () => {
  const img = document.createElement('img');
  img.alt = 'Flexbox-poster';
  img.src = flexboxPoster;
  img.width = 300;
  const body = document.querySelector('body');
  body.appendChild(img);

}

export default addImage;