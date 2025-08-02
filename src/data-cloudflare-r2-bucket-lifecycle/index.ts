/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareR2BucketLifecycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle#account_id DataCloudflareR2BucketLifecycle#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle#bucket_name DataCloudflareR2BucketLifecycle#bucket_name}
  */
  readonly bucketName: string;
}
export interface DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition {
}

export function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition {
}

export function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
}
export interface DataCloudflareR2BucketLifecycleRulesConditions {
}

export function dataCloudflareR2BucketLifecycleRulesConditionsToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareR2BucketLifecycleRulesConditionsToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareR2BucketLifecycleRulesConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareR2BucketLifecycleRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareR2BucketLifecycleRulesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition {
}

export function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition {
}

export function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
}
export interface DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition {
}

export function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareR2BucketLifecycleRulesStorageClassTransitions {
}

export function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesStorageClassTransitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesStorageClassTransitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareR2BucketLifecycleRulesStorageClassTransitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareR2BucketLifecycleRulesStorageClassTransitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}

export class DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference {
    return new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareR2BucketLifecycleRules {
}

export function dataCloudflareR2BucketLifecycleRulesToTerraform(struct?: DataCloudflareR2BucketLifecycleRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareR2BucketLifecycleRulesToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareR2BucketLifecycleRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareR2BucketLifecycleRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareR2BucketLifecycleRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_multipart_uploads_transition - computed: true, optional: false, required: false
  private _abortMultipartUploadsTransition = new DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(this, "abort_multipart_uploads_transition");
  public get abortMultipartUploadsTransition() {
    return this._abortMultipartUploadsTransition;
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataCloudflareR2BucketLifecycleRulesConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }

  // delete_objects_transition - computed: true, optional: false, required: false
  private _deleteObjectsTransition = new DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(this, "delete_objects_transition");
  public get deleteObjectsTransition() {
    return this._deleteObjectsTransition;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_class_transitions - computed: true, optional: false, required: false
  private _storageClassTransitions = new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList(this, "storage_class_transitions", false);
  public get storageClassTransitions() {
    return this._storageClassTransitions;
  }
}

export class DataCloudflareR2BucketLifecycleRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareR2BucketLifecycleRulesOutputReference {
    return new DataCloudflareR2BucketLifecycleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}
*/
export class DataCloudflareR2BucketLifecycle extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_r2_bucket_lifecycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareR2BucketLifecycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketLifecycle to import
  * @param importFromId The id of the existing DataCloudflareR2BucketLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareR2BucketLifecycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_lifecycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareR2BucketLifecycleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareR2BucketLifecycleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_r2_bucket_lifecycle',
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
    this._bucketName = config.bucketName;
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

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCloudflareR2BucketLifecycleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
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
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
