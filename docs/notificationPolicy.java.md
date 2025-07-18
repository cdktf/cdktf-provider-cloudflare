# `notificationPolicy` Submodule <a name="`notificationPolicy` Submodule" id="@cdktf/provider-cloudflare.notificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationPolicy <a name="NotificationPolicy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy cloudflare_notification_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicy;

NotificationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .alertType(java.lang.String)
    .mechanisms(NotificationPolicyMechanisms)
    .name(java.lang.String)
//  .alertInterval(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filters(NotificationPolicyFilters)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.alertType">alertType</a></code> | <code>java.lang.String</code> | Refers to which event will trigger a Notification dispatch. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a></code> | List of IDs that will be used when dispatching a notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.alertInterval">alertInterval</a></code> | <code>java.lang.String</code> | Optional specification of how often to re-alert from the same incident, not support on all alert types. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional description for the Notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the Notification policy is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#account_id NotificationPolicy#account_id}

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.alertType"></a>

- *Type:* java.lang.String

Refers to which event will trigger a Notification dispatch.

You can use the endpoint to get available alert types which then will give you a list of possible values.
Available values: "access_custom_certificate_expiration_type", "advanced_ddos_attack_l4_alert", "advanced_ddos_attack_l7_alert", "advanced_http_alert_error", "bgp_hijack_notification", "billing_usage_alert", "block_notification_block_removed", "block_notification_new_block", "block_notification_review_rejected", "bot_traffic_basic_alert", "brand_protection_alert", "brand_protection_digest", "clickhouse_alert_fw_anomaly", "clickhouse_alert_fw_ent_anomaly", "cloudforce_one_request_notification", "custom_analytics", "custom_bot_detection_alert", "custom_ssl_certificate_event_type", "dedicated_ssl_certificate_event_type", "device_connectivity_anomaly_alert", "dos_attack_l4", "dos_attack_l7", "expiring_service_token_alert", "failing_logpush_job_disabled_alert", "fbm_auto_advertisement", "fbm_dosd_attack", "fbm_volumetric_attack", "health_check_status_notification", "hostname_aop_custom_certificate_expiration_type", "http_alert_edge_error", "http_alert_origin_error", "image_notification", "image_resizing_notification", "incident_alert", "load_balancing_health_alert", "load_balancing_pool_enablement_alert", "logo_match_alert", "magic_tunnel_health_check_event", "magic_wan_tunnel_health", "maintenance_event_notification", "mtls_certificate_store_certificate_expiration_type", "pages_event_alert", "radar_notification", "real_origin_monitoring", "scriptmonitor_alert_new_code_change_detections", "scriptmonitor_alert_new_hosts", "scriptmonitor_alert_new_malicious_hosts", "scriptmonitor_alert_new_malicious_scripts", "scriptmonitor_alert_new_malicious_url", "scriptmonitor_alert_new_max_length_resource_url", "scriptmonitor_alert_new_resources", "secondary_dns_all_primaries_failing", "secondary_dns_primaries_failing", "secondary_dns_warning", "secondary_dns_zone_successfully_updated", "secondary_dns_zone_validation_warning", "security_insights_alert", "sentinel_alert", "stream_live_notifications", "synthetic_test_latency_alert", "synthetic_test_low_availability_alert", "traffic_anomalies_alert", "tunnel_health_event", "tunnel_update_event", "universal_ssl_event_type", "web_analytics_metrics_update", "zone_aop_custom_certificate_expiration_type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.mechanisms"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

List of IDs that will be used when dispatching a notification.

IDs for email type will be the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#mechanisms NotificationPolicy#mechanisms}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#name NotificationPolicy#name}

---

##### `alertInterval`<sup>Optional</sup> <a name="alertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.alertInterval"></a>

- *Type:* java.lang.String

Optional specification of how often to re-alert from the same incident, not support on all alert types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_interval NotificationPolicy#alert_interval}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional description for the Notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#description NotificationPolicy#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the Notification policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria.

This is only available for select alert types. See alert type documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#filters NotificationPolicy#filters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms">putMechanisms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetAlertInterval">resetAlertInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters">resetFilters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters"></a>

