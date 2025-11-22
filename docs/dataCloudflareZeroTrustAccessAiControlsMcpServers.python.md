# `dataCloudflareZeroTrustAccessAiControlsMcpServers` Submodule <a name="`dataCloudflareZeroTrustAccessAiControlsMcpServers` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServers <a name="DataCloudflareZeroTrustAccessAiControlsMcpServers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers cloudflare_zero_trust_access_ai_controls_mcp_servers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None,
  search: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#account_id DataCloudflareZeroTrustAccessAiControlsMcpServers#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.search">search</a></code> | <code>str</code> | Search by id, name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#account_id DataCloudflareZeroTrustAccessAiControlsMcpServers#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#max_items DataCloudflareZeroTrustAccessAiControlsMcpServers#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.Initializer.parameter.search"></a>

- *Type:* str

Search by id, name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#search DataCloudflareZeroTrustAccessAiControlsMcpServers#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetSearch">reset_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.resetSearch"></a>

```python
def reset_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList">DataCloudflareZeroTrustAccessAiControlsMcpServersResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.search">search</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.result"></a>

```python
result: DataCloudflareZeroTrustAccessAiControlsMcpServersResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList">DataCloudflareZeroTrustAccessAiControlsMcpServersResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.search"></a>

```python
search: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServersConfig <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#account_id DataCloudflareZeroTrustAccessAiControlsMcpServers#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.search">search</a></code> | <code>str</code> | Search by id, name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#account_id DataCloudflareZeroTrustAccessAiControlsMcpServers#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#max_items DataCloudflareZeroTrustAccessAiControlsMcpServers#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Search by id, name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#search DataCloudflareZeroTrustAccessAiControlsMcpServers#search}

---

### DataCloudflareZeroTrustAccessAiControlsMcpServersResult <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServersResultList <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_servers

dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.lastSynced">last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.prompts">prompts</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.tools">tools</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult">DataCloudflareZeroTrustAccessAiControlsMcpServersResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_synced`<sup>Required</sup> <a name="last_synced" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.lastSynced"></a>

```python
last_synced: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.prompts"></a>

```python
prompts: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.tools"></a>

```python
tools: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpServersResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServers.DataCloudflareZeroTrustAccessAiControlsMcpServersResult">DataCloudflareZeroTrustAccessAiControlsMcpServersResult</a>

---



