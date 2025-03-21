// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue#account_id Queue#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue#queue_name Queue#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue#settings Queue#settings}
  */
  readonly settings?: QueueSettings;
}
export interface QueueConsumersSettings {
}

export function queueConsumersSettingsToTerraform(struct?: QueueConsumersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function queueConsumersSettingsToHclTerraform(struct?: QueueConsumersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class QueueConsumersSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QueueConsumersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueConsumersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }

  // max_wait_time_ms - computed: true, optional: false, required: false
  public get maxWaitTimeMs() {
    return this.getNumberAttribute('max_wait_time_ms');
  }

  // retry_delay - computed: true, optional: false, required: false
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }

  // visibility_timeout_ms - computed: true, optional: false, required: false
  public get visibilityTimeoutMs() {
    return this.getNumberAttribute('visibility_timeout_ms');
  }
}
export interface QueueConsumers {
}

export function queueConsumersToTerraform(struct?: QueueConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function queueConsumersToHclTerraform(struct?: QueueConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class QueueConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueueConsumers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueConsumers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_id - computed: true, optional: false, required: false
  public get consumerId() {
    return this.getStringAttribute('consumer_id');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // script_name - computed: true, optional: false, required: false
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new QueueConsumersSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class QueueConsumersList extends cdktf.ComplexList {

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
  public get(index: number): QueueConsumersOutputReference {
    return new QueueConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueueProducers {
}

export function queueProducersToTerraform(struct?: QueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function queueProducersToHclTerraform(struct?: QueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class QueueProducersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueueProducers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueProducers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class QueueProducersList extends cdktf.ComplexList {

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
  public get(index: number): QueueProducersOutputReference {
    return new QueueProducersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueueSettings {
  /**
  * Number of seconds to delay delivery of all messages to consumers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue#delivery_delay Queue#delivery_delay}
  */
  readonly deliveryDelay?: number;
  /**
  * Number of seconds after which an unconsumed message will be delayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue#message_retention_period Queue#message_retention_period}
  */
  readonly messageRetentionPeriod?: number;
}

export function queueSettingsToTerraform(struct?: QueueSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_delay: cdktf.numberToTerraform(struct!.deliveryDelay),
    message_retention_period: cdktf.numberToTerraform(struct!.messageRetentionPeriod),
  }
}


export function queueSettingsToHclTerraform(struct?: QueueSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery_delay: {
      value: cdktf.numberToHclTerraform(struct!.deliveryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.messageRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueueSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QueueSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryDelay = this._deliveryDelay;
    }
    if (this._messageRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRetentionPeriod = this._messageRetentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryDelay = undefined;
      this._messageRetentionPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryDelay = value.deliveryDelay;
      this._messageRetentionPeriod = value.messageRetentionPeriod;
    }
  }

  // delivery_delay - computed: true, optional: true, required: false
  private _deliveryDelay?: number; 
  public get deliveryDelay() {
    return this.getNumberAttribute('delivery_delay');
  }
  public set deliveryDelay(value: number) {
    this._deliveryDelay = value;
  }
  public resetDeliveryDelay() {
    this._deliveryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryDelayInput() {
    return this._deliveryDelay;
  }

  // message_retention_period - computed: true, optional: true, required: false
  private _messageRetentionPeriod?: number; 
  public get messageRetentionPeriod() {
    return this.getNumberAttribute('message_retention_period');
  }
  public set messageRetentionPeriod(value: number) {
    this._messageRetentionPeriod = value;
  }
  public resetMessageRetentionPeriod() {
    this._messageRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionPeriodInput() {
    return this._messageRetentionPeriod;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue cloudflare_queue}
*/
export class Queue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Queue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Queue to import
  * @param importFromId The id of the existing Queue that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Queue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/queue cloudflare_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueConfig
  */
  public constructor(scope: Construct, id: string, config: QueueConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_queue',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.2.0',
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
    this._queueName = config.queueName;
    this._settings.internalValue = config.settings;
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

  // consumers - computed: true, optional: false, required: false
  private _consumers = new QueueConsumersList(this, "consumers", false);
  public get consumers() {
    return this._consumers;
  }

  // consumers_total_count - computed: true, optional: false, required: false
  public get consumersTotalCount() {
    return this.getNumberAttribute('consumers_total_count');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // producers - computed: true, optional: false, required: false
  private _producers = new QueueProducersList(this, "producers", false);
  public get producers() {
    return this._producers;
  }

  // producers_total_count - computed: true, optional: false, required: false
  public get producersTotalCount() {
    return this.getNumberAttribute('producers_total_count');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new QueueSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: QueueSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      queue_name: cdktf.stringToTerraform(this._queueName),
      settings: queueSettingsToTerraform(this._settings.internalValue),
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
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: queueSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QueueSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
