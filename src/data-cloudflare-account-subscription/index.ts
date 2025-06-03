/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/account_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAccountSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/account_subscription#account_id DataCloudflareAccountSubscription#account_id}
  */
  readonly accountId: string;
}
export interface DataCloudflareAccountSubscriptionRatePlan {
}

export function dataCloudflareAccountSubscriptionRatePlanToTerraform(struct?: DataCloudflareAccountSubscriptionRatePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountSubscriptionRatePlanToHclTerraform(struct?: DataCloudflareAccountSubscriptionRatePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountSubscriptionRatePlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountSubscriptionRatePlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_contract - computed: true, optional: false, required: false
  public get isContract() {
    return this.getBooleanAttribute('is_contract');
  }

  // public_name - computed: true, optional: false, required: false
  public get publicName() {
    return this.getStringAttribute('public_name');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // sets - computed: true, optional: false, required: false
  public get sets() {
    return this.getListAttribute('sets');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/account_subscription cloudflare_account_subscription}
*/
export class DataCloudflareAccountSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_account_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAccountSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAccountSubscription to import
  * @param importFromId The id of the existing DataCloudflareAccountSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/account_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAccountSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/account_subscription cloudflare_account_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAccountSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAccountSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account_subscription',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.5.0',
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

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
  }

  // rate_plan - computed: true, optional: false, required: false
  private _ratePlan = new DataCloudflareAccountSubscriptionRatePlanOutputReference(this, "rate_plan");
  public get ratePlan() {
    return this._ratePlan;
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
