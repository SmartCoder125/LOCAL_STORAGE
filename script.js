/**//// LOCAL STORAGE IN PRESENT IN THE BROWSER WITH ALL THE KEY , VALUE PAIR

// LOCAL STORAGE OBJECT

// console.log(window.localStorage);



// SET ON LOCAL STORAGE ALSO WE CAN USE WINTHOUT WINDOWS

// localStorage.setItem('theme','light');

// localStorage.setItem('font','bold')



// TO GET THIS FORM SET WITH KEY

// const theme = localStorage.getItem('theme')

// console.log(theme)



// TO REMOVE THE ITEMS

// localStorage.removeItem('font');



// TO CLEAR ALL THE LOCAL STORAGE

// localStorage.clear()


// TO GET THE OBJECT, ARRAY ALSO WITH THE JSON

// JAVASCRIPT OBJECT

// const userSettings = {

//     theme : 'dark',
//     font : 'light',
//     score : 100

// }

// CONVERT JS OBJECT TO STRING TO SET

// const settingString =  JSON.stringify(userSettings)

// console.log(typeof settingString)

// localStorage.setItem('userSettings',settingString); 
 
// const uSetting =  JSON.parse(localStorage.getItem('userSettings'))

// console.log(typeof uSetting)

// console.log(JSON.parse(uSetting))

// console.log(uSetting.theme)



// USE CASES IN REAL LIFE LOCAL-STORAGE

// 1. CART.
// 2. USER SETTINGS.
// 3. FILTERS.
// 4. FORM DATA.
// 5. GAME SCORE TEMPARORELARY WITHOUT PASSWORD AND API KEY.



// THEME SELECTOR

const themeSelector = document.querySelector('#themeSelector')


// RELOAD TO SAVE DATA

const theme = localStorage.getItem('theme');

changeTheme(theme);


themeSelector.addEventListener('change', (e)=> {

        // console.log(e.target.value);


        // SAVE IN THE LOCAL STORAGE

        localStorage.setItem('theme', e.target.value)


        // CHANGE THEME
    
        changeTheme(e.target.value)
})


// CHANGE THEME FUNCTON

function changeTheme(theme) {

    if(theme === 'dark') {
        document.body.style.backgroundColor =  '#222';

    }
    else if(theme === 'light') {
        document.body.style.backgroundColor = '#e5e5e5';

    }
    else {
        document.body.style.backgroundColor = '#fff';
    }

}



// EVENT LISTNER STORAGE

window.addEventListener('storage', (e)=> {

    // console.log(e)

    // TO CHANGE THE VALUE ALSO

    // themeSelector.value = e.newValue


    // TO CHANGE BOTH THE VALUES

    // changeTheme(e.newValue);

    // CHEAKING

    if(e.key === 'theme') {
        changeTheme(e.newValue)
        themeSelector.value = e.newValue;

    }

});



// ERROR HANDLEING

// error handling

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness

    console.log('Yeppe!! working.');
  }
  else {
    // Too bad, no localStorage for us
    console.log('OOPS!! Not working.');
  }













