/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#account_id NotificationPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * Optional specification of how often to re-alert from the same incident, not support on all alert types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#alert_interval NotificationPolicy#alert_interval}
  */
  readonly alertInterval?: string;
  /**
  * Refers to which event will trigger a Notification dispatch. You can use the endpoint to get available alert types which then will give you a list of possible values.
  * Available values: "access_custom_certificate_expiration_type", "advanced_ddos_attack_l4_alert", "advanced_ddos_attack_l7_alert", "advanced_http_alert_error", "bgp_hijack_notification", "billing_usage_alert", "block_notification_block_removed", "block_notification_new_block", "block_notification_review_rejected", "bot_traffic_basic_alert", "brand_protection_alert", "brand_protection_digest", "clickhouse_alert_fw_anomaly", "clickhouse_alert_fw_ent_anomaly", "cloudforce_one_request_notification", "custom_analytics", "custom_bot_detection_alert", "custom_ssl_certificate_event_type", "dedicated_ssl_certificate_event_type", "device_connectivity_anomaly_alert", "dos_attack_l4", "dos_attack_l7", "expiring_service_token_alert", "failing_logpush_job_disabled_alert", "fbm_auto_advertisement", "fbm_dosd_attack", "fbm_volumetric_attack", "health_check_status_notification", "hostname_aop_custom_certificate_expiration_type", "http_alert_edge_error", "http_alert_origin_error", "image_notification", "image_resizing_notification", "incident_alert", "load_balancing_health_alert", "load_balancing_pool_enablement_alert", "logo_match_alert", "magic_tunnel_health_check_event", "magic_wan_tunnel_health", "maintenance_event_notification", "mtls_certificate_store_certificate_expiration_type", "pages_event_alert", "radar_notification", "real_origin_monitoring", "scriptmonitor_alert_new_code_change_detections", "scriptmonitor_alert_new_hosts", "scriptmonitor_alert_new_malicious_hosts", "scriptmonitor_alert_new_malicious_scripts", "scriptmonitor_alert_new_malicious_url", "scriptmonitor_alert_new_max_length_resource_url", "scriptmonitor_alert_new_resources", "secondary_dns_all_primaries_failing", "secondary_dns_primaries_failing", "secondary_dns_warning", "secondary_dns_zone_successfully_updated", "secondary_dns_zone_validation_warning", "security_insights_alert", "sentinel_alert", "stream_live_notifications", "synthetic_test_latency_alert", "synthetic_test_low_availability_alert", "traffic_anomalies_alert", "tunnel_health_event", "tunnel_update_event", "universal_ssl_event_type", "web_analytics_metrics_update", "zone_aop_custom_certificate_expiration_type".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}
  */
  readonly alertType: string;
  /**
  * Optional description for the Notification policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#description NotificationPolicy#description}
  */
  readonly description?: string;
  /**
  * Whether or not the Notification policy is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. This is only available for select alert types. See alert type documentation for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#filters NotificationPolicy#filters}
  */
  readonly filters?: NotificationPolicyFilters;
  /**
  * List of IDs that will be used when dispatching a notification. IDs for email type will be the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#mechanisms NotificationPolicy#mechanisms}
  */
  readonly mechanisms: NotificationPolicyMechanisms;
  /**
  * Name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#name NotificationPolicy#name}
  */
  readonly name: string;
}
export interface NotificationPolicyFilters {
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#actions NotificationPolicy#actions}
  */
  readonly actions?: string[];
  /**
  * Used for configuring radar_notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#affected_asns NotificationPolicy#affected_asns}
  */
  readonly affectedAsns?: string[];
  /**
  * Used for configuring incident_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#affected_components NotificationPolicy#affected_components}
  */
  readonly affectedComponents?: string[];
  /**
  * Used for configuring radar_notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#affected_locations NotificationPolicy#affected_locations}
  */
  readonly affectedLocations?: string[];
  /**
  * Used for configuring maintenance_event_notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#airport_code NotificationPolicy#airport_code}
  */
  readonly airportCode?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#alert_trigger_preferences NotificationPolicy#alert_trigger_preferences}
  */
  readonly alertTriggerPreferences?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#alert_trigger_preferences_value NotificationPolicy#alert_trigger_preferences_value}
  */
  readonly alertTriggerPreferencesValue?: string[];
  /**
  * Used for configuring load_balancing_pool_enablement_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled?: string[];
  /**
  * Used for configuring pages_event_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#environment NotificationPolicy#environment}
  */
  readonly environment?: string[];
  /**
  * Used for configuring pages_event_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#event NotificationPolicy#event}
  */
  readonly event?: string[];
  /**
  * Used for configuring load_balancing_health_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#event_source NotificationPolicy#event_source}
  */
  readonly eventSource?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#event_type NotificationPolicy#event_type}
  */
  readonly eventType?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Used for configuring health_check_status_notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#health_check_id NotificationPolicy#health_check_id}
  */
  readonly healthCheckId?: string[];
  /**
  * Used for configuring incident_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#incident_impact NotificationPolicy#incident_impact}
  */
  readonly incidentImpact?: string[];
  /**
  * Used for configuring stream_live_notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#input_id NotificationPolicy#input_id}
  */
  readonly inputId?: string[];
  /**
  * Used for configuring security_insights_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#insight_class NotificationPolicy#insight_class}
  */
  readonly insightClass?: string[];
  /**
  * Used for configuring billing_usage_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#limit NotificationPolicy#limit}
  */
  readonly limit?: string[];
  /**
  * Used for configuring logo_match_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#logo_tag NotificationPolicy#logo_tag}
  */
  readonly logoTag?: string[];
  /**
  * Used for configuring advanced_ddos_attack_l4_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#megabits_per_second NotificationPolicy#megabits_per_second}
  */
  readonly megabitsPerSecond?: string[];
  /**
  * Used for configuring load_balancing_health_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#new_health NotificationPolicy#new_health}
  */
  readonly newHealth?: string[];
  /**
  * Used for configuring tunnel_health_event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#new_status NotificationPolicy#new_status}
  */
  readonly newStatus?: string[];
  /**
  * Used for configuring advanced_ddos_attack_l4_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#packets_per_second NotificationPolicy#packets_per_second}
  */
  readonly packetsPerSecond?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#pool_id NotificationPolicy#pool_id}
  */
  readonly poolId?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#pop_names NotificationPolicy#pop_names}
  */
  readonly popNames?: string[];
  /**
  * Used for configuring billing_usage_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#product NotificationPolicy#product}
  */
  readonly product?: string[];
  /**
  * Used for configuring pages_event_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#project_id NotificationPolicy#project_id}
  */
  readonly projectId?: string[];
  /**
  * Used for configuring advanced_ddos_attack_l4_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#protocol NotificationPolicy#protocol}
  */
  readonly protocol?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#query_tag NotificationPolicy#query_tag}
  */
  readonly queryTag?: string[];
  /**
  * Used for configuring advanced_ddos_attack_l7_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#requests_per_second NotificationPolicy#requests_per_second}
  */
  readonly requestsPerSecond?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#selectors NotificationPolicy#selectors}
  */
  readonly selectors?: string[];
  /**
  * Used for configuring clickhouse_alert_fw_ent_anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#services NotificationPolicy#services}
  */
  readonly services?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#slo NotificationPolicy#slo}
  */
  readonly slo?: string[];
  /**
  * Used for configuring health_check_status_notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#status NotificationPolicy#status}
  */
  readonly status?: string[];
  /**
  * Used for configuring advanced_ddos_attack_l7_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#target_hostname NotificationPolicy#target_hostname}
  */
  readonly targetHostname?: string[];
  /**
  * Used for configuring advanced_ddos_attack_l4_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#target_ip NotificationPolicy#target_ip}
  */
  readonly targetIp?: string[];
  /**
  * Used for configuring advanced_ddos_attack_l7_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#target_zone_name NotificationPolicy#target_zone_name}
  */
  readonly targetZoneName?: string[];
  /**
  * Used for configuring traffic_anomalies_alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#traffic_exclusions NotificationPolicy#traffic_exclusions}
  */
  readonly trafficExclusions?: string[];
  /**
  * Used for configuring tunnel_health_event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#tunnel_id NotificationPolicy#tunnel_id}
  */
  readonly tunnelId?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#tunnel_name NotificationPolicy#tunnel_name}
  */
  readonly tunnelName?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#where NotificationPolicy#where}
  */
  readonly where?: string[];
  /**
  * Usage depends on specific alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#zones NotificationPolicy#zones}
  */
  readonly zones?: string[];
}

