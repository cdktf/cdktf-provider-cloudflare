# `notificationPolicy` Submodule <a name="`notificationPolicy` Submodule" id="@cdktf/provider-cloudflare.notificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationPolicy <a name="NotificationPolicy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy cloudflare_notification_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  alert_type: str,
  mechanisms: NotificationPolicyMechanisms,
  name: str,
  alert_interval: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  filters: NotificationPolicyFilters = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.alertType">alert_type</a></code> | <code>str</code> | Refers to which event will trigger a Notification dispatch. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a></code> | List of IDs that will be used when dispatching a notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.alertInterval">alert_interval</a></code> | <code>str</code> | Optional specification of how often to re-alert from the same incident, not support on all alert types. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional description for the Notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the Notification policy is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#account_id NotificationPolicy#account_id}

---

##### `alert_type`<sup>Required</sup> <a name="alert_type" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.alertType"></a>

- *Type:* str

Refers to which event will trigger a Notification dispatch.

You can use the endpoint to get available alert types which then will give you a list of possible values.
Available values: "access_custom_certificate_expiration_type", "advanced_ddos_attack_l4_alert", "advanced_ddos_attack_l7_alert", "advanced_http_alert_error", "bgp_hijack_notification", "billing_usage_alert", "block_notification_block_removed", "block_notification_new_block", "block_notification_review_rejected", "brand_protection_alert", "brand_protection_digest", "clickhouse_alert_fw_anomaly", "clickhouse_alert_fw_ent_anomaly", "cloudforce_one_request_notification", "custom_analytics", "custom_ssl_certificate_event_type", "dedicated_ssl_certificate_event_type", "device_connectivity_anomaly_alert", "dos_attack_l4", "dos_attack_l7", "expiring_service_token_alert", "failing_logpush_job_disabled_alert", "fbm_auto_advertisement", "fbm_dosd_attack", "fbm_volumetric_attack", "health_check_status_notification", "hostname_aop_custom_certificate_expiration_type", "http_alert_edge_error", "http_alert_origin_error", "image_notification", "image_resizing_notification", "incident_alert", "load_balancing_health_alert", "load_balancing_pool_enablement_alert", "logo_match_alert", "magic_tunnel_health_check_event", "magic_wan_tunnel_health", "maintenance_event_notification", "mtls_certificate_store_certificate_expiration_type", "pages_event_alert", "radar_notification", "real_origin_monitoring", "scriptmonitor_alert_new_code_change_detections", "scriptmonitor_alert_new_hosts", "scriptmonitor_alert_new_malicious_hosts", "scriptmonitor_alert_new_malicious_scripts", "scriptmonitor_alert_new_malicious_url", "scriptmonitor_alert_new_max_length_resource_url", "scriptmonitor_alert_new_resources", "secondary_dns_all_primaries_failing", "secondary_dns_primaries_failing", "secondary_dns_warning", "secondary_dns_zone_successfully_updated", "secondary_dns_zone_validation_warning", "security_insights_alert", "sentinel_alert", "stream_live_notifications", "synthetic_test_latency_alert", "synthetic_test_low_availability_alert", "traffic_anomalies_alert", "tunnel_health_event", "tunnel_update_event", "universal_ssl_event_type", "web_analytics_metrics_update", "zone_aop_custom_certificate_expiration_type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.mechanisms"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

List of IDs that will be used when dispatching a notification.

IDs for email type will be the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#mechanisms NotificationPolicy#mechanisms}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#name NotificationPolicy#name}

---

##### `alert_interval`<sup>Optional</sup> <a name="alert_interval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.alertInterval"></a>

- *Type:* str

Optional specification of how often to re-alert from the same incident, not support on all alert types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#alert_interval NotificationPolicy#alert_interval}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.description"></a>

- *Type:* str

Optional description for the Notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#description NotificationPolicy#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the Notification policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria.

This is only available for select alert types. See alert type documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#filters NotificationPolicy#filters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms">put_mechanisms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetAlertInterval">reset_alert_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters">reset_filters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters"></a>

```python
def put_filters(
  actions: typing.List[str] = None,
  affected_asns: typing.List[str] = None,
  affected_components: typing.List[str] = None,
  affected_locations: typing.List[str] = None,
  airport_code: typing.List[str] = None,
  alert_trigger_preferences: typing.List[str] = None,
  alert_trigger_preferences_value: typing.List[str] = None,
  enabled: typing.List[str] = None,
  environment: typing.List[str] = None,
  event: typing.List[str] = None,
  event_source: typing.List[str] = None,
  event_type: typing.List[str] = None,
  group_by: typing.List[str] = None,
  health_check_id: typing.List[str] = None,
  incident_impact: typing.List[str] = None,
  input_id: typing.List[str] = None,
  insight_class: typing.List[str] = None,
  limit: typing.List[str] = None,
  logo_tag: typing.List[str] = None,
  megabits_per_second: typing.List[str] = None,
  new_health: typing.List[str] = None,
  new_status: typing.List[str] = None,
  packets_per_second: typing.List[str] = None,
  pool_id: typing.List[str] = None,
  pop_names: typing.List[str] = None,
  product: typing.List[str] = None,
  project_id: typing.List[str] = None,
  protocol: typing.List[str] = None,
  query_tag: typing.List[str] = None,
  requests_per_second: typing.List[str] = None,
  selectors: typing.List[str] = None,
  services: typing.List[str] = None,
  slo: typing.List[str] = None,
  status: typing.List[str] = None,
  target_hostname: typing.List[str] = None,
  target_ip: typing.List[str] = None,
  target_zone_name: typing.List[str] = None,
  traffic_exclusions: typing.List[str] = None,
  tunnel_id: typing.List[str] = None,
  tunnel_name: typing.List[str] = None,
  where: typing.List[str] = None,
  zones: typing.List[str] = None
) -> None
```

###### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.actions"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#actions NotificationPolicy#actions}

---

###### `affected_asns`<sup>Optional</sup> <a name="affected_asns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.affectedAsns"></a>

- *Type:* typing.List[str]

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#affected_asns NotificationPolicy#affected_asns}

---

###### `affected_components`<sup>Optional</sup> <a name="affected_components" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.affectedComponents"></a>

- *Type:* typing.List[str]

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#affected_components NotificationPolicy#affected_components}

---

###### `affected_locations`<sup>Optional</sup> <a name="affected_locations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.affectedLocations"></a>

- *Type:* typing.List[str]

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#affected_locations NotificationPolicy#affected_locations}

---

###### `airport_code`<sup>Optional</sup> <a name="airport_code" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.airportCode"></a>

- *Type:* typing.List[str]

Used for configuring maintenance_event_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#airport_code NotificationPolicy#airport_code}

---

###### `alert_trigger_preferences`<sup>Optional</sup> <a name="alert_trigger_preferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.alertTriggerPreferences"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#alert_trigger_preferences NotificationPolicy#alert_trigger_preferences}

---

###### `alert_trigger_preferences_value`<sup>Optional</sup> <a name="alert_trigger_preferences_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.alertTriggerPreferencesValue"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#alert_trigger_preferences_value NotificationPolicy#alert_trigger_preferences_value}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.enabled"></a>

- *Type:* typing.List[str]

Used for configuring load_balancing_pool_enablement_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.environment"></a>

- *Type:* typing.List[str]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#environment NotificationPolicy#environment}

---

###### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.event"></a>

- *Type:* typing.List[str]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#event NotificationPolicy#event}

---

###### `event_source`<sup>Optional</sup> <a name="event_source" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.eventSource"></a>

- *Type:* typing.List[str]

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#event_source NotificationPolicy#event_source}

---

###### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.eventType"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#event_type NotificationPolicy#event_type}

---

###### `group_by`<sup>Optional</sup> <a name="group_by" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.groupBy"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}

---

###### `health_check_id`<sup>Optional</sup> <a name="health_check_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.healthCheckId"></a>

- *Type:* typing.List[str]

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#health_check_id NotificationPolicy#health_check_id}

---

###### `incident_impact`<sup>Optional</sup> <a name="incident_impact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.incidentImpact"></a>

- *Type:* typing.List[str]

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#incident_impact NotificationPolicy#incident_impact}

---

###### `input_id`<sup>Optional</sup> <a name="input_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.inputId"></a>

- *Type:* typing.List[str]

Used for configuring stream_live_notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#input_id NotificationPolicy#input_id}

---

###### `insight_class`<sup>Optional</sup> <a name="insight_class" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.insightClass"></a>

- *Type:* typing.List[str]

Used for configuring security_insights_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#insight_class NotificationPolicy#insight_class}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.limit"></a>

- *Type:* typing.List[str]

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#limit NotificationPolicy#limit}

---

###### `logo_tag`<sup>Optional</sup> <a name="logo_tag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.logoTag"></a>

- *Type:* typing.List[str]

Used for configuring logo_match_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#logo_tag NotificationPolicy#logo_tag}

---

###### `megabits_per_second`<sup>Optional</sup> <a name="megabits_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.megabitsPerSecond"></a>

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#megabits_per_second NotificationPolicy#megabits_per_second}

---

###### `new_health`<sup>Optional</sup> <a name="new_health" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.newHealth"></a>

- *Type:* typing.List[str]

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#new_health NotificationPolicy#new_health}

---

###### `new_status`<sup>Optional</sup> <a name="new_status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.newStatus"></a>

- *Type:* typing.List[str]

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#new_status NotificationPolicy#new_status}

---

###### `packets_per_second`<sup>Optional</sup> <a name="packets_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.packetsPerSecond"></a>

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#packets_per_second NotificationPolicy#packets_per_second}

---

###### `pool_id`<sup>Optional</sup> <a name="pool_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.poolId"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#pool_id NotificationPolicy#pool_id}

---

###### `pop_names`<sup>Optional</sup> <a name="pop_names" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.popNames"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#pop_names NotificationPolicy#pop_names}

---

###### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.product"></a>

- *Type:* typing.List[str]

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#product NotificationPolicy#product}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.projectId"></a>

- *Type:* typing.List[str]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#project_id NotificationPolicy#project_id}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.protocol"></a>

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#protocol NotificationPolicy#protocol}

---

###### `query_tag`<sup>Optional</sup> <a name="query_tag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.queryTag"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#query_tag NotificationPolicy#query_tag}

---

###### `requests_per_second`<sup>Optional</sup> <a name="requests_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.requestsPerSecond"></a>

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#requests_per_second NotificationPolicy#requests_per_second}

---

###### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.selectors"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#selectors NotificationPolicy#selectors}

---

###### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.services"></a>

- *Type:* typing.List[str]

Used for configuring clickhouse_alert_fw_ent_anomaly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#services NotificationPolicy#services}

---

###### `slo`<sup>Optional</sup> <a name="slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.slo"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#slo NotificationPolicy#slo}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.status"></a>

- *Type:* typing.List[str]

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#status NotificationPolicy#status}

---

###### `target_hostname`<sup>Optional</sup> <a name="target_hostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.targetHostname"></a>

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#target_hostname NotificationPolicy#target_hostname}

---

###### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.targetIp"></a>

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#target_ip NotificationPolicy#target_ip}

---

###### `target_zone_name`<sup>Optional</sup> <a name="target_zone_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.targetZoneName"></a>

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#target_zone_name NotificationPolicy#target_zone_name}

---

