public with sharing class CouponController {
    @AuraEnabled(cacheable=true)
    public static List<Coupon_Item__c> getCoupon() {
        return[
        SELECT Coupon_Item_Name__c,Offer_Code__c,Coupon_Image_URL__c,Redeem_Status__c
        FROM Coupon_item__c
        WITH SECURITY_ENFORCED 
        ];
    }
}