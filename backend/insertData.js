const cardModel = require('./models/cardModel'); // Adjust the path if necessary

const cards = [
  { title: "Branches", description: "Abstract Branches lets you manage, version and document your designs in one place." },
  { title: "Manage your account", description: "Configure your account settings, such as your email, profile details and password." },
  { title: "Manage organizations, teams and projects", description: "Use Abstract organizations, teams and projects to organize your people and your work." },
  { title: "Manage billing", description: "Change subscriptions and payment details." },
  { title: "Authenticate to Abstract", description: "Set up and configure SSO, SCIM and Just-in-time provisioning." },
  { title: "Abstract support", description: "Get in touch with a human." },
];

const insertData = async () => {
  for (const card of cards) {
    try {
      await cardModel.createCard(card.title, card.description);
      console.log(`Inserted card with title: ${card.title}`);
    } catch (error) {
      console.error(`Error inserting card with title: ${card.title}`, error.message);
    }
  }
};

// Run the script
insertData()
  .then(() => {
    console.log('Data insertion complete');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error during data insertion', error.message);
    process.exit(1);
  });
