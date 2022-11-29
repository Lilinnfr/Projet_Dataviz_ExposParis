 fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=300&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=Expo&refine.date_start=2022&refine.date_end=2023')
    .then(response => response.json())
    .then(response2 => console.log(response2.records))


 fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=1000&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=Expo&refine.date_start=2022&refine.date_end=2023") 
    .then(reponse => reponse.json()) 
    .then(data => {
                for (let i=0; i<data.records.length; i++) {
                    let eventTitle = document.createElement('h3');
                        const myTitle = data.records[i].fields.title
                    eventTitle.innerText = "\n\n" + myTitle
                    document.getElementById('Presentation').appendChild(eventTitle);
                    let myImage = document.createElement('img');
                        let myPic= data.records[i].fields.cover_url
                        myImage.src = myPic
                        myImage.width = "500"
                        myImage.length = "500"
                    document.getElementById('Presentation').appendChild(myImage);
                    let eventDescription= document.createElement('p');
                        const myAddress_street = data.records[i].fields.address_street.replaceAll(",", "")
                        const myAddress_zipcode = data.records[i].fields.address_zipcode
                        const myAddress_city = data.records[i].fields.address_city
                        let myAddress = myAddress_street + ", " + myAddress_zipcode + " " +myAddress_city
                        const myDate = data.records[i].fields.date_description.replaceAll("/[<]br[^>]*[>]/gi","")
                        const myImportantDate = myDate.split(':')
                        const myRealDate = myImportantDate[0]
                    eventDescription.innerText = myRealDate + "\n" + myAddress
                    document.getElementById('Presentation').appendChild(eventDescription);
                    let eventLink= document.createElement('a');
                        let myLink = data.records[i].fields.url
                    eventLink.href = myLink
                    eventLink.target="_blank"
                    eventLink.innerText = "Pour plus d'informations"
                    document.getElementById('Presentation').appendChild(eventLink);
                }
            })

