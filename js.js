//Songs Images
let imagineSong = "imagine john lennon.jpg"
let theAdventuresSong = "the adventures.jpg";
let sundayBestSong = "sunday best.jpg";
let dontLookBackSong = "dont look back in anger.jpg";
let snowHeyOhSong = "snow hey oh.jpg";
let ellieSong = "ellie.jpg";
let skyneighborhoodSong = "the sky is neighbourhood.jpg";
let scarTissueSong = "scar tissue.jpg";
let underTheBridgeSong = "under the bridge.jpg";
let gunsGreenDaySong = "21guns green day.jpg";
let flyMeToTheMoonSong = "fly me to the moon.jpg";
let dontStopMeNowSong = "dont stop me now.jpg";
let othersideSong = "otherside.jpg";
let wildWorldSong = "wild world.jpg";
let helpSong = "help.jpg";
let darkNecessitiesSong = "dark necessities.jpg";
let wonderwallSong = "wonderwall.jpg";
let doIwannaKnowSong = "do i wanna know.jpg";
let thatslifeSong = "fly me to the moon.jpg";
//
let songsName = document.getElementById("songs-name");
let filter = document.getElementById("filter");
let image = document.getElementById('songs-image');

let whateverSongs = ["Sunday Best by Surfaces", "The Adventures Of Rain Dance Maggie by Red Hot Chilli Peppers", "Imagine by John Lennon", "Don't Look Back In Anger by Oasis", 
"Take on Me Ellie's version", "Snow (Hey Oh) by Red Hot Chilli Peppers", "The Sky Is A Neighborhood by Foo Fighters", "Scar Tissue by Red Hot Chilli Pepper",
"Under The Bridge by Red Hot Chilli Peppers", "21 Guns by Green Day", "Fly Me To The Moon by Frank Sinatra",
"Don't Stop Me Now by Queen", "Otherside by Red Hot Chilli Peppers", "Wild World by Yusuf / Cat Stevens",
"Help! by The Beatles", "Dark Necessities by Red Hot Chilli Peppers", "Wonderwall by Oasis",
"Do I Wanna Know by Arctic Monkeys"] 
let positiveSongs = ["Sunday Best by Surfaces", "Fly Me To The Moon by Frank Sinatra", "That's Life by Frank Sinatra"]
let whateverSongsLength = whateverSongs.length;


