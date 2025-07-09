# Web Development Project 4 - Veni Vici

Submitted by: **Siva Macharla Vimjam**

This web app: **helps users discover random dog breeds and manage a personalized "ban list" to avoid seeing specific breeds again. The app fetches random dogs using The Dog API, displays breed info and an image, and allows banning and unbanning breeds through simple clicks. It also tracks the history of viewed dogs during the session.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - Displays: Dog image, breed name, group, and temperament
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - Displays only one breed result at a time
  - Each image matches the corresponding breed and attributes
- [x] **API call response results should appear random to the user**
  - Each click on "Discover" shows a seemingly random new dog
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Breed name is clickable and can be added to or removed from the ban list instantly
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Breeds in the ban list are skipped during future API fetches
  - Clicking a banned breed removes it from the ban list in real-time

## Optional Features

The following **optional** features are implemented:

- [x] Users can see a stored history of their previously displayed results from this session
  - A visual list of previously seen dog images appears at the bottom

## Additional Features

* [x] Responsive layout with separate right-side panel for ban list
* [x] Sticky ban list section with styled entries and hover effects
* [x] Clean UI matching the CodePath design guide
* [x] Efficient filtering logic for banned breeds

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Link: https://submissions.us-east-1.linodeobjects.com/web102/kVswopkr.gif

## Notes

Some challenges included:
- Filtering API results with inconsistent breed data structure
- Ensuring banned breeds never appear again while avoiding infinite loops
- Styling the ban list section to remain readable and responsive

## License

    Copyright 2025 Siva Macharla Vimjam

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
