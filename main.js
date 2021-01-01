var form = document.getElementById('form');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    // assign input field to a variable
    var newItem = document.getElementById('link').value;
    newItem.className = 'mx-auto';
    // create anchor tag for shortened link
    var shortenedLink = document.createElement('a');
    shortenedLink.className= 'float-left mx-auto';

    // create list item(s)
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // append input field variable to list item
    li.appendChild(document.createTextNode(newItem));

    // create copy button
    var copy = document.createElement('button');
    //assign class and styling
    copy.className = 'btn btn-md mx-auto'
    copy.appendChild(document.createTextNode('copy'));

    // fetch('https://rel.ink/api/links/', {
    //   "url":"https://news.ycombinator.com/",
    //     method:'POST',
    //   headers:{
    //       'Accept': '*/*'
    //   }
    // })
    // fetch('https://rel.ink/api/links/', {
    //     method:'POST',
    //     headers:{'Accept': '*/*'}
    // })
    // .then((res) => res.text())
    // .then((data) => {
       
    // })
    // .catch((err) => console.log(err))

    fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer {b4dc6aad3919fd0556bf270693f1dc79cb696f06}',
        'Content-Type': '*/*'
    },
    body: JSON.stringify({ "long_url": "https://take.yunosurveys.com/welcome?pparam_publisher_offer_uuid=68f22510-7adf-0137-245e-06a1005d46c8&pparam_purd_en=89c07ad05f778280de297b6f239a9ff678acb6664501089b3d8411260340129191685f16dc198201c773ae6bcb2e32ee&pparam_publisher_offer_version=0a3b4f23e394008f66fa7cf863fa01de&publisher_user_id=165&pparam_transaction_id=2010943e3b19a961cd30ae8c31ea70a277bbe14e2f45af88d8a697aa63d89fc2", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
});


   // add event for copy button
    copy.addEventListener('click', change);
        function change(){
        
        copy.textContent = 'copied!';
        copy.style.backgroundColor = ' hsl(257, 27%, 26%)';

       // shortenedLink.innerHTML = '<a href="#">hello</a>'
    }

    //append copy button and shortened link to list item
    li.appendChild(shortenedLink);
    li.appendChild(copy);
    
    //append list item to ul
    itemList.appendChild(li);
    li.style.overflow = 'hidden';
}

