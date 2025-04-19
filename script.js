const songs = [
    {
        title: "Miss Mary Mack",
        category: "Traditional",
        description: "A classic hand-clapping game song popular among children for generations.",
        lyrics: "Miss Mary Mack, Mack, Mack<br>All dressed in black, black, black...",
        origin: "United States, early 20th century",
        ageRange: "4-10 years",
    },
    {
        title: "Linstead Market",
        category: "Folk Song",
        description: "A traditional Jamaican folk song about a woman selling ackee fruit at the market.",
        lyrics: "Carry me ackee go a Linstead Market,<br>Not a quattie wut sell...",
        origin: "Jamaica, traditional",
        ageRange: "5-12 years",
    },
    {
        title: "Ting a Ling a Ling",
        category: "Ring Game",
        description: "A playful rhyme often sung during ring games.",
        lyrics: "Ting a ling a ling<br>School bell ring...",
        origin: "Caribbean",
        ageRange: "4-9 years",
    },
    {
        title: "Bam Chi Chi Bam",
        category: "Interactive",
        image: "images/chichibambam.jpg",
        description: "This song celebrates the chirping of birds at dawn and their departure as the day begins. It reflects the natural rhythm of life and the beauty of nature's soundtrack. Popular in Caribbean communities, it uses onomatopoeia to mimic bird calls.",
        lyrics: `Bam chi, chi, bam, they sing a this song,<br>
            Bam chi, chi, bam, sing all the night long.<br>
            Bam chi, chi, bam, then just before day,<br>
            Bam chi, chi, bam, they fly away.<br><br>
            All the chi chi birds they sing 'til dawn,<br>
            When the daylight come all the birds are gone.<br>
            Chi, chi, chi, chi, chi, what a pretty song—<br>
            That is what them birds are singing all day long.`,
        origin: "Caribbean, traditional",
        ageRange: "4-10 years"
      },
      {
        title: "Ring a Ring o' Roses",
        category: "Circle Game",
        image: "images/childrenplaying3.png",
        description: "This ancient activity, probably the first singing game any English-speaking child learns, has defied attempts by scholars to settle upon its origin or its meaning. Historians have suggested that the rhyme stems from the time of the Black Death.",
        lyrics: "Ring a ring o' roses, A pocket full o' posies,<br> Ashes, ashes, We all fall down.<br> Ashes in the water, ashes in the sea<br> We all jump up with a one, two, three.",
        origin: "England, traditional",
        ageRange: "3-8 years"
      },
      {
        title: "Brown Girl in the Ring",
        category: "Ring Game",
        image: "images/browngirlinaring.jpeg",
        description: "Originally a Jamaican ring game, this song has African roots and is sung while children form a circle, clapping as one child dances in the center. The song gained international popularity when it was adapted by Boney M in their 1978 hit song.",
        lyrics: "Brown girl in the ring, tra la la la la...<br>She looks like a sugar in a plum, plum, plum!",
        origin: "Jamaica, traditional",
        ageRange: "5-12 years"
      },
      {
        title: "Sammy Dead-O",
        category: "Travel",
        image: "images/sammydeado.jpeg",
        description: "A topical song about Sammy, a planter whose corn crop mysteriously died. The song reflects cultural beliefs and storytelling traditions in Jamaica.",
        lyrics: `Sammy plant piece o' corn down the gully. Mm-hmm. And it grow till it kill poor Sammy. Mm-hmm Sammy dead, Sammy dead, Sammy dead-o. Mm-hmm. Sammy dead, Sammy dead, Sammy dead-o. Mm-hmm. Twas a grudge when them branch broke on Sammy. Mm-hmm. Twas a grudge when them branch broke on Sammy. Mm-hmm. Sammy dead, Sammy dead, Sammy dead-o. Mm-hmm. Sammy dead, Sammy dead, Sammy dead-o. Mm-hmm`,
        origin: "Jamaica, traditional",
        ageRange: "6-12 years"
      },
      {
        title: "Skip to My Lou",
        category: "Dance",
        image: "images/skiptomylou.png",
        description: "A playful folk song reimagined in Jamaica as a dancehall anthem, showcasing the island's cultural remixing tradition.",
        lyrics: `Skip, skip, skip to my Lou,<br>
         Skip, skip, skip to my Lou,<br>
         Skip, skip, skip to my Lou,<br>
         Skip to my Lou, my darlin'.<br>
         Fly's in the buttermilk, shoo, fly, shoo,<br>
         Fly's in the buttermilk, shoo, fly, shoo,<br>
         Fly's in the buttermilk, shoo, fly, shoo,<br>
         Skip to my Lou, my darlin'.`,
        origin: "United States, adapted in Jamaica",
        ageRange: "5-10 years"
      },
      {
        title: "Day-O",
        category: "Cultural",
        image: "images/dayo.png",
        description: "A globally recognized song that reflects the lived experiences of Jamaican dock workers and preserves the island’s mento musical heritage.",
        lyrics: `Day-o, day-o<br>
         Daylight come and me wan' go home<br>
         Day, me say day, me say day, me say day, me say day<br>
         Me say day-o<br>
         Daylight come and me wan' go home`,
        origin: "Jamaica, traditional",
        ageRange: "6-12 years"
      },
      {
        title: "Days of the Week Song",
        category: "Time & Calendar",
        image: "images/days_of_the_week.png",
        description: "A staple in Jamaican preschools, this chant is often used during morning circle time to help children learn the weekly cycle. Its repetition and melody make it easy to memorize.",
        lyrics: "Sunday, Monday, Tuesday too, Wednesday, Thursday just for you. Friday, Saturday that's the end, Now let's say them all again!",
        origin: "Jamaica, traditional",
        ageRange: "3-6 years"
      },
      {
        title: "Bim Bam",
        category: "Movement & Coordination",
        image: "images/bim_bam.png",
        description: "Though not originally Jamaican, rhythmic call-and-response clapping chants like this are used across Caribbean classrooms. Perfect for movement breaks, warmups, or energizers.",
        lyrics: "Bim bam, bim bam, Clap your hands and say bim bam! Tap your toes and say bim bam! Jump around and say bim bam!",
        origin: "Caribbean, traditional",
        ageRange: "3-7 years"
      },
      {
        title: "Count with Me",
        category: "Numbers & Math",
        image: "images/count_with_me.png",
        description: "Based on the oral tradition of singing while skipping rope or clapping hands, this type of song encourages movement and number learning at the same time — something very common in Caribbean playgrounds.",
        lyrics: "1, 2, 3 – come count with me! 4, 5, 6 – do a little twist! 7, 8, 9 – walk in a line 10 – shout it out again!",
        origin: "Caribbean, traditional",
        ageRange: "4-8 years"
      },
      {
        title: "Alphabet Call-Out",
        category: "Language & Literacy",
        image: "images/alphabet_call_out.png",
        description: "Teachers in Jamaican classrooms often remix the alphabet song using objects kids recognize. It brings language learning to life, especially when paired with hand motions or props.",
        lyrics: "A is for Apple, B is for Ball C is for Cat and D is for Doll E is for Elephant, F is for Fan Now sing the rest as fast as you can!",
        origin: "Jamaica, traditional",
        ageRange: "4-7 years"
      },
      {
        title: "Touch Your...",
        category: "Body Awareness",
        image: "images/touch_your.png",
        description: "Rooted in kinesthetic learning, this rhyme supports kids in learning how to follow directions while identifying parts of the body. It's often used in early-childhood games or warm-ups.",
        lyrics: "Touch your head, touch your knees, Clap your hands and count by threes! Touch your nose, touch the floor, Spin around and count to four!",
        origin: "Caribbean, traditional",
        ageRange: "3-6 years"
      },
      {
        title: "Up High, Down Low",
        category: "Movement & Coordination",
        image: "images/up_high_down_low.png",
        description: "Used for group activities in early school years, songs like this teach body control and rhythm changes — a fun way to help kids regulate energy and pay attention.",
        lyrics: "Up high, down low, Wiggle to the beat real slow Jump fast, spin around, Freeze like a statue on the ground!",
        origin: "Caribbean, traditional",
        ageRange: "4-8 years"
      },
];

// DOM elements
const songList = document.getElementById("song-list");
const songModal = document.getElementById("songModal");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalLyrics = document.getElementById("modal-lyrics");
const modalOrigin = document.getElementById("modal-origin");
const modalAgeRange = document.getElementById("modal-age-range");
const closeModalButton = document.querySelector(".close-btn");

// Populate song list
songs.forEach((song, index) => {
    const songItem = document.createElement("div");
    songItem.textContent = song.title;
    songItem.classList.add("song-item");
    songItem.addEventListener("click", () => showSongDetails(index));
    songList.appendChild(songItem);
});

// Show song details in modal
function showSongDetails(index) {
    const song = songs[index];
    modalTitle.textContent = song.title;
    modalCategory.textContent = song.category;
    modalDescription.innerHTML = song.description;
    modalLyrics.innerHTML = song.lyrics;
    modalOrigin.textContent = song.origin;
    modalAgeRange.textContent = song.ageRange;
    songModal.classList.remove("hidden");
}

// Close modal
closeModalButton.addEventListener("click", () => {
    songModal.classList.add("hidden");
});

// Close modal when clicking outside content
window.addEventListener("click", (event) => {
    if (event.target === songModal) {
        songModal.classList.add("hidden");
    }
});
