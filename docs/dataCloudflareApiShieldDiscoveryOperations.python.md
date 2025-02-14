# `dataCloudflareApiShieldDiscoveryOperations` Submodule <a name="`dataCloudflareApiShieldDiscoveryOperations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiShieldDiscoveryOperations <a name="DataCloudflareApiShieldDiscoveryOperations" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  diff: typing.Union[bool, IResolvable] = None,
  direction: str = None,
  endpoint: str = None,
  host: typing.List[str] = None,
  max_items: typing.Union[int, float] = None,
  method: typing.List[str] = None,
  order: str = None,
  origin: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.diff">diff</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Direction to order results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Filter results to only include endpoints containing this pattern. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.host">host</a></code> | <code>typing.List[str]</code> | Filter results to only include the specified hosts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.method">method</a></code> | <code>typing.List[str]</code> | Filter results to only include the specified HTTP methods. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.order">order</a></code> | <code>str</code> | Field to order by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.origin">origin</a></code> | <code>str</code> | Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.state">state</a></code> | <code>str</code> | Filter results to only include discovery results in a particular state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#zone_id DataCloudflareApiShieldDiscoveryOperations#zone_id}

---

##### `diff`<sup>Optional</sup> <a name="diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.diff"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#diff DataCloudflareApiShieldDiscoveryOperations#diff}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.direction"></a>

- *Type:* str

Direction to order results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#direction DataCloudflareApiShieldDiscoveryOperations#direction}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.endpoint"></a>

- *Type:* str

Filter results to only include endpoints containing this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#endpoint DataCloudflareApiShieldDiscoveryOperations#endpoint}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.host"></a>

- *Type:* typing.List[str]

Filter results to only include the specified hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#host DataCloudflareApiShieldDiscoveryOperations#host}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#max_items DataCloudflareApiShieldDiscoveryOperations#max_items}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.method"></a>

- *Type:* typing.List[str]

Filter results to only include the specified HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#method DataCloudflareApiShieldDiscoveryOperations#method}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.order"></a>

- *Type:* str

Field to order by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#order DataCloudflareApiShieldDiscoveryOperations#order}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.origin"></a>

- *Type:* str

Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#origin DataCloudflareApiShieldDiscoveryOperations#origin}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.state"></a>

- *Type:* str

Filter results to only include discovery results in a particular state.

States are as follows

* `review` - Discovered operations that are not saved into API Shield Endpoint Management
* `saved` - Discovered operations that are already saved into API Shield Endpoint Management
* `ignored` - Discovered operations that have been marked as ignored

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#state DataCloudflareApiShieldDiscoveryOperations#state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff">reset_diff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_diff` <a name="reset_diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff"></a>

```python
def reset_diff() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_origin` <a name="reset_origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareApiShieldDiscoveryOperations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareApiShieldDiscoveryOperations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiShieldDiscoveryOperations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput">diff_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput">host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput">method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput">origin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff">diff</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host">host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method">method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result"></a>

```python
result: DataCloudflareApiShieldDiscoveryOperationsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a>

---

##### `diff_input`<sup>Optional</sup> <a name="diff_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput"></a>

```python
diff_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput"></a>

```python
host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput"></a>

```python
method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput"></a>

```python
origin_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `diff`<sup>Required</sup> <a name="diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff"></a>

```python
diff: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host"></a>

```python
host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiShieldDiscoveryOperationsConfig <a name="DataCloudflareApiShieldDiscoveryOperationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  diff: typing.Union[bool, IResolvable] = None,
  direction: str = None,
  endpoint: str = None,
  host: typing.List[str] = None,
  max_items: typing.Union[int, float] = None,
  method: typing.List[str] = None,
  order: str = None,
  origin: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff">diff</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction">direction</a></code> | <code>str</code> | Direction to order results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Filter results to only include endpoints containing this pattern. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host">host</a></code> | <code>typing.List[str]</code> | Filter results to only include the specified hosts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method">method</a></code> | <code>typing.List[str]</code> | Filter results to only include the specified HTTP methods. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order">order</a></code> | <code>str</code> | Field to order by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin">origin</a></code> | <code>str</code> | Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state">state</a></code> | <code>str</code> | Filter results to only include discovery results in a particular state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#zone_id DataCloudflareApiShieldDiscoveryOperations#zone_id}

---

##### `diff`<sup>Optional</sup> <a name="diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff"></a>

```python
diff: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#diff DataCloudflareApiShieldDiscoveryOperations#diff}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction to order results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#direction DataCloudflareApiShieldDiscoveryOperations#direction}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Filter results to only include endpoints containing this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#endpoint DataCloudflareApiShieldDiscoveryOperations#endpoint}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host"></a>

```python
host: typing.List[str]
```

- *Type:* typing.List[str]

Filter results to only include the specified hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#host DataCloudflareApiShieldDiscoveryOperations#host}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#max_items DataCloudflareApiShieldDiscoveryOperations#max_items}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

Filter results to only include the specified HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#method DataCloudflareApiShieldDiscoveryOperations#method}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#order DataCloudflareApiShieldDiscoveryOperations#order}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin"></a>

```python
origin: str
```

- *Type:* str

Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#origin DataCloudflareApiShieldDiscoveryOperations#origin}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Filter results to only include discovery results in a particular state.

States are as follows

* `review` - Discovered operations that are not saved into API Shield Endpoint Management
* `saved` - Discovered operations that are already saved into API Shield Endpoint Management
* `ignored` - Discovered operations that have been marked as ignored

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#state DataCloudflareApiShieldDiscoveryOperations#state}

---

### DataCloudflareApiShieldDiscoveryOperationsResult <a name="DataCloudflareApiShieldDiscoveryOperationsResult" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult()
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeatures <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeatures" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures()
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats">traffic_stats</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `traffic_stats`<sup>Required</sup> <a name="traffic_stats" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats"></a>

```python
traffic_stats: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareApiShieldDiscoveryOperationsResultFeatures
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultList <a name="DataCloudflareApiShieldDiscoveryOperationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareApiShieldDiscoveryOperationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareApiShieldDiscoveryOperationsResultOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_api_shield_discovery_operations

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features">features</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin">origin</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features"></a>

```python
features: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin"></a>

```python
origin: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareApiShieldDiscoveryOperationsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a>

---