###### `traffic_exclusions`<sup>Optional</sup> <a name="traffic_exclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.trafficExclusions"></a>

- *Type:* typing.List[str]

Used for configuring traffic_anomalies_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#traffic_exclusions NotificationPolicy#traffic_exclusions}

---

###### `tunnel_id`<sup>Optional</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.tunnelId"></a>

- *Type:* typing.List[str]

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#tunnel_id NotificationPolicy#tunnel_id}

---

###### `tunnel_name`<sup>Optional</sup> <a name="tunnel_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.tunnelName"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#tunnel_name NotificationPolicy#tunnel_name}

---

###### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.where"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#where NotificationPolicy#where}

---

###### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.zones"></a>

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#zones NotificationPolicy#zones}

---

##### `put_mechanisms` <a name="put_mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms"></a>

```python
def put_mechanisms(
  email: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsEmail]] = None,
  pagerduty: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsPagerduty]] = None,
  webhooks: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsWebhooks]] = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms.parameter.email"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#email NotificationPolicy#email}.

---

###### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms.parameter.pagerduty"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}.

---

###### `webhooks`<sup>Optional</sup> <a name="webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms.parameter.webhooks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}.

---

##### `reset_alert_interval` <a name="reset_alert_interval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetAlertInterval"></a>

```python
def reset_alert_interval() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters"></a>

```python
def reset_filters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicy.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference">NotificationPolicyMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertIntervalInput">alert_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput">alert_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput">filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanismsInput">mechanisms_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertInterval">alert_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType">alert_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters"></a>

```python
filters: NotificationPolicyFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanisms"></a>

```python
mechanisms: NotificationPolicyMechanismsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference">NotificationPolicyMechanismsOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `alert_interval_input`<sup>Optional</sup> <a name="alert_interval_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertIntervalInput"></a>

```python
alert_interval_input: str
```

- *Type:* str

---

##### `alert_type_input`<sup>Optional</sup> <a name="alert_type_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput"></a>

```python
alert_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput"></a>

