# `cloudflare_logpush_job`

Refer to the Terraform Registory for docs: [`cloudflare_logpush_job`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job).

# `logpushJob` Submodule <a name="`logpushJob` Submodule" id="@cdktf/provider-cloudflare.logpushJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogpushJob <a name="LogpushJob" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job cloudflare_logpush_job}.

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
  dataset: str,
  destination_conf: str,
  account_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  filter: str = None,
  frequency: str = None,
  id: str = None,
  kind: str = None,
  logpull_options: str = None,
  max_upload_bytes: typing.Union[int, float] = None,
  max_upload_interval_seconds: typing.Union[int, float] = None,
  max_upload_records: typing.Union[int, float] = None,
  name: str = None,
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
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | The kind of the dataset to use with the logpush job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.destinationConf">destination_conf</a></code> | <code>str</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | A higher frequency will result in logs being pushed on faster with smaller files. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#id LogpushJob#id}. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.kind">kind</a></code> | <code>str</code> | The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.logpullOptions">logpull_options</a></code> | <code>str</code> | Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadBytes">max_upload_bytes</a></code> | <code>typing.Union[int, float]</code> | The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadIntervalSeconds">max_upload_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum interval in seconds for log batches. Value must be between 30 and 300. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadRecords">max_upload_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of log lines per batch. Value must be between 1000 and 1,000,000. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the logpush job to create. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.ownershipChallenge">ownership_challenge</a></code> | <code>str</code> | Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |

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

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.dataset"></a>

- *Type:* str

The kind of the dataset to use with the logpush job.

Available values: `access_requests`, `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`, `workers_trace_events`, `device_posture_results`, `zero_trust_network_sessions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#dataset LogpushJob#dataset}

---

##### `destination_conf`<sup>Required</sup> <a name="destination_conf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.destinationConf"></a>

- *Type:* str

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#account_id LogpushJob#account_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#enabled LogpushJob#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.filter"></a>

- *Type:* str

Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#filter LogpushJob#filter}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.frequency"></a>

- *Type:* str

A higher frequency will result in logs being pushed on faster with smaller files.

`low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#frequency LogpushJob#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#id LogpushJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.kind"></a>

- *Type:* str

The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#kind LogpushJob#kind}

---

##### `logpull_options`<sup>Optional</sup> <a name="logpull_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.logpullOptions"></a>

- *Type:* str

Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}

---

##### `max_upload_bytes`<sup>Optional</sup> <a name="max_upload_bytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadBytes"></a>

- *Type:* typing.Union[int, float]

The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}

---

##### `max_upload_interval_seconds`<sup>Optional</sup> <a name="max_upload_interval_seconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum interval in seconds for log batches. Value must be between 30 and 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}

---

##### `max_upload_records`<sup>Optional</sup> <a name="max_upload_records" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.maxUploadRecords"></a>

- *Type:* typing.Union[int, float]

The maximum number of log lines per batch. Value must be between 1000 and 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.name"></a>

- *Type:* str

The name of the logpush job to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#name LogpushJob#name}

---

##### `ownership_challenge`<sup>Optional</sup> <a name="ownership_challenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.ownershipChallenge"></a>

- *Type:* str

Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic.

See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#zone_id LogpushJob#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions">reset_logpull_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes">reset_max_upload_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds">reset_max_upload_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords">reset_max_upload_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName">reset_name</a></code> | *No description.* |
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

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

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

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId"></a>

```python
def reset_account_id() -> None
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

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId"></a>

```python
def reset_id() -> None
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
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput">destination_conf_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput">logpull_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput">max_upload_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput">max_upload_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput">max_upload_records_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput">ownership_challenge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf">destination_conf</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id">id</a></code> | <code>str</code> | *No description.* |
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

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput"></a>

```python
id_input: str
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

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id"></a>

```python
id: str
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
  dataset: str,
  destination_conf: str,
  account_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  filter: str = None,
  frequency: str = None,
  id: str = None,
  kind: str = None,
  logpull_options: str = None,
  max_upload_bytes: typing.Union[int, float] = None,
  max_upload_interval_seconds: typing.Union[int, float] = None,
  max_upload_records: typing.Union[int, float] = None,
  name: str = None,
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
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset">dataset</a></code> | <code>str</code> | The kind of the dataset to use with the logpush job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf">destination_conf</a></code> | <code>str</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter">filter</a></code> | <code>str</code> | Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency">frequency</a></code> | <code>str</code> | A higher frequency will result in logs being pushed on faster with smaller files. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#id LogpushJob#id}. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind">kind</a></code> | <code>str</code> | The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions">logpull_options</a></code> | <code>str</code> | Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes">max_upload_bytes</a></code> | <code>typing.Union[int, float]</code> | The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds">max_upload_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum interval in seconds for log batches. Value must be between 30 and 300. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords">max_upload_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of log lines per batch. Value must be between 1000 and 1,000,000. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name">name</a></code> | <code>str</code> | The name of the logpush job to create. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge">ownership_challenge</a></code> | <code>str</code> | Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |

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

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The kind of the dataset to use with the logpush job.

Available values: `access_requests`, `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`, `workers_trace_events`, `device_posture_results`, `zero_trust_network_sessions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#dataset LogpushJob#dataset}

---

##### `destination_conf`<sup>Required</sup> <a name="destination_conf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf"></a>

```python
destination_conf: str
```

- *Type:* str

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#account_id LogpushJob#account_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#enabled LogpushJob#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#filter LogpushJob#filter}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

A higher frequency will result in logs being pushed on faster with smaller files.

`low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#frequency LogpushJob#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#id LogpushJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#kind LogpushJob#kind}

---

##### `logpull_options`<sup>Optional</sup> <a name="logpull_options" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions"></a>

```python
logpull_options: str
```

- *Type:* str

Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}

---

##### `max_upload_bytes`<sup>Optional</sup> <a name="max_upload_bytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes"></a>

```python
max_upload_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}

---

##### `max_upload_interval_seconds`<sup>Optional</sup> <a name="max_upload_interval_seconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds"></a>

```python
max_upload_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum interval in seconds for log batches. Value must be between 30 and 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}

---

##### `max_upload_records`<sup>Optional</sup> <a name="max_upload_records" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords"></a>

```python
max_upload_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of log lines per batch. Value must be between 1000 and 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the logpush job to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#name LogpushJob#name}

---

##### `ownership_challenge`<sup>Optional</sup> <a name="ownership_challenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge"></a>

```python
ownership_challenge: str
```

- *Type:* str

Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic.

See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/logpush_job#zone_id LogpushJob#zone_id}

---



