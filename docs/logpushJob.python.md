# `logpushJob` Submodule <a name="`logpushJob` Submodule" id="@cdktf/provider-cloudflare.logpushJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogpushJob <a name="LogpushJob" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job cloudflare_logpush_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import logpush_job

logpushJob.LogpushJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_conf: str,
  account_id: str = None,
  dataset: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  filter: str = None,
  frequency: str = None,
  kind: str = None,
  logpull_options: str = None,
  max_upload_bytes: typing.Union[int, float] = None,
  max_upload_interval_seconds: typing.Union[int, float] = None,
  max_upload_records: typing.Union[int, float] = None,
  name: str = None,
  output_options: LogpushJobOutputOptions = None,
  ownership_challenge: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.destinationConf">destination_conf</a></code> | <code>str</code> | Uniquely identifies a resource (such as an s3 bucket) where data. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | Name of the dataset. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that indicates if the job is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | This field is deprecated. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.kind">kind</a></code> | <code>str</code> | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.logpullOptions">logpull_options</a></code> | <code>str</code> | This field is deprecated. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadBytes">max_upload_bytes</a></code> | <code>typing.Union[int, float]</code> | The maximum uncompressed file size of a batch of logs. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadIntervalSeconds">max_upload_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum interval in seconds for log batches. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadRecords">max_upload_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of log lines per batch. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Optional human readable job name. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.outputOptions">output_options</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a></code> | The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.ownershipChallenge">ownership_challenge</a></code> | <code>str</code> | Ownership challenge token to prove destination ownership. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_conf`<sup>Required</sup> <a name="destination_conf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.destinationConf"></a>

- *Type:* str

Uniquely identifies a resource (such as an s3 bucket) where data.

will be pushed. Additional configuration parameters supported by the destination may be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.accountId"></a>

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#account_id LogpushJob#account_id}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.dataset"></a>

- *Type:* str

Name of the dataset.

A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).
Available values: "access_requests", "audit_logs", "audit_logs_v2", "biso_user_actions", "casb_findings", "device_posture_results", "dlp_forensic_copies", "dns_firewall_logs", "dns_logs", "email_security_alerts", "firewall_events", "gateway_dns", "gateway_http", "gateway_network", "http_requests", "magic_ids_detections", "nel_reports", "network_analytics_logs", "page_shield_events", "sinkhole_http_logs", "spectrum_events", "ssh_logs", "workers_trace_events", "zaraz_events", "zero_trust_network_sessions".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#dataset LogpushJob#dataset}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that indicates if the job is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#enabled LogpushJob#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.filter"></a>

- *Type:* str

The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#filter LogpushJob#filter}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.frequency"></a>

- *Type:* str

This field is deprecated.

Please use `max_upload_*` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your logs in larger quantities of smaller files. Setting frequency to low sends logs in smaller quantities of larger files.
Available values: "high", "low".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#frequency LogpushJob#frequency}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.kind"></a>

- *Type:* str

The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset).

Available values: "", "edge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#kind LogpushJob#kind}

---

##### `logpull_options`<sup>Optional</sup> <a name="logpull_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.logpullOptions"></a>

- *Type:* str

This field is deprecated.

Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the url (full url or just the query string) of your call here, and logpush will keep on making this call for you, setting start and end times appropriately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}

---

##### `max_upload_bytes`<sup>Optional</sup> <a name="max_upload_bytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadBytes"></a>

- *Type:* typing.Union[int, float]

The maximum uncompressed file size of a batch of logs.

This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means that log files may be much smaller than this batch size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}

---

##### `max_upload_interval_seconds`<sup>Optional</sup> <a name="max_upload_interval_seconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum interval in seconds for log batches.

This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log batches; this means that log files may be sent in shorter intervals than this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}

---

##### `max_upload_records`<sup>Optional</sup> <a name="max_upload_records" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadRecords"></a>

- *Type:* typing.Union[int, float]

The maximum number of log lines per batch.

This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch; this means that log files may contain many fewer lines than this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.name"></a>

- *Type:* str

Optional human readable job name.

Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#name LogpushJob#name}

---

##### `output_options`<sup>Optional</sup> <a name="output_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.outputOptions"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#output_options LogpushJob#output_options}

---

##### `ownership_challenge`<sup>Optional</sup> <a name="ownership_challenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.ownershipChallenge"></a>

- *Type:* str

Ownership challenge token to prove destination ownership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.zoneId"></a>

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#zone_id LogpushJob#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions">put_output_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions">reset_logpull_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes">reset_max_upload_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds">reset_max_upload_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords">reset_max_upload_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOutputOptions">reset_output_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge">reset_ownership_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_output_options` <a name="put_output_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions"></a>