```python
filters_input: typing.Union[IResolvable, NotificationPolicyFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>]

---

##### `mechanisms_input`<sup>Optional</sup> <a name="mechanisms_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanismsInput"></a>

```python
mechanisms_input: typing.Union[IResolvable, NotificationPolicyMechanisms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `alert_interval`<sup>Required</sup> <a name="alert_interval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertInterval"></a>

```python
alert_interval: str
```

- *Type:* str

---

##### `alert_type`<sup>Required</sup> <a name="alert_type" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType"></a>

```python
alert_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationPolicyConfig <a name="NotificationPolicyConfig" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  alert_type: str,
  mechanisms: NotificationPolicyMechanisms,
  name: str,
  alert_interval: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  filters: NotificationPolicyFilters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType">alert_type</a></code> | <code>str</code> | Refers to which event will trigger a Notification dispatch. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a></code> | List of IDs that will be used when dispatching a notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertInterval">alert_interval</a></code> | <code>str</code> | Optional specification of how often to re-alert from the same incident, not support on all alert types. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description">description</a></code> | <code>str</code> | Optional description for the Notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the Notification policy is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#account_id NotificationPolicy#account_id}

---

##### `alert_type`<sup>Required</sup> <a name="alert_type" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType"></a>

```python
alert_type: str
```

- *Type:* str

Refers to which event will trigger a Notification dispatch.

You can use the endpoint to get available alert types which then will give you a list of possible values.
Available values: "access_custom_certificate_expiration_type", "advanced_ddos_attack_l4_alert", "advanced_ddos_attack_l7_alert", "advanced_http_alert_error", "bgp_hijack_notification", "billing_usage_alert", "block_notification_block_removed", "block_notification_new_block", "block_notification_review_rejected", "brand_protection_alert", "brand_protection_digest", "clickhouse_alert_fw_anomaly", "clickhouse_alert_fw_ent_anomaly", "cloudforce_one_request_notification", "custom_analytics", "custom_ssl_certificate_event_type", "dedicated_ssl_certificate_event_type", "device_connectivity_anomaly_alert", "dos_attack_l4", "dos_attack_l7", "expiring_service_token_alert", "failing_logpush_job_disabled_alert", "fbm_auto_advertisement", "fbm_dosd_attack", "fbm_volumetric_attack", "health_check_status_notification", "hostname_aop_custom_certificate_expiration_type", "http_alert_edge_error", "http_alert_origin_error", "image_notification", "image_resizing_notification", "incident_alert", "load_balancing_health_alert", "load_balancing_pool_enablement_alert", "logo_match_alert", "magic_tunnel_health_check_event", "magic_wan_tunnel_health", "maintenance_event_notification", "mtls_certificate_store_certificate_expiration_type", "pages_event_alert", "radar_notification", "real_origin_monitoring", "scriptmonitor_alert_new_code_change_detections", "scriptmonitor_alert_new_hosts", "scriptmonitor_alert_new_malicious_hosts", "scriptmonitor_alert_new_malicious_scripts", "scriptmonitor_alert_new_malicious_url", "scriptmonitor_alert_new_max_length_resource_url", "scriptmonitor_alert_new_resources", "secondary_dns_all_primaries_failing", "secondary_dns_primaries_failing", "secondary_dns_warning", "secondary_dns_zone_successfully_updated", "secondary_dns_zone_validation_warning", "security_insights_alert", "sentinel_alert", "stream_live_notifications", "synthetic_test_latency_alert", "synthetic_test_low_availability_alert", "traffic_anomalies_alert", "tunnel_health_event", "tunnel_update_event", "universal_ssl_event_type", "web_analytics_metrics_update", "zone_aop_custom_certificate_expiration_type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.mechanisms"></a>

```python
mechanisms: NotificationPolicyMechanisms
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

List of IDs that will be used when dispatching a notification.

IDs for email type will be the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#mechanisms NotificationPolicy#mechanisms}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#name NotificationPolicy#name}

---

##### `alert_interval`<sup>Optional</sup> <a name="alert_interval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertInterval"></a>

```python
alert_interval: str
```

- *Type:* str

Optional specification of how often to re-alert from the same incident, not support on all alert types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#alert_interval NotificationPolicy#alert_interval}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the Notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#description NotificationPolicy#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the Notification policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters"></a>

```python
filters: NotificationPolicyFilters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria.

This is only available for select alert types. See alert type documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#filters NotificationPolicy#filters}

---

### NotificationPolicyFilters <a name="NotificationPolicyFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyFilters(
  actions: typing.List[str] = None,
  affected_asns: typing.List[str] = None,
  affected_components: typing.List[str] = None,
  affected_locations: typing.List[str] = None,
  airport_code: typing.List[str] = None,
  alert_trigger_preferences: typing.List[str] = None,
  alert_trigger_preferences_value: typing.List[str] = None,
  enabled: typing.List[str] = None,
  environment: typing.List[str] = None,
  event: typing.List[str] = None,
  event_source: typing.List[str] = None,
  event_type: typing.List[str] = None,
  group_by: typing.List[str] = None,
  health_check_id: typing.List[str] = None,
  incident_impact: typing.List[str] = None,
  input_id: typing.List[str] = None,
  insight_class: typing.List[str] = None,
  limit: typing.List[str] = None,
  logo_tag: typing.List[str] = None,
  megabits_per_second: typing.List[str] = None,
  new_health: typing.List[str] = None,
  new_status: typing.List[str] = None,
  packets_per_second: typing.List[str] = None,
  pool_id: typing.List[str] = None,
  pop_names: typing.List[str] = None,
  product: typing.List[str] = None,
  project_id: typing.List[str] = None,
  protocol: typing.List[str] = None,
  query_tag: typing.List[str] = None,
  requests_per_second: typing.List[str] = None,
  selectors: typing.List[str] = None,
  services: typing.List[str] = None,
  slo: typing.List[str] = None,
  status: typing.List[str] = None,
  target_hostname: typing.List[str] = None,
  target_ip: typing.List[str] = None,
  target_zone_name: typing.List[str] = None,
  traffic_exclusions: typing.List[str] = None,
  tunnel_id: typing.List[str] = None,
  tunnel_name: typing.List[str] = None,
  where: typing.List[str] = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions">actions</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedAsns">affected_asns</a></code> | <code>typing.List[str]</code> | Used for configuring radar_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedComponents">affected_components</a></code> | <code>typing.List[str]</code> | Used for configuring incident_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedLocations">affected_locations</a></code> | <code>typing.List[str]</code> | Used for configuring radar_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.airportCode">airport_code</a></code> | <code>typing.List[str]</code> | Used for configuring maintenance_event_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences">alert_trigger_preferences</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferencesValue">alert_trigger_preferences_value</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled">enabled</a></code> | <code>typing.List[str]</code> | Used for configuring load_balancing_pool_enablement_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment">environment</a></code> | <code>typing.List[str]</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event">event</a></code> | <code>typing.List[str]</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource">event_source</a></code> | <code>typing.List[str]</code> | Used for configuring load_balancing_health_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType">event_type</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId">health_check_id</a></code> | <code>typing.List[str]</code> | Used for configuring health_check_status_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact">incident_impact</a></code> | <code>typing.List[str]</code> | Used for configuring incident_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId">input_id</a></code> | <code>typing.List[str]</code> | Used for configuring stream_live_notifications. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.insightClass">insight_class</a></code> | <code>typing.List[str]</code> | Used for configuring security_insights_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit">limit</a></code> | <code>typing.List[str]</code> | Used for configuring billing_usage_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.logoTag">logo_tag</a></code> | <code>typing.List[str]</code> | Used for configuring logo_match_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond">megabits_per_second</a></code> | <code>typing.List[str]</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth">new_health</a></code> | <code>typing.List[str]</code> | Used for configuring load_balancing_health_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus">new_status</a></code> | <code>typing.List[str]</code> | Used for configuring tunnel_health_event. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond">packets_per_second</a></code> | <code>typing.List[str]</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId">pool_id</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.popNames">pop_names</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product">product</a></code> | <code>typing.List[str]</code> | Used for configuring billing_usage_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId">project_id</a></code> | <code>typing.List[str]</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol">protocol</a></code> | <code>typing.List[str]</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.queryTag">query_tag</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond">requests_per_second</a></code> | <code>typing.List[str]</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.selectors">selectors</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services">services</a></code> | <code>typing.List[str]</code> | Used for configuring clickhouse_alert_fw_ent_anomaly. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo">slo</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status">status</a></code> | <code>typing.List[str]</code> | Used for configuring health_check_status_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname">target_hostname</a></code> | <code>typing.List[str]</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetIp">target_ip</a></code> | <code>typing.List[str]</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName">target_zone_name</a></code> | <code>typing.List[str]</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.trafficExclusions">traffic_exclusions</a></code> | <code>typing.List[str]</code> | Used for configuring traffic_anomalies_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelId">tunnel_id</a></code> | <code>typing.List[str]</code> | Used for configuring tunnel_health_event. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelName">tunnel_name</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where">where</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones">zones</a></code> | <code>typing.List[str]</code> | Usage depends on specific alert type. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#actions NotificationPolicy#actions}

---

##### `affected_asns`<sup>Optional</sup> <a name="affected_asns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedAsns"></a>

```python
affected_asns: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#affected_asns NotificationPolicy#affected_asns}

---

##### `affected_components`<sup>Optional</sup> <a name="affected_components" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedComponents"></a>

```python
affected_components: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#affected_components NotificationPolicy#affected_components}

---

##### `affected_locations`<sup>Optional</sup> <a name="affected_locations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedLocations"></a>

```python
affected_locations: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#affected_locations NotificationPolicy#affected_locations}

---

##### `airport_code`<sup>Optional</sup> <a name="airport_code" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.airportCode"></a>

```python
airport_code: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring maintenance_event_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#airport_code NotificationPolicy#airport_code}

---

##### `alert_trigger_preferences`<sup>Optional</sup> <a name="alert_trigger_preferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences"></a>

```python
alert_trigger_preferences: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#alert_trigger_preferences NotificationPolicy#alert_trigger_preferences}

---

##### `alert_trigger_preferences_value`<sup>Optional</sup> <a name="alert_trigger_preferences_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferencesValue"></a>

```python
alert_trigger_preferences_value: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#alert_trigger_preferences_value NotificationPolicy#alert_trigger_preferences_value}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled"></a>

```python
enabled: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring load_balancing_pool_enablement_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment"></a>

```python
environment: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#environment NotificationPolicy#environment}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event"></a>

```python
event: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#event NotificationPolicy#event}

---

##### `event_source`<sup>Optional</sup> <a name="event_source" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource"></a>

```python
event_source: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#event_source NotificationPolicy#event_source}

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType"></a>

```python
event_type: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#event_type NotificationPolicy#event_type}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}

---

##### `health_check_id`<sup>Optional</sup> <a name="health_check_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId"></a>

```python
health_check_id: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#health_check_id NotificationPolicy#health_check_id}

---

##### `incident_impact`<sup>Optional</sup> <a name="incident_impact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact"></a>

```python
incident_impact: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#incident_impact NotificationPolicy#incident_impact}

---

##### `input_id`<sup>Optional</sup> <a name="input_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId"></a>

```python
input_id: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring stream_live_notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#input_id NotificationPolicy#input_id}

---

##### `insight_class`<sup>Optional</sup> <a name="insight_class" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.insightClass"></a>

```python
insight_class: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring security_insights_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#insight_class NotificationPolicy#insight_class}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit"></a>

```python
limit: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#limit NotificationPolicy#limit}

---

##### `logo_tag`<sup>Optional</sup> <a name="logo_tag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.logoTag"></a>

```python
logo_tag: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring logo_match_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#logo_tag NotificationPolicy#logo_tag}

---

##### `megabits_per_second`<sup>Optional</sup> <a name="megabits_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond"></a>

```python
megabits_per_second: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#megabits_per_second NotificationPolicy#megabits_per_second}

---

##### `new_health`<sup>Optional</sup> <a name="new_health" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth"></a>

```python
new_health: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#new_health NotificationPolicy#new_health}

---

##### `new_status`<sup>Optional</sup> <a name="new_status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus"></a>

```python
new_status: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#new_status NotificationPolicy#new_status}

---

##### `packets_per_second`<sup>Optional</sup> <a name="packets_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond"></a>

```python
packets_per_second: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#packets_per_second NotificationPolicy#packets_per_second}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId"></a>

```python
pool_id: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#pool_id NotificationPolicy#pool_id}

---

##### `pop_names`<sup>Optional</sup> <a name="pop_names" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.popNames"></a>

```python
pop_names: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#pop_names NotificationPolicy#pop_names}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product"></a>

```python
product: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#product NotificationPolicy#product}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId"></a>

```python
project_id: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#project_id NotificationPolicy#project_id}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol"></a>

```python
protocol: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#protocol NotificationPolicy#protocol}

---

##### `query_tag`<sup>Optional</sup> <a name="query_tag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.queryTag"></a>

```python
query_tag: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#query_tag NotificationPolicy#query_tag}

---

##### `requests_per_second`<sup>Optional</sup> <a name="requests_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond"></a>

```python
requests_per_second: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#requests_per_second NotificationPolicy#requests_per_second}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.selectors"></a>

```python
selectors: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#selectors NotificationPolicy#selectors}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring clickhouse_alert_fw_ent_anomaly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#services NotificationPolicy#services}

---

##### `slo`<sup>Optional</sup> <a name="slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo"></a>

```python
slo: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#slo NotificationPolicy#slo}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#status NotificationPolicy#status}

---

##### `target_hostname`<sup>Optional</sup> <a name="target_hostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname"></a>

```python
target_hostname: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#target_hostname NotificationPolicy#target_hostname}

---

##### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetIp"></a>

```python
target_ip: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#target_ip NotificationPolicy#target_ip}

---

##### `target_zone_name`<sup>Optional</sup> <a name="target_zone_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName"></a>

```python
target_zone_name: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#target_zone_name NotificationPolicy#target_zone_name}

---

##### `traffic_exclusions`<sup>Optional</sup> <a name="traffic_exclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.trafficExclusions"></a>

```python
traffic_exclusions: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring traffic_anomalies_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#traffic_exclusions NotificationPolicy#traffic_exclusions}

---

##### `tunnel_id`<sup>Optional</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelId"></a>

```python
tunnel_id: typing.List[str]
```

- *Type:* typing.List[str]

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#tunnel_id NotificationPolicy#tunnel_id}

---

##### `tunnel_name`<sup>Optional</sup> <a name="tunnel_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelName"></a>

```python
tunnel_name: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#tunnel_name NotificationPolicy#tunnel_name}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where"></a>

```python
where: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#where NotificationPolicy#where}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#zones NotificationPolicy#zones}

---

### NotificationPolicyMechanisms <a name="NotificationPolicyMechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanisms(
  email: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsEmail]] = None,
  pagerduty: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsPagerduty]] = None,
  webhooks: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsWebhooks]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.email">email</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#email NotificationPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.pagerduty">pagerduty</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.webhooks">webhooks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.email"></a>

```python
email: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsEmail]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#email NotificationPolicy#email}.

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.pagerduty"></a>