```java
public void putFilters(NotificationPolicyFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

---

##### `putMechanisms` <a name="putMechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms"></a>

```java
public void putMechanisms(NotificationPolicyMechanisms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

---

##### `resetAlertInterval` <a name="resetAlertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetAlertInterval"></a>

```java
public void resetAlertInterval()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters"></a>

```java
public void resetFilters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicy;

NotificationPolicy.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicy;

NotificationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicy;

NotificationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicy;

NotificationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotificationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotificationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotificationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NotificationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference">NotificationPolicyMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified">modified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertIntervalInput">alertIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput">alertTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput">filtersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanismsInput">mechanismsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertInterval">alertInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType">alertType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters"></a>

```java
public NotificationPolicyFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanisms"></a>

```java
public NotificationPolicyMechanismsOutputReference getMechanisms();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference">NotificationPolicyMechanismsOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified"></a>

```java
public java.lang.String getModified();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `alertIntervalInput`<sup>Optional</sup> <a name="alertIntervalInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertIntervalInput"></a>

```java
public java.lang.String getAlertIntervalInput();
```

- *Type:* java.lang.String

---

##### `alertTypeInput`<sup>Optional</sup> <a name="alertTypeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput"></a>

```java
public java.lang.String getAlertTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput"></a>

```java
public java.lang.Object getFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

---

##### `mechanismsInput`<sup>Optional</sup> <a name="mechanismsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanismsInput"></a>

```java
public java.lang.Object getMechanismsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `alertInterval`<sup>Required</sup> <a name="alertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertInterval"></a>

```java
public java.lang.String getAlertInterval();
```

- *Type:* java.lang.String

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType"></a>

```java
public java.lang.String getAlertType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationPolicyConfig <a name="NotificationPolicyConfig" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyConfig;

NotificationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .alertType(java.lang.String)
    .mechanisms(NotificationPolicyMechanisms)
    .name(java.lang.String)
//  .alertInterval(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filters(NotificationPolicyFilters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType">alertType</a></code> | <code>java.lang.String</code> | Refers to which event will trigger a Notification dispatch. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a></code> | List of IDs that will be used when dispatching a notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertInterval">alertInterval</a></code> | <code>java.lang.String</code> | Optional specification of how often to re-alert from the same incident, not support on all alert types. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional description for the Notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the Notification policy is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#account_id NotificationPolicy#account_id}

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType"></a>

```java
public java.lang.String getAlertType();
```

- *Type:* java.lang.String

Refers to which event will trigger a Notification dispatch.

You can use the endpoint to get available alert types which then will give you a list of possible values.
Available values: "access_custom_certificate_expiration_type", "advanced_ddos_attack_l4_alert", "advanced_ddos_attack_l7_alert", "advanced_http_alert_error", "bgp_hijack_notification", "billing_usage_alert", "block_notification_block_removed", "block_notification_new_block", "block_notification_review_rejected", "bot_traffic_basic_alert", "brand_protection_alert", "brand_protection_digest", "clickhouse_alert_fw_anomaly", "clickhouse_alert_fw_ent_anomaly", "cloudforce_one_request_notification", "custom_analytics", "custom_bot_detection_alert", "custom_ssl_certificate_event_type", "dedicated_ssl_certificate_event_type", "device_connectivity_anomaly_alert", "dos_attack_l4", "dos_attack_l7", "expiring_service_token_alert", "failing_logpush_job_disabled_alert", "fbm_auto_advertisement", "fbm_dosd_attack", "fbm_volumetric_attack", "health_check_status_notification", "hostname_aop_custom_certificate_expiration_type", "http_alert_edge_error", "http_alert_origin_error", "image_notification", "image_resizing_notification", "incident_alert", "load_balancing_health_alert", "load_balancing_pool_enablement_alert", "logo_match_alert", "magic_tunnel_health_check_event", "magic_wan_tunnel_health", "maintenance_event_notification", "mtls_certificate_store_certificate_expiration_type", "pages_event_alert", "radar_notification", "real_origin_monitoring", "scriptmonitor_alert_new_code_change_detections", "scriptmonitor_alert_new_hosts", "scriptmonitor_alert_new_malicious_hosts", "scriptmonitor_alert_new_malicious_scripts", "scriptmonitor_alert_new_malicious_url", "scriptmonitor_alert_new_max_length_resource_url", "scriptmonitor_alert_new_resources", "secondary_dns_all_primaries_failing", "secondary_dns_primaries_failing", "secondary_dns_warning", "secondary_dns_zone_successfully_updated", "secondary_dns_zone_validation_warning", "security_insights_alert", "sentinel_alert", "stream_live_notifications", "synthetic_test_latency_alert", "synthetic_test_low_availability_alert", "traffic_anomalies_alert", "tunnel_health_event", "tunnel_update_event", "universal_ssl_event_type", "web_analytics_metrics_update", "zone_aop_custom_certificate_expiration_type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.mechanisms"></a>

```java
public NotificationPolicyMechanisms getMechanisms();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

List of IDs that will be used when dispatching a notification.

IDs for email type will be the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#mechanisms NotificationPolicy#mechanisms}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#name NotificationPolicy#name}

---

##### `alertInterval`<sup>Optional</sup> <a name="alertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertInterval"></a>

```java
public java.lang.String getAlertInterval();
```

- *Type:* java.lang.String

Optional specification of how often to re-alert from the same incident, not support on all alert types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_interval NotificationPolicy#alert_interval}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description for the Notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#description NotificationPolicy#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the Notification policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters"></a>

```java
public NotificationPolicyFilters getFilters();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria.

This is only available for select alert types. See alert type documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#filters NotificationPolicy#filters}

---

### NotificationPolicyFilters <a name="NotificationPolicyFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyFilters;

NotificationPolicyFilters.builder()
//  .actions(java.util.List<java.lang.String>)
//  .affectedAsns(java.util.List<java.lang.String>)
//  .affectedComponents(java.util.List<java.lang.String>)
//  .affectedLocations(java.util.List<java.lang.String>)
//  .airportCode(java.util.List<java.lang.String>)
//  .alertTriggerPreferences(java.util.List<java.lang.String>)
//  .alertTriggerPreferencesValue(java.util.List<java.lang.String>)
//  .enabled(java.util.List<java.lang.String>)
//  .environment(java.util.List<java.lang.String>)
//  .event(java.util.List<java.lang.String>)
//  .eventSource(java.util.List<java.lang.String>)
//  .eventType(java.util.List<java.lang.String>)
//  .groupBy(java.util.List<java.lang.String>)
//  .healthCheckId(java.util.List<java.lang.String>)
//  .incidentImpact(java.util.List<java.lang.String>)
//  .inputId(java.util.List<java.lang.String>)
//  .insightClass(java.util.List<java.lang.String>)
//  .limit(java.util.List<java.lang.String>)
//  .logoTag(java.util.List<java.lang.String>)
//  .megabitsPerSecond(java.util.List<java.lang.String>)
//  .newHealth(java.util.List<java.lang.String>)
//  .newStatus(java.util.List<java.lang.String>)
//  .packetsPerSecond(java.util.List<java.lang.String>)
//  .poolId(java.util.List<java.lang.String>)
//  .popNames(java.util.List<java.lang.String>)
//  .product(java.util.List<java.lang.String>)
//  .projectId(java.util.List<java.lang.String>)
//  .protocol(java.util.List<java.lang.String>)
//  .queryTag(java.util.List<java.lang.String>)
//  .requestsPerSecond(java.util.List<java.lang.String>)
//  .selectors(java.util.List<java.lang.String>)
//  .services(java.util.List<java.lang.String>)
//  .slo(java.util.List<java.lang.String>)
//  .status(java.util.List<java.lang.String>)
//  .targetHostname(java.util.List<java.lang.String>)
//  .targetIp(java.util.List<java.lang.String>)
//  .targetZoneName(java.util.List<java.lang.String>)
//  .trafficExclusions(java.util.List<java.lang.String>)
//  .tunnelId(java.util.List<java.lang.String>)
//  .tunnelName(java.util.List<java.lang.String>)
//  .where(java.util.List<java.lang.String>)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedAsns">affectedAsns</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring radar_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedComponents">affectedComponents</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring incident_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedLocations">affectedLocations</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring radar_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.airportCode">airportCode</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring maintenance_event_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences">alertTriggerPreferences</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferencesValue">alertTriggerPreferencesValue</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled">enabled</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring load_balancing_pool_enablement_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment">environment</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event">event</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource">eventSource</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring load_balancing_health_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType">eventType</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId">healthCheckId</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring health_check_status_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact">incidentImpact</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring incident_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId">inputId</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring stream_live_notifications. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.insightClass">insightClass</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring security_insights_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit">limit</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring billing_usage_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.logoTag">logoTag</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring logo_match_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond">megabitsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth">newHealth</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring load_balancing_health_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus">newStatus</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring tunnel_health_event. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond">packetsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId">poolId</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.popNames">popNames</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product">product</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring billing_usage_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId">projectId</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol">protocol</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.queryTag">queryTag</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond">requestsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.selectors">selectors</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring clickhouse_alert_fw_ent_anomaly. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo">slo</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring health_check_status_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname">targetHostname</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetIp">targetIp</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName">targetZoneName</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.trafficExclusions">trafficExclusions</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring traffic_anomalies_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelId">tunnelId</a></code> | <code>java.util.List<java.lang.String></code> | Used for configuring tunnel_health_event. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelName">tunnelName</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where">where</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Usage depends on specific alert type. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#actions NotificationPolicy#actions}

---

##### `affectedAsns`<sup>Optional</sup> <a name="affectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedAsns"></a>

```java
public java.util.List<java.lang.String> getAffectedAsns();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#affected_asns NotificationPolicy#affected_asns}

---

##### `affectedComponents`<sup>Optional</sup> <a name="affectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedComponents"></a>

```java
public java.util.List<java.lang.String> getAffectedComponents();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#affected_components NotificationPolicy#affected_components}

---

##### `affectedLocations`<sup>Optional</sup> <a name="affectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedLocations"></a>

```java
public java.util.List<java.lang.String> getAffectedLocations();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#affected_locations NotificationPolicy#affected_locations}

---

##### `airportCode`<sup>Optional</sup> <a name="airportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.airportCode"></a>

```java
public java.util.List<java.lang.String> getAirportCode();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring maintenance_event_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#airport_code NotificationPolicy#airport_code}

---

##### `alertTriggerPreferences`<sup>Optional</sup> <a name="alertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences"></a>

```java
public java.util.List<java.lang.String> getAlertTriggerPreferences();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_trigger_preferences NotificationPolicy#alert_trigger_preferences}

---

##### `alertTriggerPreferencesValue`<sup>Optional</sup> <a name="alertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferencesValue"></a>

```java
public java.util.List<java.lang.String> getAlertTriggerPreferencesValue();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_trigger_preferences_value NotificationPolicy#alert_trigger_preferences_value}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled"></a>

```java
public java.util.List<java.lang.String> getEnabled();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring load_balancing_pool_enablement_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment"></a>

```java
public java.util.List<java.lang.String> getEnvironment();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#environment NotificationPolicy#environment}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event"></a>

```java
public java.util.List<java.lang.String> getEvent();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#event NotificationPolicy#event}

---

##### `eventSource`<sup>Optional</sup> <a name="eventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource"></a>

```java
public java.util.List<java.lang.String> getEventSource();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#event_source NotificationPolicy#event_source}

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType"></a>

```java
public java.util.List<java.lang.String> getEventType();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#event_type NotificationPolicy#event_type}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#group_by NotificationPolicy#group_by}

---

##### `healthCheckId`<sup>Optional</sup> <a name="healthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId"></a>

```java
public java.util.List<java.lang.String> getHealthCheckId();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#health_check_id NotificationPolicy#health_check_id}

---

##### `incidentImpact`<sup>Optional</sup> <a name="incidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact"></a>

```java
public java.util.List<java.lang.String> getIncidentImpact();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#incident_impact NotificationPolicy#incident_impact}

---

##### `inputId`<sup>Optional</sup> <a name="inputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId"></a>

```java
public java.util.List<java.lang.String> getInputId();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring stream_live_notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#input_id NotificationPolicy#input_id}

---

##### `insightClass`<sup>Optional</sup> <a name="insightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.insightClass"></a>

```java
public java.util.List<java.lang.String> getInsightClass();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring security_insights_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#insight_class NotificationPolicy#insight_class}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit"></a>

```java
public java.util.List<java.lang.String> getLimit();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#limit NotificationPolicy#limit}

---

##### `logoTag`<sup>Optional</sup> <a name="logoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.logoTag"></a>

```java
public java.util.List<java.lang.String> getLogoTag();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring logo_match_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#logo_tag NotificationPolicy#logo_tag}

---

##### `megabitsPerSecond`<sup>Optional</sup> <a name="megabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond"></a>

```java
public java.util.List<java.lang.String> getMegabitsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#megabits_per_second NotificationPolicy#megabits_per_second}

---

##### `newHealth`<sup>Optional</sup> <a name="newHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth"></a>

```java
public java.util.List<java.lang.String> getNewHealth();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#new_health NotificationPolicy#new_health}

---

##### `newStatus`<sup>Optional</sup> <a name="newStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus"></a>

```java
public java.util.List<java.lang.String> getNewStatus();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#new_status NotificationPolicy#new_status}

---

##### `packetsPerSecond`<sup>Optional</sup> <a name="packetsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond"></a>

```java
public java.util.List<java.lang.String> getPacketsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#packets_per_second NotificationPolicy#packets_per_second}

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId"></a>

```java
public java.util.List<java.lang.String> getPoolId();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#pool_id NotificationPolicy#pool_id}

---

##### `popNames`<sup>Optional</sup> <a name="popNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.popNames"></a>

```java
public java.util.List<java.lang.String> getPopNames();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#pop_names NotificationPolicy#pop_names}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product"></a>

```java
public java.util.List<java.lang.String> getProduct();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#product NotificationPolicy#product}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId"></a>

```java
public java.util.List<java.lang.String> getProjectId();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#project_id NotificationPolicy#project_id}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol"></a>

```java
public java.util.List<java.lang.String> getProtocol();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#protocol NotificationPolicy#protocol}

---

##### `queryTag`<sup>Optional</sup> <a name="queryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.queryTag"></a>

```java
public java.util.List<java.lang.String> getQueryTag();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#query_tag NotificationPolicy#query_tag}

---

##### `requestsPerSecond`<sup>Optional</sup> <a name="requestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond"></a>

```java
public java.util.List<java.lang.String> getRequestsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#requests_per_second NotificationPolicy#requests_per_second}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.selectors"></a>

```java
public java.util.List<java.lang.String> getSelectors();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#selectors NotificationPolicy#selectors}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring clickhouse_alert_fw_ent_anomaly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#services NotificationPolicy#services}

---

##### `slo`<sup>Optional</sup> <a name="slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo"></a>

```java
public java.util.List<java.lang.String> getSlo();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#slo NotificationPolicy#slo}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#status NotificationPolicy#status}

---

##### `targetHostname`<sup>Optional</sup> <a name="targetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname"></a>

```java
public java.util.List<java.lang.String> getTargetHostname();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#target_hostname NotificationPolicy#target_hostname}

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetIp"></a>

```java
public java.util.List<java.lang.String> getTargetIp();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#target_ip NotificationPolicy#target_ip}

---

##### `targetZoneName`<sup>Optional</sup> <a name="targetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName"></a>

```java
public java.util.List<java.lang.String> getTargetZoneName();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#target_zone_name NotificationPolicy#target_zone_name}

---

##### `trafficExclusions`<sup>Optional</sup> <a name="trafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.trafficExclusions"></a>

```java
public java.util.List<java.lang.String> getTrafficExclusions();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring traffic_anomalies_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#traffic_exclusions NotificationPolicy#traffic_exclusions}

---

##### `tunnelId`<sup>Optional</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelId"></a>

```java
public java.util.List<java.lang.String> getTunnelId();
```

- *Type:* java.util.List<java.lang.String>

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#tunnel_id NotificationPolicy#tunnel_id}

---

##### `tunnelName`<sup>Optional</sup> <a name="tunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelName"></a>

```java
public java.util.List<java.lang.String> getTunnelName();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#tunnel_name NotificationPolicy#tunnel_name}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where"></a>

```java
public java.util.List<java.lang.String> getWhere();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#where NotificationPolicy#where}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#zones NotificationPolicy#zones}

---

### NotificationPolicyMechanisms <a name="NotificationPolicyMechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanisms;

NotificationPolicyMechanisms.builder()
//  .email(IResolvable)
//  .email(java.util.List<NotificationPolicyMechanismsEmail>)
//  .pagerduty(IResolvable)
//  .pagerduty(java.util.List<NotificationPolicyMechanismsPagerduty>)
//  .webhooks(IResolvable)
//  .webhooks(java.util.List<NotificationPolicyMechanismsWebhooks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.email">email</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#email NotificationPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.pagerduty">pagerduty</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.webhooks">webhooks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.email"></a>

```java
public java.lang.Object getEmail();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#email NotificationPolicy#email}.

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.pagerduty"></a>

```java
public java.lang.Object getPagerduty();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}.

---

##### `webhooks`<sup>Optional</sup> <a name="webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.webhooks"></a>

```java
public java.lang.Object getWebhooks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}.

