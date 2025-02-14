# `dataCloudflareZoneLockdowns` Submodule <a name="`dataCloudflareZoneLockdowns` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneLockdowns <a name="DataCloudflareZoneLockdowns" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns(
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
  created_on: str = None,
  description: str = None,
  description_search: str = None,
  ip: str = None,
  ip_range_search: str = None,
  ip_search: str = None,
  max_items: typing.Union[int, float] = None,
  modified_on: str = None,
  priority: typing.Union[int, float] = None,
  uri_search: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.createdOn">created_on</a></code> | <code>str</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.description">description</a></code> | <code>str</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.descriptionSearch">description_search</a></code> | <code>str</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ip">ip</a></code> | <code>str</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ipRangeSearch">ip_range_search</a></code> | <code>str</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ipSearch">ip_search</a></code> | <code>str</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.modifiedOn">modified_on</a></code> | <code>str</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.uriSearch">uri_search</a></code> | <code>str</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#zone_id DataCloudflareZoneLockdowns#zone_id}

---

##### `created_on`<sup>Optional</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.createdOn"></a>

- *Type:* str

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#created_on DataCloudflareZoneLockdowns#created_on}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.description"></a>

- *Type:* str

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#description DataCloudflareZoneLockdowns#description}

---

##### `description_search`<sup>Optional</sup> <a name="description_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.descriptionSearch"></a>

- *Type:* str

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#description_search DataCloudflareZoneLockdowns#description_search}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ip"></a>

- *Type:* str

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#ip DataCloudflareZoneLockdowns#ip}

---

##### `ip_range_search`<sup>Optional</sup> <a name="ip_range_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ipRangeSearch"></a>

- *Type:* str

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#ip_range_search DataCloudflareZoneLockdowns#ip_range_search}

---

##### `ip_search`<sup>Optional</sup> <a name="ip_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ipSearch"></a>

- *Type:* str

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#ip_search DataCloudflareZoneLockdowns#ip_search}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#max_items DataCloudflareZoneLockdowns#max_items}

---

##### `modified_on`<sup>Optional</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.modifiedOn"></a>

- *Type:* str

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#modified_on DataCloudflareZoneLockdowns#modified_on}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#priority DataCloudflareZoneLockdowns#priority}

---

##### `uri_search`<sup>Optional</sup> <a name="uri_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.uriSearch"></a>

- *Type:* str

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#uri_search DataCloudflareZoneLockdowns#uri_search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetCreatedOn">reset_created_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescriptionSearch">reset_description_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpRangeSearch">reset_ip_range_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpSearch">reset_ip_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetModifiedOn">reset_modified_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetUriSearch">reset_uri_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_created_on` <a name="reset_created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetCreatedOn"></a>

```python
def reset_created_on() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_description_search` <a name="reset_description_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescriptionSearch"></a>

```python
def reset_description_search() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ip_range_search` <a name="reset_ip_range_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpRangeSearch"></a>

```python
def reset_ip_range_search() -> None
```

##### `reset_ip_search` <a name="reset_ip_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpSearch"></a>

```python
def reset_ip_search() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_modified_on` <a name="reset_modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetModifiedOn"></a>

```python
def reset_modified_on() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_uri_search` <a name="reset_uri_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetUriSearch"></a>

```python
def reset_uri_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZoneLockdowns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZoneLockdowns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneLockdowns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList">DataCloudflareZoneLockdownsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOnInput">created_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearchInput">description_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearchInput">ip_range_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearchInput">ip_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOnInput">modified_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearchInput">uri_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearch">description_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearch">ip_range_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearch">ip_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearch">uri_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.result"></a>

```python
result: DataCloudflareZoneLockdownsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList">DataCloudflareZoneLockdownsResultList</a>

---

##### `created_on_input`<sup>Optional</sup> <a name="created_on_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOnInput"></a>

```python
created_on_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description_search_input`<sup>Optional</sup> <a name="description_search_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearchInput"></a>

```python
description_search_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `ip_range_search_input`<sup>Optional</sup> <a name="ip_range_search_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearchInput"></a>

```python
ip_range_search_input: str
```

- *Type:* str

---

##### `ip_search_input`<sup>Optional</sup> <a name="ip_search_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearchInput"></a>

```python
ip_search_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modified_on_input`<sup>Optional</sup> <a name="modified_on_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOnInput"></a>

```python
modified_on_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uri_search_input`<sup>Optional</sup> <a name="uri_search_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearchInput"></a>

```python
uri_search_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `description_search`<sup>Required</sup> <a name="description_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearch"></a>

