/* 
Projet réalisé en exploitant les données de "Que faire à Paris", l'agenda participatif de la ville de Paris
adresse de l'API : https://opendata.paris.fr/explore/dataset/que-faire-a-paris-/information/
*/

 fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=300&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=Expo&refine.date_start=2022&refine.date_end=2023')
    .then(response => response.json())
    .then(response2 => console.log(response2.records))


 fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=1000&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=Expo&refine.date_start=2022&refine.date_end=2023") 
    .then(reponse => reponse.json())
    .then(data => {
                for (let i=0; i<data.records.length; i++) {
                    let eventDiv = document.createElement('div');
                    eventDiv.setAttribute("id", i)
                    eventDiv.setAttribute("class", "expoBox")
                    document.getElementById('Presentation').appendChild(eventDiv);
                        let eventTitle = document.createElement('h3');
                            const myTitle = data.records[i].fields.title
                        eventTitle.innerText = "\n\n" + myTitle
                        document.getElementById(i).appendChild(eventTitle);
                        let eventImage = document.createElement('img');
                        eventImage.setAttribute("class", "expoImg")
                            let myImage= data.records[i].fields.cover_url
                            eventImage.src = myImage
                        document.getElementById(i).appendChild(eventImage);
                        let eventDescription= document.createElement('p');
                            const eventAddress_street = data.records[i].fields.address_street.replaceAll(",", "")
                            const eventAddress_zipcode = data.records[i].fields.address_zipcode
                            const eventAddress_city = data.records[i].fields.address_city
                            let eventAddress = eventAddress_street + ", " + eventAddress_zipcode + " " +eventAddress_city
                            const eventDate = data.records[i].fields.date_description.replaceAll("/[<]br[^>]*[>]/gi","")
                            const rewrittenDate = eventDate.split(':')
                            const eventRealDate = rewrittenDate[0]
                        eventDescription.innerText = eventRealDate + "\n" + eventAddress
                        document.getElementById(i).appendChild(eventDescription);
                        let eventLink= document.createElement('a');
                            let myLink = data.records[i].fields.url
                        eventLink.href = myLink
                        eventLink.target="_blank"
                        eventLink.innerText = "Pour plus d'informations"
                        document.getElementById(i).appendChild(eventLink);
                }
            })