---

### NotificationPolicyMechanismsEmail <a name="NotificationPolicyMechanismsEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsEmail;

NotificationPolicyMechanismsEmail.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.property.id">id</a></code> | <code>java.lang.String</code> | The email address. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationPolicyMechanismsPagerduty <a name="NotificationPolicyMechanismsPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsPagerduty;

NotificationPolicyMechanismsPagerduty.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.property.id">id</a></code> | <code>java.lang.String</code> | UUID. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationPolicyMechanismsWebhooks <a name="NotificationPolicyMechanismsWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsWebhooks;

NotificationPolicyMechanismsWebhooks.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.property.id">id</a></code> | <code>java.lang.String</code> | UUID. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationPolicyFiltersOutputReference <a name="NotificationPolicyFiltersOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyFiltersOutputReference;

new NotificationPolicyFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedAsns">resetAffectedAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedComponents">resetAffectedComponents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedLocations">resetAffectedLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAirportCode">resetAirportCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences">resetAlertTriggerPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferencesValue">resetAlertTriggerPreferencesValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource">resetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId">resetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact">resetIncidentImpact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId">resetInputId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInsightClass">resetInsightClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLogoTag">resetLogoTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond">resetMegabitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth">resetNewHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus">resetNewStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond">resetPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId">resetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPopNames">resetPopNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetQueryTag">resetQueryTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond">resetRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSelectors">resetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo">resetSlo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname">resetTargetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetIp">resetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName">resetTargetZoneName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTrafficExclusions">resetTrafficExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelId">resetTunnelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelName">resetTunnelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetWhere">resetWhere</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetZones">resetZones</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetAffectedAsns` <a name="resetAffectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedAsns"></a>

```java
public void resetAffectedAsns()
```

##### `resetAffectedComponents` <a name="resetAffectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedComponents"></a>

```java
public void resetAffectedComponents()
```

##### `resetAffectedLocations` <a name="resetAffectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedLocations"></a>

```java
public void resetAffectedLocations()
```

##### `resetAirportCode` <a name="resetAirportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAirportCode"></a>

```java
public void resetAirportCode()
```

##### `resetAlertTriggerPreferences` <a name="resetAlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences"></a>

```java
public void resetAlertTriggerPreferences()
```

##### `resetAlertTriggerPreferencesValue` <a name="resetAlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferencesValue"></a>

```java
public void resetAlertTriggerPreferencesValue()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent"></a>

