import { LightningElement } from 'lwc';

export default class CarDetails extends LightningElement {
    carDetails=[
        {
            Name: 'Grand Vitara',
            Model__c: 'Alpha',
            Year__c: 2023
        },
        {
            Name: 'Honda Accord',
            Model__c: 'Sport',
            Year__c: 2020   
        },
        {
            Name: 'Ford Mustang',
            Model__c: 'GT',
            Year__c: 2022
        }   
    ];
}