```python
pagerduty: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsPagerduty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}.

---

##### `webhooks`<sup>Optional</sup> <a name="webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.webhooks"></a>

```python
webhooks: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsWebhooks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}.

---

### NotificationPolicyMechanismsEmail <a name="NotificationPolicyMechanismsEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsEmail(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.property.id">id</a></code> | <code>str</code> | The email address. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.property.id"></a>

```python
id: str
```

- *Type:* str

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationPolicyMechanismsPagerduty <a name="NotificationPolicyMechanismsPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsPagerduty(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.property.id">id</a></code> | <code>str</code> | UUID. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.property.id"></a>

```python
id: str
```

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationPolicyMechanismsWebhooks <a name="NotificationPolicyMechanismsWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsWebhooks(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.property.id">id</a></code> | <code>str</code> | UUID. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.property.id"></a>

```python
id: str
```

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationPolicyFiltersOutputReference <a name="NotificationPolicyFiltersOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedAsns">reset_affected_asns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedComponents">reset_affected_components</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedLocations">reset_affected_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAirportCode">reset_airport_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences">reset_alert_trigger_preferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferencesValue">reset_alert_trigger_preferences_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent">reset_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource">reset_event_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId">reset_health_check_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact">reset_incident_impact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId">reset_input_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInsightClass">reset_insight_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLogoTag">reset_logo_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond">reset_megabits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth">reset_new_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus">reset_new_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond">reset_packets_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId">reset_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPopNames">reset_pop_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct">reset_product</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetQueryTag">reset_query_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond">reset_requests_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSelectors">reset_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices">reset_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo">reset_slo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname">reset_target_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetIp">reset_target_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName">reset_target_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTrafficExclusions">reset_traffic_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelId">reset_tunnel_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelName">reset_tunnel_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetWhere">reset_where</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetZones">reset_zones</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_affected_asns` <a name="reset_affected_asns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedAsns"></a>

```python
def reset_affected_asns() -> None
```

##### `reset_affected_components` <a name="reset_affected_components" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedComponents"></a>

```python
def reset_affected_components() -> None
```

##### `reset_affected_locations` <a name="reset_affected_locations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedLocations"></a>

```python
def reset_affected_locations() -> None
```

##### `reset_airport_code` <a name="reset_airport_code" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAirportCode"></a>

```python
def reset_airport_code() -> None
```

##### `reset_alert_trigger_preferences` <a name="reset_alert_trigger_preferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences"></a>

```python
def reset_alert_trigger_preferences() -> None
```

##### `reset_alert_trigger_preferences_value` <a name="reset_alert_trigger_preferences_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferencesValue"></a>

```python
def reset_alert_trigger_preferences_value() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_event` <a name="reset_event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent"></a>

```python
def reset_event() -> None
```

##### `reset_event_source` <a name="reset_event_source" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource"></a>

```python
def reset_event_source() -> None
```

##### `reset_event_type` <a name="reset_event_type" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_health_check_id` <a name="reset_health_check_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId"></a>

