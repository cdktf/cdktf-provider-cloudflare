/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface R2BucketLifecycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#account_id R2BucketLifecycle#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#bucket_name R2BucketLifecycle#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Jurisdiction of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#jurisdiction R2BucketLifecycle#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#rules R2BucketLifecycle#rules}
  */
  readonly rules?: R2BucketLifecycleRules[] | cdktf.IResolvable;
}
export interface R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}
  */
  readonly maxAge: number;
  /**
  * Available values: "Age".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}
  */
  readonly type: string;
}

export function r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct?: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct?: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxAge = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxAge = value.maxAge;
      this._type = value.type;
    }
  }

  // max_age - computed: true, optional: false, required: true
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface R2BucketLifecycleRulesAbortMultipartUploadsTransition {
  /**
  * Condition for lifecycle transitions to apply after an object reaches an age in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}
  */
  readonly condition?: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition;
}

export function r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct?: R2BucketLifecycleRulesAbortMultipartUploadsTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct!.condition),
  }
}


export function r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct?: R2BucketLifecycleRulesAbortMultipartUploadsTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2BucketLifecycleRulesAbortMultipartUploadsTransition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketLifecycleRulesAbortMultipartUploadsTransition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition = new R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface R2BucketLifecycleRulesConditions {
  /**
  * Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#prefix R2BucketLifecycle#prefix}
  */
  readonly prefix: string;
}

export function r2BucketLifecycleRulesConditionsToTerraform(struct?: R2BucketLifecycleRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function r2BucketLifecycleRulesConditionsToHclTerraform(struct?: R2BucketLifecycleRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketLifecycleRulesConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2BucketLifecycleRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketLifecycleRulesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
    }
  }

  // prefix - computed: true, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface R2BucketLifecycleRulesDeleteObjectsTransitionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}
  */
  readonly maxAge?: number;
  /**
  * Available values: "Age".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}
  */
  readonly type: string;
}

export function r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct?: R2BucketLifecycleRulesDeleteObjectsTransitionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct?: R2BucketLifecycleRulesDeleteObjectsTransitionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2BucketLifecycleRulesDeleteObjectsTransitionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketLifecycleRulesDeleteObjectsTransitionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._maxAge = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._maxAge = value.maxAge;
      this._type = value.type;
    }
  }

  // date - computed: true, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface R2BucketLifecycleRulesDeleteObjectsTransition {
  /**
  * Condition for lifecycle transitions to apply after an object reaches an age in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}
  */
  readonly condition?: R2BucketLifecycleRulesDeleteObjectsTransitionCondition;
}

export function r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct?: R2BucketLifecycleRulesDeleteObjectsTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct!.condition),
  }
}


export function r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct?: R2BucketLifecycleRulesDeleteObjectsTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "R2BucketLifecycleRulesDeleteObjectsTransitionCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2BucketLifecycleRulesDeleteObjectsTransition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketLifecycleRulesDeleteObjectsTransition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition = new R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: R2BucketLifecycleRulesDeleteObjectsTransitionCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface R2BucketLifecycleRulesStorageClassTransitionsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}
  */
  readonly maxAge?: number;
  /**
  * Available values: "Age".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}
  */
  readonly type: string;
}

export function r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct?: R2BucketLifecycleRulesStorageClassTransitionsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct?: R2BucketLifecycleRulesStorageClassTransitionsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2BucketLifecycleRulesStorageClassTransitionsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketLifecycleRulesStorageClassTransitionsCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._date = undefined;
      this._maxAge = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._date = value.date;
      this._maxAge = value.maxAge;
      this._type = value.type;
    }
  }

  // date - computed: true, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface R2BucketLifecycleRulesStorageClassTransitions {
  /**
  * Condition for lifecycle transitions to apply after an object reaches an age in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}
  */
  readonly condition: R2BucketLifecycleRulesStorageClassTransitionsCondition;
  /**
  * Available values: "InfrequentAccess".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#storage_class R2BucketLifecycle#storage_class}
  */
  readonly storageClass: string;
}

