async function naFunction() {
  const username = document.getElementById("usernameGet").value;

  if (!username){
      alert("please enter a username.")
      return;
  }
  const endpoint = new URL(`https://api.nationalize.io/?name=${ username }`)
  //endpoint.searchParams.set("token","YOUR_TOKEN_HERE");
  try {
  const response = await fetch(endpoint);
   

  // if (response.status===404){
  //     alert("Username not found.");
  //     return;
  // }

  const data = await response.json();
  alert(`Name: ${data.name}`)
 // console.log(data);
  }catch(err){
      console.error(err);
  }
}


async function coFunction() {
  const username = document.getElementById("usernameGet").value;

  if (!username){
      alert("please enter a username.")
      return;
  }
  const endpoint = new URL(`https://api.nationalize.io/?name=${ username }`)
  //endpoint.searchParams.set("token","YOUR_TOKEN_HERE");
  try {
  const response = await fetch(endpoint);
   

  // if (response.status===404){
  //     alert("Username not found.");
  //     return;
  // }

  const data = await response.json();
  alert(`Country: ${data.country[0].country_id}\nCountry:${data.country[1].country_id}`)
 // console.log(data);
  }catch(err){
      console.error(err);
  }
}



async function prFunction() {
  const username = document.getElementById("usernameGet").value;

  if (!username){
      alert("please enter a username.")
      return;
  }
  const endpoint = new URL(`https://api.nationalize.io/?name=${ username }`)
  //endpoint.searchParams.set("token","YOUR_TOKEN_HERE");
  try {
  const response = await fetch(endpoint);
   

  // if (response.status===404){
  //     alert("Username not found.");
  //     return;
  // }

  const data = await response.json();
  alert(`Probability: ${data.country[0].probability}\nProbability:${data.country[1].probability}`)
 // console.log(data);
  }catch(err){
      console.error(err);
  }
}



async function allFunction() {
  const username = document.getElementById("usernameGet").value;

  if (!username){
      alert("please enter a username.")
      return;
  }
  const endpoint = new URL(`https://api.nationalize.io/?name=${ username }`)
  //endpoint.searchParams.set("token","YOUR_TOKEN_HERE");
  try {
  const response = await fetch(endpoint);
   

  // if (response.status===404){
  //     alert("Username not found.");
  //     return;
  // }

  const data = await response.json();
  alert(`Probability: ${data.country[0].probability}\nProbability:${data.country[1].probability}\nCountry:${data.country[0].country_id}\nCountry:${data.country[1].country_id}`)
 // console.log(data);
  }catch(err){
      console.error(err);
  }
}