function chooseWhateverSong() {
  let whateverNumber = Math.floor(Math.random() * whateverSongsLength);
  let currentSong = songsName.innerHTML;
  let selectedSong = whateverSongs[whateverNumber];
  songsName.innerHTML = whateverSongs[whateverNumber];
  if (selectedSong === "Sunday Best by Surfaces") {
    songsName.innerHTML = "Sunday Best by Surfaces"
    image.src = sundayBestSong;
  } else if (selectedSong === "The Adventures Of Rain Dance Maggie by Red Hot Chilli Peppers") {
    songsName.innerHTML = "The Adventures Of Rain Dance Maggie by Red Hot Chilli Peppers"
    image.src = theAdventuresSong
  } else if (selectedSong === "Imagine by John Lennon") {
    songsName.innerHTML = "Imagine by John Lennon"
    image.src = imagineSong;
  } else if (selectedSong === "Don't Look Back In Anger by Oasis") {
    songsName.innerHTML = "Don't Look Back In Anger by Oasis"
    image.src = dontLookBackSong;
  } else if (selectedSong === "Take on Me Ellie's version") {
    songsName.innerHTML = "Take on Me Ellie's version"
    image.src = ellieSong;
  } else if (selectedSong === "Snow (Hey Oh) by Red Hot Chilli Peppers") {
    songsName.innerHTML = "Snow (Hey Oh) by Red Hot Chilli Peppers"
    image.src = snowHeyOhSong;
  } else if (selectedSong === "The Sky Is A Neighborhood by Foo Fighters") {
    songsName.innerHTML = "The Sky Is A Neighborhood by Foo Fighters"
    image.src = skyneighborhoodSong;
  } else if (selectedSong === "Scar Tissue by Red Hot Chilli Pepper") {
    songsName.innerHTML = "Scar Tissue by Red Hot Chilli Pepper"
    image.src = scarTissueSong;
  } else if (selectedSong === "Under The Bridge by Red Hot Chilli Peppers") {
    songsName.innerHTML = "Under The Bridge by Red Hot Chilli Peppers"
    image.src = underTheBridgeSong;
  } else if (selectedSong === "21 Guns by Green Day") {
    songsName.innerHTML = "21 Guns by Green Day"
    image.src = gunsGreenDaySong;
  } else if (selectedSong === "Fly Me To The Moon by Frank Sinatra") {
    songsName.innerHTML = "Fly Me To The Moon by Frank Sinatra"
    image.src = flyMeToTheMoonSong;
  } else if (selectedSong === "Don't Stop Me Now by Queen") {
    songsName.innerHTML = "Don't Stop Me Now by Queen"
    image.src = dontStopMeNowSong;
  } else if (selectedSong === "Otherside by Red Hot Chilli Peppers") {
    songsName.innerHTML = "Otherside by Red Hot Chilli Peppers"
    image.src = othersideSong;
  } else if (selectedSong === "Wild World by Yusuf / Cat Stevens") {
    songsName.innerHTML = "Wild World by Yusuf / Cat Stevens"
    image.src = wildWorldSong;
  } else if (selectedSong === "Help! by The Beatles") {
    songsName.innerHTML = "Help! by The Beatles"
    image.src = helpSong;
  } else if (selectedSong === "Dark Necessities by Red Hot Chilli Peppers") {
    songsName.innerHTML = "Dark Necessities by Red Hot Chilli Peppers"
    image.src = darkNecessitiesSong;
  } else if (selectedSong === "Wonderwall by Oasis") {
    songsName.innerHTML = "Wonderwall by Oasis"
    image.src = wonderwallSong;
  } else if (selectedSong === "Do I Wanna Know by Arctic Monkeys") {
    songsName.innerHTML = "Do I Wanna Know by Arctic Monkeys"
    image.src = doIwannaKnowSong;
  }
}

function choosePositiveSong(){
  let positiveNumber = Math.floor(Math.random()*positiveSongs.length);
  let selectedPositiveSong = positiveSongs[positiveNumber];
  if (selectedPositiveSong === "Sunday Best by Surfaces") {
    songsName.innerHTML = "Sunday Best by Surfaces"
    image.src = sundayBestSong;
  } else if (selectedPositiveSong === "Fly Me To The Moon by Frank Sinatra") {
    songsName.innerHTML = "Fly Me To The Moon by Frank Sinatra"
    image.src = flyMeToTheMoonSong;
  } else if (selectedPositiveSong === "That's Life by Frank Sinatra") {
    songsName.innerHTML = "That's Life by Frank Sinatra"
    image.src = thatslifeSong;
  }
}

function chooseChillSong() {
  let chillNumber = Math.floor(Math.random()*3);
  if (chillNumber === 0) {
    songsName.innerHTML = ""
    image.src = "";
  } else if (chillNumber === 1) {
    songsName.innerHTML = ""
    image.src = "";
  } else if (chillNumber === 2) {
    songsName.innerHTML = ""
    image.src = "";
  }
}

function chooseAlarmSong() {
  let instrumentalNumber = Math.floor(Math.random()*3);
  if (instrumentalNumber === 0) {
    songsName.innerHTML = ""
    image.src = "";
  } else if (instrumentalNumber === 1) {
    songsName.innerHTML = ""
    image.src = "";
  } else if (instrumentalNumber === 2) {
    songsName.innerHTML = ""
    image.src = "";
  }
}

//list of songs
let adventures = document.getElementById('song1Adventures');
let sunday = document.getElementById('song2Sunday');
let imagine = document.getElementById('song3Imagine');
let dontLookBack = document.getElementById('song4DontLookBack');
let takeOnMe = document.getElementById('song5Ellie');
let snowHeyOh = document.getElementById('song6Snow');
let sky = document.getElementById('song7Sky');
let scarTissue = document.getElementById('song8ScarTissue');
let underBridge = document.getElementById('song9Under');
let guns = document.getElementById('song10Guns');
let flyMe = document.getElementById('song11FlyMe');
let dontStop = document.getElementById('song12DontStop');
let wild = document.getElementById('song13Wild');
let help = document.getElementById('song14Help');
let darkNecessities = document.getElementById('song15DarkNecessities');
let wonderwall = document.getElementById('song16Wonderwall');
let wannaKnow = document.getElementById('song17WannaKnow');
let thatsLife = document.getElementById('song18ThatsLife');
let otherside = document.getElementById('song19Otherside');


