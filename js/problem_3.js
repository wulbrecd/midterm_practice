// The following function accepts one argument (a callback function)
// and calls it back with two arguments:
function getDayEvents(callback) {
    fetch('https://events.umich.edu/day/json')
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

const showEventsButton = document.querySelector('#problem-3 #show-events');
const problemOutputEl = document.querySelector('#p3-events-output');


showEventsButton.addEventListener('click', () => {
    getDayEvents((data) => {
        for (let item in data) {
            const { event_title, description, image_url } = data[item];
            console.log(data[item]);

            const h3 = document.createElement('h3');
            h3.textContent = event_title;
            console.log('h3', h3);
            problemOutputEl.append(h3);

            if (image_url) {
                const image = document.createElement('img');
                image.src = image_url;
                problemOutputEl.append(image);
            }

            const p = document.createElement('p');
            p.textContent = description;
            problemOutputEl.append(p);
        }
    });
});
// problemOutputEl.append('(TODO)');

// An example call to getDayEvents:
// getDayEvents((data) => {
//     console.log(data);
// });

// showEventsButton.addEventListener('click', () => {
//     getDayEvents((data) => {
//         for (let item in data) {
//             const { event_title, description, image_url } = data[item];

//             const image_tag = image_url ? `<img src="${image_url}"/>` : '';

//             problemOutputEl.innerHTML += `
//                 <h3>${event_title}</h3>
//                 ${image_tag}
//                 <p>${description}</p>`;
           
//             // const h3 = document.createElement('h3');
//             // h3.textContent = event_title;
//             // problemOutputEl.append(h3);
            
//             // if (image_url) {
//             //     const image = document.createElement('img');
//             //     image.src = image_url;
//             //     problemOutputEl.append(image);
//             // }
//             // const p = document.createElement('p');
//             // p.textContent = description;
//             // problemOutputEl.append(p);
//         }       
//     });
// });
