/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDlpPredefinedProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}
  */
  readonly aiContextEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}
  */
  readonly allowedMatchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}
  */
  readonly confidenceThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}
  */
  readonly enabledEntries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}
  */
  readonly entries?: ZeroTrustDlpPredefinedProfileEntries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}
  */
  readonly ocrEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}
  */
  readonly profileId: string;
}
export interface ZeroTrustDlpPredefinedProfileEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustDlpPredefinedProfileEntriesToTerraform(struct?: ZeroTrustDlpPredefinedProfileEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustDlpPredefinedProfileEntriesToHclTerraform(struct?: ZeroTrustDlpPredefinedProfileEntries | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDlpPredefinedProfileEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDlpPredefinedProfileEntries | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDlpPredefinedProfileEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._id = undefined;
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
    }
  }

  // enabled - computed: true, optional: false, required: true
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

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ZeroTrustDlpPredefinedProfileEntriesList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDlpPredefinedProfileEntries[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDlpPredefinedProfileEntriesOutputReference {
    return new ZeroTrustDlpPredefinedProfileEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}
*/
export class ZeroTrustDlpPredefinedProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_dlp_predefined_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDlpPredefinedProfile to import
  * @param importFromId The id of the existing ZeroTrustDlpPredefinedProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDlpPredefinedProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_predefined_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDlpPredefinedProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDlpPredefinedProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_dlp_predefined_profile',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._aiContextEnabled = config.aiContextEnabled;
    this._allowedMatchCount = config.allowedMatchCount;
    this._confidenceThreshold = config.confidenceThreshold;
    this._enabledEntries = config.enabledEntries;
    this._entries.internalValue = config.entries;
    this._ocrEnabled = config.ocrEnabled;
    this._profileId = config.profileId;
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

  // ai_context_enabled - computed: true, optional: true, required: false
  private _aiContextEnabled?: boolean | cdktf.IResolvable; 
  public get aiContextEnabled() {
    return this.getBooleanAttribute('ai_context_enabled');
  }
  public set aiContextEnabled(value: boolean | cdktf.IResolvable) {
    this._aiContextEnabled = value;
  }
  public resetAiContextEnabled() {
    this._aiContextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiContextEnabledInput() {
    return this._aiContextEnabled;
  }

  // allowed_match_count - computed: true, optional: true, required: false
  private _allowedMatchCount?: number; 
  public get allowedMatchCount() {
    return this.getNumberAttribute('allowed_match_count');
  }
  public set allowedMatchCount(value: number) {
    this._allowedMatchCount = value;
  }
  public resetAllowedMatchCount() {
    this._allowedMatchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMatchCountInput() {
    return this._allowedMatchCount;
  }

  // confidence_threshold - computed: true, optional: true, required: false
  private _confidenceThreshold?: string; 
  public get confidenceThreshold() {
    return this.getStringAttribute('confidence_threshold');
  }
  public set confidenceThreshold(value: string) {
    this._confidenceThreshold = value;
  }
  public resetConfidenceThreshold() {
    this._confidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceThresholdInput() {
    return this._confidenceThreshold;
  }

  // enabled_entries - computed: false, optional: true, required: false
  private _enabledEntries?: string[]; 
  public get enabledEntries() {
    return this.getListAttribute('enabled_entries');
  }
  public set enabledEntries(value: string[]) {
    this._enabledEntries = value;
  }
  public resetEnabledEntries() {
    this._enabledEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEntriesInput() {
    return this._enabledEntries;
  }

  // entries - computed: true, optional: true, required: false
  private _entries = new ZeroTrustDlpPredefinedProfileEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ZeroTrustDlpPredefinedProfileEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocr_enabled - computed: true, optional: true, required: false
  private _ocrEnabled?: boolean | cdktf.IResolvable; 
  public get ocrEnabled() {
    return this.getBooleanAttribute('ocr_enabled');
  }
  public set ocrEnabled(value: boolean | cdktf.IResolvable) {
    this._ocrEnabled = value;
  }
  public resetOcrEnabled() {
    this._ocrEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrEnabledInput() {
    return this._ocrEnabled;
  }

  // open_access - computed: true, optional: false, required: false
  public get openAccess() {
    return this.getBooleanAttribute('open_access');
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ai_context_enabled: cdktf.booleanToTerraform(this._aiContextEnabled),
      allowed_match_count: cdktf.numberToTerraform(this._allowedMatchCount),
      confidence_threshold: cdktf.stringToTerraform(this._confidenceThreshold),
      enabled_entries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledEntries),
      entries: cdktf.listMapper(zeroTrustDlpPredefinedProfileEntriesToTerraform, false)(this._entries.internalValue),
      ocr_enabled: cdktf.booleanToTerraform(this._ocrEnabled),
      profile_id: cdktf.stringToTerraform(this._profileId),
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
      ai_context_enabled: {
        value: cdktf.booleanToHclTerraform(this._aiContextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_match_count: {
        value: cdktf.numberToHclTerraform(this._allowedMatchCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      confidence_threshold: {
        value: cdktf.stringToHclTerraform(this._confidenceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_entries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledEntries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      entries: {
        value: cdktf.listMapperHcl(zeroTrustDlpPredefinedProfileEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustDlpPredefinedProfileEntriesList",
      },
      ocr_enabled: {
        value: cdktf.booleanToHclTerraform(this._ocrEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