```python
description_search: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `ip_range_search`<sup>Required</sup> <a name="ip_range_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearch"></a>

```python
ip_range_search: str
```

- *Type:* str

---

##### `ip_search`<sup>Required</sup> <a name="ip_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearch"></a>

```python
ip_search: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uri_search`<sup>Required</sup> <a name="uri_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearch"></a>

```python
uri_search: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneLockdownsConfig <a name="DataCloudflareZoneLockdownsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  created_on: str = None,
  description: str = None,
  description_search: str = None,
  ip: str = None,
  ip_range_search: str = None,
  ip_search: str = None,
  max_items: typing.Union[int, float] = None,
  modified_on: str = None,
  priority: typing.Union[int, float] = None,
  uri_search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.createdOn">created_on</a></code> | <code>str</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.description">description</a></code> | <code>str</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.descriptionSearch">description_search</a></code> | <code>str</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ip">ip</a></code> | <code>str</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipRangeSearch">ip_range_search</a></code> | <code>str</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipSearch">ip_search</a></code> | <code>str</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.modifiedOn">modified_on</a></code> | <code>str</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.uriSearch">uri_search</a></code> | <code>str</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#zone_id DataCloudflareZoneLockdowns#zone_id}

---

##### `created_on`<sup>Optional</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#created_on DataCloudflareZoneLockdowns#created_on}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#description DataCloudflareZoneLockdowns#description}

---

##### `description_search`<sup>Optional</sup> <a name="description_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.descriptionSearch"></a>

```python
description_search: str
```

- *Type:* str

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#description_search DataCloudflareZoneLockdowns#description_search}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ip"></a>

```python
ip: str
```

- *Type:* str

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#ip DataCloudflareZoneLockdowns#ip}

---

##### `ip_range_search`<sup>Optional</sup> <a name="ip_range_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipRangeSearch"></a>

```python
ip_range_search: str
```

- *Type:* str

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#ip_range_search DataCloudflareZoneLockdowns#ip_range_search}

---

##### `ip_search`<sup>Optional</sup> <a name="ip_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipSearch"></a>

```python
ip_search: str
```

- *Type:* str

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#ip_search DataCloudflareZoneLockdowns#ip_search}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#max_items DataCloudflareZoneLockdowns#max_items}

---

##### `modified_on`<sup>Optional</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#modified_on DataCloudflareZoneLockdowns#modified_on}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#priority DataCloudflareZoneLockdowns#priority}

---

##### `uri_search`<sup>Optional</sup> <a name="uri_search" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.uriSearch"></a>

```python
uri_search: str
```

- *Type:* str

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zone_lockdowns#uri_search DataCloudflareZoneLockdowns#uri_search}

---

### DataCloudflareZoneLockdownsResult <a name="DataCloudflareZoneLockdownsResult" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult()
```


### DataCloudflareZoneLockdownsResultConfigurations <a name="DataCloudflareZoneLockdownsResultConfigurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneLockdownsResultConfigurationsList <a name="DataCloudflareZoneLockdownsResultConfigurationsList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZoneLockdownsResultConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZoneLockdownsResultConfigurationsOutputReference <a name="DataCloudflareZoneLockdownsResultConfigurationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations">DataCloudflareZoneLockdownsResultConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZoneLockdownsResultConfigurations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations">DataCloudflareZoneLockdownsResultConfigurations</a>

---


### DataCloudflareZoneLockdownsResultList <a name="DataCloudflareZoneLockdownsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZoneLockdownsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZoneLockdownsResultOutputReference <a name="DataCloudflareZoneLockdownsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zone_lockdowns

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList">DataCloudflareZoneLockdownsResultConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.urls">urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult">DataCloudflareZoneLockdownsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.configurations"></a>

```python
configurations: DataCloudflareZoneLockdownsResultConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList">DataCloudflareZoneLockdownsResultConfigurationsList</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.paused"></a>

```python
paused: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.urls"></a>

```python
urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZoneLockdownsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult">DataCloudflareZoneLockdownsResult</a>

---



