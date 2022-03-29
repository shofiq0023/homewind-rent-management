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

### Install Nodejs and NPM:
check if your system has nodejs and npm installed with

```
node -v
npm -v
```

If nodejs and npm is not installed then goto [nodejs.org](https://nodejs.org/en/) and download nodejs and npm or on linux use

```
sudo apt install nodejs
sudo apt install npm
```

### Install Angular CLI:
check if your system has angular cli installed with `ng` command.<br>
if Not then install angular cli with npm

```
npm install -g @angular/cli
```
<hr />

Use `ng serve` to run the project in `http://localhost:4200/`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<hr />

## Firebase database

If you want to use your own firebase account and database for the project then follow this section:

### Firebase
Go to [console.firebase.google.com](https://console.firebase.google.com/) and follow these steps.

1. Add a new project.

2. Enter project name and continue.

3. If you don't want google analytics for project then untick the option and continue.

4. Then in project overview select **web** and pick a name for your app and register (You can copy the firebase config if you want to setup firebase manually in your project). 

5. Go to console and navigate to Authentication > Get Started > Email/Password > Enable. This will enable email/password signup and login option

6. Then navigate to Firestore database > Create Database > Next > Select database location (Default is reccomended) > Rules > Then change `allow read, write: if false;` to `true`

### Install Firebase sdk
To install the Firebase sdk and to login to firebase

```
npm install -g firebase
npm install -g firebase-tools
firebase login:ci
```

### Firebase setup in project

To automatically add Firebase to angular use this command

```
ng add @angular/fire
```

Then select the Authentication and Firestore option to add them to your project using your firebase account, project and app. (If you logged in using firebase cli).

<hr />

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
    
	
