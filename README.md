## View the Deployed App

For easy viewing, this app is deployed here:

[https://zachgoll.github.io/pathrise-frontend-challenge](https://zachgoll.github.io/pathrise-frontend-challenge)

## Design Decisions

While I did not want to over-engineer this challenge, here are a few of the things I thought about when designing the app:

- I chose Angular, flex-layout, and Material Angular for my app because these are the technologies I am most comfortable in. I understand React or Vue may have provided a more "lightweight" solution.
- The Data service is decoupled from the rest of the app and could easily be modified to pull data from another source
- The Job Card component is a UI-only component. I wanted this to have the single responsibility of displaying data fed to it
- And a couple additional things worth pointing out:
  - Logos for the companies are pulling in live from Clearbit's logo API (grabs logo based on website)
  - Colors are randomized and the text color should change between white/black based on the shade of the background

## Run the app locally

```
npm run start
```
