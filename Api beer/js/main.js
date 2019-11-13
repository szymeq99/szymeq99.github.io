document.getElementById('get-data').addEventListener('click', function () {
  fetch('https://api.punkapi.com/v2/beers/')
    .then(Response => Response.json())
    .then(json => {
      console.log(json);

      json.forEach(elem => {
        let container = document.createElement('div');
        let name = document.createElement('h3');
        let abv = document.createElement('h3');
        let firstBrewed = document.createElement('h3');
        let desc = document.createElement('p');
        let photo = document.createElement('img');
        let hr = document.createElement('hr');

        name.innerText = '';
        abv.innerText = '';
        firstBrewed.innerText = '';
        desc.innerText = '';
        photo.innerHTML = '';



        container.classList.add('description');
        photo.setAttribute('src', elem.image_url);
        photo.setAttribute('alt', elem.tagline);

        name.innerText = `Nazwa:  ${elem.name}`;
        abv.innerText = `Alkohol(%): ${elem.abv}`;
        firstBrewed.innerText = `Pierwsze warzenie: ${elem.first_brewed}`;
        desc.innerText = `${elem.description}`;
        photo.innerHTML = elem.image_url;

        container.appendChild(name);
        container.appendChild(abv);
        container.appendChild(firstBrewed);
        container.appendChild(desc);
        container.appendChild(photo);
        container.appendChild(hr);
        document.getElementById('description').appendChild(container);



      })
    })
})