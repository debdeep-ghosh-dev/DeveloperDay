import { LightningElement } from 'lwc';

export default class EmployeeDetails extends LightningElement {
    empDetails = [
        {empName:'John',empAddress:'TX'},
        {empName:'Alice',empAddress:'CA'},
        {empName:'Bob',empAddress:'NY'},
        {empName:'Eve',empAddress:'FL'}
    ];
}