```python
def reset_health_check_id() -> None
```

##### `reset_incident_impact` <a name="reset_incident_impact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact"></a>

```python
def reset_incident_impact() -> None
```

##### `reset_input_id` <a name="reset_input_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId"></a>

```python
def reset_input_id() -> None
```

##### `reset_insight_class` <a name="reset_insight_class" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInsightClass"></a>

```python
def reset_insight_class() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_logo_tag` <a name="reset_logo_tag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLogoTag"></a>

```python
def reset_logo_tag() -> None
```

##### `reset_megabits_per_second` <a name="reset_megabits_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond"></a>

```python
def reset_megabits_per_second() -> None
```

##### `reset_new_health` <a name="reset_new_health" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth"></a>

```python
def reset_new_health() -> None
```

##### `reset_new_status` <a name="reset_new_status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus"></a>

```python
def reset_new_status() -> None
```

##### `reset_packets_per_second` <a name="reset_packets_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond"></a>

```python
def reset_packets_per_second() -> None
```

##### `reset_pool_id` <a name="reset_pool_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId"></a>

```python
def reset_pool_id() -> None
```

##### `reset_pop_names` <a name="reset_pop_names" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPopNames"></a>

```python
def reset_pop_names() -> None
```

##### `reset_product` <a name="reset_product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct"></a>

```python
def reset_product() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_query_tag` <a name="reset_query_tag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetQueryTag"></a>

```python
def reset_query_tag() -> None
```

##### `reset_requests_per_second` <a name="reset_requests_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond"></a>

```python
def reset_requests_per_second() -> None
```

##### `reset_selectors` <a name="reset_selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSelectors"></a>

```python
def reset_selectors() -> None
```

##### `reset_services` <a name="reset_services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices"></a>

```python
def reset_services() -> None
```

##### `reset_slo` <a name="reset_slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo"></a>

```python
def reset_slo() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_target_hostname` <a name="reset_target_hostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname"></a>

```python
def reset_target_hostname() -> None
```

##### `reset_target_ip` <a name="reset_target_ip" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetIp"></a>

```python
def reset_target_ip() -> None
```

##### `reset_target_zone_name` <a name="reset_target_zone_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName"></a>

```python
def reset_target_zone_name() -> None
```

##### `reset_traffic_exclusions` <a name="reset_traffic_exclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTrafficExclusions"></a>

