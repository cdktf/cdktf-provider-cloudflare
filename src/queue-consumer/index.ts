/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueConsumerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#account_id QueueConsumer#account_id}
  */
  readonly accountId: string;
  /**
  * A Resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#consumer_id QueueConsumer#consumer_id}
  */
  readonly consumerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}
  */
  readonly deadLetterQueue?: string;
  /**
  * A Resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#queue_id QueueConsumer#queue_id}
  */
  readonly queueId: string;
  /**
  * Name of a Worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#script_name QueueConsumer#script_name}
  */
  readonly scriptName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#settings QueueConsumer#settings}
  */
  readonly settings?: QueueConsumerSettings;
  /**
  * Available values: "worker", "http_pull".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#type QueueConsumer#type}
  */
  readonly type?: string;
}
export interface QueueConsumerSettings {
  /**
  * The maximum number of messages to include in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#batch_size QueueConsumer#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Maximum number of concurrent consumers that may consume from this Queue. Set to `null` to automatically opt in to the platform's maximum (recommended).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#max_concurrency QueueConsumer#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * The maximum number of retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#max_retries QueueConsumer#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The number of milliseconds to wait for a batch to fill up before attempting to deliver it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#max_wait_time_ms QueueConsumer#max_wait_time_ms}
  */
  readonly maxWaitTimeMs?: number;
  /**
  * The number of seconds to delay before making the message available for another attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#retry_delay QueueConsumer#retry_delay}
  */
  readonly retryDelay?: number;
  /**
  * The number of milliseconds that a message is exclusively leased. After the timeout, the message becomes available for another attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#visibility_timeout_ms QueueConsumer#visibility_timeout_ms}
  */
  readonly visibilityTimeoutMs?: number;
}

export function queueConsumerSettingsToTerraform(struct?: QueueConsumerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    max_wait_time_ms: cdktf.numberToTerraform(struct!.maxWaitTimeMs),
    retry_delay: cdktf.numberToTerraform(struct!.retryDelay),
    visibility_timeout_ms: cdktf.numberToTerraform(struct!.visibilityTimeoutMs),
  }
}


export function queueConsumerSettingsToHclTerraform(struct?: QueueConsumerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxWaitTimeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_delay: {
      value: cdktf.numberToHclTerraform(struct!.retryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visibility_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.visibilityTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueueConsumerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QueueConsumerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._maxWaitTimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeMs = this._maxWaitTimeMs;
    }
    if (this._retryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDelay = this._retryDelay;
    }
    if (this._visibilityTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityTimeoutMs = this._visibilityTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueConsumerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._maxConcurrency = undefined;
      this._maxRetries = undefined;
      this._maxWaitTimeMs = undefined;
      this._retryDelay = undefined;
      this._visibilityTimeoutMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._maxConcurrency = value.maxConcurrency;
      this._maxRetries = value.maxRetries;
      this._maxWaitTimeMs = value.maxWaitTimeMs;
      this._retryDelay = value.retryDelay;
      this._visibilityTimeoutMs = value.visibilityTimeoutMs;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // max_wait_time_ms - computed: false, optional: true, required: false
  private _maxWaitTimeMs?: number; 
  public get maxWaitTimeMs() {
    return this.getNumberAttribute('max_wait_time_ms');
  }
  public set maxWaitTimeMs(value: number) {
    this._maxWaitTimeMs = value;
  }
  public resetMaxWaitTimeMs() {
    this._maxWaitTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeMsInput() {
    return this._maxWaitTimeMs;
  }

  // retry_delay - computed: false, optional: true, required: false
  private _retryDelay?: number; 
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }
  public set retryDelay(value: number) {
    this._retryDelay = value;
  }
  public resetRetryDelay() {
    this._retryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayInput() {
    return this._retryDelay;
  }

  // visibility_timeout_ms - computed: false, optional: true, required: false
  private _visibilityTimeoutMs?: number; 
  public get visibilityTimeoutMs() {
    return this.getNumberAttribute('visibility_timeout_ms');
  }
  public set visibilityTimeoutMs(value: number) {
    this._visibilityTimeoutMs = value;
  }
  public resetVisibilityTimeoutMs() {
    this._visibilityTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutMsInput() {
    return this._visibilityTimeoutMs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer cloudflare_queue_consumer}
*/
export class QueueConsumer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_queue_consumer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueueConsumer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueueConsumer to import
  * @param importFromId The id of the existing QueueConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueueConsumer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue_consumer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/queue_consumer cloudflare_queue_consumer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: QueueConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_queue_consumer',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
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
    this._consumerId = config.consumerId;
    this._deadLetterQueue = config.deadLetterQueue;
    this._queueId = config.queueId;
    this._scriptName = config.scriptName;
    this._settings.internalValue = config.settings;
    this._type = config.type;
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

  // consumer_id - computed: false, optional: true, required: false
  private _consumerId?: string; 
  public get consumerId() {
    return this.getStringAttribute('consumer_id');
  }
  public set consumerId(value: string) {
    this._consumerId = value;
  }
  public resetConsumerId() {
    this._consumerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdInput() {
    return this._consumerId;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // dead_letter_queue - computed: false, optional: true, required: false
  private _deadLetterQueue?: string; 
  public get deadLetterQueue() {
    return this.getStringAttribute('dead_letter_queue');
  }
  public set deadLetterQueue(value: string) {
    this._deadLetterQueue = value;
  }
  public resetDeadLetterQueue() {
    this._deadLetterQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueInput() {
    return this._deadLetterQueue;
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // script_name - computed: false, optional: true, required: false
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  public resetScriptName() {
    this._scriptName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new QueueConsumerSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: QueueConsumerSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      dead_letter_queue: cdktf.stringToTerraform(this._deadLetterQueue),
      queue_id: cdktf.stringToTerraform(this._queueId),
      script_name: cdktf.stringToTerraform(this._scriptName),
      settings: queueConsumerSettingsToTerraform(this._settings.internalValue),
      type: cdktf.stringToTerraform(this._type),
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
      consumer_id: {
        value: cdktf.stringToHclTerraform(this._consumerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_letter_queue: {
        value: cdktf.stringToHclTerraform(this._deadLetterQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_name: {
        value: cdktf.stringToHclTerraform(this._scriptName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: queueConsumerSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QueueConsumerSettings",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
