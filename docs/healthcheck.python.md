# `healthcheck` Submodule <a name="`healthcheck` Submodule" id="@cdktf/provider-cloudflare.healthcheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Healthcheck <a name="Healthcheck" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck cloudflare_healthcheck}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.Healthcheck(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  name: str,
  zone_id: str,
  check_regions: typing.List[str] = None,
  consecutive_fails: typing.Union[int, float] = None,
  consecutive_successes: typing.Union[int, float] = None,
  description: str = None,
  http_config: HealthcheckHttpConfig = None,
  interval: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  tcp_config: HealthcheckTcpConfig = None,
  timeout: typing.Union[int, float] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.address">address</a></code> | <code>str</code> | The hostname or IP address of the origin server to run health checks on. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.name">name</a></code> | <code>str</code> | A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.checkRegions">check_regions</a></code> | <code>typing.List[str]</code> | A list of regions from which to run health checks. Null means Cloudflare will pick a default region. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveFails">consecutive_fails</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveSuccesses">consecutive_successes</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive successes required from a health check before changing the health to healthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.httpConfig">http_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a></code> | Parameters specific to an HTTP or HTTPS health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If suspended, no health checks are sent to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.tcpConfig">tcp_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a></code> | Parameters specific to TCP health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.type">type</a></code> | <code>str</code> | The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.address"></a>

- *Type:* str

The hostname or IP address of the origin server to run health checks on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#address Healthcheck#address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.name"></a>

- *Type:* str

A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#name Healthcheck#name}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#zone_id Healthcheck#zone_id}

---

##### `check_regions`<sup>Optional</sup> <a name="check_regions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.checkRegions"></a>

- *Type:* typing.List[str]

A list of regions from which to run health checks. Null means Cloudflare will pick a default region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#check_regions Healthcheck#check_regions}

---

##### `consecutive_fails`<sup>Optional</sup> <a name="consecutive_fails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveFails"></a>

- *Type:* typing.Union[int, float]

The number of consecutive fails required from a health check before changing the health to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}

---

##### `consecutive_successes`<sup>Optional</sup> <a name="consecutive_successes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveSuccesses"></a>

- *Type:* typing.Union[int, float]

The number of consecutive successes required from a health check before changing the health to healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#description Healthcheck#description}

---

##### `http_config`<sup>Optional</sup> <a name="http_config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.httpConfig"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

Parameters specific to an HTTP or HTTPS health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#http_config Healthcheck#http_config}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.interval"></a>

- *Type:* typing.Union[int, float]

The interval between each health check.

Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#interval Healthcheck#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#retries Healthcheck#retries}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.suspended"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If suspended, no health checks are sent to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#suspended Healthcheck#suspended}

---

##### `tcp_config`<sup>Optional</sup> <a name="tcp_config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.tcpConfig"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

Parameters specific to TCP health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#tcp_config Healthcheck#tcp_config}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#timeout Healthcheck#timeout}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.type"></a>

- *Type:* str

The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#type Healthcheck#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig">put_http_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig">put_tcp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions">reset_check_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails">reset_consecutive_fails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses">reset_consecutive_successes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHttpConfig">reset_http_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended">reset_suspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTcpConfig">reset_tcp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_http_config` <a name="put_http_config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig"></a>

