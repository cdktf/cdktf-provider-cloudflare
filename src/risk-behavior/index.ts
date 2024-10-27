// https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RiskBehaviorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior#account_id RiskBehavior#account_id}
  */
  readonly accountId: string;
  /**
  * behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior#behavior RiskBehavior#behavior}
  */
  readonly behavior?: RiskBehaviorBehavior[] | cdktf.IResolvable;
}
export interface RiskBehaviorBehavior {
  /**
  * Whether this risk behavior type is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior#enabled RiskBehavior#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name of this risk behavior type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior#name RiskBehavior#name}
  */
  readonly name: string;
  /**
  * Risk level. Available values: `low`, `medium`, `high`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior#risk_level RiskBehavior#risk_level}
  */
  readonly riskLevel: string;
}

export function riskBehaviorBehaviorToTerraform(struct?: RiskBehaviorBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    risk_level: cdktf.stringToTerraform(struct!.riskLevel),
  }
}


export function riskBehaviorBehaviorToHclTerraform(struct?: RiskBehaviorBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    risk_level: {
      value: cdktf.stringToHclTerraform(struct!.riskLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskBehaviorBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RiskBehaviorBehavior | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._riskLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskLevel = this._riskLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskBehaviorBehavior | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._riskLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
      this._riskLevel = value.riskLevel;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // risk_level - computed: false, optional: false, required: true
  private _riskLevel?: string; 
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
  public set riskLevel(value: string) {
    this._riskLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }
}

export class RiskBehaviorBehaviorList extends cdktf.ComplexList {
  public internalValue? : RiskBehaviorBehavior[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RiskBehaviorBehaviorOutputReference {
    return new RiskBehaviorBehaviorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior cloudflare_risk_behavior}
*/
export class RiskBehavior extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_risk_behavior";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RiskBehavior resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RiskBehavior to import
  * @param importFromId The id of the existing RiskBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RiskBehavior to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_risk_behavior", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/risk_behavior cloudflare_risk_behavior} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RiskBehaviorConfig
  */
  public constructor(scope: Construct, id: string, config: RiskBehaviorConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_risk_behavior',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.44.0',
        providerVersionConstraint: '~> 4.3'
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
    this._behavior.internalValue = config.behavior;
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

  // behavior - computed: false, optional: true, required: false
  private _behavior = new RiskBehaviorBehaviorList(this, "behavior", true);
  public get behavior() {
    return this._behavior;
  }
  public putBehavior(value: RiskBehaviorBehavior[] | cdktf.IResolvable) {
    this._behavior.internalValue = value;
  }
  public resetBehavior() {
    this._behavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      behavior: cdktf.listMapper(riskBehaviorBehaviorToTerraform, true)(this._behavior.internalValue),
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
      behavior: {
        value: cdktf.listMapperHcl(riskBehaviorBehaviorToHclTerraform, true)(this._behavior.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RiskBehaviorBehaviorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
