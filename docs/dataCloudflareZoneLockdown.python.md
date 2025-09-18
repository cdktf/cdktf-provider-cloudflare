# `dataCloudflareZoneLockdown` Submodule <a name="`dataCloudflareZoneLockdown` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneLockdown <a name="DataCloudflareZoneLockdown" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown cloudflare_zone_lockdown}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdown(
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
  filter: DataCloudflareZoneLockdownFilter = None,
  lock_downs_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.lockDownsId">lock_downs_id</a></code> | <code>str</code> | The unique identifier of the Zone Lockdown rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.zoneId"></a>

- *Type:* str

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#zone_id DataCloudflareZoneLockdown#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}.

---

##### `lock_downs_id`<sup>Optional</sup> <a name="lock_downs_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.lockDownsId"></a>

- *Type:* str

The unique identifier of the Zone Lockdown rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#lock_downs_id DataCloudflareZoneLockdown#lock_downs_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetLockDownsId">reset_lock_downs_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter"></a>

```python
def put_filter(
  created_on: str = None,
  description: str = None,
  description_search: str = None,
  ip: str = None,
  ip_range_search: str = None,
  ip_search: str = None,
  modified_on: str = None,
  priority: typing.Union[int, float] = None,
  uri_search: str = None
) -> None
```

###### `created_on`<sup>Optional</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.createdOn"></a>

- *Type:* str

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#created_on DataCloudflareZoneLockdown#created_on}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.description"></a>

- *Type:* str

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#description DataCloudflareZoneLockdown#description}

---

###### `description_search`<sup>Optional</sup> <a name="description_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.descriptionSearch"></a>

- *Type:* str

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#description_search DataCloudflareZoneLockdown#description_search}

---

###### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.ip"></a>

- *Type:* str

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#ip DataCloudflareZoneLockdown#ip}

---

###### `ip_range_search`<sup>Optional</sup> <a name="ip_range_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.ipRangeSearch"></a>

- *Type:* str

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#ip_range_search DataCloudflareZoneLockdown#ip_range_search}

---

###### `ip_search`<sup>Optional</sup> <a name="ip_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.ipSearch"></a>

- *Type:* str

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#ip_search DataCloudflareZoneLockdown#ip_search}

---

###### `modified_on`<sup>Optional</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.modifiedOn"></a>

- *Type:* str

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#modified_on DataCloudflareZoneLockdown#modified_on}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#priority DataCloudflareZoneLockdown#priority}

---

###### `uri_search`<sup>Optional</sup> <a name="uri_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.uriSearch"></a>

- *Type:* str

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#uri_search DataCloudflareZoneLockdown#uri_search}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_lock_downs_id` <a name="reset_lock_downs_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetLockDownsId"></a>

```python
def reset_lock_downs_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZoneLockdown to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZoneLockdown that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneLockdown to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList">DataCloudflareZoneLockdownConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference">DataCloudflareZoneLockdownFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.urls">urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsIdInput">lock_downs_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsId">lock_downs_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.configurations"></a>

```python
configurations: DataCloudflareZoneLockdownConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList">DataCloudflareZoneLockdownConfigurationsList</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filter"></a>

```python
filter: DataCloudflareZoneLockdownFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference">DataCloudflareZoneLockdownFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.paused"></a>

```python
paused: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.urls"></a>

```python
urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, DataCloudflareZoneLockdownFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>]

---

##### `lock_downs_id_input`<sup>Optional</sup> <a name="lock_downs_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsIdInput"></a>

```python
lock_downs_id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `lock_downs_id`<sup>Required</sup> <a name="lock_downs_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsId"></a>

```python
lock_downs_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneLockdownConfig <a name="DataCloudflareZoneLockdownConfig" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  filter: DataCloudflareZoneLockdownFilter = None,
  lock_downs_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lockDownsId">lock_downs_id</a></code> | <code>str</code> | The unique identifier of the Zone Lockdown rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#zone_id DataCloudflareZoneLockdown#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.filter"></a>

```python
filter: DataCloudflareZoneLockdownFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}.

---

##### `lock_downs_id`<sup>Optional</sup> <a name="lock_downs_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lockDownsId"></a>

```python
lock_downs_id: str
```

- *Type:* str

The unique identifier of the Zone Lockdown rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#lock_downs_id DataCloudflareZoneLockdown#lock_downs_id}

---

