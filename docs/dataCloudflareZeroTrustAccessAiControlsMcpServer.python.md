# `dataCloudflareZeroTrustAccessAiControlsMcpServer` Submodule <a name="`dataCloudflareZeroTrustAccessAiControlsMcpServer` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServer <a name="DataCloudflareZeroTrustAccessAiControlsMcpServer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer(
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
  filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>str</code> | server id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* str

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#id DataCloudflareZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter"></a>

```python
def put_filter(
  search: str = None
) -> None
```

###### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter.parameter.search"></a>

- *Type:* str

Search by id, name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#search DataCloudflareZeroTrustAccessAiControlsMcpServer#search}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSynced">last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.prompts">prompts</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tools">tools</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filter"></a>

```python
filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `last_synced`<sup>Required</sup> <a name="last_synced" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSynced"></a>

```python
last_synced: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.prompts"></a>

```python
prompts: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tools"></a>

```python
tools: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareZeroTrustAccessAiControlsMcpServerFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServerConfig <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.id">id</a></code> | <code>str</code> | server id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#id DataCloudflareZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareZeroTrustAccessAiControlsMcpServerFilter <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter(
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.property.search">search</a></code> | <code>str</code> | Search by id, name. |

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Search by id, name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#search DataCloudflareZeroTrustAccessAiControlsMcpServer#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustAccessAiControlsMcpServerFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

---