```java
public void resetEvent()
```

##### `resetEventSource` <a name="resetEventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource"></a>

```java
public void resetEventSource()
```

##### `resetEventType` <a name="resetEventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType"></a>

```java
public void resetEventType()
```

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetHealthCheckId` <a name="resetHealthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId"></a>

```java
public void resetHealthCheckId()
```

##### `resetIncidentImpact` <a name="resetIncidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact"></a>

```java
public void resetIncidentImpact()
```

##### `resetInputId` <a name="resetInputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId"></a>

```java
public void resetInputId()
```

##### `resetInsightClass` <a name="resetInsightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInsightClass"></a>

```java
public void resetInsightClass()
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetLogoTag` <a name="resetLogoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLogoTag"></a>

```java
public void resetLogoTag()
```

##### `resetMegabitsPerSecond` <a name="resetMegabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond"></a>

```java
public void resetMegabitsPerSecond()
```

##### `resetNewHealth` <a name="resetNewHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth"></a>

```java
public void resetNewHealth()
```

##### `resetNewStatus` <a name="resetNewStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus"></a>

```java
public void resetNewStatus()
```

##### `resetPacketsPerSecond` <a name="resetPacketsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond"></a>

```java
public void resetPacketsPerSecond()
```

##### `resetPoolId` <a name="resetPoolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId"></a>

```java
public void resetPoolId()
```

##### `resetPopNames` <a name="resetPopNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPopNames"></a>

```java
public void resetPopNames()
```

##### `resetProduct` <a name="resetProduct" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct"></a>

```java
public void resetProduct()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetQueryTag` <a name="resetQueryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetQueryTag"></a>

```java
public void resetQueryTag()
```

##### `resetRequestsPerSecond` <a name="resetRequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond"></a>

```java
public void resetRequestsPerSecond()
```

##### `resetSelectors` <a name="resetSelectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSelectors"></a>

```java
public void resetSelectors()
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices"></a>

