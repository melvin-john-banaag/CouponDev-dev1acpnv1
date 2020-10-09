import { LightningElement, wire } from 'lwc';
import COUPON_ITEM_NAME_FIELD from '@salesforce/schema/Coupon_Item__c.Coupon_Item_Name__c';
import OFFER_CODE_FIELD from '@salesforce/schema/Coupon_Item__c.Offer_Code__c';
import COUPON_IMAGE_URL_FIELD from '@salesforce/schema/Coupon_Item__c.Coupon_Image_URL__c';
import REDEEM_STATUS_FIELD from '@salesforce/schema/Coupon_Item__c.Redeem_Status__c';
import COUPON_INSTANCE_FIELD from '@salesforce/schema/Coupon_Item__c.Redeem_Status__c';
import getCoupon from '@salesforce/apex/CouponController.getCoupon';

    const COLUMNS = [
        { label: 'Coupon Item Name', fieldName: COUPON_ITEM_NAME_FIELD.fieldApiName, type: 'text' },
        { label: 'Offer Code', fieldName: OFFER_CODE_FIELD.fieldApiName, type: 'Text' },
        { label: 'Coupon Image URL', fieldName: COUPON_IMAGE_URL_FIELD.fieldApiName, type: 'URL' },
        { label: 'Coupon Instance', fieldName: COUPON_INSTANCE_FIELD.fieldApiName, type: 'URL' },
        { label: 'Redeem Status', fieldName: REDEEM_STATUS_FIELD.fieldApiName, type: 'Picklist' }
    ];

export default class AllCoupons extends LightningElement {
    columns = COLUMNS;
    @wire(getCoupon)
    Coupon_Item__c;
    get errors(){
        return (this.Coupon_Item__c.error)
    }
}