### DataCloudflareZoneLockdownConfigurations <a name="DataCloudflareZoneLockdownConfigurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations()
```


### DataCloudflareZoneLockdownFilter <a name="DataCloudflareZoneLockdownFilter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter(
  created_on: str = None,
  description: str = None,
  description_search: str = None,
  ip: str = None,
  ip_range_search: str = None,
  ip_search: str = None,
  modified_on: str = None,
  priority: typing.Union[int, float] = None,
  uri_search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.createdOn">created_on</a></code> | <code>str</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.description">description</a></code> | <code>str</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.descriptionSearch">description_search</a></code> | <code>str</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ip">ip</a></code> | <code>str</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipRangeSearch">ip_range_search</a></code> | <code>str</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipSearch">ip_search</a></code> | <code>str</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.modifiedOn">modified_on</a></code> | <code>str</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.uriSearch">uri_search</a></code> | <code>str</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `created_on`<sup>Optional</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#created_on DataCloudflareZoneLockdown#created_on}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.description"></a>

```python
description: str
```

- *Type:* str

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#description DataCloudflareZoneLockdown#description}

---

##### `description_search`<sup>Optional</sup> <a name="description_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.descriptionSearch"></a>

```python
description_search: str
```

- *Type:* str

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#description_search DataCloudflareZoneLockdown#description_search}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ip"></a>

```python
ip: str
```

- *Type:* str

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#ip DataCloudflareZoneLockdown#ip}

---

##### `ip_range_search`<sup>Optional</sup> <a name="ip_range_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipRangeSearch"></a>

```python
ip_range_search: str
```

- *Type:* str

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#ip_range_search DataCloudflareZoneLockdown#ip_range_search}

---

##### `ip_search`<sup>Optional</sup> <a name="ip_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipSearch"></a>

```python
ip_search: str
```

- *Type:* str

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#ip_search DataCloudflareZoneLockdown#ip_search}

---

##### `modified_on`<sup>Optional</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#modified_on DataCloudflareZoneLockdown#modified_on}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#priority DataCloudflareZoneLockdown#priority}

---

##### `uri_search`<sup>Optional</sup> <a name="uri_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.uriSearch"></a>

```python
uri_search: str
```

- *Type:* str

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zone_lockdown#uri_search DataCloudflareZoneLockdown#uri_search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneLockdownConfigurationsList <a name="DataCloudflareZoneLockdownConfigurationsList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZoneLockdownConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZoneLockdownConfigurationsOutputReference <a name="DataCloudflareZoneLockdownConfigurationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations">DataCloudflareZoneLockdownConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZoneLockdownConfigurations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations">DataCloudflareZoneLockdownConfigurations</a>

---


### DataCloudflareZoneLockdownFilterOutputReference <a name="DataCloudflareZoneLockdownFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdown

dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetCreatedOn">reset_created_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescriptionSearch">reset_description_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpRangeSearch">reset_ip_range_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpSearch">reset_ip_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetModifiedOn">reset_modified_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetUriSearch">reset_uri_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_created_on` <a name="reset_created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetCreatedOn"></a>

```python
def reset_created_on() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_description_search` <a name="reset_description_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescriptionSearch"></a>

```python
def reset_description_search() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ip_range_search` <a name="reset_ip_range_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpRangeSearch"></a>

```python
def reset_ip_range_search() -> None
```

##### `reset_ip_search` <a name="reset_ip_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpSearch"></a>

```python
def reset_ip_search() -> None
```

##### `reset_modified_on` <a name="reset_modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetModifiedOn"></a>

```python
def reset_modified_on() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_uri_search` <a name="reset_uri_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetUriSearch"></a>

```python
def reset_uri_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOnInput">created_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearchInput">description_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearchInput">ip_range_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearchInput">ip_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOnInput">modified_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearchInput">uri_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearch">description_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearch">ip_range_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearch">ip_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearch">uri_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_on_input`<sup>Optional</sup> <a name="created_on_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOnInput"></a>

```python
created_on_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description_search_input`<sup>Optional</sup> <a name="description_search_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearchInput"></a>

```python
description_search_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `ip_range_search_input`<sup>Optional</sup> <a name="ip_range_search_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearchInput"></a>

```python
ip_range_search_input: str
```

- *Type:* str

---

##### `ip_search_input`<sup>Optional</sup> <a name="ip_search_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearchInput"></a>

```python
ip_search_input: str
```

- *Type:* str

---

##### `modified_on_input`<sup>Optional</sup> <a name="modified_on_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOnInput"></a>

```python
modified_on_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uri_search_input`<sup>Optional</sup> <a name="uri_search_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearchInput"></a>

```python
uri_search_input: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `description_search`<sup>Required</sup> <a name="description_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearch"></a>

```python
description_search: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `ip_range_search`<sup>Required</sup> <a name="ip_range_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearch"></a>

```python
ip_range_search: str
```

- *Type:* str

---

##### `ip_search`<sup>Required</sup> <a name="ip_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearch"></a>

```python
ip_search: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uri_search`<sup>Required</sup> <a name="uri_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearch"></a>

```python
uri_search: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareZoneLockdownFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>]

---



