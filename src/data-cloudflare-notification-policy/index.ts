/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareNotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/notification_policy#account_id DataCloudflareNotificationPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * The unique identifier of a notification policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/notification_policy#policy_id DataCloudflareNotificationPolicy#policy_id}
  */
  readonly policyId?: string;
}
export interface DataCloudflareNotificationPolicyFilters {
}

export function dataCloudflareNotificationPolicyFiltersToTerraform(struct?: DataCloudflareNotificationPolicyFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareNotificationPolicyFiltersToHclTerraform(struct?: DataCloudflareNotificationPolicyFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareNotificationPolicyFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareNotificationPolicyFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareNotificationPolicyFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // affected_asns - computed: true, optional: false, required: false
  public get affectedAsns() {
    return this.getListAttribute('affected_asns');
  }

  // affected_components - computed: true, optional: false, required: false
  public get affectedComponents() {
    return this.getListAttribute('affected_components');
  }

  // affected_locations - computed: true, optional: false, required: false
  public get affectedLocations() {
    return this.getListAttribute('affected_locations');
  }

  // airport_code - computed: true, optional: false, required: false
  public get airportCode() {
    return this.getListAttribute('airport_code');
  }

  // alert_trigger_preferences - computed: true, optional: false, required: false
  public get alertTriggerPreferences() {
    return this.getListAttribute('alert_trigger_preferences');
  }

  // alert_trigger_preferences_value - computed: true, optional: false, required: false
  public get alertTriggerPreferencesValue() {
    return this.getListAttribute('alert_trigger_preferences_value');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getListAttribute('enabled');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getListAttribute('environment');
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getListAttribute('event');
  }

  // event_source - computed: true, optional: false, required: false
  public get eventSource() {
    return this.getListAttribute('event_source');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getListAttribute('event_type');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // health_check_id - computed: true, optional: false, required: false
  public get healthCheckId() {
    return this.getListAttribute('health_check_id');
  }

  // incident_impact - computed: true, optional: false, required: false
  public get incidentImpact() {
    return this.getListAttribute('incident_impact');
  }

  // input_id - computed: true, optional: false, required: false
  public get inputId() {
    return this.getListAttribute('input_id');
  }

  // insight_class - computed: true, optional: false, required: false
  public get insightClass() {
    return this.getListAttribute('insight_class');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getListAttribute('limit');
  }

  // logo_tag - computed: true, optional: false, required: false
  public get logoTag() {
    return this.getListAttribute('logo_tag');
  }

  // megabits_per_second - computed: true, optional: false, required: false
  public get megabitsPerSecond() {
    return this.getListAttribute('megabits_per_second');
  }

  // new_health - computed: true, optional: false, required: false
  public get newHealth() {
    return this.getListAttribute('new_health');
  }

  // new_status - computed: true, optional: false, required: false
  public get newStatus() {
    return this.getListAttribute('new_status');
  }

  // packets_per_second - computed: true, optional: false, required: false
  public get packetsPerSecond() {
    return this.getListAttribute('packets_per_second');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getListAttribute('pool_id');
  }

  // pop_names - computed: true, optional: false, required: false
  public get popNames() {
    return this.getListAttribute('pop_names');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getListAttribute('product');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getListAttribute('project_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getListAttribute('protocol');
  }

  // query_tag - computed: true, optional: false, required: false
  public get queryTag() {
    return this.getListAttribute('query_tag');
  }

  // requests_per_second - computed: true, optional: false, required: false
  public get requestsPerSecond() {
    return this.getListAttribute('requests_per_second');
  }

  // selectors - computed: true, optional: false, required: false
  public get selectors() {
    return this.getListAttribute('selectors');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getListAttribute('services');
  }

  // slo - computed: true, optional: false, required: false
  public get slo() {
    return this.getListAttribute('slo');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getListAttribute('status');
  }

  // target_hostname - computed: true, optional: false, required: false
  public get targetHostname() {
    return this.getListAttribute('target_hostname');
  }

  // target_ip - computed: true, optional: false, required: false
  public get targetIp() {
    return this.getListAttribute('target_ip');
  }

  // target_zone_name - computed: true, optional: false, required: false
  public get targetZoneName() {
    return this.getListAttribute('target_zone_name');
  }

  // traffic_exclusions - computed: true, optional: false, required: false
  public get trafficExclusions() {
    return this.getListAttribute('traffic_exclusions');
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getListAttribute('tunnel_id');
  }

  // tunnel_name - computed: true, optional: false, required: false
  public get tunnelName() {
    return this.getListAttribute('tunnel_name');
  }

  // where - computed: true, optional: false, required: false
  public get where() {
    return this.getListAttribute('where');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}
export interface DataCloudflareNotificationPolicyMechanismsEmail {
}

export function dataCloudflareNotificationPolicyMechanismsEmailToTerraform(struct?: DataCloudflareNotificationPolicyMechanismsEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareNotificationPolicyMechanismsEmailToHclTerraform(struct?: DataCloudflareNotificationPolicyMechanismsEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareNotificationPolicyMechanismsEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareNotificationPolicyMechanismsEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareNotificationPolicyMechanismsEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataCloudflareNotificationPolicyMechanismsEmailList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareNotificationPolicyMechanismsEmailOutputReference {
    return new DataCloudflareNotificationPolicyMechanismsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareNotificationPolicyMechanismsPagerduty {
}

export function dataCloudflareNotificationPolicyMechanismsPagerdutyToTerraform(struct?: DataCloudflareNotificationPolicyMechanismsPagerduty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareNotificationPolicyMechanismsPagerdutyToHclTerraform(struct?: DataCloudflareNotificationPolicyMechanismsPagerduty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareNotificationPolicyMechanismsPagerduty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareNotificationPolicyMechanismsPagerduty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataCloudflareNotificationPolicyMechanismsPagerdutyList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference {
    return new DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareNotificationPolicyMechanismsWebhooks {
}

export function dataCloudflareNotificationPolicyMechanismsWebhooksToTerraform(struct?: DataCloudflareNotificationPolicyMechanismsWebhooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareNotificationPolicyMechanismsWebhooksToHclTerraform(struct?: DataCloudflareNotificationPolicyMechanismsWebhooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareNotificationPolicyMechanismsWebhooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareNotificationPolicyMechanismsWebhooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataCloudflareNotificationPolicyMechanismsWebhooksList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference {
    return new DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareNotificationPolicyMechanisms {
}

export function dataCloudflareNotificationPolicyMechanismsToTerraform(struct?: DataCloudflareNotificationPolicyMechanisms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareNotificationPolicyMechanismsToHclTerraform(struct?: DataCloudflareNotificationPolicyMechanisms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareNotificationPolicyMechanismsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareNotificationPolicyMechanisms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareNotificationPolicyMechanisms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  private _email = new DataCloudflareNotificationPolicyMechanismsEmailList(this, "email", false);
  public get email() {
    return this._email;
  }

  // pagerduty - computed: true, optional: false, required: false
  private _pagerduty = new DataCloudflareNotificationPolicyMechanismsPagerdutyList(this, "pagerduty", false);
  public get pagerduty() {
    return this._pagerduty;
  }

  // webhooks - computed: true, optional: false, required: false
  private _webhooks = new DataCloudflareNotificationPolicyMechanismsWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/notification_policy cloudflare_notification_policy}
*/
export class DataCloudflareNotificationPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_notification_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareNotificationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicy to import
  * @param importFromId The id of the existing DataCloudflareNotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/notification_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/notification_policy cloudflare_notification_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareNotificationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareNotificationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_notification_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.5.0',
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
    this._policyId = config.policyId;
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

  // alert_interval - computed: true, optional: false, required: false
  public get alertInterval() {
    return this.getStringAttribute('alert_interval');
  }

  // alert_type - computed: true, optional: false, required: false
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCloudflareNotificationPolicyFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mechanisms - computed: true, optional: false, required: false
  private _mechanisms = new DataCloudflareNotificationPolicyMechanismsOutputReference(this, "mechanisms");
  public get mechanisms() {
    return this._mechanisms;
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      policy_id: cdktf.stringToTerraform(this._policyId),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