```java
public void resetServices()
```

##### `resetSlo` <a name="resetSlo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo"></a>

```java
public void resetSlo()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTargetHostname` <a name="resetTargetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname"></a>

```java
public void resetTargetHostname()
```

##### `resetTargetIp` <a name="resetTargetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetIp"></a>

```java
public void resetTargetIp()
```

##### `resetTargetZoneName` <a name="resetTargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName"></a>

```java
public void resetTargetZoneName()
```

##### `resetTrafficExclusions` <a name="resetTrafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTrafficExclusions"></a>

```java
public void resetTrafficExclusions()
```

##### `resetTunnelId` <a name="resetTunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelId"></a>

```java
public void resetTunnelId()
```

##### `resetTunnelName` <a name="resetTunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelName"></a>

```java
public void resetTunnelName()
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetWhere"></a>

```java
public void resetWhere()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetZones"></a>

```java
public void resetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsnsInput">affectedAsnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponentsInput">affectedComponentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocationsInput">affectedLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCodeInput">airportCodeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput">alertTriggerPreferencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValueInput">alertTriggerPreferencesValueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput">eventInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput">eventSourceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput">groupByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput">healthCheckIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput">incidentImpactInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput">inputIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClassInput">insightClassInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput">limitInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTagInput">logoTagInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput">megabitsPerSecondInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput">newHealthInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput">newStatusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput">packetsPerSecondInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput">poolIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNamesInput">popNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput">productInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTagInput">queryTagInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput">requestsPerSecondInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput">sloInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput">statusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput">targetHostnameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIpInput">targetIpInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput">targetZoneNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusionsInput">trafficExclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelIdInput">tunnelIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelNameInput">tunnelNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput">whereInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsns">affectedAsns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponents">affectedComponents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocations">affectedLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCode">airportCode</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences">alertTriggerPreferences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue">alertTriggerPreferencesValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled">enabled</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment">environment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event">event</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource">eventSource</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType">eventType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId">healthCheckId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact">incidentImpact</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId">inputId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClass">insightClass</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit">limit</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTag">logoTag</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond">megabitsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth">newHealth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus">newStatus</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond">packetsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId">poolId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNames">popNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product">product</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId">projectId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol">protocol</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTag">queryTag</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond">requestsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectors">selectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo">slo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname">targetHostname</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIp">targetIp</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName">targetZoneName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusions">trafficExclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelName">tunnelName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where">where</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedAsnsInput`<sup>Optional</sup> <a name="affectedAsnsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsnsInput"></a>