```python
def put_output_options(
  batch_prefix: str = None,
  batch_suffix: str = None,
  cve202144228: typing.Union[bool, IResolvable] = None,
  field_delimiter: str = None,
  field_names: typing.List[str] = None,
  output_type: str = None,
  record_delimiter: str = None,
  record_prefix: str = None,
  record_suffix: str = None,
  record_template: str = None,
  sample_rate: typing.Union[int, float] = None,
  timestamp_format: str = None
) -> None
```

###### `batch_prefix`<sup>Optional</sup> <a name="batch_prefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.batchPrefix"></a>

- *Type:* str

String to be prepended before each batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#batch_prefix LogpushJob#batch_prefix}

---

###### `batch_suffix`<sup>Optional</sup> <a name="batch_suffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.batchSuffix"></a>

- *Type:* str

String to be appended after each batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#batch_suffix LogpushJob#batch_suffix}

---

###### `cve202144228`<sup>Optional</sup> <a name="cve202144228" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.cve202144228"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, will cause all occurrences of `${` in the generated files to be replaced with `x{`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#cve_2021_44228 LogpushJob#cve_2021_44228}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.fieldDelimiter"></a>

- *Type:* str

String to join fields. This field be ignored when `record_template` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#field_delimiter LogpushJob#field_delimiter}

---

###### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.fieldNames"></a>

- *Type:* typing.List[str]

List of field names to be included in the Logpush output.

For the moment, there is no option to add all fields at once, so you must specify all the fields names you are interested in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#field_names LogpushJob#field_names}

---

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.outputType"></a>

- *Type:* str

Specifies the output type, such as `ndjson` or `csv`.

This sets default values for the rest of the settings, depending on the chosen output type. Some formatting rules, like string quoting, are different between output types.
Available values: "ndjson", "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#output_type LogpushJob#output_type}

---

###### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.recordDelimiter"></a>

- *Type:* str

String to be inserted in-between the records as separator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#record_delimiter LogpushJob#record_delimiter}

---

###### `record_prefix`<sup>Optional</sup> <a name="record_prefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.recordPrefix"></a>

- *Type:* str

String to be prepended before each record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#record_prefix LogpushJob#record_prefix}

---

###### `record_suffix`<sup>Optional</sup> <a name="record_suffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.recordSuffix"></a>

- *Type:* str

String to be appended after each record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#record_suffix LogpushJob#record_suffix}

---

###### `record_template`<sup>Optional</sup> <a name="record_template" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.recordTemplate"></a>

- *Type:* str

String to use as template for each record instead of the default json key value mapping.

All fields used in the template must be present in `field_names` as well, otherwise they will end up as null. Format as a Go `text/template` without any standard functions, like conditionals, loops, sub-templates, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#record_template LogpushJob#record_template}

---

###### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.sampleRate"></a>

- *Type:* typing.Union[int, float]

Floating number to specify sampling rate.

Sampling is applied on top of filtering, and regardless of the current `sample_interval` of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#sample_rate LogpushJob#sample_rate}

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.timestampFormat"></a>

- *Type:* str

String to specify the format for timestamps, such as `unixnano`, `unix`, or `rfc3339`. Available values: "unixnano", "unix", "rfc3339".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#timestamp_format LogpushJob#timestamp_format}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_dataset` <a name="reset_dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_logpull_options` <a name="reset_logpull_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions"></a>

```python
def reset_logpull_options() -> None
```

##### `reset_max_upload_bytes` <a name="reset_max_upload_bytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes"></a>