```python
def put_http_config(
  allow_insecure: typing.Union[bool, IResolvable] = None,
  expected_body: str = None,
  expected_codes: typing.List[str] = None,
  follow_redirects: typing.Union[bool, IResolvable] = None,
  header: typing.Union[IResolvable, typing.Mapping[typing.List[str]]] = None,
  method: str = None,
  path: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `allow_insecure`<sup>Optional</sup> <a name="allow_insecure" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.allowInsecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not validate the certificate when the health check uses HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}

---

###### `expected_body`<sup>Optional</sup> <a name="expected_body" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.expectedBody"></a>

- *Type:* str

A case-insensitive sub-string to look for in the response body.

If this string is not found, the origin will be marked as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#expected_body Healthcheck#expected_body}

---

###### `expected_codes`<sup>Optional</sup> <a name="expected_codes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.expectedCodes"></a>

- *Type:* typing.List[str]

The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}

---

###### `follow_redirects`<sup>Optional</sup> <a name="follow_redirects" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.followRedirects"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Follow redirects if the origin returns a 3xx status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.List[str]]]

The HTTP request headers to send in the health check.

It is recommended you set a Host header by default. The User-Agent header cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#header Healthcheck#header}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.method"></a>

- *Type:* str

The HTTP method to use for the health check. Available values: "GET", "HEAD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#method Healthcheck#method}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.path"></a>

- *Type:* str

The endpoint path to health check against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#path Healthcheck#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number to connect to for the health check.

Defaults to 80 if type is HTTP or 443 if type is HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#port Healthcheck#port}

---

##### `put_tcp_config` <a name="put_tcp_config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig"></a>

```python
def put_tcp_config(
  method: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig.parameter.method"></a>

- *Type:* str

The TCP connection method to use for the health check. Available values: "connection_established".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#method Healthcheck#method}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number to connect to for the health check. Defaults to 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#port Healthcheck#port}

---

##### `reset_check_regions` <a name="reset_check_regions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions"></a>

```python
def reset_check_regions() -> None
```

##### `reset_consecutive_fails` <a name="reset_consecutive_fails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails"></a>

```python
def reset_consecutive_fails() -> None
```

##### `reset_consecutive_successes` <a name="reset_consecutive_successes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses"></a>

```python
def reset_consecutive_successes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_http_config` <a name="reset_http_config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHttpConfig"></a>

```python
def reset_http_config() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_suspended` <a name="reset_suspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended"></a>

```python
def reset_suspended() -> None
```

##### `reset_tcp_config` <a name="reset_tcp_config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTcpConfig"></a>

```python
def reset_tcp_config() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.Healthcheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.Healthcheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.Healthcheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.Healthcheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Healthcheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Healthcheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Healthcheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfig">http_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference">HealthcheckHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfig">tcp_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference">HealthcheckTcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput">check_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput">consecutive_fails_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput">consecutive_successes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfigInput">http_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput">suspended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfigInput">tcp_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions">check_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails">consecutive_fails</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses">consecutive_successes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `http_config`<sup>Required</sup> <a name="http_config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfig"></a>

```python
http_config: HealthcheckHttpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference">HealthcheckHttpConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tcp_config`<sup>Required</sup> <a name="tcp_config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfig"></a>

```python
tcp_config: HealthcheckTcpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference">HealthcheckTcpConfigOutputReference</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `check_regions_input`<sup>Optional</sup> <a name="check_regions_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput"></a>

```python
check_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consecutive_fails_input`<sup>Optional</sup> <a name="consecutive_fails_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput"></a>

```python
consecutive_fails_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_successes_input`<sup>Optional</sup> <a name="consecutive_successes_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput"></a>

```python
consecutive_successes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `http_config_input`<sup>Optional</sup> <a name="http_config_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfigInput"></a>

```python
http_config_input: typing.Union[IResolvable, HealthcheckHttpConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspended_input`<sup>Optional</sup> <a name="suspended_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput"></a>

```python
suspended_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tcp_config_input`<sup>Optional</sup> <a name="tcp_config_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfigInput"></a>

```python
tcp_config_input: typing.Union[IResolvable, HealthcheckTcpConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `check_regions`<sup>Required</sup> <a name="check_regions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions"></a>

```python
check_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consecutive_fails`<sup>Required</sup> <a name="consecutive_fails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails"></a>

```python
consecutive_fails: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_successes`<sup>Required</sup> <a name="consecutive_successes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses"></a>

```python
consecutive_successes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcheckConfig <a name="HealthcheckConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.HealthcheckConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  name: str,
  zone_id: str,
  check_regions: typing.List[str] = None,
  consecutive_fails: typing.Union[int, float] = None,
  consecutive_successes: typing.Union[int, float] = None,
  description: str = None,
  http_config: HealthcheckHttpConfig = None,
  interval: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  tcp_config: HealthcheckTcpConfig = None,
  timeout: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.address">address</a></code> | <code>str</code> | The hostname or IP address of the origin server to run health checks on. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name">name</a></code> | <code>str</code> | A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions">check_regions</a></code> | <code>typing.List[str]</code> | A list of regions from which to run health checks. Null means Cloudflare will pick a default region. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails">consecutive_fails</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses">consecutive_successes</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive successes required from a health check before changing the health to healthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.httpConfig">http_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a></code> | Parameters specific to an HTTP or HTTPS health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If suspended, no health checks are sent to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.tcpConfig">tcp_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a></code> | Parameters specific to TCP health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type">type</a></code> | <code>str</code> | The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The hostname or IP address of the origin server to run health checks on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#address Healthcheck#address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#name Healthcheck#name}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#zone_id Healthcheck#zone_id}

---

##### `check_regions`<sup>Optional</sup> <a name="check_regions" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions"></a>

```python
check_regions: typing.List[str]
```

- *Type:* typing.List[str]

A list of regions from which to run health checks. Null means Cloudflare will pick a default region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#check_regions Healthcheck#check_regions}

---

##### `consecutive_fails`<sup>Optional</sup> <a name="consecutive_fails" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails"></a>

```python
consecutive_fails: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive fails required from a health check before changing the health to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}

---

##### `consecutive_successes`<sup>Optional</sup> <a name="consecutive_successes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses"></a>

```python
consecutive_successes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive successes required from a health check before changing the health to healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#description Healthcheck#description}

---

##### `http_config`<sup>Optional</sup> <a name="http_config" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.httpConfig"></a>

```python
http_config: HealthcheckHttpConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

Parameters specific to an HTTP or HTTPS health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#http_config Healthcheck#http_config}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval between each health check.

Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#interval Healthcheck#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#retries Healthcheck#retries}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If suspended, no health checks are sent to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#suspended Healthcheck#suspended}

---

##### `tcp_config`<sup>Optional</sup> <a name="tcp_config" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.tcpConfig"></a>

```python
tcp_config: HealthcheckTcpConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

Parameters specific to TCP health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#tcp_config Healthcheck#tcp_config}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#timeout Healthcheck#timeout}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#type Healthcheck#type}

---

### HealthcheckHttpConfig <a name="HealthcheckHttpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.HealthcheckHttpConfig(
  allow_insecure: typing.Union[bool, IResolvable] = None,
  expected_body: str = None,
  expected_codes: typing.List[str] = None,
  follow_redirects: typing.Union[bool, IResolvable] = None,
  header: typing.Union[IResolvable, typing.Mapping[typing.List[str]]] = None,
  method: str = None,
  path: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.allowInsecure">allow_insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not validate the certificate when the health check uses HTTPS. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedBody">expected_body</a></code> | <code>str</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedCodes">expected_codes</a></code> | <code>typing.List[str]</code> | The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.followRedirects">follow_redirects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Follow redirects if the origin returns a 3xx status code. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.List[str]]]</code> | The HTTP request headers to send in the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.method">method</a></code> | <code>str</code> | The HTTP method to use for the health check. Available values: "GET", "HEAD". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.path">path</a></code> | <code>str</code> | The endpoint path to health check against. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number to connect to for the health check. |