```java
public java.util.List<java.lang.String> getAffectedAsnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedComponentsInput`<sup>Optional</sup> <a name="affectedComponentsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponentsInput"></a>

```java
public java.util.List<java.lang.String> getAffectedComponentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedLocationsInput`<sup>Optional</sup> <a name="affectedLocationsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocationsInput"></a>

```java
public java.util.List<java.lang.String> getAffectedLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `airportCodeInput`<sup>Optional</sup> <a name="airportCodeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCodeInput"></a>

```java
public java.util.List<java.lang.String> getAirportCodeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertTriggerPreferencesInput`<sup>Optional</sup> <a name="alertTriggerPreferencesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput"></a>

```java
public java.util.List<java.lang.String> getAlertTriggerPreferencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertTriggerPreferencesValueInput`<sup>Optional</sup> <a name="alertTriggerPreferencesValueInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValueInput"></a>

```java
public java.util.List<java.lang.String> getAlertTriggerPreferencesValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput"></a>

```java
public java.util.List<java.lang.String> getEnabledInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput"></a>

```java
public java.util.List<java.lang.String> getEnvironmentInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput"></a>

```java
public java.util.List<java.lang.String> getEventInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventSourceInput`<sup>Optional</sup> <a name="eventSourceInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput"></a>

```java
public java.util.List<java.lang.String> getEventSourceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput"></a>

```java
public java.util.List<java.lang.String> getEventTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput"></a>

```java
public java.util.List<java.lang.String> getGroupByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `healthCheckIdInput`<sup>Optional</sup> <a name="healthCheckIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput"></a>

```java
public java.util.List<java.lang.String> getHealthCheckIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `incidentImpactInput`<sup>Optional</sup> <a name="incidentImpactInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput"></a>

```java
public java.util.List<java.lang.String> getIncidentImpactInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inputIdInput`<sup>Optional</sup> <a name="inputIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput"></a>

```java
public java.util.List<java.lang.String> getInputIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insightClassInput`<sup>Optional</sup> <a name="insightClassInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClassInput"></a>

```java
public java.util.List<java.lang.String> getInsightClassInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput"></a>

```java
public java.util.List<java.lang.String> getLimitInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logoTagInput`<sup>Optional</sup> <a name="logoTagInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTagInput"></a>

```java
public java.util.List<java.lang.String> getLogoTagInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `megabitsPerSecondInput`<sup>Optional</sup> <a name="megabitsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput"></a>

