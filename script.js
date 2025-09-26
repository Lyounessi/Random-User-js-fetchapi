const endpoint = 'https://randomuser.me/api/';
const generateBtn = document.getElementById('generate');
const container = document.getElementById("user");
const spinner = generateBtn.children[0];



function updateProfile(dataUser) {
    
    container.innerHTML = `
    <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${dataUser.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${dataUser.name.first} ${dataUser.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span>${dataUser.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span>${dataUser.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span>${dataUser.location.city}, ${dataUser.location.state}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span>${dataUser.dob.age}</p>
            </div>
          </div>
    `;
}




generateBtn.addEventListener('click', () => {
    spinner.classList.remove('hidden');

    const fetchUser = fetch(endpoint);

    setTimeout(() => {
    container.innerHTML = "";
    fetchUser .then((response) => response.json())
    .then((dataUser) => updateProfile(dataUser.results[0]));
    spinner.classList.add('hidden');

    }, 2000);
   

});