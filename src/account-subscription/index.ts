/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription#account_id AccountSubscription#account_id}
  */
  readonly accountId: string;
  /**
  * How often the subscription is renewed automatically.
  * Available values: "weekly", "monthly", "quarterly", "yearly".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription#frequency AccountSubscription#frequency}
  */
  readonly frequency?: string;
  /**
  * The rate plan applied to the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription#rate_plan AccountSubscription#rate_plan}
  */
  readonly ratePlan?: AccountSubscriptionRatePlan;
}
export interface AccountSubscriptionRatePlan {
  /**
  * The ID of the rate plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription#id AccountSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope that this rate plan applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription#scope AccountSubscription#scope}
  */
  readonly scope?: string;
}

export function accountSubscriptionRatePlanToTerraform(struct?: AccountSubscriptionRatePlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function accountSubscriptionRatePlanToHclTerraform(struct?: AccountSubscriptionRatePlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSubscriptionRatePlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSubscriptionRatePlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scope = value.scope;
    }
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // externally_managed - computed: true, optional: false, required: false
  public get externallyManaged() {
    return this.getBooleanAttribute('externally_managed');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_contract - computed: true, optional: false, required: false
  public get isContract() {
    return this.getBooleanAttribute('is_contract');
  }

  // public_name - computed: true, optional: false, required: false
  public get publicName() {
    return this.getStringAttribute('public_name');
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sets - computed: true, optional: false, required: false
  public get sets() {
    return this.getListAttribute('sets');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription cloudflare_account_subscription}
*/
export class AccountSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_account_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountSubscription to import
  * @param importFromId The id of the existing AccountSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/account_subscription cloudflare_account_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: AccountSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account_subscription',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._frequency = config.frequency;
    this._ratePlan.internalValue = config.ratePlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // current_period_end - computed: true, optional: false, required: false
  public get currentPeriodEnd() {
    return this.getStringAttribute('current_period_end');
  }

  // current_period_start - computed: true, optional: false, required: false
  public get currentPeriodStart() {
    return this.getStringAttribute('current_period_start');
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
  }

  // rate_plan - computed: false, optional: true, required: false
  private _ratePlan = new AccountSubscriptionRatePlanOutputReference(this, "rate_plan");
  public get ratePlan() {
    return this._ratePlan;
  }
  public putRatePlan(value: AccountSubscriptionRatePlan) {
    this._ratePlan.internalValue = value;
  }
  public resetRatePlan() {
    this._ratePlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePlanInput() {
    return this._ratePlan.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      frequency: cdktf.stringToTerraform(this._frequency),
      rate_plan: accountSubscriptionRatePlanToTerraform(this._ratePlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_plan: {
        value: accountSubscriptionRatePlanToHclTerraform(this._ratePlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSubscriptionRatePlan",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
