import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/contacts/contacts.html',
})
export class ContactsPage {

    contacts;
    groupedContacts = [];

    constructor(private nav: NavController) {

        this.contacts = [
            'Kate Beckett',
            'Richard Castle',
            'Alexis Castle',
            'Lanie Parish',
            'Javier Esposito',
            'Kevin Ryan',
            'Martha Rodgers',
            'Roy Montgomery',
            'Jim Beckett',
            'Stana Katic',
            'Nathan Fillion',
            'Molly Quinn',
            'Tamala Jones',
            'Jon Huertas',
            'Seamus Dever',
            'Susan Sullivan'
        ];

        this.groupContacts(this.contacts);

    }

    groupContacts(contacts) {

        let sortedContacts = contacts.sort();
        let currentLetter = false;
        let currentContacts = [];

        sortedContacts.forEach((value, index) => {

            if (value.charAt(0) != currentLetter) {

                currentLetter = value.charAt(0);

                let newGroup = {
                    letter: currentLetter,
                    contacts: []
                };

                currentContacts = newGroup.contacts;
                this.groupedContacts.push(newGroup);

            }

            currentContacts.push(value);

        });

    }

}
