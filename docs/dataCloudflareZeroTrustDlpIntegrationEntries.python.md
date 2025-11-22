# `dataCloudflareZeroTrustDlpIntegrationEntries` Submodule <a name="`dataCloudflareZeroTrustDlpIntegrationEntries` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpIntegrationEntries <a name="DataCloudflareZeroTrustDlpIntegrationEntries" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dlp_integration_entries cloudflare_zero_trust_dlp_integration_entries}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries(
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
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dlp_integration_entries#account_id DataCloudflareZeroTrustDlpIntegrationEntries#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dlp_integration_entries#account_id DataCloudflareZeroTrustDlpIntegrationEntries#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dlp_integration_entries#max_items DataCloudflareZeroTrustDlpIntegrationEntries#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDlpIntegrationEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDlpIntegrationEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dlp_integration_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpIntegrationEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList">DataCloudflareZeroTrustDlpIntegrationEntriesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.result"></a>

```python
result: DataCloudflareZeroTrustDlpIntegrationEntriesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList">DataCloudflareZeroTrustDlpIntegrationEntriesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpIntegrationEntriesConfig <a name="DataCloudflareZeroTrustDlpIntegrationEntriesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dlp_integration_entries#account_id DataCloudflareZeroTrustDlpIntegrationEntries#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dlp_integration_entries#account_id DataCloudflareZeroTrustDlpIntegrationEntries#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dlp_integration_entries#max_items DataCloudflareZeroTrustDlpIntegrationEntries#max_items}

---

### DataCloudflareZeroTrustDlpIntegrationEntriesResult <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResult()
```


### DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence()
```


### DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern()
```


### DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.aiContextAvailable">ai_context_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.available">available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence">DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ai_context_available`<sup>Required</sup> <a name="ai_context_available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.aiContextAvailable"></a>

```python
ai_context_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.available"></a>

```python
available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence">DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence</a>

---


### DataCloudflareZeroTrustDlpIntegrationEntriesResultList <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.caseSensitive">case_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference">DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference">DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.secret">secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.variant">variant</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference">DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.wordList">word_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResult">DataCloudflareZeroTrustDlpIntegrationEntriesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.caseSensitive"></a>

```python
case_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.confidence"></a>

```python
confidence: DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference">DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.pattern"></a>

```python
pattern: DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference">DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference</a>

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.secret"></a>

```python
secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.variant"></a>

```python
variant: DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference">DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference</a>

---

##### `word_list`<sup>Required</sup> <a name="word_list" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.wordList"></a>

```python
word_list: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpIntegrationEntriesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResult">DataCloudflareZeroTrustDlpIntegrationEntriesResult</a>

---


### DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.validation">validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern">DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.validation"></a>

```python
validation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern">DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern</a>

---


### DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_dlp_integration_entries

dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.topicType">topic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant">DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `topic_type`<sup>Required</sup> <a name="topic_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.topicType"></a>

```python
topic_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntries.DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant">DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant</a>

---



