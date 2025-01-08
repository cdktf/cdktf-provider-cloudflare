// https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnippetRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The zone identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules#zone_id SnippetRules#zone_id}
  */
  readonly zoneId: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules#rules SnippetRules#rules}
  */
  readonly rules?: SnippetRulesRules[] | cdktf.IResolvable;
}
export interface SnippetRulesRules {
  /**
  * Brief summary of the snippet rule and its intended use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules#description SnippetRules#description}
  */
  readonly description?: string;
  /**
  * Whether the headers rule is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules#enabled SnippetRules#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Criteria for an HTTP request to trigger the snippet rule. Uses the Firewall Rules expression language based on Wireshark display filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules#expression SnippetRules#expression}
  */
  readonly expression: string;
  /**
  * Name of the snippet invoked by this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules#snippet_name SnippetRules#snippet_name}
  */
  readonly snippetName: string;
}

export function snippetRulesRulesToTerraform(struct?: SnippetRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expression: cdktf.stringToTerraform(struct!.expression),
    snippet_name: cdktf.stringToTerraform(struct!.snippetName),
  }
}


export function snippetRulesRulesToHclTerraform(struct?: SnippetRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snippet_name: {
      value: cdktf.stringToHclTerraform(struct!.snippetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnippetRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnippetRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._snippetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippetName = this._snippetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnippetRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._expression = undefined;
      this._snippetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabled = value.enabled;
      this._expression = value.expression;
      this._snippetName = value.snippetName;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // snippet_name - computed: false, optional: false, required: true
  private _snippetName?: string; 
  public get snippetName() {
    return this.getStringAttribute('snippet_name');
  }
  public set snippetName(value: string) {
    this._snippetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetNameInput() {
    return this._snippetName;
  }
}

export class SnippetRulesRulesList extends cdktf.ComplexList {
  public internalValue? : SnippetRulesRules[] | cdktf.IResolvable

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
  public get(index: number): SnippetRulesRulesOutputReference {
    return new SnippetRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules cloudflare_snippet_rules}
*/
export class SnippetRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_snippet_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnippetRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnippetRules to import
  * @param importFromId The id of the existing SnippetRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnippetRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_snippet_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/snippet_rules cloudflare_snippet_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnippetRulesConfig
  */
  public constructor(scope: Construct, id: string, config: SnippetRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_snippet_rules',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.50.0',
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
    this._zoneId = config.zoneId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rules - computed: false, optional: true, required: false
  private _rules = new SnippetRulesRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SnippetRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      zone_id: cdktf.stringToTerraform(this._zoneId),
      rules: cdktf.listMapper(snippetRulesRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(snippetRulesRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SnippetRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