export function r2BucketLifecycleRulesStorageClassTransitionsToTerraform(struct?: R2BucketLifecycleRulesStorageClassTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct!.condition),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform(struct?: R2BucketLifecycleRulesStorageClassTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "R2BucketLifecycleRulesStorageClassTransitionsCondition",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketLifecycleRulesStorageClassTransitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): R2BucketLifecycleRulesStorageClassTransitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketLifecycleRulesStorageClassTransitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._storageClass = value.storageClass;
    }
  }

  // condition - computed: true, optional: false, required: true
  private _condition = new R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: R2BucketLifecycleRulesStorageClassTransitionsCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // storage_class - computed: true, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class R2BucketLifecycleRulesStorageClassTransitionsList extends cdktf.ComplexList {
  public internalValue? : R2BucketLifecycleRulesStorageClassTransitions[] | cdktf.IResolvable

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
  public get(index: number): R2BucketLifecycleRulesStorageClassTransitionsOutputReference {
    return new R2BucketLifecycleRulesStorageClassTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface R2BucketLifecycleRules {
  /**
  * Transition to abort ongoing multipart uploads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#abort_multipart_uploads_transition R2BucketLifecycle#abort_multipart_uploads_transition}
  */
  readonly abortMultipartUploadsTransition?: R2BucketLifecycleRulesAbortMultipartUploadsTransition;
  /**
  * Conditions that apply to all transitions of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#conditions R2BucketLifecycle#conditions}
  */
  readonly conditions: R2BucketLifecycleRulesConditions;
  /**
  * Transition to delete objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#delete_objects_transition R2BucketLifecycle#delete_objects_transition}
  */
  readonly deleteObjectsTransition?: R2BucketLifecycleRulesDeleteObjectsTransition;
  /**
  * Whether or not this rule is in effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#enabled R2BucketLifecycle#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Unique identifier for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#id R2BucketLifecycle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Transitions to change the storage class of objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#storage_class_transitions R2BucketLifecycle#storage_class_transitions}
  */
  readonly storageClassTransitions?: R2BucketLifecycleRulesStorageClassTransitions[] | cdktf.IResolvable;
}

export function r2BucketLifecycleRulesToTerraform(struct?: R2BucketLifecycleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_multipart_uploads_transition: r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct!.abortMultipartUploadsTransition),
    conditions: r2BucketLifecycleRulesConditionsToTerraform(struct!.conditions),
    delete_objects_transition: r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct!.deleteObjectsTransition),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    storage_class_transitions: cdktf.listMapper(r2BucketLifecycleRulesStorageClassTransitionsToTerraform, false)(struct!.storageClassTransitions),
  }
}


