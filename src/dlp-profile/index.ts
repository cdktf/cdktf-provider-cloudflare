/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#account_id DlpProfile#account_id}
  */
  readonly accountId: string;
  /**
  * Related DLP policies will trigger when the match count exceeds the number set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#allowed_match_count DlpProfile#allowed_match_count}
  */
  readonly allowedMatchCount: number;
  /**
  * Brief summary of the profile and its intended use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#description DlpProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#id DlpProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the profile. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#name DlpProfile#name}
  */
  readonly name: string;
  /**
  * The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#type DlpProfile#type}
  */
  readonly type: string;
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#entry DlpProfile#entry}
  */
  readonly entry: DlpProfileEntry[] | cdktf.IResolvable;
}
export interface DlpProfileEntryPattern {
  /**
  * The regex that defines the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#regex DlpProfile#regex}
  */
  readonly regex: string;
  /**
  * The validation algorithm to apply with this pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#validation DlpProfile#validation}
  */
  readonly validation?: string;
}

export function dlpProfileEntryPatternToTerraform(struct?: DlpProfileEntryPatternOutputReference | DlpProfileEntryPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    validation: cdktf.stringToTerraform(struct!.validation),
  }
}


export function dlpProfileEntryPatternToHclTerraform(struct?: DlpProfileEntryPatternOutputReference | DlpProfileEntryPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: cdktf.stringToHclTerraform(struct!.validation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpProfileEntryPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpProfileEntryPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._validation !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpProfileEntryPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
      this._validation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
      this._validation = value.validation;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // validation - computed: false, optional: true, required: false
  private _validation?: string; 
  public get validation() {
    return this.getStringAttribute('validation');
  }
  public set validation(value: string) {
    this._validation = value;
  }
  public resetValidation() {
    this._validation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation;
  }
}
export interface DlpProfileEntry {
  /**
  * Whether the entry is active. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#enabled DlpProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Unique entry identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#id DlpProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the entry to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#name DlpProfile#name}
  */
  readonly name: string;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#pattern DlpProfile#pattern}
  */
  readonly pattern?: DlpProfileEntryPattern;
}

export function dlpProfileEntryToTerraform(struct?: DlpProfileEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: dlpProfileEntryPatternToTerraform(struct!.pattern),
  }
}


export function dlpProfileEntryToHclTerraform(struct?: DlpProfileEntry | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: dlpProfileEntryPatternToHclTerraform(struct!.pattern),
      isBlock: true,
      type: "list",
      storageClassType: "DlpProfileEntryPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpProfileEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpProfileEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpProfileEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._name = undefined;
      this._pattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._id = value.id;
      this._name = value.name;
      this._pattern.internalValue = value.pattern;
    }
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

  // pattern - computed: false, optional: true, required: false
  private _pattern = new DlpProfileEntryPatternOutputReference(this, "pattern");
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: DlpProfileEntryPattern) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }
}

export class DlpProfileEntryList extends cdktf.ComplexList {
  public internalValue? : DlpProfileEntry[] | cdktf.IResolvable

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
  public get(index: number): DlpProfileEntryOutputReference {
    return new DlpProfileEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile cloudflare_dlp_profile}
*/
export class DlpProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dlp_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpProfile to import
  * @param importFromId The id of the existing DlpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dlp_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/dlp_profile cloudflare_dlp_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DlpProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dlp_profile',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.24.0',
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
    this._allowedMatchCount = config.allowedMatchCount;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._entry.internalValue = config.entry;
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

  // allowed_match_count - computed: false, optional: false, required: true
  private _allowedMatchCount?: number; 
  public get allowedMatchCount() {
    return this.getNumberAttribute('allowed_match_count');
  }
  public set allowedMatchCount(value: number) {
    this._allowedMatchCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMatchCountInput() {
    return this._allowedMatchCount;
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

  // entry - computed: false, optional: false, required: true
  private _entry = new DlpProfileEntryList(this, "entry", true);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: DlpProfileEntry[] | cdktf.IResolvable) {
    this._entry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_match_count: cdktf.numberToTerraform(this._allowedMatchCount),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      entry: cdktf.listMapper(dlpProfileEntryToTerraform, true)(this._entry.internalValue),
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
      allowed_match_count: {
        value: cdktf.numberToHclTerraform(this._allowedMatchCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry: {
        value: cdktf.listMapperHcl(dlpProfileEntryToHclTerraform, true)(this._entry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpProfileEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