```python
def reset_max_upload_bytes() -> None
```

##### `reset_max_upload_interval_seconds` <a name="reset_max_upload_interval_seconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds"></a>

```python
def reset_max_upload_interval_seconds() -> None
```

##### `reset_max_upload_records` <a name="reset_max_upload_records" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords"></a>

```python
def reset_max_upload_records() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_output_options` <a name="reset_output_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOutputOptions"></a>

```python
def reset_output_options() -> None
```

##### `reset_ownership_challenge` <a name="reset_ownership_challenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge"></a>

```python
def reset_ownership_challenge() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import logpush_job

logpushJob.LogpushJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import logpush_job

logpushJob.LogpushJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import logpush_job

logpushJob.LogpushJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import logpush_job

logpushJob.LogpushJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogpushJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogpushJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogpushJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lastComplete">last_complete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lastError">last_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptions">output_options</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference">LogpushJobOutputOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput">destination_conf_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput">logpull_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput">max_upload_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput">max_upload_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput">max_upload_records_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptionsInput">output_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput">ownership_challenge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf">destination_conf</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions">logpull_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytes">max_upload_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSeconds">max_upload_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecords">max_upload_records</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge">ownership_challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_complete`<sup>Required</sup> <a name="last_complete" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lastComplete"></a>

```python
last_complete: str
```

- *Type:* str

---

##### `last_error`<sup>Required</sup> <a name="last_error" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lastError"></a>

```python
last_error: str
```

- *Type:* str

---

##### `output_options`<sup>Required</sup> <a name="output_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptions"></a>

```python
output_options: LogpushJobOutputOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference">LogpushJobOutputOptionsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `destination_conf_input`<sup>Optional</sup> <a name="destination_conf_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput"></a>

```python
destination_conf_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `logpull_options_input`<sup>Optional</sup> <a name="logpull_options_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput"></a>

```python
logpull_options_input: str
```

- *Type:* str

---

##### `max_upload_bytes_input`<sup>Optional</sup> <a name="max_upload_bytes_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput"></a>

```python
max_upload_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_upload_interval_seconds_input`<sup>Optional</sup> <a name="max_upload_interval_seconds_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput"></a>

```python
max_upload_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_upload_records_input`<sup>Optional</sup> <a name="max_upload_records_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput"></a>

```python
max_upload_records_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_options_input`<sup>Optional</sup> <a name="output_options_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptionsInput"></a>

```python
output_options_input: typing.Union[IResolvable, LogpushJobOutputOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>]

---

##### `ownership_challenge_input`<sup>Optional</sup> <a name="ownership_challenge_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput"></a>

```python
ownership_challenge_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `destination_conf`<sup>Required</sup> <a name="destination_conf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf"></a>

```python
destination_conf: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `logpull_options`<sup>Required</sup> <a name="logpull_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions"></a>

```python
logpull_options: str
```

- *Type:* str

---

##### `max_upload_bytes`<sup>Required</sup> <a name="max_upload_bytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytes"></a>

```python
max_upload_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_upload_interval_seconds`<sup>Required</sup> <a name="max_upload_interval_seconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSeconds"></a>

```python
max_upload_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_upload_records`<sup>Required</sup> <a name="max_upload_records" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecords"></a>

```python
max_upload_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ownership_challenge`<sup>Required</sup> <a name="ownership_challenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge"></a>

```python
ownership_challenge: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogpushJobConfig <a name="LogpushJobConfig" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import logpush_job

