/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#account_id Worker#account_id}
  */
  readonly accountId: string;
  /**
  * Whether logpush is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#logpush Worker#logpush}
  */
  readonly logpush?: boolean | cdktf.IResolvable;
  /**
  * Name of the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#name Worker#name}
  */
  readonly name: string;
  /**
  * Observability settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#observability Worker#observability}
  */
  readonly observability?: WorkerObservability;
  /**
  * Subdomain settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#subdomain Worker#subdomain}
  */
  readonly subdomain?: WorkerSubdomain;
  /**
  * Tags associated with the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#tags Worker#tags}
  */
  readonly tags?: string[];
  /**
  * Other Workers that should consume logs from the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#tail_consumers Worker#tail_consumers}
  */
  readonly tailConsumers?: WorkerTailConsumers[] | cdktf.IResolvable;
}
export interface WorkerObservabilityLogs {
  /**
  * Whether logs are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#invocation_logs Worker#invocation_logs}
  */
  readonly invocationLogs?: boolean | cdktf.IResolvable;
}

export function workerObservabilityLogsToTerraform(struct?: WorkerObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    invocation_logs: cdktf.booleanToTerraform(struct!.invocationLogs),
  }
}


export function workerObservabilityLogsToHclTerraform(struct?: WorkerObservabilityLogs | cdktf.IResolvable): any {
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
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invocation_logs: {
      value: cdktf.booleanToHclTerraform(struct!.invocationLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerObservabilityLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerObservabilityLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._invocationLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationLogs = this._invocationLogs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerObservabilityLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._invocationLogs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._invocationLogs = value.invocationLogs;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // head_sampling_rate - computed: true, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // invocation_logs - computed: true, optional: true, required: false
  private _invocationLogs?: boolean | cdktf.IResolvable; 
  public get invocationLogs() {
    return this.getBooleanAttribute('invocation_logs');
  }
  public set invocationLogs(value: boolean | cdktf.IResolvable) {
    this._invocationLogs = value;
  }
  public resetInvocationLogs() {
    this._invocationLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationLogsInput() {
    return this._invocationLogs;
  }
}
export interface WorkerObservability {
  /**
  * Whether observability is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Log settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#logs Worker#logs}
  */
  readonly logs?: WorkerObservabilityLogs;
}

export function workerObservabilityToTerraform(struct?: WorkerObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    logs: workerObservabilityLogsToTerraform(struct!.logs),
  }
}


export function workerObservabilityToHclTerraform(struct?: WorkerObservability | cdktf.IResolvable): any {
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
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logs: {
      value: workerObservabilityLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerObservabilityLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._logs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._logs.internalValue = value.logs;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // head_sampling_rate - computed: true, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new WorkerObservabilityLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: WorkerObservabilityLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }
}
export interface WorkerSubdomain {
  /**
  * Whether the *.workers.dev subdomain is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#previews_enabled Worker#previews_enabled}
  */
  readonly previewsEnabled?: boolean | cdktf.IResolvable;
}

export function workerSubdomainToTerraform(struct?: WorkerSubdomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    previews_enabled: cdktf.booleanToTerraform(struct!.previewsEnabled),
  }
}


export function workerSubdomainToHclTerraform(struct?: WorkerSubdomain | cdktf.IResolvable): any {
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
    previews_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.previewsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerSubdomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerSubdomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._previewsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewsEnabled = this._previewsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerSubdomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._previewsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._previewsEnabled = value.previewsEnabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // previews_enabled - computed: true, optional: true, required: false
  private _previewsEnabled?: boolean | cdktf.IResolvable; 
  public get previewsEnabled() {
    return this.getBooleanAttribute('previews_enabled');
  }
  public set previewsEnabled(value: boolean | cdktf.IResolvable) {
    this._previewsEnabled = value;
  }
  public resetPreviewsEnabled() {
    this._previewsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewsEnabledInput() {
    return this._previewsEnabled;
  }
}
export interface WorkerTailConsumers {
  /**
  * Name of the consumer Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#name Worker#name}
  */
  readonly name: string;
}

export function workerTailConsumersToTerraform(struct?: WorkerTailConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workerTailConsumersToHclTerraform(struct?: WorkerTailConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerTailConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerTailConsumers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerTailConsumers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}

export class WorkerTailConsumersList extends cdktf.ComplexList {
  public internalValue? : WorkerTailConsumers[] | cdktf.IResolvable

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
  public get(index: number): WorkerTailConsumersOutputReference {
    return new WorkerTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker cloudflare_worker}
*/
export class Worker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_worker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Worker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Worker to import
  * @param importFromId The id of the existing Worker that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Worker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker cloudflare_worker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkerConfig
  */
  public constructor(scope: Construct, id: string, config: WorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.10.1',
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
    this._logpush = config.logpush;
    this._name = config.name;
    this._observability.internalValue = config.observability;
    this._subdomain.internalValue = config.subdomain;
    this._tags = config.tags;
    this._tailConsumers.internalValue = config.tailConsumers;
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logpush - computed: true, optional: true, required: false
  private _logpush?: boolean | cdktf.IResolvable; 
  public get logpush() {
    return this.getBooleanAttribute('logpush');
  }
  public set logpush(value: boolean | cdktf.IResolvable) {
    this._logpush = value;
  }
  public resetLogpush() {
    this._logpush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logpushInput() {
    return this._logpush;
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

  // observability - computed: true, optional: true, required: false
  private _observability = new WorkerObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: WorkerObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // subdomain - computed: true, optional: true, required: false
  private _subdomain = new WorkerSubdomainOutputReference(this, "subdomain");
  public get subdomain() {
    return this._subdomain;
  }
  public putSubdomain(value: WorkerSubdomain) {
    this._subdomain.internalValue = value;
  }
  public resetSubdomain() {
    this._subdomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tail_consumers - computed: true, optional: true, required: false
  private _tailConsumers = new WorkerTailConsumersList(this, "tail_consumers", true);
  public get tailConsumers() {
    return this._tailConsumers;
  }
  public putTailConsumers(value: WorkerTailConsumers[] | cdktf.IResolvable) {
    this._tailConsumers.internalValue = value;
  }
  public resetTailConsumers() {
    this._tailConsumers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailConsumersInput() {
    return this._tailConsumers.internalValue;
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      logpush: cdktf.booleanToTerraform(this._logpush),
      name: cdktf.stringToTerraform(this._name),
      observability: workerObservabilityToTerraform(this._observability.internalValue),
      subdomain: workerSubdomainToTerraform(this._subdomain.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tail_consumers: cdktf.listMapper(workerTailConsumersToTerraform, false)(this._tailConsumers.internalValue),
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
      logpush: {
        value: cdktf.booleanToHclTerraform(this._logpush),
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
      observability: {
        value: workerObservabilityToHclTerraform(this._observability.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerObservability",
      },
      subdomain: {
        value: workerSubdomainToHclTerraform(this._subdomain.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerSubdomain",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tail_consumers: {
        value: cdktf.listMapperHcl(workerTailConsumersToHclTerraform, false)(this._tailConsumers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerTailConsumersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