---

##### `allow_insecure`<sup>Optional</sup> <a name="allow_insecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.allowInsecure"></a>

```python
allow_insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not validate the certificate when the health check uses HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}

---

##### `expected_body`<sup>Optional</sup> <a name="expected_body" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedBody"></a>

```python
expected_body: str
```

- *Type:* str

A case-insensitive sub-string to look for in the response body.

If this string is not found, the origin will be marked as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#expected_body Healthcheck#expected_body}

---

##### `expected_codes`<sup>Optional</sup> <a name="expected_codes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedCodes"></a>

```python
expected_codes: typing.List[str]
```

- *Type:* typing.List[str]

The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}

---

##### `follow_redirects`<sup>Optional</sup> <a name="follow_redirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.followRedirects"></a>

```python
follow_redirects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Follow redirects if the origin returns a 3xx status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.header"></a>

```python
header: typing.Union[IResolvable, typing.Mapping[typing.List[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.List[str]]]

The HTTP request headers to send in the health check.

It is recommended you set a Host header by default. The User-Agent header cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#header Healthcheck#header}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.method"></a>

```python
method: str
```

- *Type:* str

The HTTP method to use for the health check. Available values: "GET", "HEAD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#method Healthcheck#method}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The endpoint path to health check against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#path Healthcheck#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number to connect to for the health check.

Defaults to 80 if type is HTTP or 443 if type is HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#port Healthcheck#port}

---

### HealthcheckTcpConfig <a name="HealthcheckTcpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.HealthcheckTcpConfig(
  method: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.method">method</a></code> | <code>str</code> | The TCP connection method to use for the health check. Available values: "connection_established". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number to connect to for the health check. Defaults to 80. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.method"></a>

```python
method: str
```

- *Type:* str

The TCP connection method to use for the health check. Available values: "connection_established".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#method Healthcheck#method}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number to connect to for the health check. Defaults to 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#port Healthcheck#port}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcheckHttpConfigOutputReference <a name="HealthcheckHttpConfigOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.HealthcheckHttpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetAllowInsecure">reset_allow_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedBody">reset_expected_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedCodes">reset_expected_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetFollowRedirects">reset_follow_redirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_insecure` <a name="reset_allow_insecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetAllowInsecure"></a>

