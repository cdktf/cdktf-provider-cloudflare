// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareApiShieldOperationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Direction to order results.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#direction DataCloudflareApiShieldOperations#direction}
  */
  readonly direction?: string;
  /**
  * Filter results to only include endpoints containing this pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#endpoint DataCloudflareApiShieldOperations#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#feature DataCloudflareApiShieldOperations#feature}
  */
  readonly feature?: string[];
  /**
  * Filter results to only include the specified hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#host DataCloudflareApiShieldOperations#host}
  */
  readonly host?: string[];
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#max_items DataCloudflareApiShieldOperations#max_items}
  */
  readonly maxItems?: number;
  /**
  * Filter results to only include the specified HTTP methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#method DataCloudflareApiShieldOperations#method}
  */
  readonly method?: string[];
  /**
  * Field to order by. When requesting a feature, the feature keys are available for ordering as well, e.g., `thresholds.suggested_threshold`.
  * Available values: "method", "host", "endpoint", "thresholds.$key".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#order DataCloudflareApiShieldOperations#order}
  */
  readonly order?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#zone_id DataCloudflareApiShieldOperations#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesApiRouting {
}

export function dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesApiRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesApiRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesApiRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesApiRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 {
}

export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lower - computed: true, optional: false, required: false
  public get lower() {
    return this.getNumberAttribute('lower');
  }

  // upper - computed: true, optional: false, required: false
  public get upper() {
    return this.getNumberAttribute('upper');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 {
}

export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lower - computed: true, optional: false, required: false
  public get lower() {
    return this.getNumberAttribute('lower');
  }

  // upper - computed: true, optional: false, required: false
  public get upper() {
    return this.getNumberAttribute('upper');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 {
}

export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lower - computed: true, optional: false, required: false
  public get lower() {
    return this.getNumberAttribute('lower');
  }

  // upper - computed: true, optional: false, required: false
  public get upper() {
    return this.getNumberAttribute('upper');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals {
}

export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // p90 - computed: true, optional: false, required: false
  private _p90 = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(this, "p90");
  public get p90() {
    return this._p90;
  }

  // p95 - computed: true, optional: false, required: false
  private _p95 = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(this, "p95");
  public get p95() {
    return this._p95;
  }

  // p99 - computed: true, optional: false, required: false
  private _p99 = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(this, "p99");
  public get p99() {
    return this._p99;
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold {
}

export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidence_intervals - computed: true, optional: false, required: false
  private _confidenceIntervals = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(this, "confidence_intervals");
  public get confidenceIntervals() {
    return this._confidenceIntervals;
  }

  // mean - computed: true, optional: false, required: false
  public get mean() {
    return this.getNumberAttribute('mean');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals {
}

export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // suggested_threshold - computed: true, optional: false, required: false
  private _suggestedThreshold = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(this, "suggested_threshold");
  public get suggestedThreshold() {
    return this._suggestedThreshold;
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas {
}

export function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getListAttribute('parameters');
  }

  // responses - computed: true, optional: false, required: false
  public get responses() {
    return this.getStringAttribute('responses');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas {
}

export function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameter_schemas - computed: true, optional: false, required: false
  private _parameterSchemas = new DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference(this, "parameter_schemas");
  public get parameterSchemas() {
    return this._parameterSchemas;
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema {
}

export function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_learned - computed: true, optional: false, required: false
  public get isLearned() {
    return this.getBooleanAttribute('is_learned');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo {
}

export function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_schema - computed: true, optional: false, required: false
  private _activeSchema = new DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference(this, "active_schema");
  public get activeSchema() {
    return this._activeSchema;
  }

  // learned_available - computed: true, optional: false, required: false
  public get learnedAvailable() {
    return this.getBooleanAttribute('learned_available');
  }

  // mitigation_action - computed: true, optional: false, required: false
  public get mitigationAction() {
    return this.getStringAttribute('mitigation_action');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeaturesThresholds {
}

export function dataCloudflareApiShieldOperationsResultFeaturesThresholdsToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesThresholdsToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_id_tokens - computed: true, optional: false, required: false
  public get authIdTokens() {
    return this.getNumberAttribute('auth_id_tokens');
  }

  // data_points - computed: true, optional: false, required: false
  public get dataPoints() {
    return this.getNumberAttribute('data_points');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // p50 - computed: true, optional: false, required: false
  public get p50() {
    return this.getNumberAttribute('p50');
  }

  // p90 - computed: true, optional: false, required: false
  public get p90() {
    return this.getNumberAttribute('p90');
  }

  // p99 - computed: true, optional: false, required: false
  public get p99() {
    return this.getNumberAttribute('p99');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // requests - computed: true, optional: false, required: false
  public get requests() {
    return this.getNumberAttribute('requests');
  }

  // suggested_threshold - computed: true, optional: false, required: false
  public get suggestedThreshold() {
    return this.getNumberAttribute('suggested_threshold');
  }
}
export interface DataCloudflareApiShieldOperationsResultFeatures {
}

export function dataCloudflareApiShieldOperationsResultFeaturesToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultFeaturesToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareApiShieldOperationsResultFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResultFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_routing - computed: true, optional: false, required: false
  private _apiRouting = new DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference(this, "api_routing");
  public get apiRouting() {
    return this._apiRouting;
  }

  // confidence_intervals - computed: true, optional: false, required: false
  private _confidenceIntervals = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference(this, "confidence_intervals");
  public get confidenceIntervals() {
    return this._confidenceIntervals;
  }

  // parameter_schemas - computed: true, optional: false, required: false
  private _parameterSchemas = new DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference(this, "parameter_schemas");
  public get parameterSchemas() {
    return this._parameterSchemas;
  }

  // schema_info - computed: true, optional: false, required: false
  private _schemaInfo = new DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference(this, "schema_info");
  public get schemaInfo() {
    return this._schemaInfo;
  }

  // thresholds - computed: true, optional: false, required: false
  private _thresholds = new DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
}
export interface DataCloudflareApiShieldOperationsResult {
}

export function dataCloudflareApiShieldOperationsResultToTerraform(struct?: DataCloudflareApiShieldOperationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareApiShieldOperationsResultToHclTerraform(struct?: DataCloudflareApiShieldOperationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareApiShieldOperationsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareApiShieldOperationsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareApiShieldOperationsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // features - computed: true, optional: false, required: false
  private _features = new DataCloudflareApiShieldOperationsResultFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // operation_id - computed: true, optional: false, required: false
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }
}

export class DataCloudflareApiShieldOperationsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareApiShieldOperationsResultOutputReference {
    return new DataCloudflareApiShieldOperationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations cloudflare_api_shield_operations}
*/
export class DataCloudflareApiShieldOperations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_shield_operations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareApiShieldOperations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldOperations to import
  * @param importFromId The id of the existing DataCloudflareApiShieldOperations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareApiShieldOperations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_operations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operations cloudflare_api_shield_operations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareApiShieldOperationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareApiShieldOperationsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_shield_operations',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.4.0',
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
    this._direction = config.direction;
    this._endpoint = config.endpoint;
    this._feature = config.feature;
    this._host = config.host;
    this._maxItems = config.maxItems;
    this._method = config.method;
    this._order = config.order;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // feature - computed: false, optional: true, required: false
  private _feature?: string[]; 
  public get feature() {
    return this.getListAttribute('feature');
  }
  public set feature(value: string[]) {
    this._feature = value;
  }
  public resetFeature() {
    this._feature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string[]; 
  public get host() {
    return this.getListAttribute('host');
  }
  public set host(value: string[]) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[]; 
  public get method() {
    return this.getListAttribute('method');
  }
  public set method(value: string[]) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareApiShieldOperationsResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      feature: cdktf.listMapper(cdktf.stringToTerraform, false)(this._feature),
      host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._host),
      max_items: cdktf.numberToTerraform(this._maxItems),
      method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._method),
      order: cdktf.stringToTerraform(this._order),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._feature),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      host: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._host),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      method: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._method),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
