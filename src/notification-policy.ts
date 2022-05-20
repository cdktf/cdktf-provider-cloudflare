// https://www.terraform.io/docs/providers/cloudflare/r/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#account_id NotificationPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#alert_type NotificationPolicy#alert_type}
  */
  readonly alertType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#description NotificationPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#name NotificationPolicy#name}
  */
  readonly name: string;
  /**
  * email_integration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#email_integration NotificationPolicy#email_integration}
  */
  readonly emailIntegration?: NotificationPolicyEmailIntegration[] | cdktf.IResolvable;
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#filters NotificationPolicy#filters}
  */
  readonly filters?: NotificationPolicyFilters;
  /**
  * pagerduty_integration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#pagerduty_integration NotificationPolicy#pagerduty_integration}
  */
  readonly pagerdutyIntegration?: NotificationPolicyPagerdutyIntegration[] | cdktf.IResolvable;
  /**
  * webhooks_integration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#webhooks_integration NotificationPolicy#webhooks_integration}
  */
  readonly webhooksIntegration?: NotificationPolicyWebhooksIntegration[] | cdktf.IResolvable;
}
export interface NotificationPolicyEmailIntegration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#id NotificationPolicy#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#name NotificationPolicy#name}
  */
  readonly name?: string;
}

export function notificationPolicyEmailIntegrationToTerraform(struct?: NotificationPolicyEmailIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface NotificationPolicyFilters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#health_check_id NotificationPolicy#health_check_id}
  */
  readonly healthCheckId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#limit NotificationPolicy#limit}
  */
  readonly limit?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#pool_id NotificationPolicy#pool_id}
  */
  readonly poolId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#product NotificationPolicy#product}
  */
  readonly product?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#services NotificationPolicy#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#slo NotificationPolicy#slo}
  */
  readonly slo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#status NotificationPolicy#status}
  */
  readonly status?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#zones NotificationPolicy#zones}
  */
  readonly zones?: string[];
}

export function notificationPolicyFiltersToTerraform(struct?: NotificationPolicyFiltersOutputReference | NotificationPolicyFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.listMapper(cdktf.stringToTerraform)(struct!.enabled),
    health_check_id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.healthCheckId),
    limit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.limit),
    pool_id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.poolId),
    product: cdktf.listMapper(cdktf.stringToTerraform)(struct!.product),
    services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.services),
    slo: cdktf.listMapper(cdktf.stringToTerraform)(struct!.slo),
    status: cdktf.listMapper(cdktf.stringToTerraform)(struct!.status),
    zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.zones),
  }
}

export class NotificationPolicyFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._healthCheckId !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckId = this._healthCheckId;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._slo !== undefined) {
      hasAnyValues = true;
      internalValueResult.slo = this._slo;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._healthCheckId = undefined;
      this._limit = undefined;
      this._poolId = undefined;
      this._product = undefined;
      this._services = undefined;
      this._slo = undefined;
      this._status = undefined;
      this._zones = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._healthCheckId = value.healthCheckId;
      this._limit = value.limit;
      this._poolId = value.poolId;
      this._product = value.product;
      this._services = value.services;
      this._slo = value.slo;
      this._status = value.status;
      this._zones = value.zones;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string[]; 
  public get enabled() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled'));
  }
  public set enabled(value: string[]) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // health_check_id - computed: false, optional: true, required: false
  private _healthCheckId?: string[]; 
  public get healthCheckId() {
    return cdktf.Fn.tolist(this.getListAttribute('health_check_id'));
  }
  public set healthCheckId(value: string[]) {
    this._healthCheckId = value;
  }
  public resetHealthCheckId() {
    this._healthCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIdInput() {
    return this._healthCheckId;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string[]; 
  public get limit() {
    return cdktf.Fn.tolist(this.getListAttribute('limit'));
  }
  public set limit(value: string[]) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string[]; 
  public get poolId() {
    return cdktf.Fn.tolist(this.getListAttribute('pool_id'));
  }
  public set poolId(value: string[]) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return cdktf.Fn.tolist(this.getListAttribute('product'));
  }
  public set product(value: string[]) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // slo - computed: false, optional: true, required: false
  private _slo?: string[]; 
  public get slo() {
    return cdktf.Fn.tolist(this.getListAttribute('slo'));
  }
  public set slo(value: string[]) {
    this._slo = value;
  }
  public resetSlo() {
    this._slo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloInput() {
    return this._slo;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return cdktf.Fn.tolist(this.getListAttribute('status'));
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface NotificationPolicyPagerdutyIntegration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#id NotificationPolicy#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#name NotificationPolicy#name}
  */
  readonly name?: string;
}

export function notificationPolicyPagerdutyIntegrationToTerraform(struct?: NotificationPolicyPagerdutyIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface NotificationPolicyWebhooksIntegration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#id NotificationPolicy#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy#name NotificationPolicy#name}
  */
  readonly name?: string;
}

export function notificationPolicyWebhooksIntegrationToTerraform(struct?: NotificationPolicyWebhooksIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy cloudflare_notification_policy}
*/
export class NotificationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_notification_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy cloudflare_notification_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_notification_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._alertType = config.alertType;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._emailIntegration = config.emailIntegration;
    this._filters.internalValue = config.filters;
    this._pagerdutyIntegration = config.pagerdutyIntegration;
    this._webhooksIntegration = config.webhooksIntegration;
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

  // alert_type - computed: false, optional: false, required: true
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
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

  // email_integration - computed: false, optional: true, required: false
  private _emailIntegration?: NotificationPolicyEmailIntegration[] | cdktf.IResolvable; 
  public get emailIntegration() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('email_integration')));
  }
  public set emailIntegration(value: NotificationPolicyEmailIntegration[] | cdktf.IResolvable) {
    this._emailIntegration = value;
  }
  public resetEmailIntegration() {
    this._emailIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIntegrationInput() {
    return this._emailIntegration;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new NotificationPolicyFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: NotificationPolicyFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // pagerduty_integration - computed: false, optional: true, required: false
  private _pagerdutyIntegration?: NotificationPolicyPagerdutyIntegration[] | cdktf.IResolvable; 
  public get pagerdutyIntegration() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('pagerduty_integration')));
  }
  public set pagerdutyIntegration(value: NotificationPolicyPagerdutyIntegration[] | cdktf.IResolvable) {
    this._pagerdutyIntegration = value;
  }
  public resetPagerdutyIntegration() {
    this._pagerdutyIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyIntegrationInput() {
    return this._pagerdutyIntegration;
  }

  // webhooks_integration - computed: false, optional: true, required: false
  private _webhooksIntegration?: NotificationPolicyWebhooksIntegration[] | cdktf.IResolvable; 
  public get webhooksIntegration() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('webhooks_integration')));
  }
  public set webhooksIntegration(value: NotificationPolicyWebhooksIntegration[] | cdktf.IResolvable) {
    this._webhooksIntegration = value;
  }
  public resetWebhooksIntegration() {
    this._webhooksIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksIntegrationInput() {
    return this._webhooksIntegration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      alert_type: cdktf.stringToTerraform(this._alertType),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      email_integration: cdktf.listMapper(notificationPolicyEmailIntegrationToTerraform)(this._emailIntegration),
      filters: notificationPolicyFiltersToTerraform(this._filters.internalValue),
      pagerduty_integration: cdktf.listMapper(notificationPolicyPagerdutyIntegrationToTerraform)(this._pagerdutyIntegration),
      webhooks_integration: cdktf.listMapper(notificationPolicyWebhooksIntegrationToTerraform)(this._webhooksIntegration),
    };
  }
}