export function r2BucketLifecycleRulesToHclTerraform(struct?: R2BucketLifecycleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort_multipart_uploads_transition: {
      value: r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct!.abortMultipartUploadsTransition),
      isBlock: true,
      type: "struct",
      storageClassType: "R2BucketLifecycleRulesAbortMultipartUploadsTransition",
    },
    conditions: {
      value: r2BucketLifecycleRulesConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "struct",
      storageClassType: "R2BucketLifecycleRulesConditions",
    },
    delete_objects_transition: {
      value: r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct!.deleteObjectsTransition),
      isBlock: true,
      type: "struct",
      storageClassType: "R2BucketLifecycleRulesDeleteObjectsTransition",
    },
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
    storage_class_transitions: {
      value: cdktf.listMapperHcl(r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform, false)(struct!.storageClassTransitions),
      isBlock: true,
      type: "list",
      storageClassType: "R2BucketLifecycleRulesStorageClassTransitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketLifecycleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): R2BucketLifecycleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortMultipartUploadsTransition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortMultipartUploadsTransition = this._abortMultipartUploadsTransition?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._deleteObjectsTransition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteObjectsTransition = this._deleteObjectsTransition?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._storageClassTransitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassTransitions = this._storageClassTransitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketLifecycleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortMultipartUploadsTransition.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._deleteObjectsTransition.internalValue = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._storageClassTransitions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortMultipartUploadsTransition.internalValue = value.abortMultipartUploadsTransition;
      this._conditions.internalValue = value.conditions;
      this._deleteObjectsTransition.internalValue = value.deleteObjectsTransition;
      this._enabled = value.enabled;
      this._id = value.id;
      this._storageClassTransitions.internalValue = value.storageClassTransitions;
    }
  }

  // abort_multipart_uploads_transition - computed: true, optional: true, required: false
  private _abortMultipartUploadsTransition = new R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(this, "abort_multipart_uploads_transition");
  public get abortMultipartUploadsTransition() {
    return this._abortMultipartUploadsTransition;
  }
  public putAbortMultipartUploadsTransition(value: R2BucketLifecycleRulesAbortMultipartUploadsTransition) {
    this._abortMultipartUploadsTransition.internalValue = value;
  }
  public resetAbortMultipartUploadsTransition() {
    this._abortMultipartUploadsTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortMultipartUploadsTransitionInput() {
    return this._abortMultipartUploadsTransition.internalValue;
  }

  // conditions - computed: true, optional: false, required: true
  private _conditions = new R2BucketLifecycleRulesConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: R2BucketLifecycleRulesConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // delete_objects_transition - computed: true, optional: true, required: false
  private _deleteObjectsTransition = new R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(this, "delete_objects_transition");
  public get deleteObjectsTransition() {
    return this._deleteObjectsTransition;
  }
  public putDeleteObjectsTransition(value: R2BucketLifecycleRulesDeleteObjectsTransition) {
    this._deleteObjectsTransition.internalValue = value;
  }
  public resetDeleteObjectsTransition() {
    this._deleteObjectsTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObjectsTransitionInput() {
    return this._deleteObjectsTransition.internalValue;
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

  // storage_class_transitions - computed: true, optional: true, required: false
  private _storageClassTransitions = new R2BucketLifecycleRulesStorageClassTransitionsList(this, "storage_class_transitions", false);
  public get storageClassTransitions() {
    return this._storageClassTransitions;
  }
  public putStorageClassTransitions(value: R2BucketLifecycleRulesStorageClassTransitions[] | cdktf.IResolvable) {
    this._storageClassTransitions.internalValue = value;
  }
  public resetStorageClassTransitions() {
    this._storageClassTransitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassTransitionsInput() {
    return this._storageClassTransitions.internalValue;
  }
}

export class R2BucketLifecycleRulesList extends cdktf.ComplexList {
  public internalValue? : R2BucketLifecycleRules[] | cdktf.IResolvable

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
  public get(index: number): R2BucketLifecycleRulesOutputReference {
    return new R2BucketLifecycleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}
*/
export class R2BucketLifecycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_r2_bucket_lifecycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a R2BucketLifecycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the R2BucketLifecycle to import
  * @param importFromId The id of the existing R2BucketLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the R2BucketLifecycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_lifecycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options R2BucketLifecycleConfig
  */
  public constructor(scope: Construct, id: string, config: R2BucketLifecycleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_r2_bucket_lifecycle',
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
    this._accountId = config.accountId;
    this._bucketName = config.bucketName;
    this._jurisdiction = config.jurisdiction;
    this._rules.internalValue = config.rules;
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

  // jurisdiction - computed: true, optional: true, required: false
  private _jurisdiction?: string; 
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }
  public set jurisdiction(value: string) {
    this._jurisdiction = value;
  }
  public resetJurisdiction() {
    this._jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jurisdictionInput() {
    return this._jurisdiction;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new R2BucketLifecycleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: R2BucketLifecycleRules[] | cdktf.IResolvable) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
      rules: cdktf.listMapper(r2BucketLifecycleRulesToTerraform, false)(this._rules.internalValue),
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
      jurisdiction: {
        value: cdktf.stringToHclTerraform(this._jurisdiction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(r2BucketLifecycleRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "R2BucketLifecycleRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
