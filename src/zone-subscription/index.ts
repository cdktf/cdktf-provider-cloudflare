// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * How often the subscription is renewed automatically.
  * Available values: "weekly", "monthly", "quarterly", "yearly".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#frequency ZoneSubscription#frequency}
  */
  readonly frequency?: string;
  /**
  * Subscription identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#identifier ZoneSubscription#identifier}
  */
  readonly identifier: string;
  /**
  * The rate plan applied to the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#rate_plan ZoneSubscription#rate_plan}
  */
  readonly ratePlan?: ZoneSubscriptionRatePlan;
}
export interface ZoneSubscriptionRatePlan {
  /**
  * The currency applied to the rate plan subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#currency ZoneSubscription#currency}
  */
  readonly currency?: string;
  /**
  * Whether this rate plan is managed externally from Cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#externally_managed ZoneSubscription#externally_managed}
  */
  readonly externallyManaged?: boolean | cdktf.IResolvable;
  /**
  * The ID of the rate plan.
  * Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#id ZoneSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether a rate plan is enterprise-based (or newly adopted term contract).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#is_contract ZoneSubscription#is_contract}
  */
  readonly isContract?: boolean | cdktf.IResolvable;
  /**
  * The full name of the rate plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#public_name ZoneSubscription#public_name}
  */
  readonly publicName?: string;
  /**
  * The scope that this rate plan applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#scope ZoneSubscription#scope}
  */
  readonly scope?: string;
  /**
  * The list of sets this rate plan applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#sets ZoneSubscription#sets}
  */
  readonly sets?: string[];
}

export function zoneSubscriptionRatePlanToTerraform(struct?: ZoneSubscriptionRatePlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency: cdktf.stringToTerraform(struct!.currency),
    externally_managed: cdktf.booleanToTerraform(struct!.externallyManaged),
    id: cdktf.stringToTerraform(struct!.id),
    is_contract: cdktf.booleanToTerraform(struct!.isContract),
    public_name: cdktf.stringToTerraform(struct!.publicName),
    scope: cdktf.stringToTerraform(struct!.scope),
    sets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sets),
  }
}


export function zoneSubscriptionRatePlanToHclTerraform(struct?: ZoneSubscriptionRatePlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    currency: {
      value: cdktf.stringToHclTerraform(struct!.currency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    externally_managed: {
      value: cdktf.booleanToHclTerraform(struct!.externallyManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_contract: {
      value: cdktf.booleanToHclTerraform(struct!.isContract),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_name: {
      value: cdktf.stringToHclTerraform(struct!.publicName),
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
    sets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneSubscriptionRatePlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currency !== undefined) {
      hasAnyValues = true;
      internalValueResult.currency = this._currency;
    }
    if (this._externallyManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.externallyManaged = this._externallyManaged;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isContract !== undefined) {
      hasAnyValues = true;
      internalValueResult.isContract = this._isContract;
    }
    if (this._publicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicName = this._publicName;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sets = this._sets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSubscriptionRatePlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currency = undefined;
      this._externallyManaged = undefined;
      this._id = undefined;
      this._isContract = undefined;
      this._publicName = undefined;
      this._scope = undefined;
      this._sets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currency = value.currency;
      this._externallyManaged = value.externallyManaged;
      this._id = value.id;
      this._isContract = value.isContract;
      this._publicName = value.publicName;
      this._scope = value.scope;
      this._sets = value.sets;
    }
  }

  // currency - computed: true, optional: true, required: false
  private _currency?: string; 
  public get currency() {
    return this.getStringAttribute('currency');
  }
  public set currency(value: string) {
    this._currency = value;
  }
  public resetCurrency() {
    this._currency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyInput() {
    return this._currency;
  }

  // externally_managed - computed: true, optional: true, required: false
  private _externallyManaged?: boolean | cdktf.IResolvable; 
  public get externallyManaged() {
    return this.getBooleanAttribute('externally_managed');
  }
  public set externallyManaged(value: boolean | cdktf.IResolvable) {
    this._externallyManaged = value;
  }
  public resetExternallyManaged() {
    this._externallyManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externallyManagedInput() {
    return this._externallyManaged;
  }

  // id - computed: true, optional: true, required: false
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

  // is_contract - computed: true, optional: true, required: false
  private _isContract?: boolean | cdktf.IResolvable; 
  public get isContract() {
    return this.getBooleanAttribute('is_contract');
  }
  public set isContract(value: boolean | cdktf.IResolvable) {
    this._isContract = value;
  }
  public resetIsContract() {
    this._isContract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContractInput() {
    return this._isContract;
  }

  // public_name - computed: true, optional: true, required: false
  private _publicName?: string; 
  public get publicName() {
    return this.getStringAttribute('public_name');
  }
  public set publicName(value: string) {
    this._publicName = value;
  }
  public resetPublicName() {
    this._publicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNameInput() {
    return this._publicName;
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

  // sets - computed: true, optional: true, required: false
  private _sets?: string[]; 
  public get sets() {
    return this.getListAttribute('sets');
  }
  public set sets(value: string[]) {
    this._sets = value;
  }
  public resetSets() {
    this._sets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setsInput() {
    return this._sets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription cloudflare_zone_subscription}
*/
export class ZoneSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneSubscription to import
  * @param importFromId The id of the existing ZoneSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zone_subscription cloudflare_zone_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_subscription',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.3.0',
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
    this._frequency = config.frequency;
    this._identifier = config.identifier;
    this._ratePlan.internalValue = config.ratePlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: false, optional: true, required: false
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // rate_plan - computed: true, optional: true, required: false
  private _ratePlan = new ZoneSubscriptionRatePlanOutputReference(this, "rate_plan");
  public get ratePlan() {
    return this._ratePlan;
  }
  public putRatePlan(value: ZoneSubscriptionRatePlan) {
    this._ratePlan.internalValue = value;
  }
  public resetRatePlan() {
    this._ratePlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePlanInput() {
    return this._ratePlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      frequency: cdktf.stringToTerraform(this._frequency),
      identifier: cdktf.stringToTerraform(this._identifier),
      rate_plan: zoneSubscriptionRatePlanToTerraform(this._ratePlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_plan: {
        value: zoneSubscriptionRatePlanToHclTerraform(this._ratePlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneSubscriptionRatePlan",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
