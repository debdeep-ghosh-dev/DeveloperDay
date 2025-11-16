import { LightningElement,api } from 'lwc';

export default class CarDetail extends LightningElement {
    @api carDetail = {
        Name: 'Toyota Camry',
        Model__c: 'XSE',
        Year__c: 2021
    };
}