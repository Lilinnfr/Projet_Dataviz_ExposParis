// La bataille du data vient de commencer

fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=Expo&refine.price_type=gratuit ")
    .then(reponse => reponse.json())
    .then(data => console.log(data))

fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=Expo&refine.price_type=gratuit ")
    .then(reponse => reponse.json())
    .then(reponse2 => {
            for (let i=0; i<reponse2.records.length; i++) {
                let eventDiv= document.createElement('div');
                const myTitle = reponse2.records[i].fields.title
                const myAddress_street = reponse2.records[i].fields.address_street.replaceAll(",", "")
                const myAddress_zipcode = reponse2.records[i].fields.address_zipcode
                const myAddress_city = reponse2.records[i].fields.address_city
                let myAddress = myAddress_street + ", " + myAddress_zipcode + " " +myAddress_city
                const myDate = reponse2.records[i].fields.date_description.replaceAll("/[<]br[^>]*[>]/gi","")
                const myImportantDate = myDate.split(':')
                const myRealDate = myImportantDate[0]
            eventDiv.innerText = myTitle + "\n" + myRealDate + "\n" + myAddress +"\n\n"
            let myImage = document.createElement('img')
            let myPic= reponse2.records[i].fields.cover_url
            myImage.src = myPic
            myImage.width = "500"
            myImage.length = "500"
            document.getElementById('salut').appendChild(eventDiv);
            document.getElementById('salut').appendChild(myImage);
            }
    })


document.getElementById("warning").innerHTML = "Warning : Anastasia est très mécontente o(≧口≦)o" 