export function notificationPolicyFiltersToTerraform(struct?: NotificationPolicyFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    affected_asns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.affectedAsns),
    affected_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.affectedComponents),
    affected_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.affectedLocations),
    airport_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.airportCode),
    alert_trigger_preferences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertTriggerPreferences),
    alert_trigger_preferences_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertTriggerPreferencesValue),
    enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabled),
    environment: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environment),
    event: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.event),
    event_source: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventSource),
    event_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventType),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    health_check_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheckId),
    incident_impact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incidentImpact),
    input_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputId),
    insight_class: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insightClass),
    limit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.limit),
    logo_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logoTag),
    megabits_per_second: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.megabitsPerSecond),
    new_health: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.newHealth),
    new_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.newStatus),
    packets_per_second: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packetsPerSecond),
    pool_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolId),
    pop_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.popNames),
    product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.product),
    project_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectId),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    query_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryTag),
    requests_per_second: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestsPerSecond),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    slo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slo),
    status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.status),
    target_hostname: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetHostname),
    target_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetIp),
    target_zone_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetZoneName),
    traffic_exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trafficExclusions),
    tunnel_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunnelId),
    tunnel_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunnelName),
    where: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.where),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function notificationPolicyFiltersToHclTerraform(struct?: NotificationPolicyFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    affected_asns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.affectedAsns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    affected_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.affectedComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    affected_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.affectedLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    airport_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.airportCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_trigger_preferences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertTriggerPreferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_trigger_preferences_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertTriggerPreferencesValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabled),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environment),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.event),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_source: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventSource),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health_check_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheckId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    incident_impact: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incidentImpact),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insight_class: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.insightClass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.limit),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logo_tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logoTag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    megabits_per_second: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.megabitsPerSecond),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    new_health: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.newHealth),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    new_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.newStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packets_per_second: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packetsPerSecond),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pop_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.popNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    product: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.product),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    project_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryTag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    requests_per_second: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestsPerSecond),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    slo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.status),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_hostname: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetHostname),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_zone_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetZoneName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    traffic_exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trafficExclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tunnel_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunnelId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tunnel_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunnelName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    where: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.where),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._affectedAsns !== undefined) {
      hasAnyValues = true;
      internalValueResult.affectedAsns = this._affectedAsns;
    }
    if (this._affectedComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.affectedComponents = this._affectedComponents;
    }
    if (this._affectedLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.affectedLocations = this._affectedLocations;
    }
    if (this._airportCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.airportCode = this._airportCode;
    }
    if (this._alertTriggerPreferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertTriggerPreferences = this._alertTriggerPreferences;
    }
    if (this._alertTriggerPreferencesValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertTriggerPreferencesValue = this._alertTriggerPreferencesValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._eventSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._healthCheckId !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckId = this._healthCheckId;
    }
    if (this._incidentImpact !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentImpact = this._incidentImpact;
    }
    if (this._inputId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputId = this._inputId;
    }
    if (this._insightClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightClass = this._insightClass;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._logoTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoTag = this._logoTag;
    }
    if (this._megabitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.megabitsPerSecond = this._megabitsPerSecond;
    }
    if (this._newHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.newHealth = this._newHealth;
    }
    if (this._newStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.newStatus = this._newStatus;
    }
    if (this._packetsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsPerSecond = this._packetsPerSecond;
    }
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    if (this._popNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.popNames = this._popNames;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queryTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTag = this._queryTag;
    }
    if (this._requestsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerSecond = this._requestsPerSecond;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
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
    if (this._targetHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetHostname = this._targetHostname;
    }
    if (this._targetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIp = this._targetIp;
    }
    if (this._targetZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetZoneName = this._targetZoneName;
    }
    if (this._trafficExclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficExclusions = this._trafficExclusions;
    }
    if (this._tunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelId = this._tunnelId;
    }
    if (this._tunnelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelName = this._tunnelName;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._affectedAsns = undefined;
      this._affectedComponents = undefined;
      this._affectedLocations = undefined;
      this._airportCode = undefined;
      this._alertTriggerPreferences = undefined;
      this._alertTriggerPreferencesValue = undefined;
      this._enabled = undefined;
      this._environment = undefined;
      this._event = undefined;
      this._eventSource = undefined;
      this._eventType = undefined;
      this._groupBy = undefined;
      this._healthCheckId = undefined;
      this._incidentImpact = undefined;
      this._inputId = undefined;
      this._insightClass = undefined;
      this._limit = undefined;
      this._logoTag = undefined;
      this._megabitsPerSecond = undefined;
      this._newHealth = undefined;
      this._newStatus = undefined;
      this._packetsPerSecond = undefined;
      this._poolId = undefined;
      this._popNames = undefined;
      this._product = undefined;
      this._projectId = undefined;
      this._protocol = undefined;
      this._queryTag = undefined;
      this._requestsPerSecond = undefined;
      this._selectors = undefined;
      this._services = undefined;
      this._slo = undefined;
      this._status = undefined;
      this._targetHostname = undefined;
      this._targetIp = undefined;
      this._targetZoneName = undefined;
      this._trafficExclusions = undefined;
      this._tunnelId = undefined;
      this._tunnelName = undefined;
      this._where = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._affectedAsns = value.affectedAsns;
      this._affectedComponents = value.affectedComponents;
      this._affectedLocations = value.affectedLocations;
      this._airportCode = value.airportCode;
      this._alertTriggerPreferences = value.alertTriggerPreferences;
      this._alertTriggerPreferencesValue = value.alertTriggerPreferencesValue;
      this._enabled = value.enabled;
      this._environment = value.environment;
      this._event = value.event;
      this._eventSource = value.eventSource;
      this._eventType = value.eventType;
      this._groupBy = value.groupBy;
      this._healthCheckId = value.healthCheckId;
      this._incidentImpact = value.incidentImpact;
      this._inputId = value.inputId;
      this._insightClass = value.insightClass;
      this._limit = value.limit;
      this._logoTag = value.logoTag;
      this._megabitsPerSecond = value.megabitsPerSecond;
      this._newHealth = value.newHealth;
      this._newStatus = value.newStatus;
      this._packetsPerSecond = value.packetsPerSecond;
      this._poolId = value.poolId;
      this._popNames = value.popNames;
      this._product = value.product;
      this._projectId = value.projectId;
      this._protocol = value.protocol;
      this._queryTag = value.queryTag;
      this._requestsPerSecond = value.requestsPerSecond;
      this._selectors = value.selectors;
      this._services = value.services;
      this._slo = value.slo;
      this._status = value.status;
      this._targetHostname = value.targetHostname;
      this._targetIp = value.targetIp;
      this._targetZoneName = value.targetZoneName;
      this._trafficExclusions = value.trafficExclusions;
      this._tunnelId = value.tunnelId;
      this._tunnelName = value.tunnelName;
      this._where = value.where;
      this._zones = value.zones;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // affected_asns - computed: false, optional: true, required: false
  private _affectedAsns?: string[]; 
  public get affectedAsns() {
    return this.getListAttribute('affected_asns');
  }
  public set affectedAsns(value: string[]) {
    this._affectedAsns = value;
  }
  public resetAffectedAsns() {
    this._affectedAsns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affectedAsnsInput() {
    return this._affectedAsns;
  }

  // affected_components - computed: false, optional: true, required: false
  private _affectedComponents?: string[]; 
  public get affectedComponents() {
    return this.getListAttribute('affected_components');
  }
  public set affectedComponents(value: string[]) {
    this._affectedComponents = value;
  }
  public resetAffectedComponents() {
    this._affectedComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affectedComponentsInput() {
    return this._affectedComponents;
  }

  // affected_locations - computed: false, optional: true, required: false
  private _affectedLocations?: string[]; 
  public get affectedLocations() {
    return this.getListAttribute('affected_locations');
  }
  public set affectedLocations(value: string[]) {
    this._affectedLocations = value;
  }
  public resetAffectedLocations() {
    this._affectedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affectedLocationsInput() {
    return this._affectedLocations;
  }

  // airport_code - computed: false, optional: true, required: false
  private _airportCode?: string[]; 
  public get airportCode() {
    return this.getListAttribute('airport_code');
  }
  public set airportCode(value: string[]) {
    this._airportCode = value;
  }
  public resetAirportCode() {
    this._airportCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airportCodeInput() {
    return this._airportCode;
  }

  // alert_trigger_preferences - computed: false, optional: true, required: false
  private _alertTriggerPreferences?: string[]; 
  public get alertTriggerPreferences() {
    return this.getListAttribute('alert_trigger_preferences');
  }
  public set alertTriggerPreferences(value: string[]) {
    this._alertTriggerPreferences = value;
  }
  public resetAlertTriggerPreferences() {
    this._alertTriggerPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTriggerPreferencesInput() {
    return this._alertTriggerPreferences;
  }

  // alert_trigger_preferences_value - computed: false, optional: true, required: false
  private _alertTriggerPreferencesValue?: string[]; 
  public get alertTriggerPreferencesValue() {
    return this.getListAttribute('alert_trigger_preferences_value');
  }
  public set alertTriggerPreferencesValue(value: string[]) {
    this._alertTriggerPreferencesValue = value;
  }
  public resetAlertTriggerPreferencesValue() {
    this._alertTriggerPreferencesValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTriggerPreferencesValueInput() {
    return this._alertTriggerPreferencesValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string[]; 
  public get enabled() {
    return this.getListAttribute('enabled');
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string[]; 
  public get environment() {
    return this.getListAttribute('environment');
  }
  public set environment(value: string[]) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // event - computed: false, optional: true, required: false
  private _event?: string[]; 
  public get event() {
    return this.getListAttribute('event');
  }
  public set event(value: string[]) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // event_source - computed: false, optional: true, required: false
  private _eventSource?: string[]; 
  public get eventSource() {
    return this.getListAttribute('event_source');
  }
  public set eventSource(value: string[]) {
    this._eventSource = value;
  }
  public resetEventSource() {
    this._eventSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string[]; 
  public get eventType() {
    return this.getListAttribute('event_type');
  }
  public set eventType(value: string[]) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // health_check_id - computed: false, optional: true, required: false
  private _healthCheckId?: string[]; 
  public get healthCheckId() {
    return this.getListAttribute('health_check_id');
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

  // incident_impact - computed: false, optional: true, required: false
  private _incidentImpact?: string[]; 
  public get incidentImpact() {
    return this.getListAttribute('incident_impact');
  }
  public set incidentImpact(value: string[]) {
    this._incidentImpact = value;
  }
  public resetIncidentImpact() {
    this._incidentImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentImpactInput() {
    return this._incidentImpact;
  }

  // input_id - computed: false, optional: true, required: false
  private _inputId?: string[]; 
  public get inputId() {
    return this.getListAttribute('input_id');
  }
  public set inputId(value: string[]) {
    this._inputId = value;
  }
  public resetInputId() {
    this._inputId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputIdInput() {
    return this._inputId;
  }

  // insight_class - computed: false, optional: true, required: false
  private _insightClass?: string[]; 
  public get insightClass() {
    return this.getListAttribute('insight_class');
  }
  public set insightClass(value: string[]) {
    this._insightClass = value;
  }
  public resetInsightClass() {
    this._insightClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightClassInput() {
    return this._insightClass;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string[]; 
  public get limit() {
    return this.getListAttribute('limit');
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

  // logo_tag - computed: false, optional: true, required: false
  private _logoTag?: string[]; 
  public get logoTag() {
    return this.getListAttribute('logo_tag');
  }
  public set logoTag(value: string[]) {
    this._logoTag = value;
  }
  public resetLogoTag() {
    this._logoTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoTagInput() {
    return this._logoTag;
  }

  // megabits_per_second - computed: false, optional: true, required: false
  private _megabitsPerSecond?: string[]; 
  public get megabitsPerSecond() {
    return this.getListAttribute('megabits_per_second');
  }
  public set megabitsPerSecond(value: string[]) {
    this._megabitsPerSecond = value;
  }
  public resetMegabitsPerSecond() {
    this._megabitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get megabitsPerSecondInput() {
    return this._megabitsPerSecond;
  }

  // new_health - computed: false, optional: true, required: false
  private _newHealth?: string[]; 
  public get newHealth() {
    return this.getListAttribute('new_health');
  }
  public set newHealth(value: string[]) {
    this._newHealth = value;
  }
  public resetNewHealth() {
    this._newHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newHealthInput() {
    return this._newHealth;
  }

  // new_status - computed: false, optional: true, required: false
  private _newStatus?: string[]; 
  public get newStatus() {
    return this.getListAttribute('new_status');
  }
  public set newStatus(value: string[]) {
    this._newStatus = value;
  }
  public resetNewStatus() {
    this._newStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newStatusInput() {
    return this._newStatus;
  }

  // packets_per_second - computed: false, optional: true, required: false
  private _packetsPerSecond?: string[]; 
  public get packetsPerSecond() {
    return this.getListAttribute('packets_per_second');
  }
  public set packetsPerSecond(value: string[]) {
    this._packetsPerSecond = value;
  }
  public resetPacketsPerSecond() {
    this._packetsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsPerSecondInput() {
    return this._packetsPerSecond;
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string[]; 
  public get poolId() {
    return this.getListAttribute('pool_id');
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

  // pop_names - computed: false, optional: true, required: false
  private _popNames?: string[]; 
  public get popNames() {
    return this.getListAttribute('pop_names');
  }
  public set popNames(value: string[]) {
    this._popNames = value;
  }
  public resetPopNames() {
    this._popNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popNamesInput() {
    return this._popNames;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string[]; 
  public get product() {
    return this.getListAttribute('product');
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string[]; 
  public get projectId() {
    return this.getListAttribute('project_id');
  }
  public set projectId(value: string[]) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return this.getListAttribute('protocol');
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query_tag - computed: false, optional: true, required: false
  private _queryTag?: string[]; 
  public get queryTag() {
    return this.getListAttribute('query_tag');
  }
  public set queryTag(value: string[]) {
    this._queryTag = value;
  }
  public resetQueryTag() {
    this._queryTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTagInput() {
    return this._queryTag;
  }

  // requests_per_second - computed: false, optional: true, required: false
  private _requestsPerSecond?: string[]; 
  public get requestsPerSecond() {
    return this.getListAttribute('requests_per_second');
  }
  public set requestsPerSecond(value: string[]) {
    this._requestsPerSecond = value;
  }
  public resetRequestsPerSecond() {
    this._requestsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerSecondInput() {
    return this._requestsPerSecond;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
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
    return this.getListAttribute('slo');
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
    return this.getListAttribute('status');
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

  // target_hostname - computed: false, optional: true, required: false
  private _targetHostname?: string[]; 
  public get targetHostname() {
    return this.getListAttribute('target_hostname');
  }
  public set targetHostname(value: string[]) {
    this._targetHostname = value;
  }
  public resetTargetHostname() {
    this._targetHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostnameInput() {
    return this._targetHostname;
  }

  // target_ip - computed: false, optional: true, required: false
  private _targetIp?: string[]; 
  public get targetIp() {
    return this.getListAttribute('target_ip');
  }
  public set targetIp(value: string[]) {
    this._targetIp = value;
  }
  public resetTargetIp() {
    this._targetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp;
  }

  // target_zone_name - computed: false, optional: true, required: false
  private _targetZoneName?: string[]; 
  public get targetZoneName() {
    return this.getListAttribute('target_zone_name');
  }
  public set targetZoneName(value: string[]) {
    this._targetZoneName = value;
  }
  public resetTargetZoneName() {
    this._targetZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetZoneNameInput() {
    return this._targetZoneName;
  }

  // traffic_exclusions - computed: false, optional: true, required: false
  private _trafficExclusions?: string[]; 
  public get trafficExclusions() {
    return this.getListAttribute('traffic_exclusions');
  }
  public set trafficExclusions(value: string[]) {
    this._trafficExclusions = value;
  }
  public resetTrafficExclusions() {
    this._trafficExclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficExclusionsInput() {
    return this._trafficExclusions;
  }

  // tunnel_id - computed: false, optional: true, required: false
  private _tunnelId?: string[]; 
  public get tunnelId() {
    return this.getListAttribute('tunnel_id');
  }
  public set tunnelId(value: string[]) {
    this._tunnelId = value;
  }
  public resetTunnelId() {
    this._tunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }

  // tunnel_name - computed: false, optional: true, required: false
  private _tunnelName?: string[]; 
  public get tunnelName() {
    return this.getListAttribute('tunnel_name');
  }
  public set tunnelName(value: string[]) {
    this._tunnelName = value;
  }
  public resetTunnelName() {
    this._tunnelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelNameInput() {
    return this._tunnelName;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string[]; 
  public get where() {
    return this.getListAttribute('where');
  }
  public set where(value: string[]) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
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
export interface NotificationPolicyMechanismsEmail {
  /**
  * The email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#id NotificationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function notificationPolicyMechanismsEmailToTerraform(struct?: NotificationPolicyMechanismsEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function notificationPolicyMechanismsEmailToHclTerraform(struct?: NotificationPolicyMechanismsEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class NotificationPolicyMechanismsEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyMechanismsEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyMechanismsEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class NotificationPolicyMechanismsEmailList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyMechanismsEmail[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyMechanismsEmailOutputReference {
    return new NotificationPolicyMechanismsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyMechanismsPagerduty {
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#id NotificationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function notificationPolicyMechanismsPagerdutyToTerraform(struct?: NotificationPolicyMechanismsPagerduty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function notificationPolicyMechanismsPagerdutyToHclTerraform(struct?: NotificationPolicyMechanismsPagerduty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class NotificationPolicyMechanismsPagerdutyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyMechanismsPagerduty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyMechanismsPagerduty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class NotificationPolicyMechanismsPagerdutyList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyMechanismsPagerduty[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyMechanismsPagerdutyOutputReference {
    return new NotificationPolicyMechanismsPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyMechanismsWebhooks {
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#id NotificationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function notificationPolicyMechanismsWebhooksToTerraform(struct?: NotificationPolicyMechanismsWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function notificationPolicyMechanismsWebhooksToHclTerraform(struct?: NotificationPolicyMechanismsWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class NotificationPolicyMechanismsWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyMechanismsWebhooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyMechanismsWebhooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class NotificationPolicyMechanismsWebhooksList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyMechanismsWebhooks[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyMechanismsWebhooksOutputReference {
    return new NotificationPolicyMechanismsWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyMechanisms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#email NotificationPolicy#email}
  */
  readonly email?: NotificationPolicyMechanismsEmail[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}
  */
  readonly pagerduty?: NotificationPolicyMechanismsPagerduty[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}
  */
  readonly webhooks?: NotificationPolicyMechanismsWebhooks[] | cdktf.IResolvable;
}

export function notificationPolicyMechanismsToTerraform(struct?: NotificationPolicyMechanisms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(notificationPolicyMechanismsEmailToTerraform, false)(struct!.email),
    pagerduty: cdktf.listMapper(notificationPolicyMechanismsPagerdutyToTerraform, false)(struct!.pagerduty),
    webhooks: cdktf.listMapper(notificationPolicyMechanismsWebhooksToTerraform, false)(struct!.webhooks),
  }
}


export function notificationPolicyMechanismsToHclTerraform(struct?: NotificationPolicyMechanisms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(notificationPolicyMechanismsEmailToHclTerraform, false)(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyMechanismsEmailList",
    },
    pagerduty: {
      value: cdktf.listMapperHcl(notificationPolicyMechanismsPagerdutyToHclTerraform, false)(struct!.pagerduty),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyMechanismsPagerdutyList",
    },
    webhooks: {
      value: cdktf.listMapperHcl(notificationPolicyMechanismsWebhooksToHclTerraform, false)(struct!.webhooks),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyMechanismsWebhooksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyMechanismsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyMechanisms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._pagerduty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerduty = this._pagerduty?.internalValue;
    }
    if (this._webhooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhooks = this._webhooks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyMechanisms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email.internalValue = undefined;
      this._pagerduty.internalValue = undefined;
      this._webhooks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email.internalValue = value.email;
      this._pagerduty.internalValue = value.pagerduty;
      this._webhooks.internalValue = value.webhooks;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email = new NotificationPolicyMechanismsEmailList(this, "email", false);
  public get email() {
    return this._email;
  }
  public putEmail(value: NotificationPolicyMechanismsEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new NotificationPolicyMechanismsPagerdutyList(this, "pagerduty", false);
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: NotificationPolicyMechanismsPagerduty[] | cdktf.IResolvable) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }

  // webhooks - computed: false, optional: true, required: false
  private _webhooks = new NotificationPolicyMechanismsWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }
  public putWebhooks(value: NotificationPolicyMechanismsWebhooks[] | cdktf.IResolvable) {
    this._webhooks.internalValue = value;
  }
  public resetWebhooks() {
    this._webhooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksInput() {
    return this._webhooks.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy cloudflare_notification_policy}
*/
export class NotificationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_notification_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPolicy to import
  * @param importFromId The id of the existing NotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/notification_policy cloudflare_notification_policy} Resource
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
        providerVersion: '5.6.0',
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
    this._alertInterval = config.alertInterval;
    this._alertType = config.alertType;
    this._description = config.description;
    this._enabled = config.enabled;
    this._filters.internalValue = config.filters;
    this._mechanisms.internalValue = config.mechanisms;
    this._name = config.name;
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

  // alert_interval - computed: false, optional: true, required: false
  private _alertInterval?: string; 
  public get alertInterval() {
    return this.getStringAttribute('alert_interval');
  }
  public set alertInterval(value: string) {
    this._alertInterval = value;
  }
  public resetAlertInterval() {
    this._alertInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIntervalInput() {
    return this._alertInterval;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mechanisms - computed: false, optional: false, required: true
  private _mechanisms = new NotificationPolicyMechanismsOutputReference(this, "mechanisms");
  public get mechanisms() {
    return this._mechanisms;
  }
  public putMechanisms(value: NotificationPolicyMechanisms) {
    this._mechanisms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismsInput() {
    return this._mechanisms.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      alert_interval: cdktf.stringToTerraform(this._alertInterval),
      alert_type: cdktf.stringToTerraform(this._alertType),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filters: notificationPolicyFiltersToTerraform(this._filters.internalValue),
      mechanisms: notificationPolicyMechanismsToTerraform(this._mechanisms.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      alert_interval: {
        value: cdktf.stringToHclTerraform(this._alertInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filters: {
        value: notificationPolicyFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPolicyFilters",
      },
      mechanisms: {
        value: notificationPolicyMechanismsToHclTerraform(this._mechanisms.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPolicyMechanisms",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
