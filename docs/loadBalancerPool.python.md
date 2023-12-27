# `loadBalancerPool` Submodule <a name="`loadBalancerPool` Submodule" id="@cdktf/provider-cloudflare.loadBalancerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPool <a name="LoadBalancerPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPool(
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
  name: str,
  origins: typing.Union[IResolvable, typing.List[LoadBalancerPoolOrigins]],
  check_regions: typing.List[str] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  latitude: typing.Union[int, float] = None,
  load_shedding: typing.Union[IResolvable, typing.List[LoadBalancerPoolLoadShedding]] = None,
  longitude: typing.Union[int, float] = None,
  minimum_origins: typing.Union[int, float] = None,
  monitor: str = None,
  notification_email: str = None,
  origin_steering: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginSteering]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.name">name</a></code> | <code>str</code> | A short name (tag) for the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.origins">origins</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]</code> | origins block. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.checkRegions">check_regions</a></code> | <code>typing.List[str]</code> | A list of regions (specified by region code) from which to run health checks. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.description">description</a></code> | <code>str</code> | Free text description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable (the default) this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#id LoadBalancerPool#id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.latitude">latitude</a></code> | <code>typing.Union[int, float]</code> | The latitude this pool is physically located at; used for proximity steering. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.loadShedding">load_shedding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]</code> | load_shedding block. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.longitude">longitude</a></code> | <code>typing.Union[int, float]</code> | The longitude this pool is physically located at; used for proximity steering. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.minimumOrigins">minimum_origins</a></code> | <code>typing.Union[int, float]</code> | The minimum number of origins that must be healthy for this pool to serve traffic. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.monitor">monitor</a></code> | <code>str</code> | The ID of the Monitor to use for health checking origins within this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.notificationEmail">notification_email</a></code> | <code>str</code> | The email address to send health status notifications to. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.originSteering">origin_steering</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]</code> | origin_steering block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.name"></a>

- *Type:* str

A short name (tag) for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.origins"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]

origins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}

---

##### `check_regions`<sup>Optional</sup> <a name="check_regions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.checkRegions"></a>

- *Type:* typing.List[str]

A list of regions (specified by region code) from which to run health checks.

Empty means every Cloudflare data center (the default), but requires an Enterprise plan. Region codes can be found [here](https://developers.cloudflare.com/load-balancing/reference/region-mapping-api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.description"></a>

- *Type:* str

Free text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable (the default) this pool.

Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#id LoadBalancerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.latitude"></a>

- *Type:* typing.Union[int, float]

The latitude this pool is physically located at; used for proximity steering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}

---

##### `load_shedding`<sup>Optional</sup> <a name="load_shedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.loadShedding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]

load_shedding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.longitude"></a>

- *Type:* typing.Union[int, float]

The longitude this pool is physically located at; used for proximity steering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}

---

##### `minimum_origins`<sup>Optional</sup> <a name="minimum_origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.minimumOrigins"></a>

- *Type:* typing.Union[int, float]

The minimum number of origins that must be healthy for this pool to serve traffic.

If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.monitor"></a>

- *Type:* str

The ID of the Monitor to use for health checking origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}

---

##### `notification_email`<sup>Optional</sup> <a name="notification_email" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.notificationEmail"></a>

- *Type:* str

The email address to send health status notifications to.

This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}

---

##### `origin_steering`<sup>Optional</sup> <a name="origin_steering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.originSteering"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]