```python
def reset_traffic_exclusions() -> None
```

##### `reset_tunnel_id` <a name="reset_tunnel_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelId"></a>

```python
def reset_tunnel_id() -> None
```

##### `reset_tunnel_name` <a name="reset_tunnel_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelName"></a>

```python
def reset_tunnel_name() -> None
```

##### `reset_where` <a name="reset_where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetWhere"></a>

```python
def reset_where() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetZones"></a>

```python
def reset_zones() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsnsInput">affected_asns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponentsInput">affected_components_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocationsInput">affected_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCodeInput">airport_code_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput">alert_trigger_preferences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValueInput">alert_trigger_preferences_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput">event_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput">event_source_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput">health_check_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput">incident_impact_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput">input_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClassInput">insight_class_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput">limit_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTagInput">logo_tag_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput">megabits_per_second_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput">new_health_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput">new_status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput">packets_per_second_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput">pool_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNamesInput">pop_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput">product_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput">project_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput">protocol_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTagInput">query_tag_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput">requests_per_second_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectorsInput">selectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput">slo_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput">status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput">target_hostname_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIpInput">target_ip_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput">target_zone_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusionsInput">traffic_exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelIdInput">tunnel_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelNameInput">tunnel_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput">where_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsns">affected_asns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponents">affected_components</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocations">affected_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCode">airport_code</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences">alert_trigger_preferences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue">alert_trigger_preferences_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled">enabled</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment">environment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event">event</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource">event_source</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType">event_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId">health_check_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact">incident_impact</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId">input_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClass">insight_class</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit">limit</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTag">logo_tag</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond">megabits_per_second</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth">new_health</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus">new_status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond">packets_per_second</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId">pool_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNames">pop_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product">product</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId">project_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol">protocol</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTag">query_tag</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond">requests_per_second</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectors">selectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo">slo</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status">status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname">target_hostname</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIp">target_ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName">target_zone_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusions">traffic_exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelId">tunnel_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelName">tunnel_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where">where</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_asns_input`<sup>Optional</sup> <a name="affected_asns_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsnsInput"></a>

```python
affected_asns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_components_input`<sup>Optional</sup> <a name="affected_components_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponentsInput"></a>

```python
affected_components_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_locations_input`<sup>Optional</sup> <a name="affected_locations_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocationsInput"></a>

```python
affected_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `airport_code_input`<sup>Optional</sup> <a name="airport_code_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCodeInput"></a>

```python
airport_code_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_trigger_preferences_input`<sup>Optional</sup> <a name="alert_trigger_preferences_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput"></a>

```python
alert_trigger_preferences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_trigger_preferences_value_input`<sup>Optional</sup> <a name="alert_trigger_preferences_value_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValueInput"></a>

```python
alert_trigger_preferences_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput"></a>

```python
environment_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput"></a>

```python
event_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_source_input`<sup>Optional</sup> <a name="event_source_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput"></a>

```python
event_source_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput"></a>

```python
event_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `health_check_id_input`<sup>Optional</sup> <a name="health_check_id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput"></a>

```python
health_check_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `incident_impact_input`<sup>Optional</sup> <a name="incident_impact_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput"></a>

```python
incident_impact_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_id_input`<sup>Optional</sup> <a name="input_id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput"></a>

```python
input_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insight_class_input`<sup>Optional</sup> <a name="insight_class_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClassInput"></a>

```python
insight_class_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput"></a>

```python
limit_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_tag_input`<sup>Optional</sup> <a name="logo_tag_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTagInput"></a>

```python
logo_tag_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `megabits_per_second_input`<sup>Optional</sup> <a name="megabits_per_second_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput"></a>

```python
megabits_per_second_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_health_input`<sup>Optional</sup> <a name="new_health_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput"></a>

```python
new_health_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_status_input`<sup>Optional</sup> <a name="new_status_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput"></a>

```python
new_status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `packets_per_second_input`<sup>Optional</sup> <a name="packets_per_second_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput"></a>

```python
packets_per_second_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput"></a>

```python
pool_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pop_names_input`<sup>Optional</sup> <a name="pop_names_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNamesInput"></a>

```python
pop_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput"></a>

```python
product_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput"></a>

```python
project_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput"></a>

```python
protocol_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_tag_input`<sup>Optional</sup> <a name="query_tag_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTagInput"></a>

```python
query_tag_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requests_per_second_input`<sup>Optional</sup> <a name="requests_per_second_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput"></a>

```python
requests_per_second_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectorsInput"></a>

```python
selectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `slo_input`<sup>Optional</sup> <a name="slo_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput"></a>

```python
slo_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput"></a>

```python
status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_hostname_input`<sup>Optional</sup> <a name="target_hostname_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput"></a>

```python
target_hostname_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_ip_input`<sup>Optional</sup> <a name="target_ip_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIpInput"></a>

```python
target_ip_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_zone_name_input`<sup>Optional</sup> <a name="target_zone_name_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput"></a>

```python
target_zone_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `traffic_exclusions_input`<sup>Optional</sup> <a name="traffic_exclusions_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusionsInput"></a>

```python
traffic_exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelIdInput"></a>

```python
tunnel_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_name_input`<sup>Optional</sup> <a name="tunnel_name_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelNameInput"></a>

```python
tunnel_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `where_input`<sup>Optional</sup> <a name="where_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput"></a>

```python
where_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_asns`<sup>Required</sup> <a name="affected_asns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsns"></a>

```python
affected_asns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_components`<sup>Required</sup> <a name="affected_components" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponents"></a>

```python
affected_components: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_locations`<sup>Required</sup> <a name="affected_locations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocations"></a>

```python
affected_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `airport_code`<sup>Required</sup> <a name="airport_code" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCode"></a>