```java
public java.util.List<java.lang.String> getMegabitsPerSecondInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newHealthInput`<sup>Optional</sup> <a name="newHealthInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput"></a>

```java
public java.util.List<java.lang.String> getNewHealthInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newStatusInput`<sup>Optional</sup> <a name="newStatusInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput"></a>

```java
public java.util.List<java.lang.String> getNewStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `packetsPerSecondInput`<sup>Optional</sup> <a name="packetsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput"></a>

```java
public java.util.List<java.lang.String> getPacketsPerSecondInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput"></a>

```java
public java.util.List<java.lang.String> getPoolIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `popNamesInput`<sup>Optional</sup> <a name="popNamesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNamesInput"></a>

```java
public java.util.List<java.lang.String> getPopNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput"></a>

```java
public java.util.List<java.lang.String> getProductInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput"></a>

```java
public java.util.List<java.lang.String> getProjectIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput"></a>

```java
public java.util.List<java.lang.String> getProtocolInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryTagInput`<sup>Optional</sup> <a name="queryTagInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTagInput"></a>

```java
public java.util.List<java.lang.String> getQueryTagInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestsPerSecondInput`<sup>Optional</sup> <a name="requestsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput"></a>

```java
public java.util.List<java.lang.String> getRequestsPerSecondInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectorsInput"></a>

```java
public java.util.List<java.lang.String> getSelectorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sloInput`<sup>Optional</sup> <a name="sloInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput"></a>

```java
public java.util.List<java.lang.String> getSloInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput"></a>

```java
public java.util.List<java.lang.String> getStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetHostnameInput`<sup>Optional</sup> <a name="targetHostnameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput"></a>

```java
public java.util.List<java.lang.String> getTargetHostnameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetIpInput`<sup>Optional</sup> <a name="targetIpInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIpInput"></a>

```java
public java.util.List<java.lang.String> getTargetIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetZoneNameInput`<sup>Optional</sup> <a name="targetZoneNameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput"></a>

```java
public java.util.List<java.lang.String> getTargetZoneNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trafficExclusionsInput`<sup>Optional</sup> <a name="trafficExclusionsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusionsInput"></a>

```java
public java.util.List<java.lang.String> getTrafficExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelIdInput"></a>

```java
public java.util.List<java.lang.String> getTunnelIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelNameInput`<sup>Optional</sup> <a name="tunnelNameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelNameInput"></a>

```java
public java.util.List<java.lang.String> getTunnelNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput"></a>

```java
public java.util.List<java.lang.String> getWhereInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedAsns`<sup>Required</sup> <a name="affectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsns"></a>

```java
public java.util.List<java.lang.String> getAffectedAsns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedComponents`<sup>Required</sup> <a name="affectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponents"></a>

```java
public java.util.List<java.lang.String> getAffectedComponents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedLocations`<sup>Required</sup> <a name="affectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocations"></a>

```java
public java.util.List<java.lang.String> getAffectedLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `airportCode`<sup>Required</sup> <a name="airportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCode"></a>

```java
public java.util.List<java.lang.String> getAirportCode();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertTriggerPreferences`<sup>Required</sup> <a name="alertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences"></a>

```java
public java.util.List<java.lang.String> getAlertTriggerPreferences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertTriggerPreferencesValue`<sup>Required</sup> <a name="alertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```java
public java.util.List<java.lang.String> getAlertTriggerPreferencesValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled"></a>

```java
public java.util.List<java.lang.String> getEnabled();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment"></a>

```java
public java.util.List<java.lang.String> getEnvironment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event"></a>

```java
public java.util.List<java.lang.String> getEvent();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource"></a>

```java
public java.util.List<java.lang.String> getEventSource();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType"></a>

```java
public java.util.List<java.lang.String> getEventType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId"></a>

```java
public java.util.List<java.lang.String> getHealthCheckId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `incidentImpact`<sup>Required</sup> <a name="incidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact"></a>

```java
public java.util.List<java.lang.String> getIncidentImpact();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inputId`<sup>Required</sup> <a name="inputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId"></a>

```java
public java.util.List<java.lang.String> getInputId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insightClass`<sup>Required</sup> <a name="insightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClass"></a>

```java
public java.util.List<java.lang.String> getInsightClass();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit"></a>

```java
public java.util.List<java.lang.String> getLimit();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logoTag`<sup>Required</sup> <a name="logoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTag"></a>

```java
public java.util.List<java.lang.String> getLogoTag();
```

- *Type:* java.util.List<java.lang.String>

---

##### `megabitsPerSecond`<sup>Required</sup> <a name="megabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond"></a>

```java
public java.util.List<java.lang.String> getMegabitsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newHealth`<sup>Required</sup> <a name="newHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth"></a>

```java
public java.util.List<java.lang.String> getNewHealth();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newStatus`<sup>Required</sup> <a name="newStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus"></a>

```java
public java.util.List<java.lang.String> getNewStatus();
```

- *Type:* java.util.List<java.lang.String>

---

##### `packetsPerSecond`<sup>Required</sup> <a name="packetsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond"></a>

```java
public java.util.List<java.lang.String> getPacketsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId"></a>

