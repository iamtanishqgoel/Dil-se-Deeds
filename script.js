// Sample list of random acts of kindness
const actsOfKindness = [
    "Hold the door open for someone.",
    "Offer your seat to someone on public transport.",
    "Donate to a local food bank.",
    "Leave a generous tip for your server at a restaurant.",
    "Call or visit a friend or family member who might be feeling lonely.",
    "Help a coworker with a task they're struggling with.",
    "Plant a tree or flowers in a public space.",
    "Write a thank-you note for someone who has helped you.",
    "Leave positive reviews for small businesses you love.",
    "Bake cookies or treats and share them with your neighbors.",
    "Send a thoughtful message to someone you haven't talked to in a while.",
    "Pick up litter in your neighborhood or a local park.",
    "Offer to walk your neighbor's dog or pet-sit for them.",
    "Leave spare change at a vending machine for the next person.",
    "Compliment a colleague on their hard work or achievements.",
    "Help someone load their groceries into their car.",
    "Offer to babysit for a friend or family member who needs a break.",
    "Send a care package to a deployed military service member.",
    "Volunteer your time at a local shelter or community center.",
    "Donate books to a school or library.",
    "Buy a small gift for a coworker just to brighten their day.",
    "Support a local artist or craftsperson by purchasing their work.",
    "Share your umbrella with someone on a rainy day.",
    "Smile and say hello to strangers you pass by.",
    "Write positive affirmations on sticky notes and leave them in public places.",
    "Help someone with heavy bags or luggage at the airport or train station.",
    "Donate old blankets and towels to an animal shelter.",
    "Offer to help a neighbor with their yard work or gardening.",
    "Leave a positive comment on someone's social media post.",
    "Send a thank-you email to a teacher or mentor who made a difference in your life.",
    "Support a friend's creative project or fundraiser.",
    "Offer to do grocery shopping for an elderly or disabled neighbor.",
    "Give up your spot in a long line to someone who seems rushed.",
    "Share a meal with a homeless person and have a conversation with them.",
    "Help a student with their homework or offer tutoring.",
    "Donate old clothes to a thrift store or charity shop.",
];


// Function to get a random act of kindness
function getRandomActOfKindness() {
    const randomIndex = Math.floor(Math.random() * actsOfKindness.length);
    return actsOfKindness[randomIndex];
}

// Function to update the displayed random act of kindness
function updateRandomAct() {
    const randomActElement = document.getElementById('randomAct');
    randomActElement.textContent = getRandomActOfKindness();
}

// Event listener for the "Generate Random Act" button
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', updateRandomAct);

// Initial random act of kindness display on page load
updateRandomAct();
