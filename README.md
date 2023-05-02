# Flood Map
[2023 Henhacks](https://www.henhackshackathon.com/)

[Submission](https://devpost.com/software/delaware-flood-map)

----
### Hackathon Prompt
Monitoring Flooding in DE Hack Sponsored by Pennoni

DE is a low-lying state at risk for flooding, especially with climate change increasing flood risk.  Consider how we can use technology to help DE residents and agencies with this issue.
- How can monitoring flooding be improved in Delaware and/or areas without flood sensors or cameras?
- Can social media and other user-generated content be used to crowdsource flooding locations across Delaware in real time?
- How can we map this data and use it to improve traffic flow during a flood or emergency?

With these questions in mind, create a hack that can aid in flood monitoring!

----
### Implementation
[Powerpoint Presentation](https://docs.google.com/presentation/d/1wUYV01AEIHe3ENwJqBT4NApQUrME35sf4hh0DsKtpZA/edit?usp=sharing)

[![Flood Map Video](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/467/743/datas/gallery.jpg)]
(https://youtu.be/Iv3KQ7SUHro)

#### Tools
- Google Map's API
- NODE.js
- NPM
- Typescript

----
### Cloning
1. Clone the repo
2. Make an API key with [GoogleMaps](https://developers.google.com/maps)
3. Put your API key on in index.html file (replace YOURAPIKEY with your api key):

`<script src="https://maps.googleapis.com/maps/api/js?key=YOURAPIKEY&callback=initMap&libraries=places&v=weekly" defer></script>`

4. In the terminal:
- `npm i`
- `npm install typescript --save-dev`
- `npm i @react-google-maps/api`
