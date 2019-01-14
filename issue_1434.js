issue:- On Renewal page wallet balance is selected then unable to click on renewal button
start time:- 12:00 End time:-


checkbox checked for wallet balance
method called :- usewallet 


changes at line 280 hi text added

ng-if="(renewals.walletbalance == 0 && renewals.txtFinalAmount < renewals.packagePrice && renewals.usewallet == true)">
Err1:Final amount does not match with package price </h5>
ng-if="(renewals.txtFinalAmount < renewals.packagePrice) && (renewals.usewallet == false)">
Err2: Final amount does not match with package price </h5>

<h5 ng-if="(renewals.packageOverrideAmount > renewals.packageBasePrice && renewals.txtFinalAmount < renewals.packageOverrideAmount && renewals.usewallet == false)">Err3: Final amount does not match with package price </h5>
<h5 ng-if="(renewals.packageOverrideAmount > renewals.packageBasePrice && renewals.txtFinalAmount < tempFinalAmt && renewals.usewallet == true)">Err4: Final amount does not match with package price </h5>

<h5 ng-if="(renewals.packageOverrideAmount > renewals.packageBasePrice && renewals.txtFinalAmount < tempFinalAmt && renewals.usewallet == true)">Err5: Final amount does not match with package price </h5>

<span ng-show ="(renewals.txtFinalAmount != renewals.packagePrice) && (renewals.usewallet == false)">
Final Amount is less than change price{{renewals.usewallet}}</span>

<h5 class="text-bold text-red">{{renewFlag}}renewFlag txtFinalAmount</h5>
<h5 class="text-bold text-red">{{renewals.txtFinalAmount}}</h5>
<h5 class="text-bold text-red">tempFinalAmt:-{{ tempFinalAmt}}</h5>


<input type="button" ng-disabled=
"renewalsForm.$invalid || 
allowRenewal == true ||
decimalValidation == 0 || 
renewals.finalAmountA < 0 || 
(renewals.txtFinalAmount==0  && renewals.usewallet == false) ||
(parseFloat(renewals.txtFinalAmount) != parseFloat(renewals.packagePrice) && renewals.usewallet == false) || 
(renewals.walletbalance == 0 && renewals.txtFinalAmount < tempFinalAmt && renewals.usewallet == true ) || 
(renewals.txtFinalAmount < renewals.packagePrice) && (renewals.usewallet == false)
" name="submitForm1" class="btn btn-flat theme-bg-800 txt-light pl25 pr25" value="{{'Renew' | translate}}" id="submitForm1">

<h5 ng-if="allowRenewal== true" class="text-bold text-red">Kindly clear outstanding payment from collection!</h5>
<h5 ng-if="userStatus == 5" class="text-bold text-red">OR Account is deactivated!</h5>
<h5 ng-if="decimalValidation == 0" class="text-bold text-red">Only 2 Digits Are Allowed After Decimal in Change Package Price.</h5>
<h5 ng-if="renewals.finalAmountA < 0" class="text-bold text-red">Can not downgrade existing package with adjustment!</h5>
<h5 ng-if="(renewals.txtFinalAmount == 0  && renewals.usewallet == false)" class="text-bold text-red">Hi Accept amount cannot be blank</h5>
<h5 class="text-bold text-red">renewFlag{{renewFlag}}</h5>
<h5 class="text-bold text-red">txtFinalAmount{{renewals.txtFinalAmount}}</h5>
<h5 class="text-bold text-red">tempFinalAmt:-{{ tempFinalAmt}}</h5>
<h5 class="text-bold text-red" ng-if="(renewals.walletbalance == 0 && renewals.txtFinalAmount < tempFinalAmt && renewals.usewallet == true)">Err1:Final amount does not match with package price </h5>
<h5 class="text-bold text-red" ng-if="(renewals.txtFinalAmount < renewals.packagePrice) && (renewals.usewallet == false)">Err2: Final amount does not match with package price </h5>
<h5>{{renewFlag}}{{tempFinalAmt}}renewals.packageOverrideAmount{{renewals.packageOverrideAmount}}	</h5>
<h5 ng-if="(renewals.packageOverrideAmount > renewals.packageBasePrice && renewals.txtFinalAmount <renewals.packageOverrideAmount && renewals.usewallet == false)">Err3: Final amount does not match with Override package price </h5>
<h5 ng-if="(renewals.packageOverrideAmount > renewals.packageBasePrice && renewals.txtFinalAmount < tempFinalAmt && renewals.usewallet == true)">Err4: Final amount does not match with package price </h5>