origin_steering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding">put_load_shedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins">put_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering">put_origin_steering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions">reset_check_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude">reset_latitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding">reset_load_shedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude">reset_longitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins">reset_minimum_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail">reset_notification_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering">reset_origin_steering</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_load_shedding` <a name="put_load_shedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding"></a>

```python
def put_load_shedding(
  value: typing.Union[IResolvable, typing.List[LoadBalancerPoolLoadShedding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]

---

##### `put_origins` <a name="put_origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins"></a>

```python
def put_origins(
  value: typing.Union[IResolvable, typing.List[LoadBalancerPoolOrigins]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]

---

##### `put_origin_steering` <a name="put_origin_steering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering"></a>

```python
def put_origin_steering(
  value: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginSteering]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]

---

##### `reset_check_regions` <a name="reset_check_regions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions"></a>

```python
def reset_check_regions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_latitude` <a name="reset_latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude"></a>

```python
def reset_latitude() -> None
```

##### `reset_load_shedding` <a name="reset_load_shedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding"></a>

```python
def reset_load_shedding() -> None
```

##### `reset_longitude` <a name="reset_longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude"></a>

```python
def reset_longitude() -> None
```

##### `reset_minimum_origins` <a name="reset_minimum_origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins"></a>

```python
def reset_minimum_origins() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_notification_email` <a name="reset_notification_email" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail"></a>

```python
def reset_notification_email() -> None
```

##### `reset_origin_steering` <a name="reset_origin_steering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering"></a>

```python
def reset_origin_steering() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadBalancerPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadBalancerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding">load_shedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList">LoadBalancerPoolLoadSheddingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins">origins</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering">origin_steering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList">LoadBalancerPoolOriginSteeringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput">check_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput">latitude_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput">load_shedding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput">longitude_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput">minimum_origins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput">monitor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput">notification_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput">origins_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput">origin_steering_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions">check_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude">latitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude">longitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins">minimum_origins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor">monitor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail">notification_email</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `load_shedding`<sup>Required</sup> <a name="load_shedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding"></a>

```python
load_shedding: LoadBalancerPoolLoadSheddingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList">LoadBalancerPoolLoadSheddingList</a>

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins"></a>

```python
origins: LoadBalancerPoolOriginsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a>

---

##### `origin_steering`<sup>Required</sup> <a name="origin_steering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering"></a>

```python
origin_steering: LoadBalancerPoolOriginSteeringList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList">LoadBalancerPoolOriginSteeringList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `check_regions_input`<sup>Optional</sup> <a name="check_regions_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput"></a>

```python
check_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `latitude_input`<sup>Optional</sup> <a name="latitude_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput"></a>

```python
latitude_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_shedding_input`<sup>Optional</sup> <a name="load_shedding_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput"></a>

```python
load_shedding_input: typing.Union[IResolvable, typing.List[LoadBalancerPoolLoadShedding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]

---

##### `longitude_input`<sup>Optional</sup> <a name="longitude_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput"></a>

```python
longitude_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_origins_input`<sup>Optional</sup> <a name="minimum_origins_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput"></a>

```python
minimum_origins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput"></a>

```python
monitor_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_email_input`<sup>Optional</sup> <a name="notification_email_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput"></a>

```python
notification_email_input: str
```

- *Type:* str

---

##### `origins_input`<sup>Optional</sup> <a name="origins_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput"></a>

```python
origins_input: typing.Union[IResolvable, typing.List[LoadBalancerPoolOrigins]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]

---

##### `origin_steering_input`<sup>Optional</sup> <a name="origin_steering_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput"></a>

```python
origin_steering_input: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginSteering]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `check_regions`<sup>Required</sup> <a name="check_regions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions"></a>

```python
check_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude"></a>

```python
latitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude"></a>

```python
longitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_origins`<sup>Required</sup> <a name="minimum_origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins"></a>

```python
minimum_origins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor"></a>

```python
monitor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_email`<sup>Required</sup> <a name="notification_email" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail"></a>

```python
notification_email: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPoolConfig <a name="LoadBalancerPoolConfig" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  origins: typing.Union[IResolvable, typing.List[LoadBalancerPoolOrigins]],
  check_regions: typing.List[str] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  latitude: typing.Union[int, float] = None,
  load_shedding: typing.Union[IResolvable, typing.List[LoadBalancerPoolLoadShedding]] = None,
  longitude: typing.Union[int, float] = None,
  minimum_origins: typing.Union[int, float] = None,
  monitor: str = None,
  notification_email: str = None,
  origin_steering: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginSteering]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name">name</a></code> | <code>str</code> | A short name (tag) for the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins">origins</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]</code> | origins block. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions">check_regions</a></code> | <code>typing.List[str]</code> | A list of regions (specified by region code) from which to run health checks. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description">description</a></code> | <code>str</code> | Free text description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable (the default) this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#id LoadBalancerPool#id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude">latitude</a></code> | <code>typing.Union[int, float]</code> | The latitude this pool is physically located at; used for proximity steering. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding">load_shedding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]</code> | load_shedding block. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude">longitude</a></code> | <code>typing.Union[int, float]</code> | The longitude this pool is physically located at; used for proximity steering. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins">minimum_origins</a></code> | <code>typing.Union[int, float]</code> | The minimum number of origins that must be healthy for this pool to serve traffic. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor">monitor</a></code> | <code>str</code> | The ID of the Monitor to use for health checking origins within this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail">notification_email</a></code> | <code>str</code> | The email address to send health status notifications to. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering">origin_steering</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]</code> | origin_steering block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A short name (tag) for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins"></a>

```python
origins: typing.Union[IResolvable, typing.List[LoadBalancerPoolOrigins]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]

origins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}

---

##### `check_regions`<sup>Optional</sup> <a name="check_regions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions"></a>

```python
check_regions: typing.List[str]
```

- *Type:* typing.List[str]

A list of regions (specified by region code) from which to run health checks.

Empty means every Cloudflare data center (the default), but requires an Enterprise plan. Region codes can be found [here](https://developers.cloudflare.com/load-balancing/reference/region-mapping-api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable (the default) this pool.

Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#id LoadBalancerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude"></a>

```python
latitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The latitude this pool is physically located at; used for proximity steering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}

---

##### `load_shedding`<sup>Optional</sup> <a name="load_shedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding"></a>

```python
load_shedding: typing.Union[IResolvable, typing.List[LoadBalancerPoolLoadShedding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]

load_shedding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude"></a>

```python
longitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The longitude this pool is physically located at; used for proximity steering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}

---

##### `minimum_origins`<sup>Optional</sup> <a name="minimum_origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins"></a>

```python
minimum_origins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of origins that must be healthy for this pool to serve traffic.

If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor"></a>

```python
monitor: str
```

- *Type:* str

The ID of the Monitor to use for health checking origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}

---

##### `notification_email`<sup>Optional</sup> <a name="notification_email" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail"></a>

```python
notification_email: str
```

- *Type:* str

The email address to send health status notifications to.

This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}

---

##### `origin_steering`<sup>Optional</sup> <a name="origin_steering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering"></a>

```python
origin_steering: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginSteering]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]

origin_steering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}

---

### LoadBalancerPoolLoadShedding <a name="LoadBalancerPoolLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolLoadShedding(
  default_percent: typing.Union[int, float] = None,
  default_policy: str = None,
  session_percent: typing.Union[int, float] = None,
  session_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent">default_percent</a></code> | <code>typing.Union[int, float]</code> | Percent of traffic to shed 0 - 100. Defaults to `0`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy">default_policy</a></code> | <code>str</code> | Method of shedding traffic. Available values: `""`, `hash`, `random`. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent">session_percent</a></code> | <code>typing.Union[int, float]</code> | Percent of session traffic to shed 0 - 100. Defaults to `0`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy">session_policy</a></code> | <code>str</code> | Method of shedding traffic. Available values: `""`, `hash`. Defaults to `""`. |

---

##### `default_percent`<sup>Optional</sup> <a name="default_percent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent"></a>

```python
default_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percent of traffic to shed 0 - 100. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#default_percent LoadBalancerPool#default_percent}

---

##### `default_policy`<sup>Optional</sup> <a name="default_policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy"></a>

```python
default_policy: str
```

- *Type:* str

Method of shedding traffic. Available values: `""`, `hash`, `random`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#default_policy LoadBalancerPool#default_policy}

---

##### `session_percent`<sup>Optional</sup> <a name="session_percent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent"></a>

```python
session_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percent of session traffic to shed 0 - 100. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#session_percent LoadBalancerPool#session_percent}

---

##### `session_policy`<sup>Optional</sup> <a name="session_policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

Method of shedding traffic. Available values: `""`, `hash`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#session_policy LoadBalancerPool#session_policy}

---

### LoadBalancerPoolOrigins <a name="LoadBalancerPoolOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOrigins(
  address: str,
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  header: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginsHeader]] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address">address</a></code> | <code>str</code> | The IP address (IPv4 or IPv6) of the origin, or the publicly addressable hostname. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name">name</a></code> | <code>str</code> | A human-identifiable name for the origin. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this origin is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight (0.01 - 1.00) of this origin, relative to other origins in the pool. Equal values mean equal weighting. A weight of 0 means traffic will not be sent to this origin, but health is still checked. When [`origin_steering.policy="least_outstanding_requests"`](#policy), weight is used to scale the origin's outstanding requests. When [`origin_steering.policy="least_connections"`](#policy), weight is used to scale the origin's open connections. Defaults to `1`. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address"></a>

```python
address: str
```

- *Type:* str

The IP address (IPv4 or IPv6) of the origin, or the publicly addressable hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#address LoadBalancerPool#address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name"></a>

```python
name: str
```

- *Type:* str

A human-identifiable name for the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this origin is enabled.

Disabled origins will not receive traffic and are excluded from health checks. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginsHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The weight (0.01 - 1.00) of this origin, relative to other origins in the pool. Equal values mean equal weighting. A weight of 0 means traffic will not be sent to this origin, but health is still checked. When [`origin_steering.policy="least_outstanding_requests"`](#policy), weight is used to scale the origin's outstanding requests. When [`origin_steering.policy="least_connections"`](#policy), weight is used to scale the origin's open connections. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#weight LoadBalancerPool#weight}

---

### LoadBalancerPoolOriginsHeader <a name="LoadBalancerPoolOriginsHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOriginsHeader(
  header: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.header">header</a></code> | <code>str</code> | HTTP Header name. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.values">values</a></code> | <code>typing.List[str]</code> | Values for the HTTP headers. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.header"></a>

```python
header: str
```

- *Type:* str

HTTP Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Values for the HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#values LoadBalancerPool#values}

---

### LoadBalancerPoolOriginSteering <a name="LoadBalancerPoolOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOriginSteering(
  policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy">policy</a></code> | <code>str</code> | Origin steering policy to be used. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy"></a>

```python
policy: str
```

- *Type:* str

Origin steering policy to be used.

Value `random` selects an origin randomly. Value `hash` selects an origin by computing a hash over the CF-Connecting-IP address. Value `least_outstanding_requests` selects an origin by taking into consideration origin weights, as well as each origin's number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others. Value `least_connections` selects an origin by taking into consideration origin weights, as well as each origin's number of open connections. Origins with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections. Available values: `""`, `hash`, `random`, `least_outstanding_requests`, `least_connections`. Defaults to `random`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/load_balancer_pool#policy LoadBalancerPool#policy}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPoolLoadSheddingList <a name="LoadBalancerPoolLoadSheddingList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolLoadSheddingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerPoolLoadSheddingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerPoolLoadShedding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]]

---


### LoadBalancerPoolLoadSheddingOutputReference <a name="LoadBalancerPoolLoadSheddingOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent">reset_default_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy">reset_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent">reset_session_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy">reset_session_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_percent` <a name="reset_default_percent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent"></a>

```python
def reset_default_percent() -> None
```

##### `reset_default_policy` <a name="reset_default_policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy"></a>

```python
def reset_default_policy() -> None
```

##### `reset_session_percent` <a name="reset_session_percent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent"></a>

```python
def reset_session_percent() -> None
```

##### `reset_session_policy` <a name="reset_session_policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy"></a>

```python
def reset_session_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput">default_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput">default_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput">session_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput">session_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent">default_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy">default_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent">session_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy">session_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_percent_input`<sup>Optional</sup> <a name="default_percent_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput"></a>

```python
default_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_policy_input`<sup>Optional</sup> <a name="default_policy_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput"></a>

```python
default_policy_input: str
```

- *Type:* str

---

##### `session_percent_input`<sup>Optional</sup> <a name="session_percent_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput"></a>

```python
session_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_policy_input`<sup>Optional</sup> <a name="session_policy_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput"></a>

```python
session_policy_input: str
```

- *Type:* str

---

##### `default_percent`<sup>Required</sup> <a name="default_percent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent"></a>

```python
default_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_policy`<sup>Required</sup> <a name="default_policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy"></a>

```python
default_policy: str
```

- *Type:* str

---

##### `session_percent`<sup>Required</sup> <a name="session_percent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent"></a>

```python
session_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_policy`<sup>Required</sup> <a name="session_policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerPoolLoadShedding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>]

---


### LoadBalancerPoolOriginsHeaderList <a name="LoadBalancerPoolOriginsHeaderList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOriginsHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerPoolOriginsHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginsHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]]

---


### LoadBalancerPoolOriginsHeaderOutputReference <a name="LoadBalancerPoolOriginsHeaderOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerPoolOriginsHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]

---


### LoadBalancerPoolOriginsList <a name="LoadBalancerPoolOriginsList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOriginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerPoolOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerPoolOrigins]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]]

---


### LoadBalancerPoolOriginsOutputReference <a name="LoadBalancerPoolOriginsOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOriginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginsHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList">LoadBalancerPoolOriginsHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header"></a>

```python
header: LoadBalancerPoolOriginsHeaderList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList">LoadBalancerPoolOriginsHeaderList</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginsHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerPoolOrigins]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>]

---


### LoadBalancerPoolOriginSteeringList <a name="LoadBalancerPoolOriginSteeringList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOriginSteeringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerPoolOriginSteeringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerPoolOriginSteering]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]]

---


### LoadBalancerPoolOriginSteeringOutputReference <a name="LoadBalancerPoolOriginSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer_pool

loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerPoolOriginSteering]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>]

---



