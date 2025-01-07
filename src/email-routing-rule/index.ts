/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailRoutingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the email routing rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#enabled EmailRoutingRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Routing rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#name EmailRoutingRule#name}
  */
  readonly name: string;
  /**
  * The priority of the email routing rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#priority EmailRoutingRule#priority}
  */
  readonly priority?: number;
  /**
  * The zone identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#zone_id EmailRoutingRule#zone_id}
  */
  readonly zoneId: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#action EmailRoutingRule#action}
  */
  readonly action?: EmailRoutingRuleAction[] | cdktf.IResolvable;
  /**
  * matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#matcher EmailRoutingRule#matcher}
  */
  readonly matcher?: EmailRoutingRuleMatcher[] | cdktf.IResolvable;
}
export interface EmailRoutingRuleAction {
  /**
  * Type of action. Available values: `forward`, `worker`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#type EmailRoutingRule#type}
  */
  readonly type: string;
  /**
  * Value to match on. Required for `type` of `literal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#value EmailRoutingRule#value}
  */
  readonly value?: string[];
}

export function emailRoutingRuleActionToTerraform(struct?: EmailRoutingRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function emailRoutingRuleActionToHclTerraform(struct?: EmailRoutingRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailRoutingRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmailRoutingRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailRoutingRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EmailRoutingRuleActionList extends cdktf.ComplexList {
  public internalValue? : EmailRoutingRuleAction[] | cdktf.IResolvable

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
  public get(index: number): EmailRoutingRuleActionOutputReference {
    return new EmailRoutingRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmailRoutingRuleMatcher {
  /**
  * Field to match on. Required for `type` of `literal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#field EmailRoutingRule#field}
  */
  readonly field?: string;
  /**
  * Type of matcher. Available values: `literal`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#type EmailRoutingRule#type}
  */
  readonly type: string;
  /**
  * Value to match on. Required for `type` of `literal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#value EmailRoutingRule#value}
  */
  readonly value?: string;
}

export function emailRoutingRuleMatcherToTerraform(struct?: EmailRoutingRuleMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function emailRoutingRuleMatcherToHclTerraform(struct?: EmailRoutingRuleMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailRoutingRuleMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmailRoutingRuleMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailRoutingRuleMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EmailRoutingRuleMatcherList extends cdktf.ComplexList {
  public internalValue? : EmailRoutingRuleMatcher[] | cdktf.IResolvable

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
  public get(index: number): EmailRoutingRuleMatcherOutputReference {
    return new EmailRoutingRuleMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule cloudflare_email_routing_rule}
*/
export class EmailRoutingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_routing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailRoutingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailRoutingRule to import
  * @param importFromId The id of the existing EmailRoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailRoutingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/email_routing_rule cloudflare_email_routing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailRoutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EmailRoutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_routing_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.49.1',
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
    this._enabled = config.enabled;
    this._name = config.name;
    this._priority = config.priority;
    this._zoneId = config.zoneId;
    this._action.internalValue = config.action;
    this._matcher.internalValue = config.matcher;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // action - computed: false, optional: true, required: false
  private _action = new EmailRoutingRuleActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: EmailRoutingRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher = new EmailRoutingRuleMatcherList(this, "matcher", true);
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: EmailRoutingRuleMatcher[] | cdktf.IResolvable) {
    this._matcher.internalValue = value;
  }
  public resetMatcher() {
    this._matcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      action: cdktf.listMapper(emailRoutingRuleActionToTerraform, true)(this._action.internalValue),
      matcher: cdktf.listMapper(emailRoutingRuleMatcherToTerraform, true)(this._matcher.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.listMapperHcl(emailRoutingRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmailRoutingRuleActionList",
      },
      matcher: {
        value: cdktf.listMapperHcl(emailRoutingRuleMatcherToHclTerraform, true)(this._matcher.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmailRoutingRuleMatcherList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