```python
def reset_allow_insecure() -> None
```

##### `reset_expected_body` <a name="reset_expected_body" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedBody"></a>

```python
def reset_expected_body() -> None
```

##### `reset_expected_codes` <a name="reset_expected_codes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedCodes"></a>

```python
def reset_expected_codes() -> None
```

##### `reset_follow_redirects` <a name="reset_follow_redirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetFollowRedirects"></a>

```python
def reset_follow_redirects() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecureInput">allow_insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBodyInput">expected_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodesInput">expected_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirectsInput">follow_redirects_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.List[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecure">allow_insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBody">expected_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodes">expected_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirects">follow_redirects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.List[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_insecure_input`<sup>Optional</sup> <a name="allow_insecure_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecureInput"></a>

```python
allow_insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expected_body_input`<sup>Optional</sup> <a name="expected_body_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBodyInput"></a>

```python
expected_body_input: str
```

- *Type:* str

---

##### `expected_codes_input`<sup>Optional</sup> <a name="expected_codes_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodesInput"></a>

```python
expected_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `follow_redirects_input`<sup>Optional</sup> <a name="follow_redirects_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirectsInput"></a>

```python
follow_redirects_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.Mapping[typing.List[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.List[str]]]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_insecure`<sup>Required</sup> <a name="allow_insecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecure"></a>

```python
allow_insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expected_body`<sup>Required</sup> <a name="expected_body" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBody"></a>

```python
expected_body: str
```

- *Type:* str

---

##### `expected_codes`<sup>Required</sup> <a name="expected_codes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodes"></a>

```python
expected_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `follow_redirects`<sup>Required</sup> <a name="follow_redirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirects"></a>

```python
follow_redirects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.header"></a>

```python
header: typing.Union[IResolvable, typing.Mapping[typing.List[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.List[str]]]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HealthcheckHttpConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>]

---


### HealthcheckTcpConfigOutputReference <a name="HealthcheckTcpConfigOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import healthcheck

healthcheck.HealthcheckTcpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HealthcheckTcpConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>]

---



