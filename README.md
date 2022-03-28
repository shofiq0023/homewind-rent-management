# Homewind

A project where you can manage your buildings, floors, flats and renter information.

### [Visit the website](https://homewind.netlify.app/login) *(Not reccomended for mobile phones)*

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

**Login with user `admin@gmail.com` and password `123456` as password to see demo data.**

--> Navigating to `http://localhost:4200/` will redirect you to the **Login** page where you sign in with your email and password *(Logged in users are remembered by default in every browser)*.

--> You can go to **Sign-up** page to register with an email and password.

--> After logging in you can see the total number of **Building**, **Flat** and **Renter** you have added.<br>
You can view the full list too.

--> You can **Sign-out** using the Logout button located at the right side of the top bar.

### Sidebar options

- Dashboard

	- 3 simple cards to show the count of total renter, building and flat.

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

- Rent Pay

	- Add rent payment information about a renter.

	- Add rent amount, month of rent payment, rent type, electric bill, gas bill and water bill.
		- **Rent Type**:
			- Active month: Rent payment of the **current/active** month
			- Due rent: Rent payment of a **due month**.
			- Advance: **Advance payment** for when adding a new renter.
    
	