```java
public java.util.List<java.lang.String> getPoolId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `popNames`<sup>Required</sup> <a name="popNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNames"></a>

```java
public java.util.List<java.lang.String> getPopNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product"></a>

```java
public java.util.List<java.lang.String> getProduct();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId"></a>

```java
public java.util.List<java.lang.String> getProjectId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol"></a>

```java
public java.util.List<java.lang.String> getProtocol();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryTag`<sup>Required</sup> <a name="queryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTag"></a>

```java
public java.util.List<java.lang.String> getQueryTag();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestsPerSecond`<sup>Required</sup> <a name="requestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond"></a>

```java
public java.util.List<java.lang.String> getRequestsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectors"></a>

```java
public java.util.List<java.lang.String> getSelectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `slo`<sup>Required</sup> <a name="slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo"></a>

```java
public java.util.List<java.lang.String> getSlo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetHostname`<sup>Required</sup> <a name="targetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname"></a>

```java
public java.util.List<java.lang.String> getTargetHostname();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIp"></a>

```java
public java.util.List<java.lang.String> getTargetIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetZoneName`<sup>Required</sup> <a name="targetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName"></a>

```java
public java.util.List<java.lang.String> getTargetZoneName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trafficExclusions`<sup>Required</sup> <a name="trafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusions"></a>

```java
public java.util.List<java.lang.String> getTrafficExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelId"></a>

```java
public java.util.List<java.lang.String> getTunnelId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelName`<sup>Required</sup> <a name="tunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelName"></a>

```java
public java.util.List<java.lang.String> getTunnelName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where"></a>

```java
public java.util.List<java.lang.String> getWhere();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

---


### NotificationPolicyMechanismsEmailList <a name="NotificationPolicyMechanismsEmailList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsEmailList;

new NotificationPolicyMechanismsEmailList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get"></a>

```java
public NotificationPolicyMechanismsEmailOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>>

---


### NotificationPolicyMechanismsEmailOutputReference <a name="NotificationPolicyMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsEmailOutputReference;

new NotificationPolicyMechanismsEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>

---


### NotificationPolicyMechanismsOutputReference <a name="NotificationPolicyMechanismsOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsOutputReference;

new NotificationPolicyMechanismsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty">putPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks">putWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetPagerduty">resetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetWebhooks">resetWebhooks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmail` <a name="putEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail"></a>

```java
public void putEmail(IResolvable OR java.util.List<NotificationPolicyMechanismsEmail> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>>

---

##### `putPagerduty` <a name="putPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty"></a>

```java
public void putPagerduty(IResolvable OR java.util.List<NotificationPolicyMechanismsPagerduty> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>>

---

##### `putWebhooks` <a name="putWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks"></a>

```java
public void putWebhooks(IResolvable OR java.util.List<NotificationPolicyMechanismsWebhooks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>>

---

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetPagerduty` <a name="resetPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetPagerduty"></a>

```java
public void resetPagerduty()
```

##### `resetWebhooks` <a name="resetWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetWebhooks"></a>

```java
public void resetWebhooks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList">NotificationPolicyMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList">NotificationPolicyMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooks">webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList">NotificationPolicyMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.emailInput">emailInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerdutyInput">pagerdutyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooksInput">webhooksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.email"></a>

```java
public NotificationPolicyMechanismsEmailList getEmail();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList">NotificationPolicyMechanismsEmailList</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerduty"></a>

```java
public NotificationPolicyMechanismsPagerdutyList getPagerduty();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList">NotificationPolicyMechanismsPagerdutyList</a>

---

##### `webhooks`<sup>Required</sup> <a name="webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooks"></a>

```java
public NotificationPolicyMechanismsWebhooksList getWebhooks();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList">NotificationPolicyMechanismsWebhooksList</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.emailInput"></a>

```java
public java.lang.Object getEmailInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>>

---

##### `pagerdutyInput`<sup>Optional</sup> <a name="pagerdutyInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerdutyInput"></a>

```java
public java.lang.Object getPagerdutyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>>

---

##### `webhooksInput`<sup>Optional</sup> <a name="webhooksInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooksInput"></a>

```java
public java.lang.Object getWebhooksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

---


### NotificationPolicyMechanismsPagerdutyList <a name="NotificationPolicyMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsPagerdutyList;

new NotificationPolicyMechanismsPagerdutyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get"></a>

```java
public NotificationPolicyMechanismsPagerdutyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>>

---


### NotificationPolicyMechanismsPagerdutyOutputReference <a name="NotificationPolicyMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsPagerdutyOutputReference;

new NotificationPolicyMechanismsPagerdutyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>

---


### NotificationPolicyMechanismsWebhooksList <a name="NotificationPolicyMechanismsWebhooksList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsWebhooksList;

new NotificationPolicyMechanismsWebhooksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get"></a>

```java
public NotificationPolicyMechanismsWebhooksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>>

---


### NotificationPolicyMechanismsWebhooksOutputReference <a name="NotificationPolicyMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.notification_policy.NotificationPolicyMechanismsWebhooksOutputReference;

new NotificationPolicyMechanismsWebhooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>

---



