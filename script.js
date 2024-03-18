function importTable(){
    const fname = document.getElementById('first-name').value;
    const lname = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    //const gender = document.getElementById('Male').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    
   
    
    const tableElement = document.getElementById('tableEle');
    const trElement = document.createElement('tr');
    const tbodyElement = document.createElement('tbody');

    const fnameEle = document.createElement('td');
    const lnameEle = document.createElement('td');
    const addressEle = document.createElement('td');
    const pinEle =document.createElement('td');
    //const genEle =document.createElement('td');
    const stateEle = document.createElement('td');
    const countryEle = document.createElement('td'); 
    
    
    
    fnameEle.innerHTML = fname;
    lnameEle.innerHTML = lname;
    addressEle.innerHTML = address;
    pinEle.innerHTML = pincode;
    //genEle.innerHTML = gender;
    stateEle.innerHTML = state;
    countryEle.innerHTML = country;
    
   

    
    trElement.appendChild(fnameEle);
    trElement.appendChild(lnameEle);
    trElement.appendChild(addressEle);
    trElement.appendChild(pinEle);
    //trElement.appendChild(genEle);
    trElement.appendChild(stateEle);
    trElement.appendChild(countryEle);
   
    
    
    tbodyElement.appendChild(trElement);
    tableElement.appendChild(tbodyElement);
    
    }
    

    function clearInputField() {
        document.getElementById('form').reset();
    }   

   