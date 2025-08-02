/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDlpCustomProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#account_id ZeroTrustDlpCustomProfile#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}
  */
  readonly aiContextEnabled?: boolean | cdktf.IResolvable;
  /**
  * Related DLP policies will trigger when the match count exceeds the number set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#allowed_match_count ZeroTrustDlpCustomProfile#allowed_match_count}
  */
  readonly allowedMatchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}
  */
  readonly confidenceThreshold?: string;
  /**
  * Scan the context of predefined entries to only return matches surrounded by keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#context_awareness ZeroTrustDlpCustomProfile#context_awareness}
  */
  readonly contextAwareness?: ZeroTrustDlpCustomProfileContextAwareness;
  /**
  * The description of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#description ZeroTrustDlpCustomProfile#description}
  */
  readonly description?: string;
  /**
  * Custom entries from this profile.
  * If this field is omitted, entries owned by this profile will not be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#entries ZeroTrustDlpCustomProfile#entries}
  */
  readonly entries?: ZeroTrustDlpCustomProfileEntries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}
  */
  readonly ocrEnabled?: boolean | cdktf.IResolvable;
  /**
  * Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#shared_entries ZeroTrustDlpCustomProfile#shared_entries}
  */
  readonly sharedEntries?: ZeroTrustDlpCustomProfileSharedEntries[] | cdktf.IResolvable;
}
export interface ZeroTrustDlpCustomProfileContextAwarenessSkip {
  /**
  * If the content type is a file, skip context analysis and return all matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#files ZeroTrustDlpCustomProfile#files}
  */
  readonly files: boolean | cdktf.IResolvable;
}

export function zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct?: ZeroTrustDlpCustomProfileContextAwarenessSkip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.booleanToTerraform(struct!.files),
  }
}


export function zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct?: ZeroTrustDlpCustomProfileContextAwarenessSkip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.booleanToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDlpCustomProfileContextAwarenessSkip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDlpCustomProfileContextAwarenessSkip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
    }
  }

  // files - computed: false, optional: false, required: true
  private _files?: boolean | cdktf.IResolvable; 
  public get files() {
    return this.getBooleanAttribute('files');
  }
  public set files(value: boolean | cdktf.IResolvable) {
    this._files = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }
}
export interface ZeroTrustDlpCustomProfileContextAwareness {
  /**
  * If true, scan the context of predefined entries to only return matches surrounded by keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Content types to exclude from context analysis and return all matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#skip ZeroTrustDlpCustomProfile#skip}
  */
  readonly skip: ZeroTrustDlpCustomProfileContextAwarenessSkip;
}

export function zeroTrustDlpCustomProfileContextAwarenessToTerraform(struct?: ZeroTrustDlpCustomProfileContextAwareness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    skip: zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct!.skip),
  }
}


export function zeroTrustDlpCustomProfileContextAwarenessToHclTerraform(struct?: ZeroTrustDlpCustomProfileContextAwareness | cdktf.IResolvable): any {
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
    skip: {
      value: zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct!.skip),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustDlpCustomProfileContextAwarenessSkip",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDlpCustomProfileContextAwarenessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDlpCustomProfileContextAwareness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._skip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDlpCustomProfileContextAwareness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._skip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._skip.internalValue = value.skip;
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

  // skip - computed: false, optional: false, required: true
  private _skip = new ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference(this, "skip");
  public get skip() {
    return this._skip;
  }
  public putSkip(value: ZeroTrustDlpCustomProfileContextAwarenessSkip) {
    this._skip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip.internalValue;
  }
}
export interface ZeroTrustDlpCustomProfileEntriesPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#regex ZeroTrustDlpCustomProfile#regex}
  */
  readonly regex: string;
  /**
  * Available values: "luhn".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#validation ZeroTrustDlpCustomProfile#validation}
  */
  readonly validation?: string;
}

export function zeroTrustDlpCustomProfileEntriesPatternToTerraform(struct?: ZeroTrustDlpCustomProfileEntriesPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    validation: cdktf.stringToTerraform(struct!.validation),
  }
}


export function zeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct?: ZeroTrustDlpCustomProfileEntriesPattern | cdktf.IResolvable): any {
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

export class ZeroTrustDlpCustomProfileEntriesPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDlpCustomProfileEntriesPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ZeroTrustDlpCustomProfileEntriesPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._validation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface ZeroTrustDlpCustomProfileEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}
  */
  readonly entryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#pattern ZeroTrustDlpCustomProfile#pattern}
  */
  readonly pattern: ZeroTrustDlpCustomProfileEntriesPattern;
}

export function zeroTrustDlpCustomProfileEntriesToTerraform(struct?: ZeroTrustDlpCustomProfileEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: zeroTrustDlpCustomProfileEntriesPatternToTerraform(struct!.pattern),
  }
}


