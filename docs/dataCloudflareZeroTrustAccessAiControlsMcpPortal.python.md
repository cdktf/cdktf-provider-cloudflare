# `dataCloudflareZeroTrustAccessAiControlsMcpPortal` Submodule <a name="`dataCloudflareZeroTrustAccessAiControlsMcpPortal` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpPortal <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortal" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal(
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
  filter: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortal#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#filter DataCloudflareZeroTrustAccessAiControlsMcpPortal#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | portal id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortal#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#filter DataCloudflareZeroTrustAccessAiControlsMcpPortal#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id"></a>

- *Type:* str

portal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#id DataCloudflareZeroTrustAccessAiControlsMcpPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.putFilter"></a>

```python
def put_filter(
  search: str = None
) -> None
```

###### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.putFilter.parameter.search"></a>

- *Type:* str

Search by id, name, hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#search DataCloudflareZeroTrustAccessAiControlsMcpPortal#search}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpPortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.servers">servers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList">DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.filter"></a>

```python
filter: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.servers"></a>

```python
servers: DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList">DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  filter: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortal#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#filter DataCloudflareZeroTrustAccessAiControlsMcpPortal#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.id">id</a></code> | <code>str</code> | portal id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortal#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#filter DataCloudflareZeroTrustAccessAiControlsMcpPortal#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

portal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#id DataCloudflareZeroTrustAccessAiControlsMcpPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter(
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter.property.search">search</a></code> | <code>str</code> | Search by id, name, hostname. |

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Search by id, name, hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#search DataCloudflareZeroTrustAccessAiControlsMcpPortal#search}

---

### DataCloudflareZeroTrustAccessAiControlsMcpPortalServers <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalServers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter">DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portal

dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabled">default_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.lastSynced">last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalf">on_behalf</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.prompts">prompts</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.tools">tools</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPrompts">updated_prompts</a></code> | <code>cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedTools">updated_tools</a></code> | <code>cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServers">DataCloudflareZeroTrustAccessAiControlsMcpPortalServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `default_disabled`<sup>Required</sup> <a name="default_disabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabled"></a>

```python
default_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_synced`<sup>Required</sup> <a name="last_synced" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.lastSynced"></a>

```python
last_synced: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_behalf`<sup>Required</sup> <a name="on_behalf" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalf"></a>

```python
on_behalf: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.prompts"></a>

```python
prompts: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.tools"></a>

```python
tools: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `updated_prompts`<sup>Required</sup> <a name="updated_prompts" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPrompts"></a>

```python
updated_prompts: AnyMap
```

- *Type:* cdktf.AnyMap

---

##### `updated_tools`<sup>Required</sup> <a name="updated_tools" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedTools"></a>

```python
updated_tools: AnyMap
```

- *Type:* cdktf.AnyMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpPortalServers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortal.DataCloudflareZeroTrustAccessAiControlsMcpPortalServers">DataCloudflareZeroTrustAccessAiControlsMcpPortalServers</a>

---



