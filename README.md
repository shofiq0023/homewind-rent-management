# Homewind

A project where you can manage your buildings, floors, flats and renter information.

## Technology used

- JavaScript
- TypeScript
- Angular
- Firebase
- Firebase Firestore database
- Firebase Auth
- Browser LocalStorage

## Usage

Download or `git clone` the project and use it.

### Pre-requisite installations:

- NodeJS
- npm
- Angular CLI

Use `ng serve` to run the project in `http://localhost:4200/`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Documentation

--> Navigating to `http://localhost:4200/` will redirect you to the **Login** page where you sign in with your email and password.

--> You can go to **Signup** page to register with an email and password.

--> After logging in you can see the total number of **Building**, **Flat** and **Renter** you have added.<br>
You can view the full list too.

### Sidebar options

- Renter

    - Renter List -> View the full list of all the renters.<br>
	You can **Edit, Delete** a renter Information from here.

    - Add Renter -> You can **add** a new renter into an **existing building according to floor and flat**.

- Building

    - Building List -> View the full list of all the existing building you added.<br>
	You can **Edit, Delete** a building information from here.

    - Add Building -> You can **add** a new Building information here with **Building name, Floor number and Building number**.

- Flat

    - Flat list -> View the full list of all the existing Flat you added.<br>
	You can **Edit, Delete** flat information from here.

    - Add Flat -> You can **add** a new Flat to an existing **Building according to floor**.

- Bill

    - Bill History -> View full list of all the paid bill.<br>
        You can only **Delete** the bill history.

    - Pay Bill -> **Add bill payment information of a renter**.
	*(Pay Bill doesn't actually pays bill)*<br>
	There is 4 bill option: 
		- Utility Bill
		- Electric Bill
		- Gas Bill
		- Water Bill
	