export function zeroTrustDlpCustomProfileEntriesToHclTerraform(struct?: ZeroTrustDlpCustomProfileEntries | cdktf.IResolvable): any {
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
    entry_id: {
      value: cdktf.stringToHclTerraform(struct!.entryId),
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
      value: zeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct!.pattern),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustDlpCustomProfileEntriesPattern",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDlpCustomProfileEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDlpCustomProfileEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryId = this._entryId;
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

  public set internalValue(value: ZeroTrustDlpCustomProfileEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._entryId = undefined;
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
      this._entryId = value.entryId;
      this._name = value.name;
      this._pattern.internalValue = value.pattern;
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

  // entry_id - computed: false, optional: true, required: false
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  public resetEntryId() {
    this._entryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern = new ZeroTrustDlpCustomProfileEntriesPatternOutputReference(this, "pattern");
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: ZeroTrustDlpCustomProfileEntriesPattern) {
    this._pattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }
}

export class ZeroTrustDlpCustomProfileEntriesList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDlpCustomProfileEntries[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDlpCustomProfileEntriesOutputReference {
    return new ZeroTrustDlpCustomProfileEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustDlpCustomProfileSharedEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}
  */
  readonly entryId: string;
  /**
  * Available values: "custom", "predefined", "integration", "exact_data", "document_fingerprint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#entry_type ZeroTrustDlpCustomProfile#entry_type}
  */
  readonly entryType: string;
}

export function zeroTrustDlpCustomProfileSharedEntriesToTerraform(struct?: ZeroTrustDlpCustomProfileSharedEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    entry_type: cdktf.stringToTerraform(struct!.entryType),
  }
}


export function zeroTrustDlpCustomProfileSharedEntriesToHclTerraform(struct?: ZeroTrustDlpCustomProfileSharedEntries | cdktf.IResolvable): any {
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
    entry_id: {
      value: cdktf.stringToHclTerraform(struct!.entryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_type: {
      value: cdktf.stringToHclTerraform(struct!.entryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDlpCustomProfileSharedEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDlpCustomProfileSharedEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryId = this._entryId;
    }
    if (this._entryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryType = this._entryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDlpCustomProfileSharedEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._entryId = undefined;
      this._entryType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._entryId = value.entryId;
      this._entryType = value.entryType;
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

  // entry_id - computed: false, optional: false, required: true
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
  }

  // entry_type - computed: false, optional: false, required: true
  private _entryType?: string; 
  public get entryType() {
    return this.getStringAttribute('entry_type');
  }
  public set entryType(value: string) {
    this._entryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryTypeInput() {
    return this._entryType;
  }
}

export class ZeroTrustDlpCustomProfileSharedEntriesList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDlpCustomProfileSharedEntries[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDlpCustomProfileSharedEntriesOutputReference {
    return new ZeroTrustDlpCustomProfileSharedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile}
*/
export class ZeroTrustDlpCustomProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_dlp_custom_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDlpCustomProfile to import
  * @param importFromId The id of the existing ZeroTrustDlpCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDlpCustomProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_custom_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDlpCustomProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDlpCustomProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_dlp_custom_profile',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._contextAwareness.internalValue = config.contextAwareness;
    this._description = config.description;
    this._entries.internalValue = config.entries;
    this._name = config.name;
    this._ocrEnabled = config.ocrEnabled;
    this._sharedEntries.internalValue = config.sharedEntries;
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

  // context_awareness - computed: false, optional: true, required: false
  private _contextAwareness = new ZeroTrustDlpCustomProfileContextAwarenessOutputReference(this, "context_awareness");
  public get contextAwareness() {
    return this._contextAwareness;
  }
  public putContextAwareness(value: ZeroTrustDlpCustomProfileContextAwareness) {
    this._contextAwareness.internalValue = value;
  }
  public resetContextAwareness() {
    this._contextAwareness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextAwarenessInput() {
    return this._contextAwareness.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // entries - computed: false, optional: true, required: false
  private _entries = new ZeroTrustDlpCustomProfileEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ZeroTrustDlpCustomProfileEntries[] | cdktf.IResolvable) {
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

  // shared_entries - computed: false, optional: true, required: false
  private _sharedEntries = new ZeroTrustDlpCustomProfileSharedEntriesList(this, "shared_entries", false);
  public get sharedEntries() {
    return this._sharedEntries;
  }
  public putSharedEntries(value: ZeroTrustDlpCustomProfileSharedEntries[] | cdktf.IResolvable) {
    this._sharedEntries.internalValue = value;
  }
  public resetSharedEntries() {
    this._sharedEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedEntriesInput() {
    return this._sharedEntries.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      context_awareness: zeroTrustDlpCustomProfileContextAwarenessToTerraform(this._contextAwareness.internalValue),
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(zeroTrustDlpCustomProfileEntriesToTerraform, false)(this._entries.internalValue),
      name: cdktf.stringToTerraform(this._name),
      ocr_enabled: cdktf.booleanToTerraform(this._ocrEnabled),
      shared_entries: cdktf.listMapper(zeroTrustDlpCustomProfileSharedEntriesToTerraform, false)(this._sharedEntries.internalValue),
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
      context_awareness: {
        value: zeroTrustDlpCustomProfileContextAwarenessToHclTerraform(this._contextAwareness.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustDlpCustomProfileContextAwareness",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(zeroTrustDlpCustomProfileEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustDlpCustomProfileEntriesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocr_enabled: {
        value: cdktf.booleanToHclTerraform(this._ocrEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_entries: {
        value: cdktf.listMapperHcl(zeroTrustDlpCustomProfileSharedEntriesToHclTerraform, false)(this._sharedEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustDlpCustomProfileSharedEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
