// XMlHttpRequest მეთოდით

// function getPostes() {


    // let requisti = new XMLHttpRequest ();
    // requisti.addEventListener('load', function(){
       
        // let resposni = this.responseText;
        // let responseData = JSON.parse (resposni);

        // let ul = document.createElement ('ul');

        // responseData.data.forEach (item => {
        //    let li =document.createElement ('li');
        //    li.textContent = item.first_name + ' ' + item.last_name;
           
        //    ul.appendChild (li);
  


        // });

        // document.getElementById ('api').appendChild(ul);
            
        

    // });

    // requisti.open ('GET' , 'https://reqres.in/api/users?page=2');
    // requisti.send();

// }

    //  getPostes ();




// fetch მეთოდი 

// fetch ('https://reqres.in/api/users?page=2', {
    // method:'GEt'
// })

// .then (function(response){
    // if (response.status !== 200){
    // throw 'error';
    // }

    // return response.json();
// })

// .then (function(responseData){

    // let ul = document.createElement('ul');
    // let fragment = document.createDocumentFragment();

    // responseData.data.forEach(element => {
    // let li =  document.createElement('li');
    // li.textContent = element.first_name;

    // fragment.appendChild(li);
    

    // })

    // ul.appendChild(fragment);
    // document.getElementById('api').appendChild(ul);

// })

//   .catch (function(error){
    // if (error == 404){
        // let p = document.createElement ('p');
        // p.textContent = 'page not found'
        // document.createElement('api').appendChild('p');
    // } else {
        // console.log('server error')
    // }
// })