function randomSong() {
  if (filter.value === "whatever") {
    chooseWhateverSong();
  } else if (filter.value === "positive") {
    choosePositiveSong();
  } else if (filter.value === "chill") {
    chooseChillSong();
  } else if (filter.value === "alarm") {
    chooseAlarmSong()
  }
  if (songsName.innerHTML === "The Adventures Of Rain Dance Maggie by Red Hot Chilli Peppers") {
    adventures.style.fontWeight = '900';
  } else {
    adventures.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === sunday.innerHTML) {
    sunday.style.fontWeight = '900'
  } else {
    sunday.style.fontWeight = 'normal'
  }
  if (songsName.innerHTML === "Imagine by John Lennon") {
    imagine.style.fontWeight = '900';
  } else {
    imagine.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === dontLookBack.innerHTML) {
    dontLookBack.style.fontWeight = '900';
  } else {
    dontLookBack.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === "Take on Me Ellie's version") {
    takeOnMe.style.fontWeight = '900';
  } else {
    takeOnMe.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === song6Snow.innerHTML) {
    snowHeyOh.style.fontWeight = '900';
  } else {
    snowHeyOh.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === sky.innerHTML) {
    sky.style.fontWeight = '900';
  } else {
    sky.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === scarTissue.innerHTML) {
    scarTissue.style.fontWeight = '900';
  } else {
    scarTissue.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === underBridge.innerHTML) {
    underBridge.style.fontWeight = '900';
  } else {
    underBridge.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === guns.innerHTML) {
    guns.style.fontWeight = '900';
  } else {
    guns.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === flyMe.innerHTML) {
    flyMe.style.fontWeight = '900';
  } else {
    flyMe.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === dontStop.innerHTML) {
    dontStop.style.fontWeight = '900';
  } else {
    dontStop.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === wild.innerHTML) {
    wild.style.fontWeight = '900';
  } else {
    wild.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === help.innerHTML) {
    help.style.fontWeight = '900';
  } else {
    help.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === darkNecessities.innerHTML) {
    darkNecessities.style.fontWeight = '900';
  } else {
    darkNecessities.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === wonderwall.innerHTML) {
    wonderwall.style.fontWeight = '900';
  } else {
    wonderwall.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === wannaKnow.innerHTML) {
    wannaKnow.style.fontWeight = '900';
  } else {
    wannaKnow.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === thatsLife.innerHTML) {
    thatsLife.style.fontWeight = '900';
  } else {
    thatsLife.style.fontWeight = 'normal';
  }
  if (songsName.innerHTML === otherside.innerHTML) {
    otherside.style.fontWeight = '900';
  } else {
    otherside.style.fontWeight = 'normal';
  }
}

let instagram = document.getElementById('instagram');
let facebook = document.getElementById('facebook');
let gmail = document.getElementById('gmail');

function changeInstagramLogo() {
  instagram.src = "instagram logo 2.png";
}

function changeInstagramLogoBack() {
  instagram.src = "instagram logo 1.png";
}

function changeFacebookLogo() {
  facebook.src = "facebook logo 2.png";
}

function changeFacebookLogoBack() {
  facebook.src = "facebook logo 1.png";
}

function changeMailLogo() {
  gmail.src = "gmail logo 2.png";
}

function changeMailLogoBack() {
  gmail.src = "gmail logo 1.png";
}

instagram.addEventListener("mouseover", changeInstagramLogo);
instagram.addEventListener("mouseout", changeInstagramLogoBack);

facebook.addEventListener("mouseover", changeFacebookLogo);
facebook.addEventListener("mouseout", changeFacebookLogoBack);

gmail.addEventListener("mouseover", changeMailLogo);
gmail.addEventListener("mouseout", changeMailLogoBack);