logpushJob.LogpushJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_conf: str,
  account_id: str = None,
  dataset: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  filter: str = None,
  frequency: str = None,
  kind: str = None,
  logpull_options: str = None,
  max_upload_bytes: typing.Union[int, float] = None,
  max_upload_interval_seconds: typing.Union[int, float] = None,
  max_upload_records: typing.Union[int, float] = None,
  name: str = None,
  output_options: LogpushJobOutputOptions = None,
  ownership_challenge: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf">destination_conf</a></code> | <code>str</code> | Uniquely identifies a resource (such as an s3 bucket) where data. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset">dataset</a></code> | <code>str</code> | Name of the dataset. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that indicates if the job is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter">filter</a></code> | <code>str</code> | The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency">frequency</a></code> | <code>str</code> | This field is deprecated. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind">kind</a></code> | <code>str</code> | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions">logpull_options</a></code> | <code>str</code> | This field is deprecated. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes">max_upload_bytes</a></code> | <code>typing.Union[int, float]</code> | The maximum uncompressed file size of a batch of logs. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds">max_upload_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum interval in seconds for log batches. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords">max_upload_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of log lines per batch. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name">name</a></code> | <code>str</code> | Optional human readable job name. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.outputOptions">output_options</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a></code> | The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge">ownership_challenge</a></code> | <code>str</code> | Ownership challenge token to prove destination ownership. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_conf`<sup>Required</sup> <a name="destination_conf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf"></a>

```python
destination_conf: str
```

- *Type:* str

Uniquely identifies a resource (such as an s3 bucket) where data.

will be pushed. Additional configuration parameters supported by the destination may be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#account_id LogpushJob#account_id}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

Name of the dataset.

A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).
Available values: "access_requests", "audit_logs", "audit_logs_v2", "biso_user_actions", "casb_findings", "device_posture_results", "dlp_forensic_copies", "dns_firewall_logs", "dns_logs", "email_security_alerts", "firewall_events", "gateway_dns", "gateway_http", "gateway_network", "http_requests", "magic_ids_detections", "nel_reports", "network_analytics_logs", "page_shield_events", "sinkhole_http_logs", "spectrum_events", "ssh_logs", "workers_trace_events", "zaraz_events", "zero_trust_network_sessions".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#dataset LogpushJob#dataset}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that indicates if the job is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#enabled LogpushJob#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#filter LogpushJob#filter}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

This field is deprecated.

Please use `max_upload_*` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your logs in larger quantities of smaller files. Setting frequency to low sends logs in smaller quantities of larger files.
Available values: "high", "low".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#frequency LogpushJob#frequency}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset).

Available values: "", "edge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#kind LogpushJob#kind}

---

##### `logpull_options`<sup>Optional</sup> <a name="logpull_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions"></a>

```python
logpull_options: str
```

- *Type:* str

This field is deprecated.

Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the url (full url or just the query string) of your call here, and logpush will keep on making this call for you, setting start and end times appropriately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}

---

##### `max_upload_bytes`<sup>Optional</sup> <a name="max_upload_bytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes"></a>

```python
max_upload_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum uncompressed file size of a batch of logs.

This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means that log files may be much smaller than this batch size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}

---

##### `max_upload_interval_seconds`<sup>Optional</sup> <a name="max_upload_interval_seconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds"></a>

```python
max_upload_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum interval in seconds for log batches.

This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log batches; this means that log files may be sent in shorter intervals than this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}

---

##### `max_upload_records`<sup>Optional</sup> <a name="max_upload_records" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords"></a>

```python
max_upload_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of log lines per batch.

This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch; this means that log files may contain many fewer lines than this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Optional human readable job name.

Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#name LogpushJob#name}

---

##### `output_options`<sup>Optional</sup> <a name="output_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.outputOptions"></a>