```python
airport_code: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_trigger_preferences`<sup>Required</sup> <a name="alert_trigger_preferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences"></a>

```python
alert_trigger_preferences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_trigger_preferences_value`<sup>Required</sup> <a name="alert_trigger_preferences_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```python
alert_trigger_preferences_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled"></a>

```python
enabled: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment"></a>

```python
environment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event"></a>

```python
event: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource"></a>

```python
event_source: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType"></a>

```python
event_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId"></a>

```python
health_check_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `incident_impact`<sup>Required</sup> <a name="incident_impact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact"></a>

```python
incident_impact: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_id`<sup>Required</sup> <a name="input_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId"></a>

```python
input_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insight_class`<sup>Required</sup> <a name="insight_class" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClass"></a>

```python
insight_class: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit"></a>

```python
limit: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_tag`<sup>Required</sup> <a name="logo_tag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTag"></a>

```python
logo_tag: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `megabits_per_second`<sup>Required</sup> <a name="megabits_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond"></a>

```python
megabits_per_second: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_health`<sup>Required</sup> <a name="new_health" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth"></a>

```python
new_health: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_status`<sup>Required</sup> <a name="new_status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus"></a>

```python
new_status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `packets_per_second`<sup>Required</sup> <a name="packets_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond"></a>

```python
packets_per_second: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId"></a>

```python
pool_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pop_names`<sup>Required</sup> <a name="pop_names" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNames"></a>

```python
pop_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product"></a>

```python
product: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId"></a>

```python
project_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol"></a>

```python
protocol: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_tag`<sup>Required</sup> <a name="query_tag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTag"></a>

```python
query_tag: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requests_per_second`<sup>Required</sup> <a name="requests_per_second" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond"></a>

```python
requests_per_second: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectors"></a>

```python
selectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `slo`<sup>Required</sup> <a name="slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo"></a>

```python
slo: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_hostname`<sup>Required</sup> <a name="target_hostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname"></a>

```python
target_hostname: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_ip`<sup>Required</sup> <a name="target_ip" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIp"></a>

```python
target_ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_zone_name`<sup>Required</sup> <a name="target_zone_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName"></a>

```python
target_zone_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `traffic_exclusions`<sup>Required</sup> <a name="traffic_exclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusions"></a>

```python
traffic_exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelId"></a>

```python
tunnel_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_name`<sup>Required</sup> <a name="tunnel_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelName"></a>

```python
tunnel_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where"></a>

```python
where: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationPolicyFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>]

---


### NotificationPolicyMechanismsEmailList <a name="NotificationPolicyMechanismsEmailList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsEmailList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationPolicyMechanismsEmailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsEmail]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]]

---


### NotificationPolicyMechanismsEmailOutputReference <a name="NotificationPolicyMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationPolicyMechanismsEmail]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]

---


### NotificationPolicyMechanismsOutputReference <a name="NotificationPolicyMechanismsOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail">put_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty">put_pagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks">put_webhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetPagerduty">reset_pagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetWebhooks">reset_webhooks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_email` <a name="put_email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail"></a>

```python
def put_email(
  value: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsEmail]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]]

---

##### `put_pagerduty` <a name="put_pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty"></a>

```python
def put_pagerduty(
  value: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsPagerduty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]]

---

##### `put_webhooks` <a name="put_webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks"></a>

```python
def put_webhooks(
  value: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsWebhooks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]]

---

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_pagerduty` <a name="reset_pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetPagerduty"></a>

```python
def reset_pagerduty() -> None
```

##### `reset_webhooks` <a name="reset_webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetWebhooks"></a>

```python
def reset_webhooks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList">NotificationPolicyMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList">NotificationPolicyMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooks">webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList">NotificationPolicyMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.emailInput">email_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerdutyInput">pagerduty_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooksInput">webhooks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.email"></a>

```python
email: NotificationPolicyMechanismsEmailList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList">NotificationPolicyMechanismsEmailList</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerduty"></a>

```python
pagerduty: NotificationPolicyMechanismsPagerdutyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList">NotificationPolicyMechanismsPagerdutyList</a>

---

##### `webhooks`<sup>Required</sup> <a name="webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooks"></a>

```python
webhooks: NotificationPolicyMechanismsWebhooksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList">NotificationPolicyMechanismsWebhooksList</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.emailInput"></a>

```python
email_input: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsEmail]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail">NotificationPolicyMechanismsEmail</a>]]

---

##### `pagerduty_input`<sup>Optional</sup> <a name="pagerduty_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerdutyInput"></a>

```python
pagerduty_input: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsPagerduty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]]

---

##### `webhooks_input`<sup>Optional</sup> <a name="webhooks_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooksInput"></a>

```python
webhooks_input: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsWebhooks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationPolicyMechanisms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>]

---


### NotificationPolicyMechanismsPagerdutyList <a name="NotificationPolicyMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsPagerdutyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationPolicyMechanismsPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsPagerduty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]]

---


### NotificationPolicyMechanismsPagerdutyOutputReference <a name="NotificationPolicyMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationPolicyMechanismsPagerduty]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty">NotificationPolicyMechanismsPagerduty</a>]

---


### NotificationPolicyMechanismsWebhooksList <a name="NotificationPolicyMechanismsWebhooksList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsWebhooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationPolicyMechanismsWebhooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationPolicyMechanismsWebhooks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]]

---


### NotificationPolicyMechanismsWebhooksOutputReference <a name="NotificationPolicyMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import notification_policy

notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationPolicyMechanismsWebhooks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks">NotificationPolicyMechanismsWebhooks</a>]

---