```python
output_options: LogpushJobOutputOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#output_options LogpushJob#output_options}

---

##### `ownership_challenge`<sup>Optional</sup> <a name="ownership_challenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge"></a>

```python
ownership_challenge: str
```

- *Type:* str

Ownership challenge token to prove destination ownership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#zone_id LogpushJob#zone_id}

---

### LogpushJobOutputOptions <a name="LogpushJobOutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import logpush_job

logpushJob.LogpushJobOutputOptions(
  batch_prefix: str = None,
  batch_suffix: str = None,
  cve202144228: typing.Union[bool, IResolvable] = None,
  field_delimiter: str = None,
  field_names: typing.List[str] = None,
  output_type: str = None,
  record_delimiter: str = None,
  record_prefix: str = None,
  record_suffix: str = None,
  record_template: str = None,
  sample_rate: typing.Union[int, float] = None,
  timestamp_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchPrefix">batch_prefix</a></code> | <code>str</code> | String to be prepended before each batch. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchSuffix">batch_suffix</a></code> | <code>str</code> | String to be appended after each batch. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.cve202144228">cve202144228</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, will cause all occurrences of `${` in the generated files to be replaced with `x{`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | String to join fields. This field be ignored when `record_template` is set. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | List of field names to be included in the Logpush output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.outputType">output_type</a></code> | <code>str</code> | Specifies the output type, such as `ndjson` or `csv`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | String to be inserted in-between the records as separator. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordPrefix">record_prefix</a></code> | <code>str</code> | String to be prepended before each record. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordSuffix">record_suffix</a></code> | <code>str</code> | String to be appended after each record. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordTemplate">record_template</a></code> | <code>str</code> | String to use as template for each record instead of the default json key value mapping. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | Floating number to specify sampling rate. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | String to specify the format for timestamps, such as `unixnano`, `unix`, or `rfc3339`. Available values: "unixnano", "unix", "rfc3339". |

---

##### `batch_prefix`<sup>Optional</sup> <a name="batch_prefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchPrefix"></a>

```python
batch_prefix: str
```

- *Type:* str

String to be prepended before each batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#batch_prefix LogpushJob#batch_prefix}

---

##### `batch_suffix`<sup>Optional</sup> <a name="batch_suffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchSuffix"></a>

```python
batch_suffix: str
```

- *Type:* str

String to be appended after each batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#batch_suffix LogpushJob#batch_suffix}

---

##### `cve202144228`<sup>Optional</sup> <a name="cve202144228" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.cve202144228"></a>

```python
cve202144228: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, will cause all occurrences of `${` in the generated files to be replaced with `x{`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#cve_2021_44228 LogpushJob#cve_2021_44228}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

String to join fields. This field be ignored when `record_template` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#field_delimiter LogpushJob#field_delimiter}

---

##### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

List of field names to be included in the Logpush output.

For the moment, there is no option to add all fields at once, so you must specify all the fields names you are interested in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#field_names LogpushJob#field_names}

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

Specifies the output type, such as `ndjson` or `csv`.

This sets default values for the rest of the settings, depending on the chosen output type. Some formatting rules, like string quoting, are different between output types.
Available values: "ndjson", "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#output_type LogpushJob#output_type}

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

String to be inserted in-between the records as separator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#record_delimiter LogpushJob#record_delimiter}

---

##### `record_prefix`<sup>Optional</sup> <a name="record_prefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordPrefix"></a>

```python
record_prefix: str
```

- *Type:* str

String to be prepended before each record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#record_prefix LogpushJob#record_prefix}

---

##### `record_suffix`<sup>Optional</sup> <a name="record_suffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordSuffix"></a>

```python
record_suffix: str
```

- *Type:* str

String to be appended after each record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#record_suffix LogpushJob#record_suffix}

---

##### `record_template`<sup>Optional</sup> <a name="record_template" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordTemplate"></a>

```python
record_template: str
```

- *Type:* str

String to use as template for each record instead of the default json key value mapping.

All fields used in the template must be present in `field_names` as well, otherwise they will end up as null. Format as a Go `text/template` without any standard functions, like conditionals, loops, sub-templates, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#record_template LogpushJob#record_template}

---

##### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Floating number to specify sampling rate.

Sampling is applied on top of filtering, and regardless of the current `sample_interval` of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#sample_rate LogpushJob#sample_rate}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

String to specify the format for timestamps, such as `unixnano`, `unix`, or `rfc3339`. Available values: "unixnano", "unix", "rfc3339".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/logpush_job#timestamp_format LogpushJob#timestamp_format}

---

## Classes <a name="Classes" id="Classes"></a>

### LogpushJobOutputOptionsOutputReference <a name="LogpushJobOutputOptionsOutputReference" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import logpush_job

logpushJob.LogpushJobOutputOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchPrefix">reset_batch_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchSuffix">reset_batch_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetCve202144228">reset_cve202144228</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldNames">reset_field_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordDelimiter">reset_record_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordPrefix">reset_record_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordSuffix">reset_record_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordTemplate">reset_record_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetSampleRate">reset_sample_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_prefix` <a name="reset_batch_prefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchPrefix"></a>

```python
def reset_batch_prefix() -> None
```

##### `reset_batch_suffix` <a name="reset_batch_suffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchSuffix"></a>

```python
def reset_batch_suffix() -> None
```

##### `reset_cve202144228` <a name="reset_cve202144228" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetCve202144228"></a>

```python
def reset_cve202144228() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_field_names` <a name="reset_field_names" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldNames"></a>

```python
def reset_field_names() -> None
```

##### `reset_output_type` <a name="reset_output_type" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```

##### `reset_record_delimiter` <a name="reset_record_delimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordDelimiter"></a>

```python
def reset_record_delimiter() -> None
```

##### `reset_record_prefix` <a name="reset_record_prefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordPrefix"></a>

```python
def reset_record_prefix() -> None
```

##### `reset_record_suffix` <a name="reset_record_suffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordSuffix"></a>

```python
def reset_record_suffix() -> None
```

##### `reset_record_template` <a name="reset_record_template" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordTemplate"></a>

```python
def reset_record_template() -> None
```

##### `reset_sample_rate` <a name="reset_sample_rate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetSampleRate"></a>

```python
def reset_sample_rate() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefixInput">batch_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffixInput">batch_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve202144228Input">cve202144228_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNamesInput">field_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiterInput">record_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefixInput">record_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffixInput">record_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplateInput">record_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRateInput">sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefix">batch_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffix">batch_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve202144228">cve202144228</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefix">record_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffix">record_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplate">record_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_prefix_input`<sup>Optional</sup> <a name="batch_prefix_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefixInput"></a>

```python
batch_prefix_input: str
```

- *Type:* str

---

##### `batch_suffix_input`<sup>Optional</sup> <a name="batch_suffix_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffixInput"></a>

```python
batch_suffix_input: str
```

- *Type:* str

---

##### `cve202144228_input`<sup>Optional</sup> <a name="cve202144228_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve202144228Input"></a>

```python
cve202144228_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `field_names_input`<sup>Optional</sup> <a name="field_names_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNamesInput"></a>

```python
field_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `record_delimiter_input`<sup>Optional</sup> <a name="record_delimiter_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiterInput"></a>

```python
record_delimiter_input: str
```

- *Type:* str

---

##### `record_prefix_input`<sup>Optional</sup> <a name="record_prefix_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefixInput"></a>

```python
record_prefix_input: str
```

- *Type:* str

---

##### `record_suffix_input`<sup>Optional</sup> <a name="record_suffix_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffixInput"></a>

```python
record_suffix_input: str
```

- *Type:* str

---

##### `record_template_input`<sup>Optional</sup> <a name="record_template_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplateInput"></a>

```python
record_template_input: str
```

- *Type:* str

---

##### `sample_rate_input`<sup>Optional</sup> <a name="sample_rate_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRateInput"></a>

```python
sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `batch_prefix`<sup>Required</sup> <a name="batch_prefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefix"></a>

```python
batch_prefix: str
```

- *Type:* str

---

##### `batch_suffix`<sup>Required</sup> <a name="batch_suffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffix"></a>

```python
batch_suffix: str
```

- *Type:* str

---

##### `cve202144228`<sup>Required</sup> <a name="cve202144228" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve202144228"></a>

```python
cve202144228: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_names`<sup>Required</sup> <a name="field_names" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `record_prefix`<sup>Required</sup> <a name="record_prefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefix"></a>

```python
record_prefix: str
```

- *Type:* str

---

##### `record_suffix`<sup>Required</sup> <a name="record_suffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffix"></a>

```python
record_suffix: str
```

- *Type:* str

---

##### `record_template`<sup>Required</sup> <a name="record_template" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplate"></a>

```python
record_template: str
```

- *Type:* str

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogpushJobOutputOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>]

---



